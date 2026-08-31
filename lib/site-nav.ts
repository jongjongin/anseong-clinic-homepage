import { servicePages } from "@/lib/service-pages";

export type SiteNavChild = {
  label: string;
  href: string;
  external?: boolean;
};

export type SiteNavItem = {
  label: string;
  href: string;
  children?: SiteNavChild[];
};

export const siteNavItems: SiteNavItem[] = [
  {
    label: "병원 소개",
    href: "/renewal#intro",
    children: [
      { label: "한의원 소개", href: "/renewal#intro" },
      { label: "의료진 소개", href: "/renewal#doctors" },
      { label: "진료시간·오시는 길", href: "/renewal#hours" },
    ],
  },
  {
    label: "진료 프로그램",
    href: "/services",
    children: servicePages.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "건강 정보",
    href: "/renewal#departments",
    children: [
      { label: "통증 가이드", href: "/pain" },
      { label: "한약 가이드", href: "/herb" },
      { label: "다이어트 가이드", href: "/diet" },
      { label: "미용 가이드", href: "/beauty" },
      { label: "시술 후 주의사항", href: "/warning" },
    ],
  },
  { label: "블로그", href: "/blog" },
  { label: "상담·예약", href: "/renewal#consult" },
];

export const siteContact = {
  phone: "031-8057-0750",
  phoneHref: "tel:031-8057-0750",
  kakaoChatUrl: "http://pf.kakao.com/_RWgxnG/chat",
  naverBlogUrl: "https://blog.naver.com/jonginyoun113",
  naverBlogUrl2: "https://blog.naver.com/anseong365khclinic",
  naverMapUrl: "https://naver.me/xzxmqtNK",
  kakaoMapUrl: "https://place.map.kakao.com/247448692",
};
