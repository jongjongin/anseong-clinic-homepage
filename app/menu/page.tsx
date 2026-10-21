import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import MenuCatalog, { MenuCatalogView } from "@/components/renewal/menu-catalog";
import EventRibbon from "@/components/site/event-ribbon";
import { getActiveEvent } from "@/lib/events";

/** 기간 한정 이벤트 안내가 마감 뒤 사라지도록 1시간마다 다시 그린다 */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "시술메뉴/이벤트 | 안성 피부 레이저·토닝·점 제거 가격",
  description:
    "안성경희365한의원 피부 미용 시술 메뉴와 이벤트 가격. 듀얼토닝·제네시스·점·쥐젖·편평사마귀 제거·프락셀·스킨부스터 (부가세 포함).",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "시술메뉴/이벤트 | 안성경희365한의원",
    description: "피부 미용 시술 메뉴와 이벤트 가격을 한눈에 확인하세요.",
    url: "https://anseong365.com/menu",
    type: "website",
  },
};

export default function MenuPage() {
  const activeEvent = getActiveEvent();

  return (
    <main className="bg-white pt-8 lg:pt-12">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-10 sm:px-8">
        <p className="mar-font text-xs tracking-[0.3em] text-[#5f5f5f]">TREATMENT MENU</p>
        <h1 className="gb-font mt-4 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-4xl">
          원하는 시술을 만나보세요!
        </h1>
        <p className="mt-4 break-keep text-[13px] text-[#5f5f5f] sm:text-sm">
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
        {activeEvent ? (
          <div className="mt-6 max-w-xl">
            <EventRibbon event={activeEvent} variant="card" />
          </div>
        ) : null}
      </div>
      <Suspense fallback={<MenuCatalogView />}>
        <MenuCatalog />
      </Suspense>
    </main>
  );
}
