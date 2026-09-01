/**
 * 시술메뉴 카탈로그 데이터 — 환자용 「상담 안내」(2026.08) 최종본 기준.
 * 부가세 포함 · 병변 상태에 따라 비용이 달라질 수 있음.
 */

export type MenuOption = {
  label: string;
  /** 없으면 "상담 후 안내"로 표시 */
  price?: number;
  original?: number;
  note?: string;
};

export type MenuItem = {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  eventLabel: string;
  subtitle: string;
  hashtags: string[];
  image: string;
  priceFrom: number;
  options: MenuOption[];
  included?: string[];
  schedule?: string;
  recovery?: string;
  description?: string;
  notes?: string[];
};

export type MenuCategory = {
  key: string;
  label: string;
  concerns: string[];
  preCare: string[];
  postCare: string[];
};

export const formatWon = (value: number) => `${value.toLocaleString("ko-KR")}원`;

export const menuCategories: MenuCategory[] = [
  {
    key: "toning",
    label: "미백/색소/기미/홍조",
    concerns: [
      "광대·볼에 좌우로 퍼진 갈색 얼룩",
      "햇볕 받고 생긴 경계 뚜렷한 반점",
      "여드름 자국이 갈색으로 남음",
      "화장해도 얼굴이 칙칙함",
    ],
    preCare: [
      "시술 당일에는 강한 햇볕·각질제거·레티놀 사용을 피해 주세요",
      "임신·수유 중이거나 여드름약을 6개월 내 복용하셨다면 미리 알려 주세요",
      "2주 내 다른 곳 필링·레이저 이력도 말씀해 주세요",
    ],
    postCare: [
      "당일 세안·화장 가능합니다. 2~3일간 사우나·음주는 피해 주세요",
      "자외선차단제를 3시간마다 덧발라 주세요 (최소 3주)",
      "물집이 생기거나 통증이 계속되면 바로 연락 주세요",
    ],
  },
  {
    key: "co2",
    label: "점/사마귀/검버섯/쥐젖",
    concerns: [
      "얼굴·목의 점, 쥐젖을 한 번에 정리하고 싶은 경우",
      "살색 납작 돌기(편평사마귀)가 여러 개 생긴 경우",
      "40대 이후 거칠고 도톰한 검버섯이 늘어난 경우",
    ],
    preCare: [
      "임신 중에는 시술이 어렵습니다",
      "피를 묽게 하는 약을 드시고 있다면 미리 알려 주세요",
      "흉터가 잘 남는 체질이면 말씀해 주세요",
    ],
    postCare: [
      "딱지는 7~10일이면 저절로 떨어집니다. 떼지 말고 연고를 발라 주세요 (하루 2~3회)",
      "딱지 떨어진 자리는 3개월간 자외선차단제를 발라 주세요",
      "1개월 내 남은 병변은 1회 무료로 다듬어 드립니다 (이후 반값)",
    ],
  },
  {
    key: "pore",
    label: "여드름/모공/스킨케어",
    concerns: [
      "모공이 넓고 블랙헤드 반복",
      "염증성 여드름이 계속 올라옴",
      "당기는데 기름도 많음",
      "레이저 후 붉은기가 오래감",
    ],
    preCare: [
      "골드 PTT 전 1주일은 각질제거·레티놀을 쉬어 주세요",
      "여드름약을 6개월 내 복용하셨다면 미리 알려 주세요",
      "심박조율기나 금속 삽입물이 있으면 말씀해 주세요",
    ],
    postCare: [
      "라라필 후 일어나는 각질은 뜯지 말고 보습만 해 주세요 (1주일간 각질제거 금지)",
      "골드 PTT 후 1~2주는 트러블이 잠시 늘 수 있습니다. 효과는 2~3회차부터 나타납니다",
      "물방울초음파는 시술 직후 바로 화장하셔도 됩니다",
    ],
  },
  {
    key: "booster",
    label: "스킨부스터",
    concerns: [
      "겉이 푸석하고 속이 마르는 느낌",
      "잔주름·탄력 저하가 고민",
      "여드름 흉터·모공·홍조",
    ],
    preCare: [
      "마취크림 30분 포함 총 40~60분 걸립니다",
      "임신·수유 중에는 시술이 어렵습니다",
      "연어 알레르기(미주안)·피 묽게 하는 약 복용은 미리 알려 주세요",
    ],
    postCare: [
      "붉은기·바늘 자국은 1~2일, 부풀음은 1~3일이면 가라앉습니다. 문지르지 마세요",
      "3일간 사우나·음주는 피해 주세요",
      "효과는 보통 2~3회차부터 느껴집니다",
    ],
  },
  {
    key: "program",
    label: "12주 프로그램",
    concerns: [
      "기미·잡티·피부톤을 체계적으로 관리하고 싶은 경우",
      "모공·속건조·피부결을 꾸준히 개선하고 싶은 경우",
    ],
    preCare: [
      "주 1회, 같은 요일·같은 시간으로 예약해 두시면 좋습니다",
      "스킨부스터는 3·6·9·12회차에 함께 진행합니다",
    ],
    postCare: [
      "6회차에 원장이 사진을 비교해 중간 평가를 해 드립니다",
      "유효기간은 6개월이며, 임신·질병 등 사유가 있으면 연장해 드립니다",
      "프로그램 종료 후에는 월 1회 유지 관리를 권해 드립니다",
    ],
  },
  {
    key: "consult",
    label: "상담 후 결정하기",
    concerns: [
      "어떤 시술이 맞는지 잘 모르겠는 경우",
      "여러 고민이 겹쳐 있어 우선순위를 정하고 싶은 경우",
      "예산 안에서 가장 효과적인 방법을 찾고 싶은 경우",
    ],
    preCare: [
      "현재 가장 신경 쓰이는 부위와 피부 상태를 먼저 말씀해 주세요",
      "복용 중인 약과 최근 1개월 내 다른 시술 이력을 알려 주세요",
    ],
    postCare: [
      "상담 후 바로 결정하지 않으셔도 됩니다",
      "원장이 병변을 확인한 뒤 방법과 비용을 안내드립니다",
    ],
  },
  {
    key: "tattoo",
    label: "문신/반영구 제거",
    concerns: [
      "눈썹 반영구가 푸르거나 붉게 변함",
      "아이라인이 번지거나 내려옴",
      "새로 하기 전 기존 색 빼기",
      "동전 크기 이하 레터링·소형 문신",
    ],
    preCare: [
      "임신·수유 중에는 시술이 어렵습니다",
      "여드름약을 6개월 내 복용하셨다면 미리 알려 주세요",
      "흉터가 잘 남는 체질이면 말씀해 주세요",
    ],
    postCare: [
      "딱지는 떼지 말고, 떨어질 때까지 연고를 발라 주세요",
      "4주간 자외선차단제를 발라 주세요",
      "다음 회차는 4주 이후에 진행합니다",
    ],
  },
];

