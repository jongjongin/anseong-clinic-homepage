# -*- coding: utf-8 -*-
"""아크릴 글자 발주 도면 생성기 (1:1 실측, mm 단위)
같은 도형 목록을 PDF(reportlab)와 SVG로 동시에 출력한다."""
import os, html
from fontTools.ttLib import TTFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.qu2cuPen import Qu2CuPen
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont as RLFont
from reportlab.lib.units import mm

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
FONTS = {
    "sans":  dict(file=os.path.join(HERE, "NotoSansKR-Regular.ttf"),  rl="NotoSansKR",  svg="Noto Sans KR",
                  target="Sandoll 고딕Neo Cond 04 Regular"),
    "serif": dict(file=os.path.join(HERE, "NotoSerifKR-Regular.ttf"), rl="NotoSerifKR", svg="Noto Serif KR",
                  target="MICE명조 OTF 01 Regular"),
    "serifb": dict(file=os.path.join(HERE, "NotoSerifKR-Bold.ttf"), rl="NotoSerifKRB", svg="Noto Serif KR",
                  target="MICE명조 OTF 01 Bold (획 두께 확보용 굵은 자체)"),
}
for k, f in FONTS.items():
    t = TTFont(f["file"])
    f["tt"] = t; f["cmap"] = t.getBestCmap(); f["gs"] = t.getGlyphSet()
    f["upm"] = t["head"].unitsPerEm; f["hmtx"] = t["hmtx"]
    pdfmetrics.registerFont(RLFont(f["rl"], f["file"]))

def measure(font, s, size):
    """문자열의 폭(advance 합)과 실제 잉크 bbox(위/아래, 왼쪽/오른쪽) - mm"""
    f = FONTS[font]; upm = f["upm"]; x = 0; xmin = xmax = None; ymin = ymax = None
    for ch in s:
        g = f["cmap"][ord(ch)]
        adv = f["hmtx"][g][0]
        p = BoundsPen(f["gs"]); f["gs"][g].draw(p)
        if p.bounds:
            bx0, by0, bx1, by1 = p.bounds
            xmin = bx0 + x if xmin is None else min(xmin, bx0 + x)
            xmax = bx1 + x if xmax is None else max(xmax, bx1 + x)
            ymin = by0 if ymin is None else min(ymin, by0)
            ymax = by1 if ymax is None else max(ymax, by1)
        x += adv
    k = size / upm
    return dict(adv=x * k, xmin=xmin * k, xmax=xmax * k, ymin=ymin * k, ymax=ymax * k)

_OUTLINE_CACHE = {}

def glyph_outline(font, ch):
    """한 글자의 윤곽선을 폰트 단위(y 위쪽 양수) 경로 명령 목록으로 반환"""
    key = (font, ch)
    if key in _OUTLINE_CACHE:
        return _OUTLINE_CACHE[key]
    f = FONTS[font]
    g = f["cmap"][ord(ch)]
    rp = RecordingPen()
    f["gs"][g].draw(Qu2CuPen(rp, max_err=0.2, all_cubic=True))
    _OUTLINE_CACHE[key] = rp.value
    return rp.value

def text_outline(font, s, size):
    """문자열 전체의 윤곽선을 베이스라인 기준 (x 오른쪽, y 위쪽) 좌표로 반환"""
    f = FONTS[font]; k = size / f["upm"]
    out = []; pen_x = 0
    for ch in s:
        g = f["cmap"][ord(ch)]
        for op, args in glyph_outline(font, ch):
            pts = [((px + pen_x) * k, py * k) for (px, py) in args]
            out.append((op, pts))
        pen_x += f["hmtx"][g][0]
    return out

def size_for_height(font, s, h):
    m = measure(font, s, 1.0)
    return h / (m["ymax"] - m["ymin"])

def size_for_width(font, s, w):
    m = measure(font, s, 1.0)
    return w / (m["xmax"] - m["xmin"])

# ---------- 도형 목록 ----------
# layer: "art" = 실제로 커팅할 조각, "note" = 치수선·설명글(커팅 제외)
ops = []
LAYER = "note"

