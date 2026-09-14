# 아크릴 글자 발주 도면

브로애드(아크릴 글자 업체) 발주용 1:1 실측 도면입니다. 총 11개 조각 (글자 5개, 베드번호 숫자 3개, 일자 막대 3개). 도면 크기 1400 × 866 mm, 단위 mm.

- `아크릴글자_발주도면.ai` — 일러스트레이터에서 여는 파일 (PDF 호환 형식, 문자 편집 가능)
- `아크릴글자_발주도면.pdf` — 같은 내용의 PDF (누구나 열어 볼 수 있음)
- `아크릴글자_미리보기.png` — 그림 미리보기
- `make_sign.py` — 도면을 다시 만드는 스크립트

## 글꼴 처리 (아웃라인 완료)

업체에 지정 글꼴(Sandoll 고딕Neo Cond, MICE명조)이 없어, 모든 글자를 **윤곽선(아웃라인)
처리된 벡터 도형**으로 변환했습니다. 파일 안에 글꼴이 전혀 포함되어 있지 않으므로
어느 컴퓨터에서 열어도 모양이 그대로이고, 글꼴 설치 없이 바로 커팅할 수 있습니다.

- 고딕 자리: Noto Sans KR Regular
- 명조 자리: Noto Serif KR Regular
- 둘 다 SIL Open Font License 무료 글꼴이라 상업적 사용과 간판 제작에 제한이 없습니다.

업체는 각 도형을 파란 치수선의 세로 높이에 맞춰 비율 그대로 확대·축소한 뒤 커팅하면 됩니다.

## 다시 만들기
```
pip install fonttools reportlab
# 스크립트와 같은 폴더에 NotoSansKR-Regular.ttf, NotoSerifKR-Regular.ttf 를 두고
python3 make_sign.py     # out/ 폴더에 PDF와 SVG가 생성됨
```
글꼴은 Google Fonts(Noto Sans KR / Noto Serif KR)에서 내려받을 수 있습니다.
