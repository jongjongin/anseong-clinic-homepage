# 독립 교차 검토 기록 H (49, 51, 52, 53, 54, 55, 59, 60, 62, 63, 64, 65)

검토일 2026-11-04. 12편 모두 검토했으며 미검토 글은 없습니다. 보류로 바꾼 글도 없습니다.
`_verify_*.md` 는 읽지 않았습니다. 고친 뒤 12편 모두 `check_articles.py` 통과를 확인했습니다.

**확인 방법 참고**: 검토 중 WebFetch가 사용 한도로 멈춰(17:30 복구) 공개 페이지 대부분은 직접 내려받아 HTML을 벗긴 본문을 읽었고, PubMed 초록은 NCBI E-utilities, 2025~2026 논문 초록은 Europe PMC API로 읽었습니다. CDC 페이지는 직접 받기가 403이어서 복구 후 WebFetch로 읽었습니다. 아래 근거 URL은 모두 이 중 한 방식으로 연 것이며, 예외는 62번 APA와 64번 CCJM(각 항목에 적음)입니다.

---

## 49 손 사마귀 — 수정 1건 (사실 오류 없음)

확인한 주장: 자가접종·손톱 밑 전파, 잠복 최대 12개월, 보이거나 만져지는 동안 전염, 검은 점=모세혈관, 어린이 50%/6개월·90%/2년, 성인 더 오래감, 면역 저하 시 자연 소실 기대 어려움, 외용제 70%(12주)·냉동 70%(3~4개월), 냉동 1~2주 간격, 소작 흉터·재발·흉터 속 재발, 재발은 면역 저하·흡연에서 잦음, 살리실산 금기·주의, 일회용 줄·돌 사용, 예방 수칙.
근거: https://dermnetnz.org/topics/viral-wart / https://www.aad.org/public/diseases/a-z/warts-overview / https://www.aad.org/public/diseases/a-z/warts-self-care / https://www.nhs.uk/conditions/warts-and-verrucas/
결과: 모두 맞음. 손 글인데 DermNet의 손가락 옆면 냉동 주의가 빠져 보충.
- 전: `통증, 물집, 하얀 자국 가능`
- 후: `통증, 물집, 하얀 자국 가능. 손가락 옆면은 일시적 감각 저하 가능`

미확인: 한의원 뜸 언급은 글이 이미 "비교 근거 확인 못함"으로 적어 그대로 둠.

## 51 피부 돌기 구분 — 수정 1건 (사실 오류 없음)

확인한 주장: 쥐젖 위치·원인·자가 제거 금지·제거 후 색소 변화, 티눈·굳은살 관리와 당뇨 등 주의, 점 형태·변화 신호, 검버섯(손발바닥 제외, 30~40대 시작, 전암 아님, 피부암과 혼동, 급격한 다발 시 드물게 내부 질환), 체리혈관종(40세 이후, 응고 시 검게, 결절성 흑색종과 유사), 물사마귀(폭스바이러스, 손발바닥 드묾, 경과), 사마귀와 티눈 출혈점 구분.
근거: https://www.nhs.uk/conditions/skin-tags/ / https://www.nhs.uk/conditions/corns-and-calluses/ / https://www.nhs.uk/conditions/moles/ / https://dermnetnz.org/topics/seborrhoeic-keratosis / https://dermnetnz.org/topics/cherry-angioma / https://dermnetnz.org/topics/viral-wart / https://www.cdc.gov/molluscum-contagiosum/about/index.html
결과: 맞음. CDC가 "더 오래 걸릴 수 있다"고 함께 적어 보충.
- 전: `보통 6~12개월에 저절로 사라짐`
- 후: `보통 6~12개월에 저절로 사라지나 더 오래 걸리기도 함`

## 52 족저근막염 — 수정 1건 (누락된 위험·근거 한계 보충)

