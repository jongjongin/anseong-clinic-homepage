# 독립 교차 검토 기록 I

담당: 67, 72, 74, 75, 77, 79, 81, 84, 86, 87, 89, 90 (2026-11-04). 미검토 글 없음. 보류로 바꾼 글 없음.

조회 경로: 도중에 WebFetch·WebSearch가 사용 한도로 막혀, 일부는 공개 페이지와 Europe PMC API를 직접 받아 읽었습니다. 한도 해제 후 차단 페이지 등은 WebFetch로 확인했습니다. 근거 URL은 어느 경로든 실제로 연 것만 적었습니다. `_verify_*.md`는 읽지 않았습니다.

## 67 골프 통증 — 수정 1 (안전 신호 추가)
- 확인한 주장: 대회 선수 140명, 12개월 부상 30.7%, 허리 최다, 반복 동작 주 기전, 주 4회 이상 위험 3.5배(CI 0.97-12.36, p=0.056) / 골프 엘보 보존 치료·수술 드묾·클라스프·진통제 상의·스테로이드 주사 장단점 / NHS 허리 응급 신호.
- 근거: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.3390/ijerph21050542&format=json&resultType=core (PMID 38791754), https://rightdecisions.scot.nhs.uk/patient-information-leaflets/primary-community-services/physiotherapy/golfers-elbow-a-guide-for-patients, https://www.nhs.uk/conditions/back-pain/
- 결과: 수치·기전 맞음. NHS의 긴급 진료 신호(발열·오한, 갑작스러운 심한 통증)가 빠져 추가.
- 전: "몇 주 지나도 나아지지 않거나 일상이 어렵다면 진료를 받습니다. 특히 아래 신호가…"
- 후: "몇 주 지나도 나아지지 않거나 일상이 어렵다면 진료를 받습니다. 열이나 오한이 나고 몸 상태가 나쁘거나, 심한 통증이 갑자기 시작되거나 빠르게 심해지면 더 서둘러 진료를 받습니다. 특히 아래 신호가…"
- 참고: 스코틀랜드 안내문의 다음 검토 예정일(2026-05-31)이 지났습니다. "회복에 몇 주 이상"은 이 안내문에 없는 일반 서술이며 출처로 확인하지 못했으나 약한 표현이라 두었습니다.

## 72 만성 기침 — 수정 2 (사실 1, 표현 1)
- 확인한 주장: 8주 기준, 병력·흉부 X선 우선, 세 원인, 항히스타민제·코 스테로이드(약한 권고), 기침형 천식 흡입 스테로이드, 역류 증상 시 PPI, ACE 억제제 중단·1~4주(3개월 넘기도), UACS 항생제 비권고 / CHEST의 PPI 단독 무이득, 알고리즘 해소율 82~100% / NHS 기침 경고 신호.
- 근거: https://synapse.koreamed.org/articles/1002090, https://koreascience.kr/article/JAKO202130759798623.page, https://www.e-trd.org/journal/view.php?doi=10.4046/trd.2021.0038 (초록·서론), https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1016/j.chest.2016.08.1458&format=json&resultType=core (PMID 27614002), https://www.nhs.uk/symptoms/cough/
- 수정 1(사실): NHS의 3주 기준은 면역 저하자 한정이 아니고, 면역 저하는 기간과 무관한 항목입니다. 국내 지침의 2주 흉부 X선도 추가.
  - 전: "면역이 약한 상태에서 3주 넘는 기침"
  - 후: "면역이 약한 상태의 기침" + 목록 뒤 "8주가 되기 전이라도 미루지 않습니다. 국내 지침은 결핵 유병률을 고려해 2주 넘는 기침에 흉부 X선 확인을 권하고, NHS는 3주 넘는 기침에 진료를 권합니다."
- 수정 2(표현): 원문은 expert opinion입니다. "전문가 합의에 기댄다" → "전문가 의견에 기댄다"
- 참고(미수정): 2020 개정판은 DPP-4 억제제(당뇨약)도 기침 원인으로 추가했습니다. 2주 X선과 세부 권고는 2016판 본문에서 확인했고, 2020판은 전문의 해당 부분을 따로 대조하지 못했습니다(초록의 세 원인·PPI·ACE는 일치).

