import type { Metadata } from "next";
import { Suspense } from "react";
import MenuCatalog from "@/components/renewal/menu-catalog";

export const metadata: Metadata = {
  title: "시술메뉴/이벤트",
  robots: { index: false, follow: false },
};

export default function MenuPage() {
  return (
    <main className="bg-white pt-24 lg:pt-48">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-10 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-700">Treatment Menu</p>
        <h1 className="mt-3 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-4xl">
          원하는 시술을 만나보세요!
        </h1>
        <p className="mt-3 break-keep text-sm text-[#888]">
          피부 미용 시술 메뉴와 이벤트 가격을 확인하고, 카드를 눌러 상세 메뉴판을 보세요.
        </p>
      </div>
      <Suspense fallback={<div className="py-24" />}>
        <MenuCatalog />
      </Suspense>
    </main>
  );
}
