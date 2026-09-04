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

export type SkinResult = {
  key: SkinResultKey;
  name: string;
  /** 카드 상단 한 줄 요약 */
  summary: string;
  /** 이런 특징이 있어요 */
  features: string[];
  /** 이렇게 구분해요 (교육자료의 구분 포인트) */
  distinguish: string;
  /** 권장 시술 (menu-items의 slug) */
  recommend: { slug: string; label: string; reason: string };
  /** 추가 안내 */
  note?: string;
};

export const skinResults: Record<SkinResultKey, SkinResult> = {
  mole: {
    key: "mole",
    name: "점",
    summary: "갈색~검정색으로 경계가 뚜렷하고 수년간 모양이 그대로인 병변입니다.",
    features: ["갈색에서 검정색을 띱니다", "경계가 또렷합니다", "오랜 기간 크기·모양 변화가 거의 없습니다"],
    distinguish: "비대칭이거나 경계가 불규칙하고, 6mm를 넘거나 최근 변화가 있다면 제거보다 진료 확인이 먼저입니다.",
    recommend: {
      slug: "co2-removal",
      label: "점·쥐젖·사마귀·한관종 제거",
      reason: "CO2 레이저로 제거하며, 부위권은 개수 제한 없이 진행합니다.",
    },
  },
  "skin-tag": {
    key: "skin-tag",
    name: "쥐젖 (연성섬유종)",
    summary: "목·겨드랑이·눈꺼풀에 잘 생기는 말랑한 돌기입니다.",
    features: ["만지면 말랑하고 움직입니다", "통증이 없습니다", "목·겨드랑이·눈꺼풀에 잘 생깁니다"],
    distinguish: "점과 달리 피부 위로 매달린 듯 솟아 있고 부드럽게 움직입니다.",
    recommend: {
      slug: "co2-removal",
      label: "점·쥐젖·사마귀·한관종 제거",
      reason: "돌출 병변이라 CO2 레이저로 절제합니다. 새로 생길 수 있습니다.",
    },
  },
  "flat-wart": {
    key: "flat-wart",
    name: "편평사마귀",
    summary: "살색의 납작한 돌기가 여러 개 생기는 바이러스성 병변입니다.",
    features: ["살색의 납작한 돌기가 여러 개입니다", "이마·볼·손등에 잘 생깁니다", "긁은 자국을 따라 줄지어 늘어납니다"],
    distinguish: "갑자기 개수가 늘었다면 편평사마귀일 가능성이 높습니다. 전염되므로 빨리 확인하는 것이 좋습니다.",
    recommend: {
      slug: "co2-removal",
      label: "점·쥐젖·사마귀·한관종 제거",
      reason: "질병 치료로 분류되어 부가세가 면제됩니다. 면역 상태에 따라 재발할 수 있습니다.",
    },
    note: "전염될 수 있어 손으로 뜯거나 긁지 마시고 빠르게 진료받는 것을 권해 드립니다.",
  },
  syringoma: {
    key: "syringoma",
    name: "한관종",
    summary: "눈 밑에 살색으로 단단하게 만져지는 1~3mm 알갱이가 여러 개 생깁니다.",
    features: ["눈 밑에 주로 생깁니다", "1~3mm 크기로 단단합니다", "여러 개가 모여 있습니다"],
    distinguish: "짜도 아무것도 나오지 않고 피부색을 띱니다. 흰색이 비치는 비립종과 구분됩니다.",
    recommend: {
      slug: "co2-removal",
      label: "점·쥐젖·사마귀·한관종 제거",
      reason: "땀샘에서 유래한 병변이라 재치료가 필요할 수 있습니다.",
    },
  },
  milium: {
    key: "milium",
    name: "비립종",
    summary: "눈가에 하얀 알갱이처럼 비쳐 보이는 1~2mm 병변입니다.",
    features: ["눈가에 주로 생깁니다", "1~2mm로 작습니다", "속에 흰색이 비쳐 보입니다"],
    distinguish: "피부색인 한관종과 달리 흰색이 비칩니다. 직접 짜면 흉터가 남을 수 있습니다.",
    recommend: {
      slug: "co2-removal",
      label: "점·쥐젖·사마귀·한관종 제거",
      reason: "작은 구멍을 내어 내용물을 제거합니다.",
    },
    note: "직접 짜지 마시고 진료를 통해 제거하시는 것을 권해 드립니다.",
  },
  seborrheic: {
    key: "seborrheic",
    name: "검버섯 (지루각화증)",
    summary: "갈색이면서 거칠고 도톰하게 만져지는, 40대 이후 늘어나는 병변입니다.",
    features: ["갈색을 띱니다", "표면이 거칠고 도톰합니다", "40대 이후 개수가 늘어납니다"],
    distinguish: "만졌을 때 올라와 있으면 검버섯, 평평하고 매끈하면 흑자입니다.",
    recommend: {
      slug: "seborrheic-keratosis",
      label: "검버섯 제거 (크기별)",
      reason: "크기를 측정해 크기별로 안내드리며, 표면을 부드럽게 박리합니다.",
    },
  },
  melasma: {
    key: "melasma",
    name: "기미",
    summary: "광대·볼에 좌우 대칭으로 퍼진, 경계가 흐린 갈색 얼룩입니다.",
    features: ["광대와 볼에 주로 생깁니다", "경계가 흐리고 좌우 대칭입니다", "30~50대 여성에게 흔합니다"],
    distinguish: "임신·피임약·햇볕에 악화됩니다. 강하게 치료하면 오히려 진해질 수 있습니다.",
    recommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "낮은 출력으로 여러 번 나누어 진행하는 것이 기미에 안정적입니다. 10회 이상 권장합니다.",
    },
    note: "기미는 한 번에 없애기보다 낮춰서 유지하는 치료입니다. 5회 전후에 원장이 사진 비교로 중간 평가를 해 드립니다.",
  },
  freckle: {
    key: "freckle",
    name: "주근깨",
    summary: "1~3mm의 작은 점이 수십 개, 어릴 때부터 있어온 색소입니다.",
    features: ["1~3mm로 작습니다", "수십 개가 흩어져 있습니다", "어릴 때부터 있었습니다"],
    distinguish: "여름에 진해지고 겨울에 옅어지는 계절 변화가 있습니다.",
    recommend: {
      slug: "laser-toning",
      label: "레이저토닝",
      reason: "1064nm 토닝으로 전반적인 톤을 정돈하며 옅은 색소를 관리합니다.",
    },
  },
  lentigo: {
    key: "lentigo",
    name: "흑자 · 잡티",
    summary: "3~10mm 크기로 경계가 뚜렷하고 평평하며 매끈한 반점입니다.",
    features: ["3~10mm 크기입니다", "경계가 뚜렷합니다", "평평하고 매끈합니다", "40대 이후 늘어납니다"],
    distinguish: "검버섯과 달리 만져지지 않고 평평하며, 기미와 달리 경계가 뚜렷합니다.",
    recommend: {
      slug: "dual-toning",
      label: "듀얼토닝",
      reason: "10회권 진행 시 4회차에 흑자를 타겟 조사로 함께 정리해 드립니다.",
    },
  },
  pih: {
    key: "pih",
    name: "염증 후 색소침착",
    summary: "여드름이나 상처가 있던 자리에 그 모양 그대로 남은 갈색 자국입니다.",
    features: ["여드름·상처가 있던 자리입니다", "병변과 같은 모양으로 남아 있습니다", "시간이 지나면 서서히 옅어집니다"],
    distinguish: "새로 생긴 색소가 아니라 염증이 지나간 자리라, 원인이 되는 여드름 관리가 함께 필요합니다.",
    recommend: {
      slug: "lala-peel",
      label: "라라필",
      reason: "각질과 피지를 정리해 색소가 빠지는 환경을 만들고, 토닝과 함께 진행하면 도움이 됩니다.",
    },
    note: "원인이 되는 여드름을 먼저 관리하는 것이 중요합니다.",
  },
  redness: {
    key: "redness",
    name: "홍조 · 실핏줄",
    summary: "붉은기와 실핏줄이 도드라져 보이는 혈관성 문제입니다.",
    features: ["얼굴이 쉽게 붉어집니다", "실핏줄이 비쳐 보입니다", "열감이 함께 느껴지기도 합니다"],
    distinguish: "색소가 아니라 혈관 문제라 1064nm 토닝 단독으로는 효과가 크지 않습니다.",
    recommend: {
      slug: "genesis",
      label: "제네시스",
      reason: "진피를 데워 홍조와 붉은기, 모공을 함께 관리합니다. 물방울초음파 진정을 병행합니다.",
    },
  },
  acne: {
    key: "acne",
    name: "여드름 · 모공",
    summary: "염증성 여드름이 반복되거나 피지·모공이 고민인 상태입니다.",
    features: ["염증성 여드름이 계속 올라옵니다", "모공이 넓고 블랙헤드가 반복됩니다", "당기는데 기름도 많습니다"],
    distinguish: "피지선 자체를 관리해야 재발이 줄어듭니다.",
    recommend: {
      slug: "gold-ptt",
      label: "골드 PTT",
      reason: "금나노로 피지선만 선택적으로 가열해 약 없이 여드름과 피지를 관리합니다.",
    },
    note: "효과는 보통 2~3회차부터 나타나며, 시술 후 1~2주는 트러블이 잠시 늘 수 있습니다.",
  },
};

