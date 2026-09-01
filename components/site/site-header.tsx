"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileDrawer from "@/components/site/mobile-drawer";
import SiteLogo from "@/components/site/site-logo";
import { siteContact, siteNavItems } from "@/lib/site-nav";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 어두운 히어로가 있는 메인에서만 투명 오버레이 모드로 시작
  const isHome = pathname === "/";
  const solid = isScrolled || !isHome;

  return (
    <>
      {/* 모바일 헤더 */}
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between p-3 transition-all duration-200 lg:hidden ${
          solid ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
        }`}
      >
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={isDrawerOpen}
          onClick={() => setIsDrawerOpen(true)}
          className={`flex-1 p-1 text-left ${solid ? "text-slate-900" : "text-white"}`}
        >
          <span className="inline-flex flex-col gap-1.5 p-1">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>
        <Link href="/" className="flex flex-1 justify-center">
          <SiteLogo className="h-10 w-[170px]" inverted={!solid} />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <a
            href={siteContact.phoneHref}
            aria-label="전화하기"
            className={`p-2 ${solid ? "text-slate-900" : "text-white"}`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              <path
                d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* 데스크톱 헤더 */}
      <header
        className={`fixed inset-x-0 top-0 z-40 hidden flex-col items-center pb-5 transition-all duration-200 lg:flex ${
          solid
            ? "bg-white/95 pt-4 text-slate-900 shadow-sm backdrop-blur"
            : "bg-transparent pt-10 text-white"
        }`}
      >
        <Link href="/" className="flex justify-center">
          <SiteLogo className="h-14 w-[260px]" inverted={!solid} />
        </Link>
        <nav
          className={`flex items-center gap-10 text-lg font-semibold tracking-wide xl:gap-14 ${
            solid ? "mt-4" : "mt-8"
          }`}
        >
          {siteNavItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`whitespace-nowrap break-keep py-2 transition-colors ${
                    solid ? "hover:text-teal-700" : "hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 rounded-xl border border-slate-200/60 bg-white/95 px-3 py-3 text-slate-800 opacity-0 shadow-xl backdrop-blur transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-teal-50 hover:text-teal-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap break-keep py-2 transition-colors ${
                  solid ? "hover:text-teal-700" : "hover:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </header>

      {/* 고정 헤더 아래 콘텐츠 밀기 (오버레이 모드인 홈 제외) */}
      {!isHome ? <div aria-hidden className="h-16 lg:h-[150px]" /> : null}

      <MobileDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