def set_layer(v):
    global LAYER
    LAYER = v
COCOA = "#4B3A2F"; GUIDE = "#FF00FF"; GRAY = "#666666"; BLACK = "#111111"; DIM = "#0066CC"
def text(x, y, s, font, size, color=BLACK, anchor="start"):
    ops.append(("text", x, y, s, font, size, color, anchor, LAYER))
def line(x1, y1, x2, y2, w=0.25, color=GUIDE, dash=None):
    ops.append(("line", x1, y1, x2, y2, w, color, dash, LAYER))
def rect(x, y, w, h, fill):
    ops.append(("rect", x, y, w, h, fill, LAYER))

def vdim(x, y_top, y_bot, label, size=5):
    """세로 치수선 (x 위치, 위/아래 y) + 라벨"""
    line(x, y_top, x, y_bot, 0.3, DIM)
    for yy in (y_top, y_bot):
        line(x - 3, yy, x + 3, yy, 0.3, DIM)
    text(x + 5, (y_top + y_bot) / 2 + size * 0.35, label, "sans", size, DIM)

def hdim(y, x_l, x_r, label, size=5):
    line(x_l, y, x_r, y, 0.3, DIM)
    for xx in (x_l, x_r):
        line(xx, y - 3, xx, y + 3, 0.3, DIM)
    text((x_l + x_r) / 2, y + size * 1.4, label, "sans", size, DIM, anchor="middle")

# ---------- 레이아웃 ----------
W = 1400.0; L = 40.0
y = 30.0
text(L, y, "안성 한의원 · 아크릴 글자 발주 도면 (1:1 실측, 단위 mm)", "sans", 12, BLACK); y += 9
text(L, y, "상품명: 아크릴 글자  |  사양: 무광 3T  |  색상: 코코아 / 회색(연한 회색 계열)  |  총 수량: 15개 (글자 5개 + 베드번호 숫자 3개 + 일자 막대 3개 + 「좌」 4개)", "sans", 6, GRAY); y += 9
notes = [
    "■ 이 파일의 모든 글자는 윤곽선(아웃라인) 처리가 끝난 벡터 도형입니다. 글꼴 설치 없이 바로 커팅하실 수 있습니다.",
    "   사용 글꼴: 고딕 = Noto Sans KR Regular, 명조 = Noto Serif KR Regular (둘 다 무료 글꼴, 상업적 사용 가능).",
    "■ 작업 순서: ① 각 도형을 파란색 치수선의 세로 높이에 맞춰 비율 그대로 확대·축소 → ② 그대로 커팅. 문자 입력이나 글꼴 변경은 필요 없습니다.",
    "■ 분홍 점선 = 글자 위/아래 기준선(인쇄·커팅 제외), 파란 선 = 치수 표기. 「가로 전체」는 벽면 필요 폭이며 지정 글꼴로 바꾸면 달라집니다. 글자 색은 코코아색으로 표시했으며 실제 색상은 재료 색상을 따릅니다.",
]
for n in notes:
    text(L, y, n, "sans", 4.5, GRAY); y += 6.5
y += 6
line(L, y, W - L, y, 0.3, "#999999"); y += 14

def spec_item(num, s, font, h, qty_note=""):
    """글자 항목 한 줄: 라벨 + 1:1 문자 + 치수"""
    global y
    f = FONTS[font]
    size = size_for_height(font, s, h)
    m = measure(font, s, size)
    label = f"{num}. 「{s}」   세로 {h:g}mm   글꼴: {f['target']}   {qty_note}".rstrip()
    text(L, y, label, "sans", 5, GRAY); y += 8
    top = y                     # 잉크 최상단
    base = top + m["ymax"]      # 베이스라인
    bot = base - m["ymin"]      # 잉크 최하단
    x_text = L
    set_layer("art"); text(x_text, base, s, font, size, COCOA); set_layer("note")
    x_r = x_text + m["adv"]
    # 위/아래 기준선 (점선)
    line(L - 12, top, x_r + 30, top, 0.25, GUIDE, (2, 2))
    line(L - 12, bot, x_r + 30, bot, 0.25, GUIDE, (2, 2))
    vdim(x_r + 22, top, bot, f"세로 {h:g}mm")
    ink_l = x_text + m["xmin"]; ink_r = x_text + m["xmax"]
    hdim(bot + 11, ink_l, ink_r, f"가로 전체 {ink_r - ink_l:.0f}mm")
    y = bot + 36

