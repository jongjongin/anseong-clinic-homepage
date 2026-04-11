export type HeaderMenuItem = {
  label: string;
  href: string;
  disabled?: boolean;
  note?: string;
};

export const headerMenuItems: HeaderMenuItem[] = [
  { label: "병원 소개", href: "#hero" },
  { label: "진료 과목", href: "#departments" },
  { label: "의료진", href: "#doctors" },
  { label: "블로그", href: "/blog" },
  { label: "이벤트", href: "#events" },
  { label: "진료후기", href: "/reviews" },
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
  noticeTitle: "처음 오시는 분 안내",
  highlights: [
    "증상이 정확히 설명되지 않아도 현재 불편한 점부터 편하게 말씀해 주세요.",
    "어떤 진료가 필요한지 상담과 진료 흐름을 먼저 차분히 안내해드립니다.",
    "통증 완화뿐 아니라 일상에서 더 편해질 수 있는 방향까지 함께 살핍니다.",
  ],
  contactLabel: "내원 전 안내",
  contactNumber: "처음 방문도 편하게",
  contactDescription:
    "처음 내원하시는 분도 증상과 불편한 점을 말씀해 주시면 접수부터 상담 흐름까지 이해하기 쉽게 안내해드립니다.",
  stats: [
    {
      label: "365일 진료",
      value: "365일\n진료합니다",
      note: "설 전일, 당일\n추석 전일, 당일 휴무",
    },
    {
      label: "평일",
      value: "오전 9시 - 오후 8시",
      note: "점심 : 1-2시",
    },
    {
      label: "토·일·공휴일",
      value: "오전 9시 - 오후 3시",
      note: "점심시간 없음",
    },
  ],
  visualImage: "/assets/people/people-1.jpg",
};

export const introSectionContent = {
  eyebrow: "Hospital Introduction",
  paragraphs: [
    "안성경희365한의원은 아픈 부위만 보는 것이 아니라 일상에서 어떤 점이 불편한지 함께 듣고 치료 방향을 정합니다.",
    "불필요한 치료는 줄이고, 꼭 필요한 치료는 충분히 설명드린 뒤 진행하는 것을 원칙으로 합니다.",
    "평일 저녁과 주말에도 내원하실 수 있도록 365일 진료 체계로 운영하고 있습니다.",
  ],
};

export const departmentsSectionContent = {
  eyebrow: "Medical Service",
  title: "불편한 증상에 맞춰 필요한 진료를 쉽게 찾으실 수 있습니다",
  description:
    "목, 허리, 어깨 같은 통증부터 교통사고 후유증, 성장, 다이어트, 여성질환까지 현재 증상에 맞춰 진료 방향을 살펴보실 수 있도록 정리했습니다.",
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
    "현재 통증만 줄이는 데 그치지 않고, 일상생활에서 더 편하게 움직이고 회복할 수 있도록 치료 방향을 함께 고민합니다.",
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
  title: "밝고 편안한 진료 공간을 미리 둘러보실 수 있습니다",
  description:
    "대기 공간부터 진료실 분위기까지 미리 확인하실 수 있도록 실제 병원 사진을 정리했습니다.",
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
  title: "현재 진행 중인 상담 안내와 이벤트를 확인해 보세요",
  description:
    "내원 전 참고하실 수 있도록 현재 진행 중인 이벤트와 상담 가능 프로그램을 한눈에 보기 쉽게 정리했습니다.",
  buttonLabel: "자세히 보기",
  allEventsLabel: "블로그 글 더 보기",
  consultationHref: "http://pf.kakao.com/_RWgxnG/chat",
  items: [
    {
      category: "MAY EVENT",
      title: "5월 가정의 달 이벤트 진행 중",
      period: "진행 중",
      description: "건강을 챙겨야 할 시기, 가족과 함께 시작하는 관리. 상담을 통해 맞춤 프로그램을 안내드립니다.",
    },
  ],
};

export const infoSectionContent = {
  eyebrow: "Visit Information",
  title: "내원 전에 꼭 필요한 진료시간과 위치 안내를 확인해 주세요",
  description:
    "진료시간, 위치, 주차, 지도 확인처럼 방문 전에 가장 많이 찾으시는 내용을 한 곳에 모아두었습니다.",
  hoursTitle: "진료정보",
  locationTitle: "오시는 길",
  mapLabel: "지도 바로가기",
  mapDescription: "네이버지도와 카카오맵에서 병원 위치를 바로 확인하실 수 있습니다.",
  address: "경기도 안성시 남파로 103 203호, 204호 (구 영천냉면 자리)",
  parking: "CU편의점을 끼고 돌면 좌측 지상주차장, 우측 지하주차장 모두 이용 가능합니다.",
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
    "어떤 진료를 받아야 할지 고민되신다면 먼저 전화나 카카오톡으로 문의해 주세요. 현재 불편한 증상에 맞춰 내원 방향을 안내해드립니다.",
  phoneButton: "전화 상담하기",
  kakaoButton: "상담 예약하기",
  phoneNumber: "031-8057-0750",
  kakaoChatUrl: "http://pf.kakao.com/_RWgxnG/chat",
};

export const footerContent = {
  clinicName: "안성경희365한의원",
  notice:
    "홈페이지 안내 내용은 참고용이며, 실제 진료 일정과 세부 운영 내용은 병원 사정에 따라 달라질 수 있습니다. 방문 전 전화 또는 카카오톡으로 한 번 더 확인해 주세요.",
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
  title: "진료후기는 로그인 후 확인하실 수 있도록 준비하고 있습니다",
  description:
    "후기 열람은 로그인 후 가능한 구조로 운영할 예정이며, 현재는 로그인 전 안내 화면을 먼저 반영해 두었습니다.",
  statusBadge: "후기 보기 전용 로그인",
  loginTitle: "로그인 후 실제 진료후기를 확인하실 수 있습니다",
  loginDescription:
    "진료후기 페이지는 회원가입이 아니라 후기 열람을 위한 로그인 구조로 준비 중입니다. 로그인 후 후기 목록과 상세 내용을 확인하실 수 있게 구성할 예정입니다.",
  loginButton: "로그인 후 후기 보기",
  loginHelp:
    "로그인 페이지와 로그인 후 후기 열람 화면이 연결되도록 단계별로 구성하면 이해하기 쉽습니다.",
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
  loginNotice:
    "로그인 후 후기만 열람하는 방식으로 운영할 예정이며, 상담이나 예약과는 별도로 분리해 관리합니다.",
};

export const telemedicineSectionContent = {
  eyebrow: "Remote Care",
  title: "비대면진료는 카카오톡 문의와 전화 상담으로 안내해드립니다",
  description:
    "비대면진료가 필요한 경우 먼저 카카오톡이나 전화로 문의해 주시면 현재 증상과 상담 가능 여부를 확인한 뒤 진행 흐름을 안내해드립니다.",
  items: [
    "카카오톡 문의로 현재 증상과 비대면 상담 가능 여부를 먼저 확인하실 수 있습니다.",
    "전화 상담을 통해 필요한 준비사항과 진료 흐름을 안내해드립니다.",
    "상담 후 필요한 경우 비대면진료 절차를 순서대로 도와드립니다.",
  ],
  primaryButton: "카카오톡 문의하기",
  primaryHref: "http://pf.kakao.com/_RWgxnG/chat",
  secondaryButton: "전화 상담하기",
  secondaryHref: "tel:031-8057-0750",
};
