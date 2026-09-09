/**
 * 피부 병변 자가 감별 설문 데이터.
 * 원장 직원교육자료 「① 병변 구분」(2026.08) 기준.
 * 진단이 아니라 상담 전 참고용이며, 최종 확진은 원장 진료로 안내한다.
 */

export type SkinResultKey =
  | "mole"
  | "skin-tag"
  | "flat-wart"
  | "syringoma"
  | "milium"
  | "seborrheic"
  | "melasma"
  | "freckle"
  | "lentigo"
  | "pih"
  | "redness"
  | "acne";

export type SkinIconKey =
  | "raised"
  | "flat"
  | SkinResultKey
  | "warn-asymmetry"
  | "warn-size"
  | "warn-change";

export type SkinResult = {
  key: SkinResultKey;
  name: string;
  /** 카드 상단 한 줄 요약 */
  summary: string;
  /** 이런 특징이 있어요 */
  features: string[];
  /** 이렇게 구분해요 (교육자료의 구분 포인트) */
  distinguish: string;
  /** 결과 화면 제목에 쓰는 동사: "이렇게 제거합니다" 등 */
  action: "제거" | "치료" | "관리";
  /** 주 시술 (menu-items의 slug) */
  recommend: { slug: string; label: string; reason: string };
  /** 함께 진행하면 좋은 시술 */
  alsoRecommend?: { slug: string; label: string; reason: string };
  /** 추가 안내 */
  note?: string;
};