spec_item(1, "리프팅 • 레이저실", "sans", 40)
spec_item(2, "리프팅 • 레이저실", "sans", 40, "(1번과 동일, 별도 1개)")
spec_item(3, "검사실 • 파우더룸 • 탈의실", "serif", 100, "(가운데 기호 2개 포함)")
spec_item(4, "← 파우더룸 • 탈의실", "sans", 70, "(왼쪽 화살표 포함)")
spec_item(5, "파우더룸 • 탈의실 →", "sans", 70, "(오른쪽 화살표 포함)")

# 6~11: 베드번호 숫자 3개 + 일자 막대 3개
text(L, y, "6 ~ 11. 베드번호 「15」「16」「17」 숫자 높이 90mm  /  일자 막대(밑줄) 3개 가로 110mm × 세로 6mm (숫자 폭에 맞춤)   숫자 글꼴: MICE명조 OTF 01 Regular   (총 6개, 각각 별도 조각)", "sans", 5, GRAY); y += 16
top_row = y
x = L
bar_h_note = None
for i, num_s in enumerate(["15", "16", "17"]):
    size = size_for_height("serif", num_s, 90)
    m = measure("serif", num_s, size)
    base = top_row + m["ymax"]; bot = base - m["ymin"]
    set_layer("art"); text(x, base, num_s, "serif", size, COCOA); set_layer("note")
    line(x - 12, top_row, x + m["adv"] + 30, top_row, 0.25, GUIDE, (2, 2))
    line(x - 12, bot, x + m["adv"] + 30, bot, 0.25, GUIDE, (2, 2))
    vdim(x + m["adv"] + 22, top_row, bot, "높이 90mm")
    text(x, top_row - 3, f"{6 + i}. 베드번호 {num_s}", "sans", 4.5, GRAY)
    # 밑줄: 사진과 같은 일자 막대 (가로 110mm × 세로 6mm 사각형, 숫자 폭에 맞춤)
    BAR_W, BAR_H = 110.0, 6.0
    by = bot + 25
    ink_c = x + (m["xmin"] + m["xmax"]) / 2    # 숫자 잉크 기준 중심
    bl = ink_c - BAR_W / 2
    set_layer("art"); rect(bl, by, BAR_W, BAR_H, COCOA); set_layer("note")
    br = bl + BAR_W; bbot = by + BAR_H
    hdim(bbot + 8, bl, br, f"가로 {BAR_W:g}mm")
    vdim(br + 10, by, bbot, "세로 6mm", size=4)
    text(x, bbot + 22, f"{9 + i}. 일자 막대 ({BAR_W:g} × {BAR_H:g}mm, {num_s}번 아래에 부착)", "sans", 4.5, GRAY)
    bar_h_note = bbot + 26
    x += m["adv"] + 145
y = bar_h_note + 20

# 12. 「좌」 세로 30mm, 동일 글자 4개 (베드번호와 같은 명조체)
Z, ZH, ZN, ZF = "좌", 30.0, 4, "serifb"
text(L, y, f"12. 「{Z}」 세로 {ZH:g}mm   글꼴: 명조 굵은 자체(Bold)   동일한 글자 {ZN}개   ※ 획이 얇아 녹는 것을 막기 위해 굵은 자체 사용 (최소 획 약 1.4mm)", "sans", 5, GRAY); y += 8
zsize = size_for_height(ZF, Z, ZH)
zm = measure(ZF, Z, zsize)
ztop = y; zbase = ztop + zm["ymax"]; zbot = zbase - zm["ymin"]
zx = L
for j in range(ZN):
    set_layer("art"); text(zx, zbase, Z, ZF, zsize, COCOA); set_layer("note")
    if j == 0:
        hdim(zbot + 9, zx + zm["xmin"], zx + zm["xmax"], f"가로 {zm['xmax'] - zm['xmin']:.0f}mm", size=4)
    zx += zm["adv"] + 30
