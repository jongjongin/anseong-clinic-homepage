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
        <Link href="/#hero" className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white">
            <Image src="/assets/logo/logo.png" alt="안성경희365한의원 로고" fill className="object-contain p-1.5" sizes="44px" />
          </div>
          <LogoWordmark className="hidden sm:block" />
          <div className="sm:hidden">
            <LogoWordmark className="h-10 w-[170px]" />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {headerMenuItems.map((item) =>
            getMenuHref(item.href).startsWith("/") ? (
              <Link key={item.label} href={getMenuHref(item.href)} className="transition-colors hover:text-sky-700">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={getMenuHref(item.href)} className="transition-colors hover:text-sky-700">
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={getMenuHref("#consult")}
            className="hidden shrink-0 rounded-full border border-slate-950 bg-slate-950 px-4 py-3 text-sm font-semibold !text-white transition-colors hover:bg-slate-800 sm:px-5 lg:inline-flex"
            style={{ color: "#ffffff" }}
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
              getMenuHref(item.href).startsWith("/") ? (
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
              className="mt-2 rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold !text-white"
              style={{ color: "#ffffff" }}
            >
              상담 예약하기
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