export const skinResults: Record<SkinResultKey, SkinResult> = {
  mole: {
    key: "mole",
    name: "점",
    summary: "경계가 또렷하고 수년째 그대로인 갈색~검정 병변",
    features: ["갈색~검정색", "경계가 또렷함", "수년간 변화 없음"],
    distinguish: "비대칭이거나 6mm를 넘거나 최근 변했다면 진료 확인이 먼저입니다.",
    action: "제거",
    recommend: {
      slug: "co2-removal",
      label: "CO2 레이저 제거",
      reason: "부위권은 개수 제한 없이 진행합니다.",
    },
  },
  "skin-tag": {
    key: "skin-tag",
    name: "쥐젖",
    summary: "목·겨드랑이·눈꺼풀에 생기는 말랑한 돌기",
    features: ["말랑하고 움직임", "통증 없음", "목·겨드랑이·눈꺼풀"],
    distinguish: "점과 달리 피부 위로 매달린 듯 솟아 있습니다.",
    action: "제거",
    recommend: {
      slug: "co2-removal",
      label: "CO2 레이저 제거",
      reason: "돌출 병변이라 절제합니다. 새로 생길 수 있습니다.",
    },
  },
  "flat-wart": {
    key: "flat-wart",
    name: "편평사마귀",
    summary: "살색 납작한 돌기가 여러 개 생기는 바이러스성 병변",
    features: ["살색 납작한 돌기", "이마·볼·손등", "긁은 자국 따라 번짐"],
    distinguish: "갑자기 개수가 늘었다면 편평사마귀일 가능성이 높습니다.",
    action: "제거",
    recommend: {
      slug: "co2-removal",
      label: "CO2 레이저 제거",
      reason: "질병 치료라 부가세가 면제됩니다.",
    },
    note: "전염됩니다. 손으로 뜯거나 긁지 마세요.",
  },
  syringoma: {
    key: "syringoma",
    name: "한관종",
    summary: "눈 밑에 단단하게 만져지는 살색 알갱이",
    features: ["눈 밑에 주로 생김", "1~3mm로 단단함", "여러 개가 모여 있음"],
    distinguish: "짜도 나오는 게 없고 살색입니다. 흰색이 비치면 비립종입니다.",
    action: "제거",
    recommend: {
      slug: "co2-removal",
      label: "CO2 레이저 제거",
      reason: "땀샘에서 생겨 재치료가 필요할 수 있습니다.",
    },
  },
  milium: {
    key: "milium",
    name: "비립종",
    summary: "눈가에 하얗게 비치는 1~2mm 알갱이",
    features: ["눈가에 주로 생김", "1~2mm로 작음", "속이 하얗게 비침"],
    distinguish: "살색인 한관종과 달리 흰색이 비칩니다.",
    action: "제거",
    recommend: {
      slug: "co2-removal",
      label: "CO2 레이저 제거",
      reason: "작은 구멍을 내어 내용물을 빼냅니다.",
    },
    note: "직접 짜면 흉터가 남습니다.",
  },
  seborrheic: {
    key: "seborrheic",
    name: "검버섯",
    summary: "표면이 거칠고 도톰하게 만져지는 갈색 병변",
    features: ["갈색을 띰", "표면이 거칠고 도톰함", "40대 이후 증가"],
    distinguish: "만져지면 검버섯, 평평하고 매끈하면 흑자입니다.",
    action: "제거",
    recommend: {
      slug: "seborrheic-keratosis",
      label: "검버섯 제거 (크기별)",
      reason: "크기를 측정해 크기별로 안내드립니다.",
    },
    alsoRecommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "함께 있는 흑자·잡티는 듀얼토닝으로 정리합니다.",
    },
  },
  melasma: {
    key: "melasma",
    name: "기미",
    summary: "광대·볼에 좌우 대칭으로 퍼진 흐릿한 갈색 얼룩",
    features: ["광대·볼에 생김", "경계가 흐리고 대칭", "30~50대 여성에 흔함"],
    distinguish: "강하게 치료하면 오히려 진해질 수 있습니다.",
    action: "치료",
    recommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "낮은 출력으로 나눠 진행합니다. 10회 이상 권장.",
    },
    note: "한 번에 없애기보다 낮춰서 유지하는 치료입니다.",
  },
  freckle: {
    key: "freckle",
    name: "주근깨",
    summary: "어릴 때부터 있던 1~3mm 작은 점 수십 개",
    features: ["1~3mm로 작음", "수십 개가 흩어짐", "여름에 진해짐"],
    distinguish: "계절에 따라 진해졌다 옅어집니다.",
    action: "치료",
    recommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "제네시스로 데운 뒤 1064nm로 색소를 부숩니다.",
    },
    alsoRecommend: {
      slug: "laser-toning",
      label: "레이저토닝",
      reason: "톤 정돈만 원하시면 레이저토닝도 가능합니다.",
    },
  },
  lentigo: {
    key: "lentigo",
    name: "흑자 · 잡티",
    summary: "경계가 뚜렷하고 평평한 3~10mm 반점",
    features: ["3~10mm 크기", "경계가 뚜렷함", "평평하고 매끈함"],
    distinguish: "검버섯과 달리 만져지지 않습니다.",
    action: "치료",
    recommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "10회권 4회차에 타겟 조사로 함께 정리합니다.",
    },
  },
  pih: {
    key: "pih",
    name: "염증 후 색소침착",
    summary: "여드름·상처 자리에 그 모양대로 남은 갈색 자국",
    features: ["여드름·상처 자리", "같은 모양으로 남음", "서서히 옅어짐"],
    distinguish: "원인이 되는 여드름 관리가 함께 필요합니다.",
    action: "치료",
    recommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "남은 색소를 낮은 출력으로 나눠 정리합니다.",
    },
    alsoRecommend: {
      slug: "lala-peel",
      label: "라라필",
      reason: "각질·피지를 정리해 색소가 빠질 환경을 만듭니다.",
    },
  },
  redness: {
    key: "redness",
    name: "홍조 · 실핏줄",
    summary: "붉은기와 실핏줄이 도드라지는 혈관성 문제",
    features: ["얼굴이 쉽게 붉어짐", "실핏줄이 비침", "열감이 함께 느껴짐"],
    distinguish: "혈관 문제라 진피를 데우는 제네시스가 함께 들어가야 합니다.",
    action: "치료",
    recommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "제네시스로 진피를 데운 뒤 토닝까지 함께 진행합니다.",
    },
    alsoRecommend: {
      slug: "genesis",
      label: "제네시스",
      reason: "홍조·모공만 집중한다면 제네시스 단독도 가능합니다.",
    },
  },
  acne: {
    key: "acne",
    name: "여드름 · 모공",
    summary: "염증성 여드름이 반복되거나 피지·모공이 고민인 상태",
    features: ["염증이 반복됨", "모공·블랙헤드", "당기는데 기름짐"],
    distinguish: "피지선을 관리해야 재발이 줄어듭니다.",
    action: "관리",
    recommend: {
      slug: "gold-ptt",
      label: "골드 PTT",
      reason: "금나노로 피지선만 선택적으로 가열합니다.",
    },
    note: "보통 2~3회차부터 효과가 나타납니다.",
  },
};

