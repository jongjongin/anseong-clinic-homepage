"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { headerMenuItems } from "@/components/home/content";
import LogoWordmark from "@/components/home/logo-wordmark";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getMenuHref = (href: string) => {
    if (href.startsWith("/")) {
      return href;
    }

    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }

    return href;
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/#hero" className="flex items-center">
          <LogoWordmark className="h-12 w-[220px] sm:h-14 sm:w-[270px]" />
        </Link>

        <nav className="hidden items-center gap-5 text-[15px] font-medium text-slate-600 lg:flex xl:gap-7">
          {headerMenuItems.map((item) =>
            item.disabled ? (
              <span
                key={item.label}
                className="flex cursor-default items-center gap-1 whitespace-nowrap break-keep text-slate-400"
              >
                <span>{item.label}</span>
                <span className="text-[11px] font-semibold text-slate-300">{item.note}</span>
              </span>
            ) : getMenuHref(item.href).startsWith("/") ? (
              <Link
                key={item.label}
                href={getMenuHref(item.href)}
                className="whitespace-nowrap break-keep transition-colors hover:text-sky-700"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={getMenuHref(item.href)}
                className="whitespace-nowrap break-keep transition-colors hover:text-sky-700"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getMenuHref("#consult")}
            className="hidden shrink-0 rounded-full border border-[#E2C400] bg-[#FEE500] px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#F7DE00] sm:px-5 lg:inline-flex"
            style={{ color: "#191919" }}
          >
            상담 예약
          </a>
          <button
            type="button"
            aria-label="모바일 메뉴 열기"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-slate-900" />
              <span className="block h-0.5 w-4 bg-slate-900" />
              <span className="block h-0.5 w-4 bg-slate-900" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {headerMenuItems.map((item) =>
              item.disabled ? (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-400"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-semibold text-slate-300">{item.note}</span>
                </div>
              ) : getMenuHref(item.href).startsWith("/") ? (
                <Link
                  key={item.label}
                  href={getMenuHref(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={getMenuHref(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={getMenuHref("#consult")}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-2xl border border-[#E2C400] bg-[#FEE500] px-4 py-3 text-center text-sm font-semibold text-slate-950"
              style={{ color: "#191919" }}
            >
              상담 예약하기
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
