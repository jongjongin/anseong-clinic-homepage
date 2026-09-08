# -*- coding: utf-8 -*-
"""아크릴 글자 발주 도면 생성기 (1:1 실측, mm 단위)
같은 도형 목록을 PDF(reportlab)와 SVG로 동시에 출력한다."""
import os, html
from fontTools.ttLib import TTFont
from fontTools.pens.boundsPen import BoundsPen
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

def size_for_height(font, s, h):
    m = measure(font, s, 1.0)
    return h / (m["ymax"] - m["ymin"])

def size_for_width(font, s, w):
    m = measure(font, s, 1.0)
    return w / (m["xmax"] - m["xmin"])

# ---------- 도형 목록 ----------
ops = []
COCOA = "#4B3A2F"; GUIDE = "#FF00FF"; GRAY = "#666666"; BLACK = "#111111"; DIM = "#0066CC"
def text(x, y, s, font, size, color=BLACK, anchor="start"):
    ops.append(("text", x, y, s, font, size, color, anchor))
def line(x1, y1, x2, y2, w=0.25, color=GUIDE, dash=None):
    ops.append(("line", x1, y1, x2, y2, w, color, dash))
def rect(x, y, w, h, fill):
    ops.append(("rect", x, y, w, h, fill))

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
W = 1000.0; L = 40.0
y = 30.0
text(L, y, "안성 한의원 · 아크릴 글자 발주 도면 (1:1 실측, 단위 mm)", "sans", 12, BLACK); y += 9
text(L, y, "상품명: 아크릴 글자  |  사양: 무광 3T  |  색상: 코코아 / 회색(연한 회색 계열)  |  총 수량: 9개 (글자 5개 + 숫자 2개 + 일자 막대 2개)", "sans", 6, GRAY); y += 9
notes = [
    "■ 글꼴 안내: 지정 글꼴(Sandoll 고딕Neo Cond 04 Regular / MICE명조 OTF 01 Regular)이 이 파일에 포함되어 있지 않아,",
    "   임시로 Noto Sans KR(고딕 자리) / Noto Serif KR(명조 자리)로 타이핑되어 있습니다. 문자는 모두 편집 가능한 상태입니다.",
    "■ 작업 순서: ① 각 문자를 선택해 지정 글꼴로 변경 → ② 파란색 치수선의 높이(세로) 또는 폭에 맞게 크기 조정 → ③ 윤곽선 만들기(Create Outlines) 후 커팅.",
    "■ 분홍 점선 = 글자 위/아래 기준선(인쇄·커팅 제외), 파란 선 = 치수 표기. 글자 색은 코코아색으로 표시했으며 실제 색상은 재료 색상을 따릅니다.",
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
    text(x_text, base, s, font, size, COCOA)
    x_r = x_text + m["adv"]
    # 위/아래 기준선 (점선)
    line(L - 12, top, x_r + 30, top, 0.25, GUIDE, (2, 2))
    line(L - 12, bot, x_r + 30, bot, 0.25, GUIDE, (2, 2))
    vdim(x_r + 22, top, bot, f"세로 {h:g}mm")
    y = bot + 26

spec_item(1, "리프팅 • 레이저실", "sans", 40)
spec_item(2, "리프팅 • 레이저실", "sans", 40, "(1번과 동일, 별도 1개)")
spec_item(3, "파우더룸 • 검사실", "serif", 100, "(가운데 기호 포함)")
spec_item(4, "← 파우더룸 • 탈의실", "sans", 70, "(왼쪽 화살표 포함)")
spec_item(5, "파우더룸 • 탈의실 →", "sans", 70, "(오른쪽 화살표 포함)")

# 6~9: 숫자 2개 + 밑줄 2개
text(L, y, "6 ~ 9. 「15」「16」 숫자 높이 90mm  /  일자 막대(밑줄) 2개 가로 90mm × 세로 6mm   숫자 글꼴: MICE명조 OTF 01 Regular   (총 4개, 각각 별도 조각)", "sans", 5, GRAY); y += 16
top_row = y
x = L
bar_h_note = None
for i, num_s in enumerate(["15", "16"]):
    size = size_for_height("serif", num_s, 90)
    m = measure("serif", num_s, size)
    base = top_row + m["ymax"]; bot = base - m["ymin"]
    text(x, base, num_s, "serif", size, COCOA)
    line(x - 12, top_row, x + m["adv"] + 30, top_row, 0.25, GUIDE, (2, 2))
    line(x - 12, bot, x + m["adv"] + 30, bot, 0.25, GUIDE, (2, 2))
    vdim(x + m["adv"] + 22, top_row, bot, "높이 90mm")
    text(x, top_row - 3, f"{6 + i}. 숫자 {num_s}", "sans", 4.5, GRAY)
    # 밑줄: 사진과 같은 일자 막대 (가로 90mm × 세로 6mm 사각형)
    BAR_W, BAR_H = 90.0, 6.0
    by = bot + 25
    bl = x + m["adv"] / 2 - BAR_W / 2          # 숫자 가운데 정렬
    rect(bl, by, BAR_W, BAR_H, COCOA)
    br = bl + BAR_W; bbot = by + BAR_H
    hdim(bbot + 8, bl, br, "가로 90mm")
    vdim(br + 10, by, bbot, "세로 6mm", size=4)
    text(x, bbot + 22, f"{8 + i}. 일자 막대 (90 × 6mm, 사진 속 기존 제품과 동일 형태)", "sans", 4.5, GRAY)
    bar_h_note = bbot + 26
    x += m["adv"] + 120
y = bar_h_note + 20
line(L, y, W - L, y, 0.3, "#999999"); y += 10
text(L, y, "※ 3·4·5번의 가운데 「•」와 4·5번 화살표는 발주 메시지에 적힌 기호 그대로 넣었습니다. 기호가 다르면 해당 문자만 수정해 주세요.", "sans", 4.5, GRAY); y += 7
text(L, y, "※ 일자 막대(8·9번)는 글꼴 문자가 아닌 사각형 도형입니다. 세로 6mm는 기존 제품 사진을 잣대로 잰 근사값이므로, 기존 제품과 같은 두께로 맞춰 주세요.", "sans", 4.5, GRAY); y += 12
H = y + 20

# ---------- PDF 출력 ----------
def hex2rgb(h): h = h.lstrip("#"); return tuple(int(h[i:i+2], 16) / 255 for i in (0, 2, 4))
pdf_path = os.path.join(OUT, "아크릴글자_발주도면.pdf")
c = canvas.Canvas(pdf_path, pagesize=(W * mm, H * mm))
c.setTitle("아크릴 글자 발주 도면 (1:1)"); c.setAuthor("안성 한의원")
Y = lambda v: (H - v) * mm
for op in ops:
    if op[0] == "text":
        _, x, yy, s, font, size, color, anchor = op
        c.setFillColorRGB(*hex2rgb(color)); c.setFont(FONTS[font]["rl"], size * mm)
        if anchor == "middle": c.drawCentredString(x * mm, Y(yy), s)
        else: c.drawString(x * mm, Y(yy), s)
    elif op[0] == "line":
        _, x1, y1, x2, y2, w, color, dash = op
        c.setStrokeColorRGB(*hex2rgb(color)); c.setLineWidth(w * mm)
        c.setDash([d * mm for d in dash] if dash else [])
        c.line(x1 * mm, Y(y1), x2 * mm, Y(y2))
    elif op[0] == "rect":
        _, x, yy, w, h, fill = op
        c.setFillColorRGB(*hex2rgb(fill)); c.rect(x * mm, Y(yy + h), w * mm, h * mm, stroke=0, fill=1)
c.showPage(); c.save()

# ---------- SVG 출력 (미리보기용) ----------
svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}mm" height="{H}mm" viewBox="0 0 {W} {H}">',
       '<style>@font-face{font-family:"Noto Sans KR";src:url("../NotoSansKR-Regular.ttf")}'
       '@font-face{font-family:"Noto Serif KR";src:url("../NotoSerifKR-Regular.ttf")}</style>',
       f'<rect width="{W}" height="{H}" fill="white"/>']
for op in ops:
    if op[0] == "text":
        _, x, yy, s, font, size, color, anchor = op
        fam = FONTS[font]["svg"]
        svg.append(f'<text x="{x:.3f}" y="{yy:.3f}" font-family="{fam}" font-size="{size:.3f}" fill="{color}" text-anchor="{anchor}">{html.escape(s)}</text>')
    elif op[0] == "line":
        _, x1, y1, x2, y2, w, color, dash = op
        da = f' stroke-dasharray="{dash[0]} {dash[1]}"' if dash else ""
        svg.append(f'<line x1="{x1:.3f}" y1="{y1:.3f}" x2="{x2:.3f}" y2="{y2:.3f}" stroke="{color}" stroke-width="{w}"{da}/>')
    elif op[0] == "rect":
        _, x, yy, w, h, fill = op
        svg.append(f'<rect x="{x}" y="{yy}" width="{w}" height="{h}" fill="{fill}"/>')
svg.append("</svg>")
with open(os.path.join(OUT, "preview.svg"), "w", encoding="utf-8") as fh:
    fh.write("\n".join(svg))
print(f"page {W} x {H:.0f} mm ->", pdf_path)