const cat = Object.fromEntries(menuCategories.map((c) => [c.key, c.label]));

export const menuItems: MenuItem[] = [
  // ── 미백/색소 ──
  {
    slug: "dual-toning",
    category: "toning",
    categoryLabel: cat.toning,
    title: "[기미에 안정적] 듀얼토닝",
    eventLabel: "10회권 4회차에 흑자 제거 서비스",
    subtitle: "제네시스로 데운 뒤 1064nm로 색소를 부숩니다 · 기미·홍조·모공·흑자",
    hashtags: ["#기미", "#잡티", "#홍조", "#흑자"],
    image: "/assets/menu/qmaster-full.webp",
    priceFrom: 89000,
    options: [
      { label: "1회", price: 89000 },
      { label: "10회", price: 590000, original: 890000, note: "4회차 흑자 제거 서비스" },
      { label: "20회", price: 1090000, original: 1780000 },
    ],
    included: ["매회 물방울초음파 6분 + 팩 마무리", "부가세 포함"],
    schedule: "10회 · 1~2주 간격",
    recovery: "당일 화장 가능",
    description:
      "기미는 한 번에 없애기보다, 낮춰서 유지하는 치료입니다. 낮은 출력으로 여러 번 나누고, 5회 전후에 원장이 사진 비교로 중간 평가를 해 드립니다.",
  },
  {
    slug: "laser-toning",
    category: "toning",
    categoryLabel: cat.toning,
    title: "[톤 정돈] 레이저토닝",
    eventLabel: "10회 25% 할인",
    subtitle: "1064nm 단독 · 톤 정돈 · 옅은 잡티",
    hashtags: ["#잡티", "#칙칙한톤"],
    image: "/assets/menu/qmaster-handpiece.webp",
    priceFrom: 65000,
    options: [
      { label: "1회", price: 65000 },
      { label: "10회", price: 490000, original: 650000 },
    ],
    included: ["매회 물방울초음파 6분 + 팩 마무리", "부가세 포함"],
    schedule: "10회 · 1~2주 간격",
    recovery: "당일 일상 가능",
  },
  {
    slug: "genesis",
    category: "toning",
    categoryLabel: cat.toning,
    title: "[홍조·모공] 제네시스",
    eventLabel: "10회 25% 할인",
    subtitle: "진피를 데워 콜라겐 생성 · 홍조·모공·잔주름",
    hashtags: ["#홍조", "#모공", "#잔주름"],
    image: "/assets/menu/qmaster-full.webp",
    priceFrom: 69000,
    options: [
      { label: "1회", price: 69000 },
      { label: "10회", price: 520000, original: 690000 },
    ],
    included: ["매회 물방울초음파 6분 + 팩 마무리", "부가세 포함"],
    schedule: "10회 · 1~2주 간격",
    recovery: "당일 일상 가능",
  },
  // ── CO2 제거 ──
  {
    slug: "co2-removal",
    category: "co2",
    categoryLabel: cat.co2,
    title: "점·쥐젖·사마귀·한관종 제거",
    eventLabel: "부위권 개수 무제한 · 리터치 1회 무료",
    subtitle: "CO2 레이저 · 부위권은 개수 제한 없이 제거합니다 · 2회차부터 반값",
    hashtags: ["#점", "#쥐젖", "#편평사마귀", "#한관종"],
    image: "/assets/menu/coscan.webp",
    priceFrom: 220000,
    options: [
      { label: "얼굴 전체", price: 220000, note: "개수 무제한" },
      { label: "얼굴 + 목", price: 330000, note: "개수 무제한" },
      { label: "겨드랑이", price: 220000 },
      { label: "가슴~골반", price: 440000 },
      { label: "등~허리", price: 440000 },
    ],
    included: ["리터치 1회 무료 (1개월 내)", "2회차부터 첫 시술 반값", "부가세 포함"],
    schedule: "1회성 · 리터치 1개월 내",
    recovery: "딱지 7~10일",
    description:
      "마취크림 30분 → 제거 → 연고 도포, 총 1시간 정도 소요됩니다. 사마귀는 질병 치료라 부가세가 면제됩니다 (점·쥐젖·검버섯은 과세). 모양이 불규칙하거나 최근 커진 점은 검사를 먼저 권해 드립니다.",
  },
  {
    slug: "seborrheic-keratosis",
    category: "co2",
    categoryLabel: cat.co2,
    title: "검버섯 제거 (크기별)",
    eventLabel: "리터치 1회 무료 · 2회차~ 반값",
    subtitle: "갈색의 거칠고 도톰한 병변을 크기별로 제거합니다",
    hashtags: ["#검버섯"],
    image: "/assets/menu/coscan.webp",
    priceFrom: 13000,
    options: [
      { label: "5mm 이하 · 개당", price: 13000 },
      { label: "5mm~1cm · 개당", price: 29000 },
      { label: "1cm 이상 · 개당", price: 49000 },
      { label: "얼굴 전체", price: 330000 },
    ],
    included: ["리터치 1회 무료 (1개월 내)", "부가세 포함"],
    schedule: "1회성 · 리터치 1개월 내",
    recovery: "딱지 7~10일",
  },
  // ── 여드름/모공/스킨케어 ──
  {
    slug: "gold-ptt",
    category: "pore",
    categoryLabel: cat.pore,
    title: "[약 없이 여드름 치료] 골드 PTT",
    eventLabel: "3회 14% 할인",
    subtitle: "금나노로 피지선만 가열 · 여드름·피지 감소",
    hashtags: ["#여드름", "#피지", "#모공"],
    image: "/assets/menu/qmaster-handpiece.webp",
    priceFrom: 190000,
    options: [
      { label: "1회", price: 190000 },
      { label: "3회", price: 490000, original: 570000 },
    ],
    included: ["부가세 포함"],
    schedule: "3회 · 2~4주 간격",
    recovery: "1~2일 붉은기",
  },
  {
    slug: "lala-peel",
    category: "pore",
    categoryLabel: cat.pore,
    title: "[저자극 필링] 라라필",
    eventLabel: "+물방울 결합 시 추가 할인",
    subtitle: "각질·피지·블랙헤드 정리",
    hashtags: ["#각질", "#피지", "#블랙헤드"],
    image: "/assets/people/people-2.jpg",
    priceFrom: 65000,
    options: [
      { label: "1회", price: 65000 },
      { label: "3회", price: 180000, original: 195000 },
      { label: "+물방울 1회", price: 89000 },
      { label: "+물방울 3회", price: 249000, original: 267000 },
    ],
    included: ["부가세 포함"],
    schedule: "4주 간격",
    recovery: "2~3일 당김",
  },
  {
    slug: "aqua-ultrasound",
    category: "pore",
    categoryLabel: cat.pore,
    title: "[진정·속건조] 물방울초음파",
    eventLabel: "10회 17% 할인",
    subtitle: "열 없는 초음파 · 진정·속건조 · 단독 12분",
    hashtags: ["#속건조", "#진정", "#홍조"],
    image: "/assets/menu/ulkin.webp",
    priceFrom: 35000,
    options: [
      { label: "1회 (12분)", price: 35000 },
      { label: "5회", price: 175000 },
      { label: "10회", price: 290000, original: 350000 },
    ],
    included: ["토닝 후 진정 6분은 기본 포함", "부가세 포함"],
    schedule: "10회 · 주 1회",
    recovery: "회복기간 없음 · 직후 화장 가능",
  },
  {
    slug: "cryo",
    category: "pore",
    categoryLabel: cat.pore,
    title: "[시술 후 진정] 크라이오",
    eventLabel: "레이저·필링과 병행",
    subtitle: "열감·붓기·홍조를 가라앉히는 냉각 진정",
    hashtags: ["#진정", "#홍조"],
    image: "/assets/menu/icool.webp",
    priceFrom: 29000,
    options: [{ label: "1회", price: 29000, note: "추가 결제 · 제한 없음" }],
    included: ["부가세 포함"],
    schedule: "레이저·필링 직후",
    recovery: "회복기간 없음",
  },
  // ── 스킨부스터 ──
  {
    slug: "ecla-fe",
    category: "booster",
    categoryLabel: cat.booster,
    title: "[주사 아님·MTS 도포] 에끌라페 · 연아",
    eventLabel: "10회 21% 할인",
    subtitle: "미세바늘로 앰플 흡수 · S 미백 M 물광 V 탄력 P 재생 R 진정",
    hashtags: ["#첫부스터", "#물광", "#재생"],
    image: "/assets/menu/crystalmeso.webp",
    priceFrom: 89000,
    options: [
      { label: "1회", price: 89000 },
      { label: "4회", price: 290000, original: 356000 },
      { label: "10회", price: 700000, original: 890000 },
    ],
    included: ["앰플 5종 중 상태에 맞게 선택", "부가세 포함"],
    schedule: "4회 · 2주 간격",
    recovery: "붉은기 1~2일",
    description: "겉이 푸석하면 에끌라페를 권해 드립니다. 주사가 부담스러운 첫 부스터로 좋습니다.",
  },
  {
    slug: "mijuan",
    category: "booster",
    categoryLabel: cat.booster,
    title: "[PN 연어 주사] 미주안",
    eventLabel: "10회 24% 할인",
    subtitle: "연어 PN 재생 성분을 진피에 주사 · 속건조·탄력·잔주름·장벽 회복",
    hashtags: ["#속건조", "#잔주름", "#탄력"],
    image: "/assets/menu/crystalmeso.webp",
    priceFrom: 165000,
    options: [
      { label: "1회", price: 165000 },
      { label: "10회", price: 1250000, original: 1650000 },
    ],
    included: ["부가세 포함"],
    schedule: "4회 · 3~4주 간격",
    recovery: "부풀음 1~3일 · 멍 가능",
    description: "속이 마르고 주름·탄력이 고민이면 미주안을 권해 드립니다.",
  },
  {
    slug: "cell-exosome",
    category: "booster",
    categoryLabel: cat.booster,
    title: "[흉터·모공 재생] 셀엑소좀",
    eventLabel: "3회 11% 할인",
    subtitle: "프락셀·MTS 채널로 흡수 · 흉터·모공·레이저 후 회복",
    hashtags: ["#여드름흉터", "#모공", "#홍조"],
    image: "/assets/menu/crystalmeso.webp",
    priceFrom: 220000,
    options: [
      { label: "1회 (6cc)", price: 220000 },
      { label: "3회", price: 590000, original: 660000 },
    ],
    included: ["부가세 포함"],
    schedule: "3회 · 2~4주 간격",
    recovery: "붉은기 1~3일",
  },
  {
    slug: "booster-mix",
    category: "booster",
    categoryLabel: cat.booster,
    title: "[단품 합계보다 저렴] 스킨부스터 믹스",
    eventLabel: "최대 19% 할인",
    subtitle: "고민에 맞게 부스터를 조합한 패키지",
    hashtags: ["#패키지", "#물광", "#재생"],
    image: "/assets/menu/crystalmeso.webp",
    priceFrom: 349000,
    options: [
      { label: "미주안 1 + 에끌라페 3", price: 349000, original: 432000 },
      { label: "셀엑소좀 1 + 미주안 3", price: 590000, original: 715000 },
    ],
    included: ["부가세 포함"],
    schedule: "구성별 안내",
    recovery: "구성별 안내",
  },
  // ── 12주 프로그램 ──
  {
    slug: "whitening-12w",
    category: "program",
    categoryLabel: cat.program,
    title: "[주 1회 · 12주] 12주 미백 프로그램",
    eventLabel: "단품보다 최대 38% 절감 · 4회차 흑자 서비스",
    subtitle: "듀얼토닝 10 + 라라필 2 · 기미·잡티·피부톤",
    hashtags: ["#미백", "#기미", "#주1회"],
    image: "/assets/menu/qmaster-full.webp",
    priceFrom: 650000,
    options: [
      { label: "베이직 (기본 시술만)", price: 650000, original: 1020000 },
      { label: "스탠다드 (+에끌라페 4회)", price: 850000, original: 1376000 },
      { label: "프리미엄 (+미주안 4회)", price: 1150000, original: 1680000 },
    ],
    included: ["4회차 흑자 제거 서비스", "토닝 회차는 물방울 6분 + 팩 마무리", "부가세 포함"],
    schedule: "주 1회 · 12주 12회",
    recovery: "당일 화장 가능",
    description:
      "부스터는 3·6·9·12회차에 병행하고, 6회차에 원장이 사진 비교로 중간 평가를 해 드립니다.",
  },
  {
    slug: "regen-12w",
    category: "program",
    categoryLabel: cat.program,
    title: "[주 1회 · 12주] 12주 재생·탄력 프로그램",
    eventLabel: "단품보다 최대 27% 절감",
    subtitle: "라라필 3 + 듀얼토닝 4 + 물방울 5 · 모공·속건조·피부결",
    hashtags: ["#재생탄력", "#모공", "#주1회"],
    image: "/assets/menu/ulkin.webp",
    priceFrom: 590000,
    options: [
      { label: "베이직 (기본 시술만)", price: 590000, original: 726000 },
      { label: "스탠다드 (+에끌라페 4회)", price: 790000, original: 1082000 },
      { label: "프리미엄 (+미주안 4회)", price: 1090000, original: 1386000 },
    ],
    included: ["토닝 회차는 물방울 6분 + 팩 마무리", "부가세 포함"],
    schedule: "주 1회 · 12주 12회",
    recovery: "당일 화장 가능",
  },
  // ── 문신/반영구 ──
  {
    slug: "semi-permanent-removal",
    category: "tattoo",
    categoryLabel: cat.tattoo,
    title: "눈썹·아이라인 반영구 제거",
    eventLabel: "5회 기준",
    subtitle: "레이저가 색소 입자를 부수고 몸이 수주에 걸쳐 배출합니다",
    hashtags: ["#눈썹문신", "#아이라인"],
    image: "/assets/menu/qmaster-full.webp",
    priceFrom: 290000,
    options: [
      { label: "눈썹 전체 (5회)", price: 290000 },
      { label: "아이라인 전체 (5회)", price: 290000 },
    ],
    included: ["농도에 따라 3~8회", "부가세 포함"],
    schedule: "4주 이상 간격 · 5회 기준",
    recovery: "붓기·딱지 1~2일",
    description:
      "완전히 없애기보다 '안 보일 만큼 옅게' 만드는 시술입니다. 붉은색·살색 잉크는 미리 테스트 조사를 해 드립니다.",
  },
  {
    slug: "tattoo-removal",
    category: "tattoo",
    categoryLabel: cat.tattoo,
    title: "소형 문신 제거 (동전 크기)",
    eventLabel: "5회 220,000원",
    subtitle: "레터링·소형 문신 · 동전 초과 크기는 상담 후 견적",
    hashtags: ["#소형문신", "#레터링"],
    image: "/assets/menu/qmaster-handpiece.webp",
    priceFrom: 220000,
    options: [
      { label: "5회", price: 220000 },
      { label: "추가 회당", price: 59000 },
    ],
    included: ["부가세 포함"],
    schedule: "4주 이상 간격 · 5회 기준",
    recovery: "붓기·딱지 1~2일",
  },
];

menuItems.push({
  slug: "consult-first",
  category: "consult",
  categoryLabel: cat.consult,
  title: "자세한 1:1 맞춤 상담이 필요할 땐",
  eventLabel: "상담 후 결정하기",
  subtitle: "어떤 시술이 맞는지 모르셔도 괜찮습니다. 원장이 병변을 확인하고 방법과 비용을 안내드립니다.",
  hashtags: ["#맞춤상담", "#상담후결정"],
  image: "/assets/interior/interior-2.jpg",
  priceFrom: 0,
  options: [
    { label: "1:1 맞춤 상담", note: "병변 확인 후 방법·비용 안내" },
    { label: "전화 상담 031-8057-0750", note: "365일 상담 가능" },
  ],
  included: ["진단·시술 결정은 원장이 합니다"],
  schedule: "365일 진료",
  recovery: "—",
  description:
    "결과는 범위로, 회차는 이유와 함께, 회복 기간은 날짜로 설명드립니다. 상담 후 바로 결정하지 않으셔도 됩니다.",
});

export const getMenuItem = (slug: string) => menuItems.find((item) => item.slug === slug);

export const getMenuCategory = (key: string) =>
  menuCategories.find((category) => category.key === key);
