export const headerMenuItems = [
  { label: "병원 소개", href: "#hero" },
  { label: "진료 과목", href: "#departments" },
  { label: "의료진", href: "#doctors" },
  { label: "이벤트", href: "#events" },
  { label: "오시는 길", href: "#hours" },
  { label: "상담 문의", href: "#consult" },
];

export const heroContent = {
  eyebrow: "365일 당신의 건강을 책임지는 안성경희365한의원",
  title: ["단순한 통증 완화가 아니라", "생활이 편해질 때까지", "치료합니다."],
  description:
    "현재의 통증만 줄이는 데 그치지 않고, 생활 속에서 더 편하게 움직이고 일할 수 있을 때까지 치료 방향을 함께 고민합니다.",
  primaryButton: "상담 예약하기",
  secondaryButton: "전화 상담하기",
  noticeTitle: "안성경희365 진료 원칙",
  highlights: [
    "365일 진료로 평일과 주말에도 진료 연결이 가능합니다.",
    "척추관절 통증과 교통사고 후유증을 중심으로 생활 불편을 함께 살핍니다.",
    "현재 증상뿐 아니라 생활 습관과 회복 이후의 편안함까지 고려합니다.",
  ],
  contactLabel: "대표 상담",
  contactNumber: "031-8057-0750",
  contactDescription: "전화 상담이 가능하며, 증상을 먼저 말씀해주시면 진료 흐름을 보다 편하게 안내해드립니다.",
  stats: [
    { label: "365일 진료", value: "매일 운영" },
    { label: "평일 진료", value: "09-20" },
    { label: "주말 진료", value: "09-15" },
  ],
};

export const introSectionContent = {
  eyebrow: "Hospital Introduction",
  paragraphs: [
    "안성경희365한의원은 환자의 현재 통증뿐 아니라 생활 속 불편함까지 함께 고려하여 치료합니다.",
    "불필요한 치료는 줄이고, 필요한 치료는 충분히 진행하는 것을 원칙으로 합니다.",
    "365일 진료와 야간진료 운영으로 필요할 때 언제든 찾을 수 있는 한의원을 지향합니다.",
  ],
};

export const departmentsSectionContent = {
  eyebrow: "Medical Service",
  title: "필요한 진료를 한눈에 찾을 수 있도록 정리했습니다",
  description:
    "척추관절부터 여성질환까지 주요 진료과목을 바로 확인할 수 있도록 구성했습니다. 복잡한 설명보다 방문자가 먼저 이해하기 쉬운 흐름을 우선했습니다.",
  badge: "집중 진료",
  items: [
    {
      title: "척추관절",
      summary: "목, 어깨, 허리, 무릎의 통증과 움직임 불편을 살핍니다.",
      description:
        "반복되는 통증과 뻐근함, 자세 불균형까지 함께 확인해 생활에서의 불편이 줄어들 수 있도록 치료 방향을 안내합니다.",
    },
    {
      title: "교통사고",
      summary: "사고 직후뿐 아니라 시간이 지난 뒤 나타나는 후유증도 함께 봅니다.",
      description:
        "목과 허리 통증, 두통, 긴장감, 피로감처럼 눈에 잘 드러나지 않는 후유증까지 놓치지 않고 세심하게 살핍니다.",
    },
    {
      title: "약침추나",
      summary: "통증 부위와 몸의 균형 상태를 함께 고려해 치료합니다.",
      description:
        "약침과 추나 치료를 통해 뭉친 부위와 틀어진 균형을 함께 살피며 회복의 흐름을 돕습니다.",
    },
    {
      title: "소아성장",
      summary: "아이의 성장과 컨디션을 함께 고려한 진료를 진행합니다.",
      description:
        "성장기 아이의 생활 습관과 몸 상태를 함께 확인하며, 건강한 성장 흐름을 도울 수 있도록 세심하게 진료합니다.",
    },
    {
      title: "다이어트",
      summary: "건강을 해치지 않는 방향으로 체중 감량을 돕습니다.",
      description:
        "무리한 절식보다 몸 상태와 생활 패턴을 고려한 관리로, 꾸준히 이어갈 수 있는 다이어트 방향을 제안합니다.",
    },
    {
      title: "여성질환",
      summary: "여성의 주기적 불편과 컨디션 변화를 함께 살핍니다.",
      description:
        "생리통, 냉증, 피로감 등 여성에게 반복적으로 나타나는 불편을 몸 전체의 흐름과 함께 살펴 치료합니다.",
    },
    {
      title: "미용",
      summary: "피부 상태에 맞춘 맞춤 시술을 진행합니다.",
      description:
        "현재 피부 상태와 고민을 충분히 확인한 뒤, 무리하지 않는 방향으로 필요한 맞춤 관리를 안내합니다.",
    },
  ],
};

