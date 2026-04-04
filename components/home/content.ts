export const headerMenuItems = [
  { label: "병원 소개", href: "#hero" },
  { label: "진료 과목", href: "#departments" },
  { label: "의료진", href: "#doctors" },
  { label: "이벤트", href: "#events" },
  { label: "진료후기", href: "#reviews" },
  { label: "비대면진료", href: "#telemedicine" },
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
  reservationHref: "http://pf.kakao.com/_RWgxnG/chat",
  phoneHref: "tel:031-8057-0750",
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
  visualImage: "/assets/people/people-1.jpg",
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
      image: "/assets/doctors/yoon-jongin.png",
      summary: "통증·재활 중심 진료",
      credentials: [
        "비룡초등학교 졸업",
        "안청중학교 졸업",
        "공주 한일고등학교 졸업",
        "경희대학교 한의과대학 학사",
        "오산 황제한의원 진료원장",
        "남원시보건소 한의과장",
        "남원 주천보건지소 한의과장",
        "전 안산 백비한방병원",
        "백의한방병원 과장",
        "병점경희한의원 진료원장",
        "홍콩침례대학 임상과정 수료",
        "북경중의학대학 임상과정 수료",
        "광저우중의학대학 임상과정 수료",
        "대한한의학회 회원",
        "척추신경추나의학회 정회원",
        "미국 의사인증 진흥협회 ARDMS, APCA",
        "근골격계 초음파 인증의 RMSK 취득",
      ],
    },
    {
      name: "우예지",
      role: "원장",
      image: "/assets/doctors/woo-yeji.png",
      summary: "부인과·생활균형 진료",
      credentials: [
        "공주사대부고 졸업",
        "경희대학교 한의과대학 학사",
        "사랑인한의원 원장",
        "언제나365한의원 원장",
        "청담한의원 원장",
        "안성경희365한의원 원장",
        "북경중의학대학 임상과정 수료",
        "광저우중의학대학 임상과정 수료",
        "대한한의학회 회원",
        "대한한방부인과학회 정회원",
        "척추신경추나의학회 정회원",
      ],
    },
    {
      name: "박은지",
      role: "원장",
      image: "/assets/doctors/park-eunji.png",
      summary: "통증·한방병원 임상 진료",
      credentials: [
        "경희대학교 한의과대학 졸업",
        "(전) 청주 자생한방병원 병동의",
        "(전) 현대경희한의원 원장",
        "(전) 인성한의원 원장",
        "(현) 안성경희365한의원 원장",
        "북경중의학 대학 임상과정 수료",
        "광저우중의학 대학 임상과정 수료",
        "대만중국의약대학 임상과정 수료",
        "경희의료원 임상과정 수료",
        "강동경희대병원 임상과정 수료",
        "미국 의사인증 진흥협회 ARDMS, APCA",
        "근골격계 초음파 인증의 RMSK 취득",
        "대한한의학회 정회원",
      ],
    },
    {
      name: "강유",
      role: "원장",
      image: "/assets/doctors/kang-yu.png",
      summary: "근골격·연구 기반 진료",
      credentials: [
        "경희대학교 한의과대학 졸업",
        "경희대학교 한의학과 의료봉사 동아리 청록회 주말봉사부장",
        "MPS 연구회 정회원",
        "MPS 표면해부학 겨울캠프 수료",
        "경희김한겸한의원 임상실습 수료",
        "경희의료원 임상과정 수료",
        "강동경희대병원 임상과정 수료",
        "최인원 EFT 센터 EFT Level 1 수료",
        "SCIE 논문 제1저자",
        "Natural Products as New Approaches for Treating Bladder Cancer 논문 제1저자",
      ],
    },
  ],
};

export const gallerySectionContent = {
  eyebrow: "Clinic View",
  title: "편안함과 신뢰감을 느낄 수 있는 공간과 사람들",
  description:
    "실제 내부 사진과 병원 분위기 이미지를 함께 배치해 처음 방문하는 분도 병원의 인상을 미리 확인할 수 있도록 구성합니다.",
  interiorImages: [
    { src: "/assets/interior/interior-1.jpg", alt: "안성경희365한의원 내부 전경 1" },
    { src: "/assets/interior/interior-2.jpg", alt: "안성경희365한의원 내부 전경 2" },
    { src: "/assets/interior/interior-3.jpg", alt: "안성경희365한의원 내부 전경 3" },
  ],
  peopleImages: [
    { src: "/assets/people/people-1.jpg", alt: "안성경희365한의원 분위기 이미지 1" },
    { src: "/assets/people/people-2.jpg", alt: "안성경희365한의원 분위기 이미지 2" },
  ],
};

