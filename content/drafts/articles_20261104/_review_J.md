# 독립 교차 검토 기록 J (20261104)

담당: 92, 93, 96, 97, 99, 101, 104, 108, 109, 110, 111, 112. 12편 모두 검토했고 미검토 글은 없습니다.
`_verify_*.md`는 읽지 않았습니다. 수정 뒤 `check_articles.py` 12편 모두 통과. 판정을 보류로 바꾼 글은 없습니다.

## 검토 방법과 한계

- 중간에 WebSearch·WebFetch가 사용 한도로 막혀, 공개 페이지는 curl, 논문 초록은 Europe PMC API로 받았습니다. 대부분의 대조가 이 경로입니다. 한도가 풀린 뒤 일부는 WebSearch·WebFetch로 확인했습니다.
- 대부분 초록과 공개 안내문 기준입니다. 전문까지 본 것은 항목에 '전문'으로 적었습니다.
- 근거 URL은 열어 본 것만 적었습니다. 검색 결과 요약으로만 본 것은 근거로 삼지 않았습니다.

## 글별 기록

### 92 근육·신경 통증 — 수정 2곳(안전 신호 1건)

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 2016 등급: 가능성(병력+분포)·개연성(진찰)·확정(검사), 설문지는 등급 체계 밖 | https://pmc.ncbi.nlm.nih.gov/articles/PMC4949003/ (전문) | 맞음 |
| 근육통 원인(독감, 스타틴, 전해질, 루푸스, 다발근염), 초기 냉찜질 뒤 온찜질, 사흘 넘으면 진료 | https://medlineplus.gov/ency/article/003178.htm | 맞음 |
| 고열·목 뻣뻣함, 근력 약화, 소변 감소를 '빠른 진료'로 분류 | 같은 쪽: 모두 911 항목 | 수정 |
| 양쪽 다리, 회음부 감각, 대소변 변화 응급 | https://www.nhs.uk/conditions/sciatica/ | 맞음 |
| 한쪽 힘 빠짐 응급 | https://www.nhs.uk/symptoms/headaches/ | 맞음 |
| 말초신경병증 증상·원인, 낫지 않는 발 상처 | https://www.nhs.uk/conditions/peripheral-neuropathy/ | 맞음 |

수정 전: `- **빠른 진료:** 근력이 점점 떨어진다, 고열과 심한 목 뻣뻣함이 있다, 소변이 현저히 줄었다`
수정 후: `- **빠른 진료:** 근력이 점점 떨어진다`, 그리고 119 항목 끝에 `고열과 심한 목 뻣뻣함, 몸 일부를 움직이기 어려운 근력 약화, 근육통과 함께 소변이 현저히 줄어듦` 추가.

### 93 브리스톨 척도 — 수정 1건, 참고 자료 1건 추가

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 66명, 방사선 비투과 표지자, 센나·로페라미드, 변화 상관 -0.65, 척도 반응성 시험 | Europe PMC PMID 9299672 초록 | 맞음 |
| 3~4번 이상적, 1997 Lewis·Heaton | https://www.bladderandbowel.org/bowel/bowel-resources/bristol-stool-form-scale/ | 맞음 |
| 변비 자가 관리(섬유, 수분, 술, 걷기, 발판) | https://www.nhs.uk/conditions/constipation/ | 맞음 |
| 출혈 단계(119, 당일, 검사) | https://www.nhs.uk/conditions/bowel-cancer/symptoms/ | 맞음 |
| 설사 2주 지나면 평가 | https://www.nhs.uk/conditions/diarrhoea-and-vomiting/ : 7일 넘으면 111 | 수정 |

수정 전: `2주가 지나도 나아지지 않으면 의료적 평가를 받습니다.`
수정 후: `일주일이 지나도 나아지지 않으면 의료적 평가를 받습니다.`