export const doctorsSectionContent = {
  eyebrow: "Medical Team",
  title: "환자의 생활까지 고려한 치료를 지향합니다",
  description:
    "환자의 상태만 보는 것이 아니라 생활 속에서 겪는 불편함까지 함께 고려하여 치료 방향을 설정합니다. 빠르게 끝내는 치료보다 확실하게 좋아지는 치료를 목표로 합니다.",
  items: [
    {
      name: "윤종인",
      role: "원장",
    },
    {
      name: "우예지",
      role: "원장",
    },
    {
      name: "박은지",
      role: "원장",
    },
    {
      name: "강유",
      role: "원장",
    },
  ],
};

export const eventsSectionContent = {
  eyebrow: "Clinic News",
  title: "이벤트와 안내 소식을 한눈에 확인할 수 있습니다",
  description:
    "실제 병원 홈페이지처럼 현재 진행 중인 이벤트와 안내를 간단하고 분명하게 확인할 수 있도록 정리했습니다.",
  buttonLabel: "자세히 보기",
  items: [
    {
      category: "MAY EVENT",
      title: "5월 가정의 달 이벤트 진행 중",
      period: "진행 중",
      description: "건강을 챙겨야 할 시기, 가족과 함께 시작하는 관리. 상담을 통해 맞춤 프로그램을 안내드립니다.",
    },
    {
      category: "PROGRAM",
      title: "다이어트 프로그램 상담",
      period: "상시 상담 가능",
      description: "체질과 생활 패턴을 고려한 감량 프로그램 상담을 통해 보다 알맞은 관리 방향을 안내드립니다.",
    },
    {
      category: "PROGRAM",
      title: "총명공진단 상담",
      period: "상시 상담 가능",
      description: "건강관리와 집중력 케어가 필요한 분들을 위해 총명공진단 관련 상담 안내를 제공합니다.",
    },
  ],
};

export const infoSectionContent = {
  eyebrow: "Visit Information",
  title: "방문 전 필요한 진료정보를 쉽게 확인할 수 있게 정리했습니다",
  description:
    "365일 진료, 평일과 주말 운영 시간, 전화 상담 가능 여부처럼 실제 방문 전에 가장 먼저 확인하는 정보를 분명하게 보여주도록 구성했습니다.",
  hoursTitle: "진료정보",
  locationTitle: "오시는 길",
  mapLabel: "MAP PLACEHOLDER",
  mapDescription: "추후 네이버 지도 또는 카카오 지도를 연동할 수 있는 자리입니다.",
  address: "경기도 안성시 남파로 103 203호, 204호 (구 영천냉면 자리)",
  parking: "주차 가능",
  contact: "031-8057-0750",
  guidance: [
    "365일 진료로 평일과 주말에도 진료 연결이 가능합니다.",
    "전화 상담이 가능하여 내원 전 기본 안내를 먼저 받으실 수 있습니다.",
  ],
  hours: [
    { day: "365일 진료", time: "매일 운영" },
    { day: "평일", time: "09:00 - 20:00" },
    { day: "토·일·공휴일", time: "09:00 - 15:00" },
    { day: "전화 상담", time: "가능" },
  ],
};

export const ctaSectionContent = {
  eyebrow: "Consultation",
  title: ["지금 불편한 증상이 있다면", "전화 상담부터 편하게 시작해 보세요"],
  description:
    "척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 여성질환 등 어떤 진료가 필요한지 고민될 때 먼저 전화로 편하게 문의하실 수 있습니다.",
  phoneButton: "전화 상담하기",
  kakaoButton: "상담 예약하기",
  phoneNumber: "031-8057-0750",
};

export const footerContent = {
  clinicName: "안성경희365한의원",
  notice:
    "본 사이트의 모든 콘텐츠는 안내 목적이며, 실제 진료 내용과 운영 시간은 병원 사정에 따라 달라질 수 있습니다.",
  phone: "대표번호 031-8057-0750",
  address: "경기도 안성시 남파로 103 203호, 204호",
  business: "사업자등록번호 775-18-02238 | 안성경희365한의원 윤종인",
  links: ["개인정보처리방침", "이용약관", "비급여 안내"],
};