export const eventsSectionContent = {
  eyebrow: "Clinic News",
  title: "이벤트와 안내 소식을 한눈에 확인할 수 있습니다",
  description:
    "실제 병원 홈페이지처럼 현재 진행 중인 이벤트와 안내를 간단하고 분명하게 확인할 수 있도록 정리했습니다.",
  buttonLabel: "자세히 보기",
  consultationHref: "http://pf.kakao.com/_RWgxnG/chat",
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
  mapLabel: "지도 바로가기",
  mapDescription: "네이버지도와 카카오맵에서 병원 위치를 바로 확인하실 수 있습니다.",
  address: "경기도 안성시 남파로 103 203호, 204호 (구 영천냉면 자리)",
  parking: "주차 가능",
  contact: "031-8057-0750",
  naverMapUrl: "https://naver.me/xzxmqtNK",
  kakaoMapUrl: "https://place.map.kakao.com/247448692",
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
    "척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 여성질환 등 어떤 진료가 필요한지 고민될 때 먼저 전화로 편하게 문의해 주세요.",
  phoneButton: "전화 상담하기",
  kakaoButton: "상담 예약하기",
  phoneNumber: "031-8057-0750",
  kakaoChatUrl: "http://pf.kakao.com/_RWgxnG/chat",
};

export const footerContent = {
  clinicName: "안성경희365한의원",
  notice:
    "본 사이트의 모든 콘텐츠는 안내 목적이며, 실제 진료 내용과 운영 시간은 병원 사정에 따라 달라질 수 있습니다.",
  phone: "대표번호 031-8057-0750",
  address: "경기도 안성시 남파로 103 203호, 204호",
  business: "사업자등록번호 775-18-02238 | 안성경희365한의원 윤종인",
  links: [
    { label: "개인정보처리방침", href: "/privacy-policy" },
    { label: "이용약관", href: "/terms" },
    { label: "카카오 상담", href: "http://pf.kakao.com/_RWgxnG/chat" },
  ],
};

export const reviewsSectionContent = {
  eyebrow: "Patient Review",
  title: "진료후기는 로그인 후 확인할 수 있도록 준비 중입니다",
  description:
    "메디스트림 사이트처럼 실제 후기는 보호된 영역으로 운영할 예정이며, 현재는 구성만 먼저 반영했습니다.",
  cards: [
    {
      title: "척추·관절 진료 후기",
      excerpt: "오랜 허리 통증으로 일상생활이 힘들었는데, 현재 상태와 생활 습관까지 함께 설명해주셔서 안심이 됐습니다.",
    },
    {
      title: "교통사고 후유증 후기",
      excerpt: "사고 이후 계속되던 두통과 어깨 통증이 줄어드는 과정이 체계적으로 안내되어 좋았습니다.",
    },
    {
      title: "다이어트 프로그램 후기",
      excerpt: "무리한 감량보다 몸 상태에 맞는 방향으로 설명해주셔서 꾸준히 관리하기 좋았습니다.",
    },
  ],
  loginNotice: "로그인 기능 연동 후 실제 후기 전체를 확인할 수 있습니다.",
};

export const telemedicineSectionContent = {
  eyebrow: "Remote Care",
  title: "비대면진료 안내를 위한 영역을 미리 준비했습니다",
  description:
    "나중에 결제 페이지와 연동할 수 있도록, 비대면진료의 흐름과 안내 내용을 먼저 정리해 두었습니다.",
  items: [
    "전화 또는 카카오 상담으로 먼저 진료 가능 여부를 안내합니다.",
    "예약 확정 후 비대면진료 절차와 준비사항을 개별 안내합니다.",
    "향후 결제 페이지 및 신청 폼과 연동할 수 있도록 구조를 분리해 두었습니다.",
  ],
  primaryButton: "비대면진료 상담하기",
  primaryHref: "http://pf.kakao.com/_RWgxnG/chat",
  secondaryButton: "전화 문의하기",
  secondaryHref: "tel:031-8057-0750",
};