## 74 키 성장 속도 — 수정 1 (사실)
- 확인한 주장: 첫해 약 25cm, 12개월 체중 3배, 12개월~10세 연 7.6cm, 사춘기 구간·정점 수치, 8~14세 정상 범위, 성조숙증 8세·9세, 2017 성장도표(3세 미만 WHO, 3~18세 국내 조사), 6개월 간격, 의뢰 기준(3백분위, 3세 이후 하향, 부모 키, 두통·시력 시 긴급), 나이별 속도 표.
- 근거: https://www.merckmanuals.com/professional/pediatrics/growth-and-development/physical-growth-of-infants-and-children, https://www.merckmanuals.com/professional/pediatrics/growth-and-development/physical-growth-and-sexual-maturation-of-adolescents, https://www.nhs.uk/conditions/early-or-delayed-puberty/, https://www.msdmanuals.com/home/children-s-health-issues/hormonal-disorders-in-children/delayed-puberty, https://kdca.go.kr/kdca/5458/subview.do, https://pedsendo.org/clinical-resource/child-with-suspected-short-stature, https://www.childrensmercy.org/health-care-providers/pediatrician-guides/endocrinology/growth-failure, https://synapse.koreamed.org/articles/1042902
- 수정: NHS의 15세만 적으면 사춘기 지연 정의(여아 13세, 남아 14세)보다 평가가 늦어질 수 있어 함께 적고 참고 자료 1건 추가.
  - 전: "**늦은 경우**: 15세가 되어도 변화가 없으면 사춘기 지연을 확인합니다."
  - 후: "**늦은 경우**: MSD 매뉴얼은 여아 13세까지 가슴 발달이, 남아 14세까지 고환 커짐이 없으면 사춘기 지연으로 정의합니다. NHS는 15세까지 시작되지 않으면 지연일 수 있다고 안내합니다."
- 참고: KDCA 페이지에 「2027 소아청소년 성장도표」 개정 추진이 적혀 있어, 공표 후 문구 갱신이 필요합니다.

## 75 운동과 성장 — 수정 3 (사실 1, 과장 완화 1, 요약 일치 1) + 참고 자료 3
- 확인한 주장: 메타분석 21편·855명·7~17세, IGF-1 유의차 없음(SMD 0.25, P=0.17), BDNF 중간 증가(SMD 0.51) / Cooper 총설 / Eliakim 15~17세·5주·IGF-1 −14%(훈련군 10명) / WHO 이득 목록 / 체조 선수 IGF-1 저하.
- 근거: https://jahssp.azaruniv.ac.ir/article_14831.html?lang=en, https://coachsci.sdsu.edu/csa/vol32/cooper.htm, https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22endurance%20training%20and%20the%20growth%20hormone%22&format=json&resultType=core (PMID 8923848), https://www.who.int/news-room/fact-sheets/detail/physical-activity, https://www.who.int/poland/publications/9789240014886, https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/, Europe PMC 검색 결과의 PMID 1842568·23743792 초록
- 수정 1(사실): 지침 원문은 "at least an average of 60 min/day of moderate-to-vigorous, mostly aerobic", 고강도·근골격 강화 주 3일 이상입니다.
  - 전: "WHO 지침의 요약은 어린이·청소년에게 하루 평균 60분의 중강도 유산소 신체활동입니다. 하루에 몰아서 채울 필요는 없고, 일주일 전체로 평균을 맞추는 개념입니다."
  - 후: "WHO 지침은 어린이·청소년에게 하루 평균 60분 이상의 중·고강도 신체활동을 권하며, 대부분은 유산소 활동으로 채웁니다. 일주일 전체로 평균을 맞추는 개념입니다. 고강도 유산소 활동과 근육·뼈를 튼튼하게 하는 활동은 주 3일 이상 넣습니다."
- 수정 2(요약 일치): "하루 평균 60분의" → "하루 평균 60분 이상의"
- 수정 3(과장 완화): Malina 2013은 훈련과 성장 사이 인과를 확립하지 못했다고 평가합니다.
  - 전: "이런 연구는 대상과 설계가 제한적이지만 많이 시킬수록 좋다고 볼 수는 없습니다."
  - 후: "이런 연구는 대상과 설계가 제한적이어서 훈련이 원인이라고 확정하기는 어렵지만, 많이 시킬수록 좋다고 볼 수도 없습니다."
- 참고 자료 추가: Bull 2020(WHO 지침), Jahreis 1991(체조 선수 IGF-1은 기존 참고 자료에 근거가 없었음), Malina 2013.

## 77 장요근 — 수정 1 (미확인 표현 삭제)
- 확인한 주장: 118명 단면 연구(ROM 4° vs 8°, BMI 보정 후 독립 관련 없음), 관찰 연구 16편·고품질 다수 위축 보고, 클로피도그렐 복용 환자 침칼 후 혈종, 해부 기시·정지, NHS 응급 신호.
- 근거: Europe PMC DOI 조회 10.1016/j.clinbiomech.2025.106739, 10.1111/joa.13086, 10.1097/md.0000000000031975 (PMID 41401646·31475359·36401461), https://orthopaedicprinciples.com/anatomy-of-iliopsoas-muscle/, https://www.nhs.uk/conditions/back-pain/
- 수정: 증례 초록에 시술 깊이가 없어 삭제. 전: "요통으로 깊은 부위에 침칼 시술을 받은 뒤" / 후: "요통으로 침칼 시술을 받은 뒤"
- 참고: 해부 출처는 공식 기관 자료가 아니나 내용은 맞습니다. 15~30초 유지는 참고 자료로 확인하지 못했고, 생활 관리 수준 안내라 두었습니다.

