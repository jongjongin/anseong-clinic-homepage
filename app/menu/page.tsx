import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import MenuCatalog from "@/components/renewal/menu-catalog";

export const metadata: Metadata = {
  title: "시술메뉴/이벤트",
};

export default function MenuPage() {
  return (
    <main className="bg-white pt-24 lg:pt-48">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-10 sm:px-8">
        <p className="mar-font text-xs tracking-[0.3em] text-[#959595]">TREATMENT MENU</p>
        <h1 className="gb-font mt-4 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-4xl">
          원하는 시술을 만나보세요!
        </h1>
        <p className="mt-4 break-keep text-[13px] text-[#959595] sm:text-sm">
          피부 미용 시술 메뉴와 이벤트 가격을 확인하고, 카드를 눌러 상세 메뉴판을 보세요.
        </p>
        <Link
          href="/skin-check"
          className="group mt-5 inline-flex items-center gap-2 border-b border-[#181818] pb-1 text-[13px] font-semibold text-[#181818] transition-colors hover:border-teal-700 hover:text-teal-700"
        >
          어떤 시술이 맞는지 모르겠다면 · 1분 자가 감별
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
      <Suspense fallback={<div className="py-24" />}>
        <MenuCatalog />
      </Suspense>
    </main>
  );
}
