export type ServicePage = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  intro: string;
  seoDescription: string;
  keywords: string[];
  image: string;
  doctors: {
    name: string;
    role: string;
    image: string;
    summary: string;
  }[];
  symptoms: string[];
  care: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedPosts?: {
    title: string;
    href: string;
  }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "spine-joint",
    title: "척추관절 진료",
    subtitle: "목, 허리, 어깨, 무릎 통증과 움직임 불편을 함께 살핍니다",
    summary: "반복되는 통증과 뻐근함, 자세 불균형으로 일상에서 불편을 느끼는 분들을 위한 진료입니다.",
    intro:
      "안성경희365한의원은 통증이 있는 부위만 보는 데 그치지 않고, 왜 같은 불편이 반복되는지 함께 살피며 생활이 더 편해질 수 있는 방향으로 진료를 안내합니다.",
    seoDescription:
      "안성경희365한의원의 척추관절 진료 안내입니다. 목, 허리, 어깨, 무릎 통증과 움직임 불편을 함께 살피며 생활 속 불편이 줄어들 수 있는 방향으로 진료를 안내합니다.",
    keywords: ["안성 척추관절", "안성 허리통증", "안성 목통증", "안성 어깨통증", "안성 무릎통증"],
    image: "/assets/interior/interior-1.jpg",
    doctors: [
      {
        name: "윤종인",
        role: "원장",
        image: "/assets/doctors/yoon-jongin.png",
        summary: "목, 허리, 어깨, 무릎처럼 반복되는 통증을 생활 불편까지 함께 살피며 안내합니다.",
      },
      {
        name: "우예지",
        role: "원장",
        image: "/assets/doctors/woo-yeji.png",
        summary: "자세와 움직임에서 불편한 부분을 세심하게 확인하고 회복 방향을 함께 설명드립니다.",
      },
      {
        name: "박은지",
        role: "원장",
        image: "/assets/doctors/park-eunji.png",
        summary: "오래된 통증이나 쉽게 반복되는 관절 불편도 현재 상태에 맞춰 차분히 살핍니다.",
      },
    ],
    symptoms: ["목과 어깨가 자주 뭉치고 뻐근한 경우", "허리 통증으로 오래 앉아 있거나 서 있기 힘든 경우", "무릎이나 관절 통증으로 움직임이 불편한 경우"],
    care: ["현재 통증 부위와 움직임 제한을 함께 확인합니다.", "자세와 생활 습관까지 살펴 통증이 반복되는 원인을 확인합니다.", "필요한 치료 방향과 내원 흐름을 이해하기 쉽게 안내합니다."],
    faqs: [
      {
        question: "척추관절 진료는 어떤 증상으로 많이 오시나요?",
        answer: "목, 허리, 어깨, 무릎 통증처럼 일상생활에서 반복적으로 불편한 증상으로 많이 내원하십니다.",
      },
      {
        question: "통증이 오래됐는데도 상담이 가능한가요?",
        answer: "네, 오래된 통증이라도 현재 불편한 점과 생활 습관을 함께 살피며 진료 방향을 안내해드립니다.",
      },
    ],
    relatedPosts: [
      {
        title: "거북목 자가진단 방법, 집에서 쉽게 확인하는 3가지 테스트",
        href: "https://blog.naver.com/jonginyoun113/224217450558",
      },
      {
        title: "침 맞으면 왜 시원할까요? 한의사가 설명드립니다",
        href: "https://blog.naver.com/jonginyoun113/224219258672",
      },
    ],
  },
  {
    slug: "car-accident",
    title: "교통사고 후유증 진료",
    subtitle: "사고 직후뿐 아니라 시간이 지나 나타나는 후유증까지 함께 살핍니다",
    summary: "목, 허리 통증, 두통, 어지럼증, 피로감처럼 눈에 잘 드러나지 않는 불편도 놓치지 않고 확인합니다.",
    intro:
      "교통사고 후유증은 사고 직후보다 시간이 지난 뒤 더 불편해지는 경우도 많습니다. 현재 느끼는 증상과 생활 속 불편을 함께 듣고 필요한 진료 방향을 안내합니다.",
    seoDescription:
      "안성경희365한의원의 교통사고 후유증 진료 안내입니다. 목, 허리 통증, 두통, 어지럼증, 피로감 등 사고 이후 반복되는 불편을 세심하게 살핍니다.",
    keywords: ["안성 교통사고 한의원", "안성 교통사고 후유증", "안성 자동차보험 한의원"],
    image: "/assets/people/people-1.jpg",
    doctors: [
      {
        name: "윤종인",
        role: "원장",
        image: "/assets/doctors/yoon-jongin.png",
        summary: "사고 후 목, 허리 통증처럼 일상에 바로 영향을 주는 불편을 중심으로 안내합니다.",
      },
      {
        name: "우예지",
        role: "원장",
        image: "/assets/doctors/woo-yeji.png",
        summary: "사고 뒤 나타나는 몸의 긴장감과 회복 지연에 대해 부담 없이 상담받으실 수 있습니다.",
      },
      {
        name: "박은지",
        role: "원장",
        image: "/assets/doctors/park-eunji.png",
        summary: "한방병원 임상 경험을 바탕으로 교통사고 이후 통증과 후유증을 세심하게 살핍니다.",
      },
    ],
    symptoms: ["사고 후 목, 허리, 어깨 통증이 계속되는 경우", "두통, 어지럼증, 피로감이 반복되는 경우", "사고 이후 몸이 긴장되고 회복이 더딘 느낌이 드는 경우"],
    care: ["현재 불편한 증상과 사고 이후 변화된 몸 상태를 확인합니다.", "눈에 잘 보이지 않는 후유증까지 세심하게 살핍니다.", "자동차보험 진료와 내원 흐름도 함께 안내해드립니다."],
    faqs: [
      {
        question: "사고 직후보다 시간이 지나고 더 아픈데 진료가 가능한가요?",
        answer: "네, 교통사고 후유증은 시간이 지난 뒤 더 불편해지는 경우도 많아 현재 증상을 기준으로 상담과 진료가 가능합니다.",
      },
      {
        question: "자동차보험 진료 안내도 받을 수 있나요?",
        answer: "네, 상담 시 자동차보험 진료 흐름과 내원 전 준비사항도 함께 안내해드립니다.",
      },
    ],
    relatedPosts: [
      {
        title: "안성 약침치료, 어떤 걸 선택해야 할까요?",
        href: "https://blog.naver.com/jonginyoun113/224233937978",
      },
    ],
  },
  {
    slug: "acupuncture-chuna",
    title: "약침·추나 진료",
    subtitle: "통증 부위와 몸의 균형 상태를 함께 고려한 진료를 진행합니다",
    summary: "뭉친 부위와 틀어진 균형을 함께 살피며 회복의 흐름을 돕는 진료입니다.",
    intro:
      "통증이 오래가거나 몸의 균형이 무너진 느낌이 있을 때에는 현재 상태에 맞는 치료 방향을 함께 살펴보는 것이 중요합니다. 약침과 추나 치료는 필요한 경우에 맞춰 안내해드립니다.",
    seoDescription:
      "안성경희365한의원의 약침·추나 진료 안내입니다. 통증 부위와 몸의 균형 상태를 함께 살피며 필요한 치료 방향을 안내합니다.",
    keywords: ["안성 추나", "안성 약침", "안성 추나치료", "안성 통증치료"],
    image: "/assets/interior/interior-2.jpg",
    doctors: [
      {
        name: "윤종인",
        role: "원장",
        image: "/assets/doctors/yoon-jongin.png",
        summary: "통증과 재활 중심의 진료 경험을 바탕으로 약침·추나 방향을 함께 안내합니다.",
      },
      {
        name: "우예지",
        role: "원장",
        image: "/assets/doctors/woo-yeji.png",
        summary: "몸의 균형과 움직임 불편을 세심하게 확인하며 필요한 치료 흐름을 설명드립니다.",
      },
      {
        name: "박은지",
        role: "원장",
        image: "/assets/doctors/park-eunji.png",
        summary: "오래된 통증과 뻣뻣함처럼 반복되는 불편도 현재 상태에 맞춰 차분히 살핍니다.",
      },
    ],
    symptoms: ["근육과 관절이 자주 뭉치고 뻣뻣한 경우", "몸의 균형이 틀어진 느낌이 드는 경우", "통증이 반복되어 회복이 더딘 경우"],
    care: ["통증 부위와 몸 전체의 균형 상태를 함께 확인합니다.", "필요한 경우 약침과 추나 치료 방향을 안내합니다.", "무리하지 않는 범위에서 회복 흐름을 돕는 진료를 진행합니다."],
    faqs: [
      {
        question: "약침과 추나는 누구에게 필요한가요?",
        answer: "통증이 반복되거나 몸의 균형이 무너진 느낌이 있을 때 현재 상태를 확인한 뒤 필요한 경우 안내해드립니다.",
      },
      {
        question: "처음 내원해도 치료 방향을 설명받을 수 있나요?",
        answer: "네, 처음 오시는 분도 현재 증상과 몸 상태를 살핀 뒤 이해하기 쉬운 방향으로 설명해드립니다.",
      },
    ],
    relatedPosts: [
      {
        title: "안성 약침치료, 어떤 걸 선택해야 할까요?",
        href: "https://blog.naver.com/jonginyoun113/224233937978",
      },
      {
        title: "침 맞으면 왜 시원할까요? 한의사가 설명드립니다",
        href: "https://blog.naver.com/jonginyoun113/224219258672",
      },
    ],
  },
  {
    slug: "child-growth",
    title: "소아성장 진료",
    subtitle: "아이의 성장과 컨디션을 함께 살피며 필요한 방향을 안내합니다",
    summary: "성장기 아이의 생활 습관과 몸 상태를 함께 확인하며 건강한 성장 흐름을 돕는 진료입니다.",
    intro:
      "소아성장 진료는 단순히 키만 보는 것이 아니라 생활 습관, 식사, 수면, 컨디션까지 함께 살피는 것이 중요합니다. 현재 상태를 충분히 확인한 뒤 필요한 방향을 안내합니다.",
    seoDescription:
      "안성경희365한의원의 소아성장 진료 안내입니다. 성장기 아이의 생활 습관, 식사, 수면, 컨디션을 함께 확인하며 건강한 성장 흐름을 돕습니다.",
    keywords: ["안성 소아성장", "안성 성장 한의원", "안성 키성장 상담"],
    image: "/assets/people/people-2.jpg",
    doctors: [
      {
        name: "윤종인",
        role: "원장",
        image: "/assets/doctors/yoon-jongin.png",
        summary: "성장기 아이의 체력과 생활 습관을 함께 보며 필요한 성장 상담 방향을 안내합니다.",
      },
      {
        name: "우예지",
        role: "원장",
        image: "/assets/doctors/woo-yeji.png",
        summary: "아이의 성장 상태뿐 아니라 식사, 수면, 컨디션까지 함께 살피며 세심하게 안내합니다.",
      },
      {
        name: "박은지",
        role: "원장",
        image: "/assets/doctors/park-eunji.png",
        summary: "부모님이 궁금해하시는 성장 흐름과 생활 관리 방향을 이해하기 쉽게 설명드립니다.",
      },
    ],
    symptoms: ["성장기 아이의 성장 상담이 필요한 경우", "식사, 수면, 체력 저하로 성장 관리가 걱정되는 경우", "아이의 컨디션을 함께 살피며 성장 관리를 하고 싶은 경우"],
    care: ["아이의 성장 상태와 생활 습관을 함께 확인합니다.", "현재 컨디션과 성장 관리 방향을 설명드립니다.", "가정에서 함께 살펴볼 부분까지 안내해드립니다."],
    faqs: [
      {
        question: "소아성장 진료는 무엇을 함께 보나요?",
        answer: "성장 상태뿐 아니라 식사, 수면, 체력, 생활 습관까지 함께 살펴 필요한 방향을 안내합니다.",
      },
      {
        question: "아이와 함께 상담만 먼저 받아볼 수 있나요?",
        answer: "네, 현재 상태를 먼저 확인하고 성장 관리 방향에 대해 편하게 상담받으실 수 있습니다.",
      },
    ],
    relatedPosts: [
      {
        title: "아이 피부에 생긴 작은 돌기 5가지 체크법, 물사마귀일까요?",
        href: "https://blog.naver.com/jonginyoun113/224227907304",
      },
    ],
  },
  {
    slug: "diet",
    title: "다이어트 진료",
    subtitle: "건강을 해치지 않는 방향으로 체중 감량을 돕습니다",
    summary: "무리한 절식보다 현재 몸 상태와 생활 패턴에 맞춘 감량 방향을 제안합니다.",
    intro:
      "다이어트는 단기간 감량보다 건강하게 이어갈 수 있는 방향이 중요합니다. 현재 생활 패턴과 체중 관리 고민을 함께 듣고 무리하지 않는 계획을 안내합니다.",
    seoDescription:
      "안성경희365한의원의 다이어트 진료 안내입니다. 체질과 생활 패턴을 함께 고려해 무리하지 않는 감량 방향을 안내합니다.",
    keywords: ["안성 다이어트 한의원", "안성 다이어트", "안성 체질 다이어트"],
    image: "/assets/interior/interior-3.jpg",
    doctors: [
      {
        name: "윤종인",
        role: "원장",
        image: "/assets/doctors/yoon-jongin.png",
        summary: "무리한 감량보다 생활 패턴을 고려한 현실적인 다이어트 방향을 함께 살핍니다.",
      },
      {
        name: "우예지",
        role: "원장",
        image: "/assets/doctors/woo-yeji.png",
        summary: "체질과 생활 패턴을 함께 고려해 건강하게 이어갈 수 있는 감량 방향을 안내합니다.",
      },
      {
        name: "박은지",
        role: "원장",
        image: "/assets/doctors/park-eunji.png",
        summary: "현재 몸 상태와 목표를 함께 보며 부담 없이 이어갈 수 있는 관리 흐름을 설명드립니다.",
      },
    ],
    symptoms: ["체질과 생활 패턴에 맞는 감량 방향이 필요한 경우", "무리한 절식 없이 건강한 다이어트를 원하시는 경우", "약침 병행 여부를 포함해 상담받고 싶은 경우"],
    care: ["현재 생활 패턴과 몸 상태를 함께 확인합니다.", "무리하지 않는 감량 방향을 설명드립니다.", "지속 가능한 관리 흐름을 이해하기 쉽게 안내합니다."],
    faqs: [
      {
        question: "무리한 절식 없이도 상담이 가능한가요?",
        answer: "네, 현재 생활 패턴과 몸 상태를 함께 보며 무리하지 않는 방향으로 상담해드립니다.",
      },
      {
        question: "다이어트 진료는 어떤 방식으로 안내받나요?",
        answer: "현재 체중 관리 고민과 목표를 확인한 뒤, 지속 가능한 관리 방향을 이해하기 쉽게 설명드립니다.",
      },
    ],
  },
  {
    slug: "women-health",
    title: "여성질환 진료",
    subtitle: "생리통, 피로, 순환 문제처럼 반복되는 불편을 함께 살핍니다",
    summary: "여성의 주기적 불편과 컨디션 변화를 몸 전체의 흐름과 함께 살피는 진료입니다.",
    intro:
      "여성질환은 한 가지 증상만 보기보다 몸 전체의 컨디션과 생활 속 불편을 함께 살피는 것이 중요합니다. 현재 불편한 점을 편하게 말씀해 주시면 필요한 방향을 함께 안내합니다.",
    seoDescription:
      "안성경희365한의원의 여성질환 진료 안내입니다. 생리통, 피로, 냉증, 순환 문제처럼 반복되는 불편을 몸 전체의 흐름과 함께 살핍니다.",
    keywords: ["안성 여성질환 한의원", "안성 생리통", "안성 냉증", "안성 여성 한의원"],
    image: "/assets/people/people-2.jpg",
    doctors: [
      {
        name: "윤종인",
        role: "원장",
        image: "/assets/doctors/yoon-jongin.png",
        summary: "반복되는 통증과 컨디션 저하를 생활 불편까지 함께 살피며 안내합니다.",
      },
      {
        name: "우예지",
        role: "원장",
        image: "/assets/doctors/woo-yeji.png",
        summary: "여성의 주기적 불편과 컨디션 변화를 함께 살피며 필요한 방향을 세심하게 안내합니다.",
      },
      {
        name: "박은지",
        role: "원장",
        image: "/assets/doctors/park-eunji.png",
        summary: "생리통, 피로, 순환 문제처럼 반복되는 불편을 현재 상태에 맞춰 차분히 살핍니다.",
      },
    ],
    symptoms: ["생리통이나 주기적 통증이 반복되는 경우", "냉증, 피로, 순환 문제로 불편을 느끼는 경우", "생활 속 컨디션 저하와 함께 여성질환 상담이 필요한 경우"],
    care: ["현재 반복되는 불편과 몸 상태를 함께 확인합니다.", "생활 속에서 느끼는 컨디션 변화도 함께 살핍니다.", "필요한 진료 방향과 내원 흐름을 안내해드립니다."],
    faqs: [
      {
        question: "여성질환 진료에서는 어떤 불편을 상담할 수 있나요?",
        answer: "생리통, 냉증, 피로, 순환 문제처럼 반복되는 불편을 현재 몸 상태와 함께 상담하실 수 있습니다.",
      },
      {
        question: "생활 속 컨디션 저하도 함께 볼 수 있나요?",
        answer: "네, 일상에서 느끼는 피로감이나 컨디션 변화도 함께 살피며 안내해드립니다.",
      },
    ],
    relatedPosts: [
      {
        title: "생리통, 침으로 진통제보다 빠르게 푸는 법",
        href: "https://blog.naver.com/jonginyoun113/224222038001",
      },
      {
        title: "남성형 난임, 남자의 문제일까요? 한의사가 설명드립니다",
        href: "https://blog.naver.com/jonginyoun113/224213882721",
      },
    ],
  },
  {
    slug: "beauty",
    title: "미용 진료",
    subtitle: "현재 피부 상태와 고민에 맞는 방향으로 필요한 관리를 안내합니다",
    summary: "피부 상태와 고민을 충분히 확인한 뒤 무리하지 않는 방향으로 맞춤 관리를 안내합니다.",
    intro:
      "미용 진료는 현재 피부 상태와 생활 습관, 고민 부위를 함께 살핀 뒤 필요한 방향을 정하는 것이 중요합니다. 부담 없는 상담부터 편하게 받아보실 수 있습니다.",
    seoDescription:
      "안성경희365한의원의 미용 진료 안내입니다. 현재 피부 상태와 고민을 충분히 확인한 뒤 무리하지 않는 방향으로 맞춤 관리를 안내합니다.",
    keywords: ["안성 미용 한의원", "안성 피부관리", "안성 맞춤 시술"],
    image: "/assets/interior/interior-2.jpg",
    doctors: [
      {
        name: "윤종인",
        role: "원장",
        image: "/assets/doctors/yoon-jongin.png",
        summary: "현재 피부 고민과 생활 패턴을 함께 보며 무리하지 않는 관리 방향을 안내합니다.",
      },
      {
        name: "우예지",
        role: "원장",
        image: "/assets/doctors/woo-yeji.png",
        summary: "현재 피부 상태와 고민을 충분히 확인한 뒤 부담 없는 방향으로 미용 상담을 안내합니다.",
      },
      {
        name: "박은지",
        role: "원장",
        image: "/assets/doctors/park-eunji.png",
        summary: "처음 미용 상담을 받으시는 분도 이해하기 쉽도록 현재 상태에 맞춘 방향을 설명드립니다.",
      },
    ],
    symptoms: ["피부 상태에 맞는 맞춤 관리가 필요한 경우", "현재 고민 부위에 대해 상담을 먼저 받아보고 싶은 경우", "무리하지 않는 방향의 미용 관리를 원하시는 경우"],
    care: ["현재 피부 상태와 고민을 충분히 확인합니다.", "부담 없이 시작할 수 있는 방향을 설명드립니다.", "필요한 경우 맞춤 관리 흐름을 안내합니다."],
    faqs: [
      {
        question: "미용 진료도 상담부터 받을 수 있나요?",
        answer: "네, 현재 피부 상태와 고민을 먼저 확인한 뒤 부담 없이 시작할 수 있는 방향으로 상담해드립니다.",
      },
      {
        question: "무리하지 않는 관리 방향도 안내받을 수 있나요?",
        answer: "네, 현재 상태에 맞춰 무리하지 않는 맞춤 관리 방향을 설명드립니다.",
      },
    ],
    relatedPosts: [
      {
        title: "듀오덤 사용법, 환자가 가장 궁금해하는 7가지",
        href: "https://blog.naver.com/jonginyoun113/224243977472",
      },
      {
        title: "얼굴·목에 생기는 편평사마귀, 왜 더 조심해야 할까?",
        href: "https://blog.naver.com/jonginyoun113/224188331485",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