### 96 단백질 지렛대 가설 — 사실 오류 2건 수정, 참고 자료 정비

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| Simpson 2005, 수학 모형, 약 15% | Europe PMC PMID 15836464 초록 | 맞음 |
| 1961~2000년 14%→12.5%, 14% 수치 | https://www.cambridge.org/core/product/6CF9634EFA3B0D771E8EFBF58C74583F/core-reader (2차 인용) | 수정 |
| Gosby 2011: 22명, 나흘씩 3회, +12%, 25%에서 변화 없음, 불완전 | PMC3192127 초록 | 맞음 |
| Gosby 2014: 38편, 음의 관계 | PMID 24588967 초록 | 맞음 |
| Hall 2019: 약 500kcal, 탄수화물·지방 증가, 단백질 차이 없음 | PMC7946062 초록 | 맞음 |
| Leidy 2015: 준수가 주된 원인 | PMID 25926512 초록 | 맞음 |
| 국내 단백질 적정 비율 7~20%(2020) | https://koreascience.kr/article/JAKO202210242857035.page?lang=en (2020 기준은 맞음), https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&act=view&list_no=1488441 (2025 개정, 보도자료 요약 줄 확인), https://www.ddaily.co.kr/page/view/2025123111291718936 (10~20% 수치 확인) | 수정(옛 기준) |
| KDIGO 2024: 진행 위험 시 고단백 회피 | https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf (Practice Point 3.3.1.1, >1.3 g/kg/일) | 맞음, 주소 보충 |

수정 전: `단백질 이외의 에너지가 약 14% 늘었다는 집단 수준의 연관입니다.`
수정 후: `단백질 섭취량을 그대로 유지하려면 탄수화물과 지방 섭취가 약 14% 늘어야 한다는 집단 수준의 계산입니다.`

수정 전: `한국인 영양소 섭취기준(2020)의 단백질 에너지 적정 비율은 7~20%입니다.`
수정 후: `2025 한국인 영양소 섭취기준의 단백질 에너지 적정 비율은 10~20%입니다(2020년 기준 7~20%에서 하한을 올렸습니다).`

수정 전(FAQ): `국내 기준 범위는 에너지의 7~20%입니다.`
수정 후: `국내 기준 범위는 에너지의 10~20%입니다(2025 기준).`

미확인: 14% 수치를 Simpson 2005 원문에서 직접 보지 못했습니다(초록에 없음, 2차 인용으로 확인). '이미 이 범위 안에 있는 분이 많으므로'는 국내 섭취 통계와 대조하지 못했습니다.

### 97 설정점·안착점 — 오류 없음

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 두 모형의 설명과 한계, 대안 모형, 1980년대 이후 비만 | PMC3209643 초록 | 맞음 |
| 조절의 비대칭 | PMC2990627 초록 | 맞음 |
| 초기 감량, 정체, 회복 | PMC5764193 초록 | 맞음 |
| 153명, 52주, 약 100kcal/kg, 계산 추정, 소비 감소보다 큼 | PMC5108589 초록 | 맞음 |
| 14명, 6년, 체격 변화로 설명 안 되는 낮은 기초대사 | PMC4989512 초록 | 맞음 |
| 소규모 교차 시험, 지방 비율 감소, 배고픔 증가 | PMC2951287 초록(10명) | 맞음 |

### 99 야간 종아리 경련 — 안전 신호 1건 수정

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 대처법, 진통제 시점, 관련 요인, 스트레칭 방법, 10분 기준 | https://www.nhs.uk/conditions/leg-cramps/ | 맞음 |
| 전해질 연관 근거 부족, 일상 혈액검사 불필요, 동반 질환, 약물 표, 퀴닌 비권고, 효과 없던 스트레칭 시험 | https://www.aafp.org/pubs/afp/issues/2012/0815/p350.html | 맞음 |
| 코크란 2020: 고령층 효과 가능성 낮음, 임신 엇갈림 | PMC8094171 초록 | 맞음 |
| Hallegraeff 2012: 빈도·통증 감소 | PMID 22341378 초록 | 맞음 |
| 혈전 증상, 숨참·가슴 통증 응급 | https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/ : 의심 시 긴급 진료 | 맞음, 긴급도 수정 |

수정 전: `심부정맥혈전증을 확인해야 합니다.`
수정 후: `심부정맥혈전증일 수 있어 당일 진료로 확인합니다.`

