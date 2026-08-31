/**
 * 피부 미용 가격표 — 환자용 「상담 안내」(2026.08) 최종본 기준.
 * 부가세 포함 금액 · 병변 상태에 따라 비용이 달라질 수 있음.
 */

export type BeautyPriceItem = {
  name: string;
  note?: string;
  prices: { label: string; price: string; original?: string }[];
};

export type BeautyMenuCategory = {
  key: string;
  title: string;
  subtitle: string;
  hashtags: string[];
  items: BeautyPriceItem[];
  footnotes?: string[];
};

export const beautyMenuUpdated = "2026.08";

export const beautyMenuCategories: BeautyMenuCategory[] = [
  {
    key: "toning",
    title: "색소 · 미백",
    subtitle: "기미 · 잡티 · 주근깨 · 흑자",
    hashtags: ["#기미", "#잡티", "#주근깨", "#흑자", "#칙칙한톤"],
    items: [
      {
        name: "듀얼토닝",
        note: "10회권은 4회차에 흑자 제거 서비스",
        prices: [
          { label: "1회", price: "89,000원" },
          { label: "10회", price: "590,000원", original: "890,000원" },
          { label: "20회", price: "1,090,000원", original: "1,780,000원" },
        ],
      },
      {
        name: "레이저토닝",
        prices: [
          { label: "1회", price: "65,000원" },
          { label: "10회", price: "490,000원", original: "650,000원" },
        ],
      },
      {
        name: "제네시스",
        prices: [
          { label: "1회", price: "69,000원" },
          { label: "10회", price: "520,000원", original: "690,000원" },
        ],
      },
    ],
    footnotes: ["매회 물방울초음파 6분 + 팩 마무리 포함"],
  },
  {
    key: "co2",
    title: "점 · 쥐젖 · 사마귀 · 검버섯",
    subtitle: "CO2 레이저 · 부위권 개수 무제한 · 리터치 1회 무료",
    hashtags: ["#점", "#쥐젖", "#편평사마귀", "#한관종", "#검버섯"],
    items: [
      {
        name: "점 · 쥐젖 · 사마귀 · 한관종 (부위별)",
        note: "개수 무제한 · 리터치 1회 무료 · 2회차부터 반값",
        prices: [
          { label: "얼굴 전체", price: "220,000원" },
          { label: "얼굴 + 목", price: "330,000원" },
          { label: "겨드랑이", price: "220,000원" },
          { label: "가슴~골반", price: "440,000원" },
          { label: "등~허리", price: "440,000원" },
        ],
      },
      {
        name: "검버섯 (크기별)",
        prices: [
          { label: "5mm 이하 · 개당", price: "13,000원" },
          { label: "5mm~1cm · 개당", price: "29,000원" },
          { label: "1cm 이상 · 개당", price: "49,000원" },
          { label: "얼굴 전체", price: "330,000원" },
        ],
      },
    ],
    footnotes: ["사마귀는 질병 치료로 부가세 면제 (점·쥐젖·검버섯은 과세)"],
  },
  {
    key: "pore",
    title: "모공 · 여드름 · 속건조",
    subtitle: "골드 PTT · 라라필 · 물방울초음파",
    hashtags: ["#모공", "#여드름", "#피지", "#속건조", "#홍조"],
    items: [
      {
        name: "골드 PTT",
        prices: [
          { label: "1회", price: "190,000원" },
          { label: "3회", price: "490,000원", original: "570,000원" },
        ],
      },
      {
        name: "라라필",
        prices: [
          { label: "1회", price: "65,000원" },
          { label: "3회", price: "180,000원", original: "195,000원" },
          { label: "+물방울 1회", price: "89,000원" },
          { label: "+물방울 3회", price: "249,000원", original: "267,000원" },
        ],
      },
      {
        name: "물방울초음파",
        prices: [
          { label: "1회", price: "35,000원" },
          { label: "5회", price: "175,000원" },
          { label: "10회", price: "290,000원", original: "350,000원" },
        ],
      },
      {
        name: "크라이오",
        prices: [{ label: "1회", price: "29,000원" }],
      },
    ],
  },
  {
    key: "booster",
    title: "스킨부스터",
    subtitle: "에끌라페 · 미주안 · 셀엑소좀",
    hashtags: ["#속건조", "#잔주름", "#탄력", "#재생", "#모공"],
    items: [
      {
        name: "에끌라페 · 연아",
        prices: [
          { label: "1회", price: "89,000원" },
          { label: "4회", price: "290,000원", original: "356,000원" },
          { label: "10회", price: "700,000원", original: "890,000원" },
        ],
      },
      {
        name: "미주안",
        prices: [
          { label: "1회", price: "165,000원" },
          { label: "10회", price: "1,250,000원", original: "1,650,000원" },
        ],
      },
      {
        name: "셀엑소좀",
        prices: [
          { label: "1회", price: "220,000원" },
          { label: "3회", price: "590,000원", original: "660,000원" },
        ],
      },
      {
        name: "믹스 패키지",
        prices: [
          { label: "미주안 1 + 에끌라페 3", price: "349,000원", original: "432,000원" },
          { label: "셀엑소좀 1 + 미주안 3", price: "590,000원", original: "715,000원" },
        ],
      },
    ],
  },
  {
    key: "program",
    title: "12주 프로그램",
    subtitle: "주 1회 · 12주 · 단품보다 최대 38% 절감",
    hashtags: ["#미백", "#재생탄력", "#주1회"],
    items: [
      {
        name: "12주 미백",
        note: "듀얼토닝 10 + 라라필 2 · 4회차 흑자 서비스",
        prices: [
          { label: "베이직", price: "650,000원", original: "1,020,000원" },
          { label: "스탠다드 (+에끌라페 4회)", price: "850,000원", original: "1,376,000원" },
          { label: "프리미엄 (+미주안 4회)", price: "1,150,000원", original: "1,680,000원" },
        ],
      },
      {
        name: "12주 재생 · 탄력",
        note: "라라필 3 + 듀얼토닝 4 + 물방울 5",
        prices: [
          { label: "베이직", price: "590,000원", original: "726,000원" },
          { label: "스탠다드 (+에끌라페 4회)", price: "790,000원", original: "1,082,000원" },
          { label: "프리미엄 (+미주안 4회)", price: "1,090,000원", original: "1,386,000원" },
        ],
      },
    ],
    footnotes: ["유효기간 6개월 · 6회차에 원장 사진 비교 중간 평가"],
  },
  {
    key: "tattoo",
    title: "문신 · 반영구 제거",
    subtitle: "눈썹 · 아이라인 · 소형 문신 · 4주 간격 5회",
    hashtags: ["#눈썹문신", "#아이라인", "#소형문신"],
    items: [
      {
        name: "반영구 제거 (5회)",
        prices: [
          { label: "눈썹 전체", price: "290,000원" },
          { label: "아이라인 전체", price: "290,000원" },
        ],
      },
      {
        name: "문신 제거 (동전 크기 · 5회)",
        note: "동전 초과 크기는 상담 후 견적",
        prices: [
          { label: "5회", price: "220,000원" },
          { label: "추가 회당", price: "59,000원" },
        ],
      },
    ],
  },
];