export type SkinOption = {
  label: string;
  hint?: string;
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
      { label: "도톰하게 튀어나왔어요", hint: "점 · 쥐젖 · 사마귀 · 검버섯", next: "raised" },
      { label: "평평한 색소예요", hint: "기미 · 주근깨 · 잡티", next: "flat" },
      { label: "붉은기·실핏줄이 있어요", hint: "홍조 · 혈관 확장", result: "redness" },
      { label: "여드름·모공이 고민이에요", hint: "염증성 여드름 · 피지", result: "acne" },
    ],
  },
  raised: {
    id: "raised",
    title: "어떤 모양인가요?",
    description: "가장 비슷한 것을 골라 주세요.",
    options: [
      { label: "갈색·검정에 경계가 뚜렷해요", hint: "수년째 그대로 · 점", next: "mole-warning" },
      { label: "말랑한 돌기가 있어요", hint: "쥐젖 · 목 · 겨드랑이 · 눈꺼풀", result: "skin-tag" },
      { label: "살색 납작한 돌기가 여러 개예요", hint: "편평사마귀 · 이마 · 볼 · 손등", result: "flat-wart" },
      { label: "눈 밑에 단단한 알갱이가 있어요", hint: "한관종 · 살색 1~3mm", result: "syringoma" },
      { label: "눈가에 하얀 알갱이가 비쳐요", hint: "비립종 · 1~2mm", result: "milium" },
      { label: "갈색이고 표면이 거칠어요", hint: "검버섯 · 40대 이후 증가", result: "seborrheic" },
    ],
  },
  flat: {
    id: "flat",
    title: "어떤 색소인가요?",
    description: "가장 비슷한 것을 골라 주세요.",
    options: [
      { label: "광대·볼에 대칭인 흐린 얼룩", hint: "기미 · 경계가 흐릿함", result: "melasma" },
      { label: "작은 점이 수십 개 흩어져 있어요", hint: "주근깨 · 어릴 때부터 · 1~3mm", result: "freckle" },
      { label: "경계가 뚜렷한 평평한 반점", hint: "흑자 · 잡티 · 3~10mm", result: "lentigo" },
      { label: "여드름 자국이 그대로 남았어요", hint: "염증 후 색소침착", result: "pih" },
    ],
  },
  "mole-warning": {
    id: "mole-warning",
    title: "이런 변화가 있나요?",
    description: "제거 전에 반드시 확인이 필요한 신호입니다.",
    options: [
      { label: "해당되는 것이 없어요", hint: "모양·크기가 그대로예요", result: "mole" },
      { label: "비대칭이거나 경계가 불규칙해요", hint: "진료 확인 필요", next: "mole-alert" },
      { label: "6mm보다 커요", hint: "연필 지우개 크기 이상", next: "mole-alert" },
      { label: "최근 색·크기가 변했어요", hint: "진료 확인 필요", next: "mole-alert" },
    ],
  },
};

/** 점의 위험 신호에 해당할 때 보여줄 안내 */
export const moleAlert = {
  title: "제거보다 진료 확인이 먼저입니다",
  body: [
    "모양이 비대칭이거나 경계가 불규칙한 경우, 6mm를 넘는 경우, 최근에 색이나 크기가 변한 경우에는 바로 제거하지 않고 원장이 병변을 먼저 확인합니다.",
    "대부분은 문제가 없지만, 확인이 필요한 경우 검사를 먼저 권해 드립니다. 전화나 상담 신청으로 편하게 문의해 주세요.",
  ],
};