### 101 승모근 통증 — 수정 3건, 참고 자료 2건 추가

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| Andersen 2008: 10주 근력운동 효과, 자전거는 일시적 | PMID 18163419 초록: 여성 48명 | 수정(대상 명시) |
| 코크란 2006: 일부 가짜 치료·대기군 대비 단기, 중간 수준 | PMID 16856065 초록 | 내용 맞음, 이후 경과 누락 |
| 코크란 개정판과 철회 | PMID 27145001(pub4) 초록, https://pmc.ncbi.nlm.nih.gov/articles/PMC6734124/ (pub5 철회 고지) | 수정 |
| Liu 2015: 단기·중기 효과, 다른 치료가 중기에 우세 | PMID 25576642 초록 | 맞음 |
| NHS 자가 관리, 몇 주, 저림·찬 팔 | https://www.nhs.uk/conditions/neck-pain/ | 맞음 |
| 고열과 목 뻣뻣함 | https://medlineplus.gov/ency/article/003178.htm : 911 항목 | 수정 |

수정 전: `단조로운 업무를 하는 직장인의 목 근육 통증을 다룬 무작위 시험(2008년)에서는`
수정 후: `단조로운 업무를 하는 여성 직장인 48명의 목 근육 통증을 다룬 무작위 시험(2008년)에서는`

수정 전: `치료 직후·단기 통증 감소에 중간 수준 근거가 있다고 보았습니다.`
수정 후: 같은 문장 뒤에 `2016년 개정판도 비슷한 결론이었지만, 제기된 의견을 검토한다는 이유로 이후 철회되어 확정된 근거로 보기는 어렵습니다.` 추가.

수정 전: `- 사고 뒤 생긴 통증, 고열과 함께 목이 뻣뻣한 경우`
수정 후: `- 사고 뒤 생긴 통증` / `- 고열과 함께 목이 심하게 뻣뻣할 때: 지체하지 말고 응급 진료를 받습니다`

미확인: 철회 상태는 PMC 사본의 고지로 확인했고, 코크란 라이브러리의 현재 상태는 직접 보지 못했습니다. Europe PMC에서 2017년 이후 재발행본은 찾지 못했습니다.

### 104 목 이물감 — 안전 신호 2건 수정, 참고 자료 1건 추가

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 정의, 원인 후보, 전형적이면 검사 불필요 | https://www.merckmanuals.com/en-ca/professional/gastrointestinal-disorders/symptoms-of-gastrointestinal-disorders/globus-sensation | 맞음 |
| 위험 신호 표 | 같은 쪽: 갑작스러운 시작, 목 통증, 음식 역류, 근력 약화가 표에 없음 | 수정(추가) |
| 3주 넘는 쉰 목소리, 한쪽 증상, 40세 이상 흡연 | https://www.rightdecisions.scot.nhs.uk/borders-ref-help-toolkit/ear-nose-and-throat/throat/globus-fossit/ | 맞음 |
| 역류 증상·위험 요인 | https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/symptoms-causes | 맞음 |
| 위내시경 고려 상황 | https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/diagnosis | 맞음 |
| 토혈 대응 | https://www.nhs.uk/symptoms/vomiting-blood/ : 커피 찌꺼기 모양도 토혈 | 수정 |

추가한 표 줄: `| 갑자기 시작됨, 목이나 인후의 통증, 음식물이 되올라옴, 근력 약화 | 삼킴 기능이나 구조 이상 가능성 |`

수정 전: `가슴 통증과 식은땀이 있거나, 피를 토하면 응급 상황이므로`
수정 후: `가슴 통증과 식은땀이 있거나, 피나 커피 찌꺼기 같은 것을 토하면 응급 상황이므로`

미확인: '침을 삼킬 때 더 느껴지다가 음식을 먹으면 괜찮다', '후비루나 만성 기침을 함께 호소'는 참고 자료에 없습니다. 흔한 임상 설명이고 강한 주장이 아니어서 두었습니다.