## 79 점 제거 상처 관리 — 수정 1 (안전 안내)
- 확인한 주장: AAD 세척·페트롤라툼·덮기·매일 교체, 딱지·항생제 연고, 7~10일, 물에 담그기 금지·샤워 가능, 20분 압박, 감염 신호, SPF 30 / Cheyasak 40명 75% vs 40%.
- 근거: https://www.aad.org/public/everyday-care/injured-skin/burns/wound-care-minimize-scars, https://www.aad.org/public/diseases/a-z/skin-biopsy-wound-care, Europe PMC DOI 조회 10.2340/00015555-1899 (PMID 24854088)
- 결과: 사실 오류 없음. 연구 대상은 피부형 IV, 여드름 흉터, 클로베타솔 2일 사용입니다.
- 수정: 전 "뺀 자리에서 검은 점이 다시 올라와 커지거나 모양이 변함" / 후 "…모양이 변함(피부과 진찰로 확인)"
- 원장 판단: 아래 '원장 판단 필요' 참조.

## 81 손가락 PIP 염좌 — 오류 없음
- 확인한 주장: Roh 67명·6개월·쥐는 힘 77%·ROM 84%·늦은 치료와 나쁜 결과 관련 / Hamada 증례 7건(백조목 변형, 수술) / AAOS 골절 신호 / NHS PRICE·20분·2~3시간·2주·심하면 몇 달.
- 근거: Europe PMC DOI 조회 10.1016/j.jht.2017.02.010, 10.1177/1753193417739248 (PMID 28343853·29105590), https://www.orthoinfo.org/diseases--conditions/finger-fractures/, https://www.nhs.uk/conditions/sprains-and-strains/
- 결과: 맞음. 수정 없음.

## 84 손 저림 — 오류 없음
- 확인한 주장: C6·C7·C8 표, 정중·자신경 영역, 손목터널 위험 요인, 야간 보조기 최대 6주, 주사·수술 순서, 머리 위 손 얹기 완화, 근위축 비가역·6주, 척수증 증상, 이중 압박 6.7~73%, 침 메타분석 16편 1,025명·낮은 확실성.
- 근거: https://www.msdmanuals.com/professional/multimedia/table/symptoms-of-common-radiculopathies-by-dermatomal-level, https://www.orthoinfo.org/diseases--conditions/carpal-tunnel-syndrome/, https://www.orthoinfo.org/diseases--conditions/ulnar-nerve-entrapment-at-the-elbow/, https://www.orthoinfo.org/diseases--conditions/cervical-radiculopathy-pinched-nerve/, https://www.orthoinfo.org/diseases--conditions/cervical-spondylotic-myelopathy-spinal-cord-compression/, https://www.nhs.uk/conditions/carpal-tunnel-syndrome/, Europe PMC DOI 조회 10.1177/15589447251352122, 10.3389/fnins.2023.1097455 (PMID 40684370·36908786)
- 결과: 맞음. 수정 없음. 침 메타분석에서 침 단독이 야간 보조기보다 통증 완화는 나았으나, 글은 증상 점수만 말하며 틀리지 않았습니다. NHS 말초신경병증·뇌졸중 페이지는 열지 않았으며, 해당 내용은 일반 지식과 일치해 미확인으로 남깁니다.

## 86 앉는 자세 — 오류 없음
- 확인한 주장: Slater 2019 논평(Viewpoint) 내용 / OSHA 50~100cm, 윗줄 눈높이 이하, 중앙 15~20도 아래, 기울기 10~20도, 젖히면 눈부심, 팔꿈치 90~120도, 무릎·발·등, 자세 변경 4가지 / NHS 목 통증 신호.
- 근거: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:31366294%20AND%20SRC:MED&format=json&resultType=core, https://www.osha.gov/etools/computer-workstations/components/monitors, https://www.osha.gov/etools/computer-workstations/positions, https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/, https://www.nhs.uk/conditions/back-pain/
- 결과: 맞음. 수정 없음. "고개를 빼게 될 수 있다"는 OSHA 문구가 아닌 설명이나 약한 표현이라 두었습니다.

