# -*- coding: utf-8 -*-
"""「좌」를 30mm로 만들었을 때 획 두께와 조각 수를 측정"""
import numpy as np, subprocess, os
from fontTools.ttLib import TTFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.qu2cuPen import Qu2CuPen
from PIL import Image

PPMM = 24  # 1mm = 24px 로 렌더 -> 1px = 0.0417mm

def load(path):
    t = TTFont(path)
    return dict(t=t, cmap=t.getBestCmap(), gs=t.getGlyphSet(), upm=t["head"].unitsPerEm)

def glyph_svg_path(f, ch, size):
    g = f["cmap"][ord(ch)]
    rp = RecordingPen(); f["gs"][g].draw(Qu2CuPen(rp, max_err=0.1, all_cubic=True))
    k = size / f["upm"]
    bp = BoundsPen(f["gs"]); f["gs"][g].draw(bp)
    x0, y0, x1, y1 = [v * k for v in bp.bounds]
    d = []
    for op, pts in rp.value:
        q = [((px * k) - x0, (y1 - py * k)) for (px, py) in pts]   # 좌상단 기준
        if op == "moveTo":      d.append(f"M{q[0][0]:.3f} {q[0][1]:.3f}")
        elif op == "lineTo":    d.append(f"L{q[0][0]:.3f} {q[0][1]:.3f}")
        elif op == "curveTo":   d.append("C" + " ".join(f"{a:.3f} {b:.3f}" for a, b in q))
        elif op == "closePath": d.append("Z")
    return " ".join(d), (x1 - x0), (y1 - y0)

def raster(f, ch, height_mm, tag):
    """글자를 height_mm 높이로 렌더해 흑백 배열 반환"""
    bp = BoundsPen(f["gs"]); f["gs"][f["cmap"][ord(ch)]].draw(bp)
    y0, y1 = bp.bounds[1], bp.bounds[3]
    size = height_mm / ((y1 - y0) / f["upm"])
    d, w_mm, h_mm = glyph_svg_path(f, ch, size)
    W, H = int(w_mm * PPMM) + 4, int(h_mm * PPMM) + 4
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="-2 -2 {W} {H}">'
           f'<rect x="-2" y="-2" width="{W}" height="{H}" fill="white"/>'
           f'<path d="{d}" fill="black" fill-rule="nonzero" transform="scale({PPMM})"/></svg>')
    # viewBox 단위가 mm이므로 scale 대신 viewBox로 처리
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
           f'viewBox="{-2/PPMM} {-2/PPMM} {W/PPMM} {H/PPMM}">'
           f'<rect x="{-2/PPMM}" y="{-2/PPMM}" width="{W/PPMM}" height="{H/PPMM}" fill="white"/>'
           f'<path d="{d}" fill="black" fill-rule="nonzero"/></svg>')
    open(f"a_{tag}.svg", "w").write(svg)
    open(f"a_{tag}.html", "w").write("<html><body style='margin:0'>" + svg + "</body></html>")
    subprocess.run(["/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell",
                    "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
                    f"--window-size={W},{H}", f"--screenshot=a_{tag}.png",
                    f"file://{os.getcwd()}/a_{tag}.html"], capture_output=True)
    a = np.array(Image.open(f"a_{tag}.png").convert("L"))
    return a < 128, w_mm, h_mm

def min_stroke(mask):
    """가로/세로 스캔에서 획 폭 분포(mm)"""
    runs = []
    for axis in (0, 1):
        m = mask if axis == 0 else mask.T
        for row in m:
            idx = np.flatnonzero(np.diff(np.concatenate(([0], row.view(np.int8), [0]))))
            for a, b in zip(idx[::2], idx[1::2]):
                if b - a >= 2:          # 안티앨리어싱 1px 제거
                    runs.append((b - a) / PPMM)
    runs = np.array(runs)
    return runs

def components(mask):
    """연결된 조각 수 (4-이웃 flood fill)"""
    lab = np.zeros(mask.shape, np.int32); n = 0
    H, W = mask.shape
    for sy in range(H):
        for sx in range(W):
            if mask[sy, sx] and lab[sy, sx] == 0:
                n += 1; stack = [(sy, sx)]; lab[sy, sx] = n
                while stack:
                    y, x = stack.pop()
                    for dy, dx in ((1,0),(-1,0),(0,1),(0,-1)):
                        ny, nx = y+dy, x+dx
                        if 0 <= ny < H and 0 <= nx < W and mask[ny, nx] and lab[ny, nx] == 0:
                            lab[ny, nx] = n; stack.append((ny, nx))
    sizes = [int((lab == i).sum()) / (PPMM**2) for i in range(1, n+1)]
    return n, sorted(sizes, reverse=True)

FONTS = {
    "명조 Regular (현재)": "NotoSerifKR-Regular.ttf",
    "명조 Bold":          "NotoSerifKR-Bold.ttf",
    "고딕 Regular":        "NotoSansKR-Regular.ttf",
    "고딕 Bold":           "NotoSansKR-Bold.ttf",
}
print(f"{'글꼴':22s} {'최소획':>7s} {'5%획':>7s} {'중앙값':>7s}  조각수  조각 넓이(㎟)")
print("-" * 78)
for i, (name, path) in enumerate(FONTS.items()):
    f = load(path)
    mask, w, h = raster(f, "좌", 30.0, f"{i}")
    r = min_stroke(mask)
    n, sizes = components(mask)
    print(f"{name:22s} {r.min():6.2f}mm {np.percentile(r,5):6.2f}mm {np.median(r):6.2f}mm   {n}개   "
          + ", ".join(f"{s:.0f}" for s in sizes))
