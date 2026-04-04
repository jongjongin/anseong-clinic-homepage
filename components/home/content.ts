export const headerMenuItems = [
  { label: "병원 소개", href: "#hero" },
  { label: "진료 과목", href: "#departments" },
  { label: "의료진", href: "#doctors" },
  { label: "이벤트", href: "#events" },
  { label: "오시는 길", href: "#hours" },
  { label: "상담 문의", href: "#consult" },
];

export const heroContent = {
  eyebrow: "한 분의 하루를 다시 편안하게",
  title: ["지친 몸과 마음에", "차분한 회복의 리듬을", "되찾아 드립니다"],
  description:
    "안성경희365한의원은 통증과 피로를 단순히 잠깐 줄이는 데 그치지 않고, 일상으로 다시 편안하게 돌아갈 수 있도록 회복의 흐름을 함께 설계합니다.",
  primaryButton: "진료시간 확인",
  secondaryButton: "집중 진료 보기",
  noticeTitle: "진료 핵심 포인트",
  highlights: [
    "야간 진료 운영으로 바쁜 일정에도 부담을 줄입니다.",
    "교통사고 후유증과 근골격 통증을 집중적으로 살핍니다.",
    "현재 불편, 생활 습관, 회복 속도를 함께 고려합니다.",
  ],
  contactLabel: "대표 상담",
  contactNumber: "031-000-0000",
  contactDescription: "처음 방문 전 증상을 간단히 말씀해주시면 가장 알맞은 진료 흐름으로 안내해드립니다.",
  stats: [
    { label: "평일 야간 진료", value: "20시까지" },
    { label: "맞춤 진료 설명", value: "1:1 안내" },
    { label: "대표 상담", value: "당일 응대" },
  ],
};

export const departmentsSectionContent = {
  eyebrow: "Focused Care",
  title: "증상에 따라 필요한 진료를 빠르게 찾을 수 있습니다",
  description:
    "메디스트림 사이트처럼 섹션마다 핵심 메시지가 먼저 보이도록 구성했습니다. 각 카드도 한눈에 읽히도록 짧고 선명한 정보 중심으로 정리했습니다.",
  badge: "집중 진료",
  items: [
    {
      title: "척추·관절 통증",
      summary: "목, 어깨, 허리, 무릎 통증을 세심하게 살핍니다.",
      description:
        "반복되는 근육 긴장과 관절 불편, 자세 불균형까지 함께 확인해 일상에서 덜 무리하도록 회복 방향을 안내합니다.",
    },
    {
      title: "교통사고 후유증",
      summary: "사고 직후부터 시간이 지난 뒤의 불편까지 관리합니다.",
      description:
        "사고 후 나타나는 목과 허리 통증, 두통, 긴장감, 피로감 등 눈에 잘 보이지 않는 후유증까지 놓치지 않고 살핍니다.",
    },
    {
      title: "체형·자세 불균형",
      summary: "생활 습관과 움직임 패턴까지 함께 봅니다.",
      description:
        "오랫동안 쌓인 자세 습관과 업무 환경을 함께 고려해, 다시 같은 불편이 반복되지 않도록 균형 회복을 돕습니다.",
    },
    {
      title: "만성 피로·소화 관리",
      summary: "몸 전체 컨디션을 회복하는 방향으로 접근합니다.",
      description:
        "쉽게 지치고 속이 더부룩한 상태처럼 전반적인 컨디션 저하가 이어질 때, 체력과 순환의 흐름을 함께 살펴봅니다.",
    },
  ],
};

export const doctorsSectionContent = {
  eyebrow: "Medical Team",
  title: "의료진의 전문성과 설명의 친절함을 함께 보여줍니다",
  description:
    "롤모델 사이트의 의료진 소개처럼 신뢰가 먼저 느껴지도록 이름, 역할, 진료 방향, 이력 항목을 분명하게 나누었습니다.",
  items: [
    {
      name: "대표원장 홍길동",
      role: "한방재활의학 중심 진료",
      description:
        "현재의 통증만 보는 것이 아니라, 왜 반복되는지와 앞으로 어떤 회복 흐름이 필요한지까지 차분하게 설명하는 진료를 지향합니다.",
      credentials: [
        "경희대학교 한의과대학 졸업",
        "한방재활의학과 임상 과정 수료",
        "척추신경추나의학회 정회원",
      ],
    },
    {
      name: "원장 김하늘",
      role: "통증·자세 균형 진료",
      description:
        "만성 피로와 통증, 체형 불균형이 겹쳐 나타나는 경우를 세심하게 살펴 생활 속 불편을 줄이는 방향으로 진료합니다.",
      credentials: [
        "경희대학교 한의과대학 졸업",
        "근골격 통증 관리 과정 수료",
        "대한한의학회 정회원",
      ],
    },
  ],
};