확인한 주장: 90% 이상/10개월, 위험 요인(평발·높은 아치·종아리·딱딱한 바닥), 전형 증상, 단계 치료, 얼음 20분, 수술 12개월, 진료 신호(2주, 저림, 당뇨), 침 체계적 문헌고찰(3+1편, 4~8주, 장기 근거 부족), 건식 침 RCT 84명(최소 의미 차이 미달, 이상 반응 더 많음).
근거: https://www.orthoinfo.org/en/diseases--conditions/plantar-fasciitis-and-bone-spurs/ / https://www.nhs.uk/conditions/plantar-fasciitis/ / https://pubmed.ncbi.nlm.nih.gov/27526703/ / https://pubmed.ncbi.nlm.nih.gov/24700136/
결과: 수치와 연구 내용은 맞음. 다만 주사·체외충격파를 단순 선택지로만 적어, AAOS가 함께 적은 스테로이드 파열 위험과 충격파 결과 불일치가 빠져 있었음.
- 전: `몇 달이 지나도 나아지지 않으면 주사 치료나 체외충격파가 선택지로 논의되고, 수술은 대개`
- 후: `몇 달이 지나도 나아지지 않으면 주사 치료나 체외충격파가 선택지로 논의됩니다. 미국정형외과학회는 스테로이드 주사가 근막을 약하게 해 파열로 이어질 수 있어 제한하기도 하고, 체외충격파는 결과가 엇갈려 도움 여부가 분명하지 않다고 설명합니다. 수술은 대개`

## 53 위식도역류 — 수정 0건, 오류 없음

확인한 주장: 기전과 위험 요인·약물(NIDDK), 복부 비만·위 배출 저하·베개만 높이기의 한계·왼쪽 눕기·생활 조절 한계(질병관리청), ACG 2022 권고 등급(체중 감량만 강한 권고, 나머지 조건부·낮은 근거), 2~3시간, 8주 후 중단 시도, 무반응·재발 시 내시경, PPI 반동 위산은 건강인에서 보고·증상 증가의 강한 근거 부족, 메타분석 12편 1,235명과 저자 한계, 가슴 통증 응급 신호.
근거: https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/symptoms-causes / https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/treatment / https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=2057 / https://pmc.ncbi.nlm.nih.gov/articles/PMC8754510/ (ACG 전문) / https://pubmed.ncbi.nlm.nih.gov/28689187/ / https://www.nhs.uk/conditions/heart-attack/
결과: 맞음.

## 54 교통사고 후유증 — 수정 2건 (경과 과소 표현)

확인한 주장: 예후 인자·충돌 요인(Carroll 2008), 조기 다학제 평가(Pape 2009, RR 1.7~2.6, 관찰 설계), 추나 RCT 6편 결과 엇갈림(Moon 2013), 편타손상 전기침≈모의 전기침(Wong 2016), PTSD 관련 NIMH 설명, 뇌진탕 증상, 활동 유지(NHS), 109.
근거: https://pubmed.ncbi.nlm.nih.gov/18204405/ / https://pubmed.ncbi.nlm.nih.gov/19181548/ / https://pubmed.ncbi.nlm.nih.gov/22903444/ / https://pubmed.ncbi.nlm.nih.gov/26707074/ / https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd / https://www.cdc.gov/heads-up/about/index.html / https://www.cdc.gov/heads-up/signs-symptoms/index.html / https://www.nhs.uk/conditions/whiplash/ / https://www.korea.kr/news/policyNewsView.do?newsId=148954797
결과: 인용 내용은 맞음. 다만 글이 인용한 Carroll 2008의 "약 50%가 1년 뒤에도 목 통증 보고"가 빠진 채 "일부는 오래 불편"으로 적혀 있어 수정.
- 전: `많은 분이 시간이 지나며 나아지지만 일부는 오래 불편합니다.`
- 후: `많은 분이 시간이 지나며 나아지지만 오래 불편한 분도 적지 않습니다.`
- 전: `회복 양상은 사람마다 다르며 한 가지 원인으로 설명되지 않습니다. 목 편타손상 연구들을 평가한 2008년 종합 보고는 처음 통증이`
- 후: `회복 양상은 사람마다 다르며 한 가지 원인으로 설명되지 않습니다. 영국 NHS는 편타손상이 보통 2~3개월 안에 좋아진다고 안내하지만, 목 편타손상 연구들을 평가한 2008년 종합 보고는 약 절반이 1년 뒤에도 목 통증을 보고한다고 추정했습니다. 같은 보고는 처음 통증이`

원장 판단: 아래 '원장 판단 필요' 1·2번.

## 55 사고 후 증상 점검 — 수정 5건 (빠진 응급 신호 보충)

