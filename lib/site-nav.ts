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
  { label: "병원 소개", href: "/#intro" },
  {
    label: "진료 과목",
    href: "/services",
    children: servicePages.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "의료진", href: "/#doctors" },
  { label: "블로그", href: "/blog" },
  { label: "이벤트", href: "/menu" },
  { label: "비대면진료", href: "/#telemedicine" },
  { label: "오시는 길", href: "/#hours" },
  { label: "상담 문의", href: "/#consult" },
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