### 108 접종 후 반응 — 안전 신호 1건 수정, 참고 자료 1건 추가

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 국소반응 2~3일, 인플루엔자 15~20%·1% 미만·6~12시간, 코로나19, HPV 80%·20~30분, 우연한 반응, 심근염·심낭염 인과성(화이자·모더나) | https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuLv=1&menuCd=151 (최종검토일 2026-01-05) | 맞음 |
| 아나필락시스 24시간, 의료인 신고 의무, 인과관계 불분명해도 신고 | https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuLv=1&menuCd=152 | 맞음 |
| 진료비·일시보상금, 보건소 접수, 1339 | https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuLv=1&menuCd=153 | 맞음 |
| 아나필락시스 증상, 쉰 목소리, 입으로 주지 않기 | https://medlineplus.gov/ency/article/000844.htm | 맞음 |
| 심근염 호발, 어린아이 증상, 평가, 대부분 호전 | https://archive.cdc.gov/www_cdc_gov/vaccines/covid-19/clinical-considerations/myocarditis.html | 맞음 |
| 3시간 이상 울음, 멍·출혈, 길랭-바레 | https://www.cdc.gov/vaccines/basics/possible-side-effects.html | 맞음 |
| 질병이 백신보다 위험 | https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-vaccine-safety | 맞음 |
| 귀 지압 147명, 근거 제한 | PMC9650252 초록 | 맞음 |
| 경련을 일반 진료 항목에 둠 | https://www.nhs.uk/conditions/febrile-seizures/ : 처음이거나 5분 넘으면 999 | 수정 |

수정 전: `- 경련이 있다, 아이가 3시간 이상 달래지지 않고 운다`
수정 후: `- 경련이 있었다(처음이거나 5분 넘게 이어지면 바로 119에 연락합니다)` / `- 아이가 3시간 이상 달래지지 않고 운다`

참고: NHS 기준은 소아 열성 경련용입니다. 성인 경련에도 같은 문장이 적용되는데, 안전 쪽 표현이라 그대로 두었습니다.

### 109 해독 식단 — 오류 없음

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| RCT 없음, 소수 연구의 결함 | PMID 25522674 초록 | 맞음 |
| 34→15→8명, 21일, 대졸 여성 중심, 체중 만족도 차이 없음 | PMID 31536033 초록 | 맞음 |
| 극저열량 결과, 복귀 시 증가 | PMID 29124370 초록 | 맞음 |
| FDA·FTC 단속, 주스, 옥살산, 변비약, 굶기, 단식 결론 없음, 위험군 | https://www.nccih.nih.gov/health/detoxes-and-cleanses-what-you-need-to-know | 맞음 |

사실 문제는 아니지만, FAQ `정체기를 넘기려고 넣어도 되나요?`는 무엇을 넣는다는 뜻인지 불분명합니다. 담당 범위가 사실 검토여서 고치지 않았습니다.

### 110 코 분무제 — 안전 신호 1건 수정, 참고 자료 1건 추가

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 스테로이드 2주 이상, 분사 순서, 바깥벽 방향, 코피·천공 | https://medlineplus.gov/ency/patientinstructions/000404.htm | 맞음 |
| 혈관수축제 5일, 6세 미만, 식염수 세척(끓여 식힌 물, 매번 새로) | https://www.nhs.uk/conditions/allergic-rhinitis/treatment/ | 맞음 |
| 3일, 주의 질환, MAO 억제제 | https://my.clevelandclinic.org/health/drugs/18562-oxymetazoline-nasal-spray | 맞음 |
| 스테로이드 습관성 없음, 시즌 전 시작 | https://health.clevelandclinic.org/nasal-spray-addiction | 맞음 |
| 단일한 최적 자세 없음 | https://www.aafp.org/pubs/afp/issues/2016/0801/p185.html | 맞음 |
| 임신 중 혈관수축제 회피 | https://www.ashfordstpeters.nhs.uk/leaflets/3751-maternity-leaflet-medicines-in-pregnancy | 맞음 |
| 눈 주위 붓기·시야 변화·심한 두통을 일반 진찰로 안내 | https://medlineplus.gov/ency/article/000647.htm : 합병증에 안와 주위 감염, 심한 두통·시야 변화 시 연락 | 수정 |

수정 후 추가 문장: `눈 주위 붓기나 시야 변화, 진통제로 가라앉지 않는 심한 두통은 미루지 말고 당일 진료를 받습니다.`

참고: MedlinePlus는 '진료진에게 연락'으로 적었고, '당일'은 검토자가 합병증 위험을 고려해 정한 표현입니다. 국내 허가 제품의 사용 기간·연령은 대조하지 않았습니다. 글은 설명서를 따르라고 안내합니다.