확인한 주장: 지연 발현·1~2일째 최고, CDC 위험 신호, 몸 충격으로도 뇌진탕 가능, 엑스레이 한계, 편타손상 수칙(진통제·활동·1주), 보호대 NHS·AAOS 입장 차이, 신경 손상 시 운전 금지, 등 통증 응급 신호.
근거: https://www.orthoinfo.org/en/diseases--conditions/neck-sprain/ / https://www.nhs.uk/conditions/whiplash/ / https://www.cdc.gov/heads-up/about/index.html / https://www.cdc.gov/heads-up/signs-symptoms/index.html / https://www.nhs.uk/conditions/back-pain/ / https://www.nhs.uk/conditions/head-injury-and-concussion/ (새로 추가)
결과: 기존 내용은 맞음. 글이 인용한 NHS 등 통증 페이지는 "자동차 사고 같은 큰 사고 뒤 시작된 등 통증"을 999·응급실 대상으로 적는데 빠져 있었고, NHS 머리 손상 페이지의 응급 신호도 빠져 있었음.
- 추가(머리): `빠른 속도의 충돌에서 머리를 부딪쳤다`, `귀나 코에서 맑은 액체가 나오거나 귀에서 피가 난다`
- 추가(목·허리): `큰 사고 직후 시작된 허리 통증`
- 전: `신경 손상이 의심되는 경우 직접 운전하지 말라고`
- 후: `신경 손상이 의심되거나 머리를 부딪친 경우 직접 운전하지 말라고`
- 전: `큰 사고였거나 먹는 약이 걱정된다면 의사와 상의합니다.`
- 후: `큰 사고였다면 의사와 상의하고, 혈액을 묽게 하는 약을 먹거나 그런 질환이 있는데 머리를 부딪쳤다면 증상이 없어도 서둘러 진료받습니다.`
- 참고 자료에 NHS Head injury and concussion 추가.

## 59 겨울 면역력 — 수정 0건, 오류 없음

확인한 주장: 겨울 증가 이유·독감 바이러스 공기 중 체류, 중간 정도 추위와 감염, 생활 방식과 면역 강화의 직접 증거 없음, 면역 세포 수, 비타민 D 메타분석(40편, 61,589명, OR 0.94, 95% CI 0.88~1.00), 저온과 코 점막 항바이러스 반응(세포·조직 수준), 수면 실험(164명, 5시간 미만·5~6시간 vs 7시간 초과, 관찰 설계), 질병관리청 수칙, NHS 진료 신호, 항생제, 피로 진료 시점.
근거: https://www.health.harvard.edu/staying-healthy/how-to-boost-your-immune-system / https://pubmed.ncbi.nlm.nih.gov/36494212/ / https://pubmed.ncbi.nlm.nih.gov/39993397/ / https://pubmed.ncbi.nlm.nih.gov/26118561/ / https://www.korea.kr/news/policyNewsView.do?newsId=148941777 / https://www.nhs.uk/conditions/common-cold/ / https://www.nhs.uk/symptoms/tiredness-and-fatigue/
결과: 맞음. 저자 표현보다 낮춰 적은 부분(저온 실험)은 그대로 둠.

## 60 아이 잦은 감기 — 수정 2건 (빠진 신호 보충)

확인한 주장: 연 5~8회(NHS), 최소 6회(AAP), 어린이집·6세 이후(스탠퍼드), 감기 1~2주, 원발성 면역결핍 경고 신호 10가지와 '2가지 이상', 호흡곤란 신호, 12주 미만 발열과 해열제 금지, 40도, 귀 통증 3일, 기침 3주, 삼키지 못함.
근거: https://www.nhs.uk/baby/health/colds-coughs-and-ear-infections-in-children/ / https://www.nhs.uk/conditions/common-cold/ / https://www.healthychildren.org/English/tips-tools/symptom-checker/Pages/symptomviewer.aspx?symptom=Colds+%280-12+Months%29 / https://www.stanfordchildrens.org/en/topic/default?id=common-cold-in-children-90-P02966 / https://res.cloudinary.com/info4pi/image/upload/v1724180661/JMF_10_Signs_Illustrated_080724_v2_a9b4bb218e.pdf / https://www.korea.kr/news/policyNewsView.do?newsId=148941777
결과: 맞음. AAP 페이지에 있는 신호 2개가 빠져 추가.
- 추가(119·응급실): `입술이나 얼굴이 파래진다`
- 추가(일반 진료): `열이 3일 넘게 이어진다`

미확인: `수건·컵·장난감 같이 쓰지 않기`는 연 자료에서 그 문구를 찾지 못함. 위험이 낮은 위생 수칙이라 그대로 둠.

## 62 스트레스·승모근 — 수정 4건 (사실 오류 1건 포함)