export type SkinOption = {
  label: string;
  hint?: string;
  /** 선택지에 함께 보여줄 일러스트 */
  icon?: SkinIconKey;
  /** 다음 질문 id 또는 결과 */
  next?: string;
  result?: SkinResultKey;
};

export type SkinQuestion = {
  id: string;
  title: string;
  description?: string;
  options: SkinOption[];
};

export const skinQuestions: Record<string, SkinQuestion> = {
  start: {
    id: "start",
    title: "어떤 고민인가요?",
    description: "가장 가까운 것을 하나 골라 주세요.",
    options: [
      { label: "도톰하게 튀어나왔어요", hint: "점 · 쥐젖 · 검버섯", icon: "raised", next: "raised" },
      { label: "평평한 색소예요", hint: "기미 · 주근깨 · 잡티", icon: "flat", next: "flat" },
      { label: "붉은기·실핏줄", hint: "홍조 · 혈관 확장", icon: "redness", result: "redness" },
      { label: "여드름·모공", hint: "염증성 여드름 · 피지", icon: "acne", result: "acne" },
    ],
  },
  raised: {
    id: "raised",
    title: "어떤 모양인가요?",
    description: "가장 비슷한 것을 골라 주세요.",
    options: [
      { label: "진하고 경계가 뚜렷해요", hint: "수년째 그대로 · 점", icon: "mole", next: "mole-warning" },
      { label: "말랑한 돌기", hint: "쥐젖 · 목 · 겨드랑이", icon: "skin-tag", result: "skin-tag" },
      { label: "납작한 돌기가 여러 개", hint: "편평사마귀 · 이마 · 볼", icon: "flat-wart", result: "flat-wart" },
      { label: "눈 밑 단단한 알갱이", hint: "한관종 · 살색 1~3mm", icon: "syringoma", result: "syringoma" },
      { label: "눈가 하얀 알갱이", hint: "비립종 · 1~2mm", icon: "milium", result: "milium" },
      { label: "갈색이고 거칠어요", hint: "검버섯 · 40대 이후", icon: "seborrheic", result: "seborrheic" },
    ],
  },
  flat: {
    id: "flat",
    title: "어떤 색소인가요?",
    description: "가장 비슷한 것을 골라 주세요.",
    options: [
      { label: "양쪽 볼에 흐린 얼룩", hint: "기미 · 좌우 대칭", icon: "melasma", result: "melasma" },
      { label: "작은 점이 수십 개", hint: "주근깨 · 어릴 때부터", icon: "freckle", result: "freckle" },
      { label: "뚜렷하고 평평한 반점", hint: "흑자 · 3~10mm", icon: "lentigo", result: "lentigo" },
      { label: "여드름 자국이 남았어요", hint: "염증 후 색소침착", icon: "pih", result: "pih" },
    ],
  },
  "mole-warning": {
    id: "mole-warning",
    title: "이런 변화가 있나요?",
    description: "제거 전에 반드시 확인이 필요한 신호입니다.",
    options: [
      { label: "해당 없어요", hint: "모양·크기가 그대로", icon: "mole", result: "mole" },
      { label: "모양이 비대칭이에요", hint: "진료 확인 필요", icon: "warn-asymmetry", next: "mole-alert" },
      { label: "6mm보다 커요", hint: "연필 지우개 크기 이상", icon: "warn-size", next: "mole-alert" },
      { label: "최근 변했어요", hint: "색이나 크기가", icon: "warn-change", next: "mole-alert" },
    ],
  },
};

/** 점의 위험 신호에 해당할 때 보여줄 안내 */
export const moleAlert = {
  title: "제거보다 진료 확인이 먼저입니다",
  body: [
    "비대칭·6mm 초과·최근 변화 중 하나라도 있으면 바로 제거하지 않고 원장이 먼저 확인합니다.",
    "대부분은 문제가 없습니다. 전화나 상담 신청으로 편하게 문의해 주세요.",
  ],
};