### 111 점 제거 시기 — 본문 수정 없음, 참고 자료 1건 추가

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| 전후 4주 차단, SPF 50, 여름 휴지 고려, 최근 노출·그을림 위험 | Europe PMC PMC12968952 전문(PMC 직접 접속은 차단) | 맞음 |
| '장벽 회복되는 대로'와 1일째의 불일치, 3~6개월, SPF 30, 2~3시간 | https://pmc.ncbi.nlm.nih.gov/articles/PMC12471997/ (전문) | 맞음 |
| 28명 67병변, 오후 1~5시 OR 8.10, 대조군 55.3% | PMID 39265567 초록 | 맞음 |
| 7~10일, 물에 잠기는 곳 피하기 | https://www.aad.org/public/diseases/a-z/skin-biopsy-wound-care | 맞음 |
| 변한 점, 통증·가려움, 염증·출혈, 새 병변 | https://www.nhs.uk/conditions/moles/ | 맞음 |
| 손발톱 밑 어두운 부분을 NHS 항목으로 설명 | moles 쪽에는 없음, https://www.nhs.uk/conditions/melanoma-skin-cancer/symptoms/ 에 있음 | 맞음, 출처 추가 |
| 정오 전후 4시간, 지수 3 이상 | https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index | 맞음 |

미확인: Kang 2024를 '국내' 연구로 적은 부분은 초록에서 소속을 확인하지 못했습니다. Lee 2025의 '대부분 낮은 수준의 근거'는 근거 수준 표 전체를 대조하지 않았습니다.

### 112 매선·약침 — 오류 없음

| 확인한 주장 | 근거 | 결과 |
|---|---|---|
| Sung 2020: 38명, 평가자 눈가림, 8주 차이, 마지막 평가 차이 없음(p=.141), 기능 차이 없음, 주 1회 8주, 3개월 흡수·180~210일 인용 | https://pmc.ncbi.nlm.nih.gov/articles/PMC7717797/ (전문) | 맞음 |
| Kim 2019: 106명, 단일기관, 5·9주 개선 | PMID 30523703 초록 | 맞음 |
| Zhao 2025: 28편, 2,120명, 결론 못 냄 | PMC12727354 초록 | 맞음 |
| Huang 2021: 61편, 11%, 중증 5건 장선, 후유증 없음 | PMID 33893986 초록 | 맞음 |
| Kim 2016: 8만여 명, 감염·기흉·봉독 과민반응 | PMC4863820 초록 | 맞음 |
| 2018: 52건, 세 약침 호전, 군 간 차이 없음 | https://koreascience.kr/article/JAKO201814446220823.page?lang=ko | 맞음 |
| 2013: 30명, 두 군 호전, 차이 없음 | https://www.koreascience.or.kr/article/JAKO201307740916471.page | 맞음 |
| 2007: 40명, 홀짝 배정, 식염수 비교, 변화량 차이 | https://koreascience.kr/article/JAKO200727742023439.pdf (전문) | 맞음 |
| 2024 주제범위 고찰: 13편 중 증례 12, RCT 1 | https://doi.org/10.18325/jkmr.2024.34.4.91 | 맞음 |

## 원장 판단 필요(고치지 않음)

1. 111: 레이저 점 제거를 한의원 홈페이지에서 안내하는 부분이 의료법상 한의사 면허 범위 문제와 닿을 수 있습니다. 법적 판단은 하지 않았고 관련 판례·유권해석도 조사하지 않았습니다.
2. 111: 글 끝의 가격표 안내와 '피부과 진료로 먼저 확인'이 실제 진료 흐름과 맞는지 확인이 필요합니다.
3. 110: 스테로이드·혈관수축제 분무제의 사용법과 기간을 한의원 글에서 안내하는 것이 적절한지 판단이 필요합니다.
4. 112: '자주 쓰이는 어혈 계열 약침(중성어혈약침)'이 실제 진료와 맞는지, 근거가 약하다는 서술을 원내 시술 안내와 함께 둘 수 있는지 판단이 필요합니다.

## 미확인 모음

- 96: 14% 수치의 Simpson 2005 원문 확인, '이미 범위 안에 있는 분이 많다'
- 101: 코크란 라이브러리에서 본 철회 상태
- 104: 침 삼킬 때 심해지는 양상, 후비루 동반
- 110: 국내 허가 제품 기준
- 111: Kang 2024 '국내' 여부, Lee 2025 근거 수준 표 전체