확인한 주장: Shahidi 2013(사무직 60명, 양쪽 위 승모근 증가, 전방 머리 자세는 집중에서 증가·스트레스 추가 시 변화 없음), Cochrane 운동(27편), Cochrane 침(단기, SMD -0.23, 장기 유지 안 됨, 이상 반응 경미), NHS 목 통증 원인·경과·진료 신호, 심장·뇌졸중·수막염 응급 신호.
근거: https://pubmed.ncbi.nlm.nih.gov/23800438/ / https://pubmed.ncbi.nlm.nih.gov/25629215/ / https://pubmed.ncbi.nlm.nih.gov/27145001/ / https://www.nhs.uk/symptoms/neck-pain-and-stiff-neck/ / https://www.nhs.uk/conditions/heart-attack/ / https://www.nhs.uk/conditions/stroke/symptoms/ / https://www.nhs.uk/conditions/meningitis/
결과: 사실 오류 1건. 글은 "근력·스트레칭 운동"을 묶어 근거가 낫다고 했으나, 인용한 Cochrane은 스트레칭 단독은 효과를 기대하기 어렵다고 결론지음. 또 "호흡법 직접 근거를 확인 못했다"고 적었으나 같은 Cochrane에 낮은 수준의 부정적 근거가 있음.
- 전: `만성 목 통증에는 근력·스트레칭 운동의 근거가 비교적 낫습니다.`
- 후: `만성 목 통증에는 근력 운동, 또는 근력과 스트레칭을 함께 하는 운동의 근거가 비교적 낫습니다.`
- 전: `**규칙적인 근력·스트레칭 운동**: 코크란 문헌고찰(27편)에서 목·어깨 주변 근력 강화 운동은 만성 목 통증에 중등도 근거를 보였습니다. 급성 목 통증에는 근거를 찾지 못했습니다.`
- 후: `**규칙적인 근력 운동**: 코크란 문헌고찰(27편)에서 목·어깨 주변 근력 강화 운동, 근력과 스트레칭을 함께 하는 운동은 만성 목 통증에 중등도 근거를 보였습니다. 스트레칭만 할 때는 효과를 기대하기 어렵다고 결론지었고, 급성 목 통증에는 근거를 찾지 못했습니다.`
- 전: `호흡법이 목 통증을 줄인다는 직접 근거는 이번에 확인하지 못했습니다.`
- 후: `같은 코크란 문헌고찰에서 호흡 운동은 목 통증과 기능을 바꾸지 못할 수 있다는 낮은 수준의 근거를 보였습니다.`
- 참고 자료 NHS 주소를 현재 주소로 교체(`/conditions/neck-pain/` → `/symptoms/neck-pain-and-stiff-neck/`).

