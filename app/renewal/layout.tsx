import type { Metadata } from "next";
import GlobalOverlays from "@/components/site/global-overlays";
import SiteFooter from "@/components/site/site-footer";
import SiteHeader from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "새 홈페이지 미리보기",
  robots: { index: false, follow: false },
};

export default function RenewalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-pretendard bg-white text-slate-900">
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
      />
      {/* 셀프호스팅 세리프 폰트 (고운바탕 · Marcellus) */}
      <link rel="stylesheet" href="/assets/fonts/serif-fonts.css" />
      <SiteHeader />
      {children}
      <SiteFooter />
      <GlobalOverlays />
    </div>
  );
}