line(L - 12, ztop, zx + 6, ztop, 0.25, GUIDE, (2, 2))
line(L - 12, zbot, zx + 6, zbot, 0.25, GUIDE, (2, 2))
vdim(zx + 2, ztop, zbot, f"세로 {ZH:g}mm", size=4)
y = zbot + 26

line(L, y, W - L, y, 0.3, "#999999"); y += 10
text(L, y, "※ 3·4·5번의 가운데 「•」와 4·5번 화살표는 발주 메시지에 적힌 기호 그대로 넣었습니다. 기호가 다르면 해당 문자만 수정해 주세요.", "sans", 4.5, GRAY); y += 7
text(L, y, "※ 12번 「좌」는 30mm에서 가는 획이 얇아지는 것을 막기 위해 굵은 자체로 바꿨습니다. 최소 획 약 1.4mm이며, 더 두꺼워야 하면 알려 주세요.", "sans", 4.5, GRAY); y += 7
text(L, y, "※ 일자 막대(9·10·11번)는 글꼴 문자가 아닌 사각형 도형입니다. 가로 110mm는 숫자 폭(약 108mm)에 맞춘 값이고, 세로 6mm는 기존 제품 사진을 잣대로 잰 근사값이므로 기존 제품과 같은 두께로 맞춰 주세요.", "sans", 4.5, GRAY); y += 12
H = y + 20

# ---------- 출력 ----------
def hex2rgb(h):
    h = h.lstrip("#"); return tuple(int(h[i:i+2], 16) / 255 for i in (0, 2, 4))

def art_bbox(oplist):
    """조각들의 실제 잉크 경계 (x0, y0, x1, y1) - 페이지 좌표(y 아래로 증가)"""
    x0 = y0 = 1e9; x1 = y1 = -1e9
    for op in oplist:
        if op[0] == "text":
            _, x, yy, t, font, size, color, anchor, _l = op
            m = measure(font, t, size)
            if anchor == "middle": x -= m["adv"] / 2
            x0 = min(x0, x + m["xmin"]); x1 = max(x1, x + m["xmax"])
            y0 = min(y0, yy - m["ymax"]); y1 = max(y1, yy - m["ymin"])
        elif op[0] == "rect":
            _, x, yy, w, h, fill, _l = op
            x0 = min(x0, x); x1 = max(x1, x + w); y0 = min(y0, yy); y1 = max(y1, yy + h)
    return x0, y0, x1, y1

def render_pdf(path, oplist, pw, ph, dx=0.0, dy=0.0, force_color=None, title=""):
    c = canvas.Canvas(path, pagesize=(pw * mm, ph * mm))
    c._fillMode = 1                      # nonzero winding (글자 속 구멍 처리)
    c.setTitle(title); c.setAuthor("안성 한의원")
    Y = lambda v: (ph - (v + dy)) * mm
    X = lambda v: (v + dx) * mm
    for op in oplist:
        if op[0] == "text":
            _, x, yy, t, font, size, color, anchor, _l = op
            if anchor == "middle": x -= measure(font, t, size)["adv"] / 2
            c.setFillColorRGB(*hex2rgb(force_color or color))
            path_o = c.beginPath(); x0 = X(x); y0 = Y(yy)
            for o, pts in text_outline(font, t, size * mm):
                q = [(x0 + px, y0 + py) for (px, py) in pts]
                if o == "moveTo":      path_o.moveTo(*q[0])
                elif o == "lineTo":    path_o.lineTo(*q[0])
                elif o == "curveTo":   path_o.curveTo(q[0][0], q[0][1], q[1][0], q[1][1], q[2][0], q[2][1])
                elif o == "closePath": path_o.close()
            c.drawPath(path_o, stroke=0, fill=1, fillMode=1)
        elif op[0] == "line":
            _, x1, y1, x2, y2, w, color, dash, _l = op
            c.setStrokeColorRGB(*hex2rgb(force_color or color)); c.setLineWidth(w * mm)
            c.setDash([d * mm for d in dash] if dash else [])
            c.line(X(x1), Y(y1), X(x2), Y(y2))
        elif op[0] == "rect":
            _, x, yy, w, h, fill, _l = op
            c.setFillColorRGB(*hex2rgb(force_color or fill))
            c.rect(X(x), Y(yy + h), w * mm, h * mm, stroke=0, fill=1)
    c.showPage(); c.save()