export const eventsSectionContent = {
  eyebrow: "Clinic News",
  title: "프로모션과 공지, 첫 방문 안내를 안정감 있게 전달합니다",
  description:
    "메디스트림 사이트의 이벤트 영역처럼 썸네일 없이도 정보가 잘 읽히도록, 기간과 핵심 메시지를 카드 구조로 정리했습니다.",
  buttonLabel: "자세히 보기",
  items: [
    {
      category: "EVENT 01",
      title: "봄철 컨디션 케어 상담",
      period: "2026.04.01 - 2026.04.30",
      description: "환절기 피로와 잔통증 관리가 필요한 분들을 위한 첫 상담 안내를 진행 중입니다.",
    },
    {
      category: "EVENT 02",
      title: "첫 방문 진료 안내",
      period: "상시 진행",
      description: "초진 접수부터 상담, 진료 흐름까지 처음 방문하시는 분도 부담 없이 이해할 수 있게 안내합니다.",
    },
    {
      category: "NOTICE",
      title: "주말 진료시간 확인",
      period: "내원 전 확인 권장",
      description: "토요일 진료와 공휴일 운영 여부는 주간 일정에 따라 달라질 수 있어 방문 전 확인을 권장드립니다.",
    },
  ],
};

export const infoSectionContent = {
  eyebrow: "Visit Information",
  title: "방문 전 꼭 필요한 정보는 한곳에서 바로 확인할 수 있게",
  description:
    "메디스트림 사이트처럼 하단으로 갈수록 실무 정보가 더 또렷하게 보이도록, 진료시간과 위치 안내를 별도 정보판처럼 정리했습니다.",
  hoursTitle: "진료시간",
  locationTitle: "오시는 길",
  mapLabel: "MAP PLACEHOLDER",
  mapDescription: "추후 네이버 지도 또는 카카오 지도를 연동할 수 있는 자리입니다.",
  address: "경기도 안성시 예시로 123, 3층",
  parking: "건물 내 주차 또는 인근 제휴 주차장 이용 가능",
  contact: "031-000-0000",
  guidance: [
    "첫 방문 시 접수 문진이 있어 10분 정도 여유 있게 방문해 주세요.",
    "교통사고 진료는 관련 접수 여부를 전화로 먼저 안내받으실 수 있습니다.",
  ],
  hours: [
    { day: "평일", time: "09:30 - 20:00" },
    { day: "토요일", time: "09:30 - 14:00" },
    { day: "점심시간", time: "13:00 - 14:00" },
    { day: "일요일·공휴일", time: "휴진" },
  ],
};

export const ctaSectionContent = {
  eyebrow: "Consultation",
  title: ["오늘의 불편을 가볍게 넘기지 말고", "편하게 상담부터 시작해 보세요"],
  description:
    "간단한 통증 상담, 첫 방문 문의, 진료시간 확인까지 바로 연결할 수 있는 마지막 안내 구간입니다. 병원형 홈페이지답게 분명하고 부담 없게 구성했습니다.",
  phoneButton: "전화 상담하기",
  kakaoButton: "카카오 문의",
  phoneNumber: "031-000-0000",
};

export const footerContent = {
  clinicName: "안성경희365한의원",
  notice:
    "본 사이트의 모든 콘텐츠는 안내 목적이며, 실제 진료 내용과 운영 시간은 병원 사정에 따라 달라질 수 있습니다.",
  phone: "대표번호 031-000-0000",
  address: "경기도 안성시 예시로 123, 3층",
  business: "대표자 홍길동 | 사업자등록번호 000-00-00000",
  links: ["개인정보처리방침", "이용약관", "비급여 안내"],
};