## 87 통증회피 자세 — 수정 1 (표본 크기 명시)
- 확인한 주장: Xu 258명·81.0% 반대쪽 이동(수술받은 환자의 후향 분석) / Siribumrungwong 25명·6주 84% 요천추 굽음 10도 미만·대조군 없음 / WHO 2023 척추 수기 권고·보호대 비권고 / NHS 응급 신호·운전 금지.
- 근거: Europe PMC 조회 PMID 41946588, 42722417, https://www.who.int/news/item/07-12-2023-who-releases-guidelines-on-chronic-low-back-pain, https://www.nhs.uk/conditions/back-pain/, https://www.nhs.uk/conditions/sciatica/
- 수정: 전 "디스크 탈출로 인한 기울어짐 환자에게 경막외 스테로이드 주사를" / 후 "디스크 탈출로 인한 기울어짐 환자 25명에게 경막외 스테로이드 주사를"

## 89 손가락 관절염 — 수정 1 (참고 자료 주소)
- 확인한 주장: NHS 45세·30분 기준, 악화 필연 아님, 조기 치료, 2주·30분 진료 기준, 뜨거운 관절 당일 진료 / Harvard 표 내용 / 손 OA 긴 뻣뻣함(87% 중 30~60분 24%, 60분 이상 17%).
- 근거: https://www.nhs.uk/conditions/osteoarthritis/, https://www.nhs.uk/conditions/rheumatoid-arthritis/symptoms/, https://www.nhs.uk/conditions/rheumatoid-arthritis/treatment/, https://www.nhs.uk/symptoms/joint-pain/, https://content.health.harvard.edu/blog/what-is-the-difference-between-osteoarthritis-and-rheumatoid-arthritis/, https://www.arthritisportal.lu.se/article/prolonged-morning-stiffness-and-osteoarthritis
- 수정: 전 "룬드대학교 관절염 포털 — 골관절염과 지속되는 아침 뻣뻣함(주소 미확인)" / 후 "룬드대학교 관절염 포털 — Prolonged morning stiffness and osteoarthritis(손 골관절염 코호트 연구 요약): https://www.arthritisportal.lu.se/article/prolonged-morning-stiffness-and-osteoarthritis"
- 참고(미수정): 응급 항목의 "손가락 모양이 틀어졌다, 다친 뒤 감각이 사라졌다"는 내가 뽑은 NHS 페이지 구절에서 확인되지 않았습니다(본문에 NHS 출처로 적힌 문장은 아님). 손 골관절염은 엄지 뿌리 관절에도 흔한데 표에 없으며, 공식 자료로 대조하지 못해 고치지 않았습니다.

## 90 FSS — 수정 1 (사실)
- 확인한 주장: Krupp 1989 MS 25·SLE 29·건강인 20 / Valko 건강인 454·환자 852(188+235+429), 평균 3.00·4.66·3.90·4.34, 4점 이상 18·69·49·62%, 5.2점(건강인 평균+2SD)에서 3.5·45·31·36%, 민감도·특이도 미산출 / ATS 저작권 / NHS 피로 원인 / 자살예방 상담전화 109.
- 근거: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:2803071%20AND%20SRC:MED&format=json&resultType=core, https://pmc.ncbi.nlm.nih.gov/articles/PMC2579971/, https://www.thoracic.org/members/assemblies/assemblies/srn/questionaires/fss.php, https://www.nhs.uk/symptoms/tiredness-and-fatigue/, https://www.korea.kr/news/policyNewsView.do?newsId=148921684
- 수정: 기준은 "4점 이상"입니다. 전 "건강해도 5~6명 중 1명이 4점을 넘고, 환자라도 넘지 않는 사람이 적지 않습니다." / 후 "건강해도 5~6명 중 1명이 4점 이상이고, 환자라도 4점에 못 미치는 사람이 적지 않습니다."

## 원장 판단 필요
1. 79: 제목과 안내 문구(가격표)가 원내 CO2 레이저 점 제거를 전제로 읽힙니다. 한의사의 레이저 기기 사용 관련 법적 쟁점과 의료광고 해당 여부를 확인해 주세요. 법적 결론은 조사·판단하지 않았습니다.
2. 79: 점을 빼기 전 악성 여부 확인 절차는 글에 없습니다. 실제 진료 절차와 맞추어 문구를 넣을지 판단해 주세요.
3. 67, 77, 81, 86, 87, 89 등의 약침·추나·뜸 안내가 실제 진료와 맞는지 확인해 주세요.

## 미확인 항목
- 72: 2020 국내 지침 전문의 세부 권고(2016판과 초록으로 대조).
- 77: 스트레칭 15~30초 유지의 출처.
- 67: 골프 엘보 회복 기간 "몇 주 이상"의 출처.
- 84: NHS 말초신경병증·뇌졸중 페이지 미열람.
- 89: 위 89번 참고 항목.