미확인: APA 페이지(https://www.apa.org/topics/stress/body)는 직접 받기와 WebFetch 모두 본문이 비어 열지 못함. 글의 설명(근육 수축 후 이완, 긴장 지속 시 두통)은 WebSearch 요약과는 일치하나 원문 대조는 못 함.

## 63 지속 피로 — 수정 1건 (주소만, 오류 없음)

확인한 주장: NHS 진료 시점, 혈액검사 항목, 증상 표(갑상선 저하·항진, 빈혈, 당뇨, 수면무호흡, 우울), 수면무호흡 합병증, 우울 2주, 수면 6~9시간·2시간 전·화면 1시간 전, ME/CFS 3개월, 109 24시간.
근거: https://www.nhs.uk/symptoms/tiredness-and-fatigue/ / https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/ / https://www.nhs.uk/conditions/sleep-apnoea/ / https://www.nhs.uk/mental-health/conditions/depression-in-adults/symptoms/ / https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/ / https://www.129.go.kr/109
결과: 맞음. 참고 자료 주소만 현재 주소로 교체(`/conditions/tiredness-and-fatigue/` → `/symptoms/tiredness-and-fatigue/`).

## 64 비염·온습도 — 수정 3건 (확인 안 되는 주장 1건 포함)

확인한 주장: 창춘 연구(15,338건, 저온 RR 1.65, 95% CI 0.80~3.40, 저습도·저기압), 우시 연구(76,760건, 고온에서 증가, 습도 독립 관련 없음), EPA 60% 미만·30~50%, National Jewish 130°F·방진 커버·낮은 습도(30~40%), NHS 비알레르기 비염 유발 요인, 침 메타분석(38편 3,349명, 근거 질 낮음).
근거: https://doi.org/10.1038/s41598-025-16265-1 / https://doi.org/10.3389/fpubh.2026.1874064 / https://doi.org/10.3389/fmed.2026.1835311 (세 편 모두 Europe PMC API로 초록 확인) / https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home / https://www.nationaljewish.org/conditions/allergy/overview/allergens/dust-mite / https://www.nhs.uk/conditions/allergic-rhinitis/ / https://www.ccjm.org/content/79/4/285 (초록만)
결과: 수치는 모두 맞음. "봄가을에 겹쳐 나타나 오인"은 연 자료에서 확인되지 않아 초록에 있는 내용으로 낮춤. '주소 미확인'으로 남아 있던 참고 자료는 서지를 찾아 채움. National Jewish가 진드기 알레르기에 가습기 사용을 피하라고 안내해 보충.
- 전: `봄가을에 겹쳐 나타나 알레르기로 오인되기도 하는 것으로 알려져 있습니다.`
- 후: `증상이 비슷해 알레르기 비염과 구별하기 어려울 수 있습니다.`
- 전: `Cleveland Clinic Journal of Medicine — 비알레르기 비염 총설(주소 미확인)`
- 후: `Schroer B, Pien LC. Nonallergic rhinitis: Common problem, chronic symptoms. Cleve Clin J Med. 2012;79(4):285-293. https://www.ccjm.org/content/79/4/285`
- 추가(가습기 항목): `진드기 알레르기가 있다면 가습기가 진드기 번식을 도울 수 있어, 습도계로 필요한지부터 확인합니다.`

미확인: CCJM 본문(PDF 받기 실패, 초록만 읽음). `물을 매일 갈고 자주 세척`, `찬 공기를 맞을 때 마스크나 목도리`는 연 자료에서 찾지 못함. 위험이 낮은 실용 조언이라 그대로 둠.

## 65 코막힘 원인 — 수정 2건 (빠진 응급 신호 보충)

확인한 주장: 충혈 완화제 5일·6세 미만 금지, 증상별 원인, 항원 접촉 후 몇 분, 부비동염 4주·3주·반복, 폴립은 치료 없이 낫지 않음, 소금물 세척(끓여 식힌 물, 매번 새 용액, 하루 3회), 어린이 세척 주의, 한쪽 막힘·코피와 비강암, 침 메타분석.
근거: https://www.nhs.uk/conditions/allergic-rhinitis/ / https://www.nhs.uk/conditions/sinusitis-sinus-infection/ / https://www.nhs.uk/conditions/nasal-polyps/ / https://www.cancerresearchuk.org/about-cancer/nasal-sinus-cancer/symptoms / https://doi.org/10.3389/fmed.2026.1835311 / https://www.nice.org.uk/guidance/ng79/chapter/Recommendations (새로 추가)
결과: 기존 내용은 맞음. 부비동염의 눈·머리 합병증 신호가 빠져 NICE NG79의 병원 의뢰 기준으로 추가.
- 추가: `부비동염 증상과 함께 눈 주위가 붓거나 눈이 밀려 나온 듯 보일 때, 물체가 둘로 보이거나 시력이 떨어질 때, 이마가 붓고 심한 두통이 있을 때, 목이 뻣뻣하거나 의식이 흐려질 때는 합병증일 수 있으니 곧바로 응급 진료를 받습니다.`
- 참고 자료에 NICE NG79 추가.

---

## 원장 판단 필요 (고치지 않음)

1. **54번 Pape 2009**: 이른 다학제 평가 군의 3년 뒤 만성 목 통증 위험이 높았다는 연구를 "일찍 치료받으면 막을 수 있나요" 답의 중심 근거로 씁니다. 인용은 정확하고 글도 관찰 연구임을 밝힙니다. 다만 연구 저자는 보험사 소속이고 대상 개입은 한의 치료가 아닙니다. 사고 환자가 보는 글에 이 비중으로 둘지 결정이 필요합니다.
2. **54번 Wong 2016**: 글은 이 문헌에서 전기침 부분만 인용합니다. 같은 문헌의 결론은 "도수 가동술·교정·임상 마사지는 목 통증에 효과적"이고, 근거가 추나와 동일한 시술은 아니어서 추가하지 않았습니다. 넣을지 판단이 필요합니다.
3. **55번 '큰 사고 직후 시작된 허리 통증'**: NHS 문구대로 응급실 신호에 넣었습니다. '큰 사고'의 기준은 글에 없으니 실제 안내와 맞는지 확인이 필요합니다.
4. **실제 진료와 맞는지**: 49번(뜸), 52번(약침·추나), 60번(소아침·한약), 62번(근막 이완), 64·65번(침·뜸·한약)의 "검토할 수 있다" 서술이 실제 진료 범위와 맞는지 확인이 필요합니다.
5. **64번 가습기**: 국내에서는 가습기 살균제 사용 금지 안내를 넣을지 검토할 만합니다. 이번에 공식 자료를 열어 확인하지 않아 넣지 않았습니다.
