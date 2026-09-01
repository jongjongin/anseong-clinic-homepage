"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { formatWon, menuCategories, menuItems } from "@/lib/menu-items";

const SORTS = [
  { key: "recent", label: "최근등록순" },
  { key: "high", label: "높은가격순" },
  { key: "low", label: "낮은가격순" },
] as const;

type SortKey = (typeof SORTS)[number]["key"];

export default function MenuCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [category, setCategory] = useState(
    menuCategories.some((c) => c.key === initialCategory) ? initialCategory : "all",
  );
  const [sort, setSort] = useState<SortKey>("recent");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    let list = menuItems;

    if (category !== "all") {
      list = list.filter((item) => item.category === category);
    }

    const keyword = query.trim().toLowerCase();
    if (keyword) {
      list = list.filter((item) =>
        [item.title, item.subtitle, item.eventLabel, ...item.hashtags]
          .join(" ")
          .toLowerCase()
          .includes(keyword),
      );
    }

    if (sort === "high") {
      list = [...list].sort((a, b) => b.priceFrom - a.priceFrom);
    } else if (sort === "low") {
      list = [...list].sort((a, b) => a.priceFrom - b.priceFrom);
    }

    return list;
  }, [category, sort, query]);

  const chipClass = (selected: boolean) =>
    `shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
      selected
        ? "border-teal-700 bg-teal-700 text-white"
        : "border-[#e0e0e0] bg-white text-[#555] hover:border-teal-700 hover:text-teal-700"
    }`;

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 pb-24 sm:px-8">
      {/* 카테고리 */}
      <div className="no-scrollbar -mx-5 flex flex-nowrap gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 lg:flex-wrap lg:overflow-visible">
        <button type="button" onClick={() => setCategory("all")} className={chipClass(category === "all")}>
          전체보기
        </button>
        {menuCategories.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setCategory(item.key)}
            className={chipClass(category === item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 정렬 + 검색 */}
      <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div className="flex gap-2">
          {SORTS.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setSort(option.key)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                sort === option.key
                  ? "border-[#181818] bg-[#181818] text-white"
                  : "border-[#e0e0e0] bg-white text-[#555] hover:border-[#555] hover:bg-gray-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-auto">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="검색어를 입력해주세요."
            className="w-full border-b border-[#ddd] bg-transparent py-2 pl-0 pr-8 text-sm outline-none transition-colors placeholder:text-[#ccc] focus:border-[#181818] lg:w-[240px]"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="mt-6 hidden h-px w-full bg-[#eee] lg:block" />

      {/* 카드 그리드 */}
      {items.length === 0 ? (
        <p className="py-24 text-center text-sm text-slate-400">검색 결과가 없습니다.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-y-14 xl:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/renewal/menu/${item.slug}`}
              className="group flex cursor-pointer flex-col gap-4"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#f8f8f8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 break-keep text-sm font-bold leading-snug text-white drop-shadow">
                  {item.title.replace(/^\[[^\]]*\]\s*/, "")}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-teal-700">{item.categoryLabel}</p>
                <p className="break-keep text-[15px] font-bold leading-snug text-[#181818] transition-colors group-hover:text-teal-700">
                  {item.title}
                </p>
                <p className="break-keep text-xs leading-relaxed text-[#888]">{item.eventLabel}</p>
                <p className="mt-1 text-[15px] font-extrabold text-[#181818]">
                  {formatWon(item.priceFrom)} <span className="font-medium text-[#999]">~</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <p className="mt-14 text-center text-[11px] text-[#aaa]">
        부가세 포함 금액 · 병변 상태에 따라 비용이 달라질 수 있습니다 · 2026.08 기준
      </p>
    </div>
  );
}
