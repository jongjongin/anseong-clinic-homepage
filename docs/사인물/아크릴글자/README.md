# 아크릴 글자 발주 도면

브로애드(아크릴 글자 업체) 발주용 1:1 실측 도면입니다. 총 11개 조각 (글자 5개, 베드번호 숫자 3개, 일자 막대 3개). 도면 크기 1400 × 866 mm, 단위 mm.

- `아크릴글자_발주도면.ai` — 일러스트레이터에서 여는 파일 (PDF 호환 형식, 문자 편집 가능)
- `아크릴글자_발주도면.pdf` — 같은 내용의 PDF (누구나 열어 볼 수 있음)
- `아크릴글자_미리보기.png` — 그림 미리보기
- `make_sign.py` — 도면을 다시 만드는 스크립트

## 주의: 글꼴
지정 글꼴(Sandoll 고딕Neo Cond 04 Regular, MICE명조 OTF 01 Regular)은 유료 글꼴이라 파일에 들어 있지 않습니다.
임시로 Noto Sans KR(고딕 자리), Noto Serif KR(명조 자리)로 타이핑되어 있으므로, 업체에서 글꼴을 바꾼 뒤
파란 치수선(세로 높이 / 밑줄 폭)에 맞춰 크기를 조정하고 윤곽선(Create Outlines) 처리하면 됩니다.

## 다시 만들기
```
pip install fonttools reportlab
# 스크립트와 같은 폴더에 NotoSansKR-Regular.ttf, NotoSerifKR-Regular.ttf 를 두고
python3 make_sign.py     # out/ 폴더에 PDF와 SVG가 생성됨
```
글꼴은 Google Fonts(Noto Sans KR / Noto Serif KR)에서 내려받을 수 있습니다.