def render_svg(path, oplist, pw, ph, dx=0.0, dy=0.0, force_color=None):
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{pw}mm" height="{ph}mm" viewBox="0 0 {pw} {ph}">',
           f'<rect width="{pw}" height="{ph}" fill="white"/>']
    for op in oplist:
        if op[0] == "text":
            _, x, yy, t, font, size, color, anchor, _l = op
            if anchor == "middle": x -= measure(font, t, size)["adv"] / 2
            x += dx; yy += dy
            d = []
            for o, pts in text_outline(font, t, size):
                q = [(x + px, yy - py) for (px, py) in pts]
                if o == "moveTo":      d.append(f"M{q[0][0]:.3f} {q[0][1]:.3f}")
                elif o == "lineTo":    d.append(f"L{q[0][0]:.3f} {q[0][1]:.3f}")
                elif o == "curveTo":   d.append("C" + " ".join(f"{a:.3f} {b:.3f}" for a, b in q))
                elif o == "closePath": d.append("Z")
            out.append(f'<path d="{" ".join(d)}" fill="{force_color or color}" fill-rule="nonzero"/>')
        elif op[0] == "line":
            _, x1, y1, x2, y2, w, color, dash, _l = op
            da = f' stroke-dasharray="{dash[0]} {dash[1]}"' if dash else ""
            out.append(f'<line x1="{x1+dx:.3f}" y1="{y1+dy:.3f}" x2="{x2+dx:.3f}" y2="{y2+dy:.3f}" '
                       f'stroke="{force_color or color}" stroke-width="{w}"{da}/>')
        elif op[0] == "rect":
            _, x, yy, w, h, fill, _l = op
            out.append(f'<rect x="{x+dx:.3f}" y="{yy+dy:.3f}" width="{w}" height="{h}" fill="{force_color or fill}"/>')
    out.append("</svg>")
    open(path, "w", encoding="utf-8").write("\n".join(out))

# --- (1) 치수 도면: 설명·치수선 포함 ---
render_pdf(os.path.join(OUT, "아크릴글자_도면_치수표기.pdf"), ops, W, H,
           title="아크릴 글자 발주 도면 (치수 표기, 1:1)")
render_svg(os.path.join(OUT, "preview_도면.svg"), ops, W, H)

# --- (2) 커팅용: 실제 조각만, 여백 정리, 전부 검정 ---
art = [o for o in ops if o[-1] == "art"]
MG = 30.0
ax0, ay0, ax1, ay1 = art_bbox(art)
cw = (ax1 - ax0) + MG * 2
ch = (ay1 - ay0) + MG * 2
render_pdf(os.path.join(OUT, "아크릴글자_커팅용.pdf"), art, cw, ch,
           dx=MG - ax0, dy=MG - ay0, force_color="#000000",
           title="아크릴 글자 커팅용 (윤곽선, 1:1)")
render_svg(os.path.join(OUT, "preview_커팅용.svg"), art, cw, ch,
           dx=MG - ax0, dy=MG - ay0, force_color="#000000")

print(f"치수 도면 : {W:.0f} x {H:.0f} mm")
print(f"커팅용    : {cw:.0f} x {ch:.0f} mm  (조각 {len(art)}개)")
