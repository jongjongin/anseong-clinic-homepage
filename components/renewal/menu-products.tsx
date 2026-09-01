"use client";

import { useMemo, useState } from "react";
import { openReserveSheet } from "@/components/site/reserve-cta-button";
import { formatWon, type MenuOption } from "@/lib/menu-items";
import { siteContact } from "@/lib/site-nav";

const SORTS = [
  { key: "none", label: "정렬 없음" },
  { key: "low", label: "가격 낮은순" },
  { key: "high", label: "가격 높은순" },
] as const;

type SortKey = (typeof SORTS)[number]["key"];

type MenuProductsProps = {
  itemTitle: string;
  options: MenuOption[];
  productFeatures: string[];
};

const discountRate = (option: MenuOption) =>
  option.original && option.price
    ? Math.round((1 - option.price / option.original) * 100)
    : null;

export default function MenuProducts({ itemTitle, options, productFeatures }: MenuProductsProps) {
  const [sort, setSort] = useState<SortKey>("none");
  const [selected, setSelected] = useState<string[]>([]);

  const sorted = useMemo(() => {
    if (sort === "none") return options;
    const value = (option: MenuOption) => option.price ?? Number.MAX_SAFE_INTEGER;
    return [...options].sort((a, b) =>
      sort === "low" ? value(a) - value(b) : (b.price ?? 0) - (a.price ?? 0),
    );
  }, [options, sort]);

  const toggle = (label: string) =>
    setSelected((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label],
    );

  const handleReserve = () => {
    const picked = selected.length > 0 ? selected : [];
    const message =
      picked.length > 0
        ? `[시술메뉴 예약] ${itemTitle}\n선택 구성:\n${picked.map((label) => `· ${label}`).join("\n")}`
        : `[시술메뉴 예약] ${itemTitle}`;
    openReserveSheet(message);
  };

  return (
    <div className="mt-7">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#181818]">시술 상품</h2>
        <div className="flex gap-1.5">
          {SORTS.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setSort(option.key)}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all ${
                sort === option.key
                  ? "border-[#181818] bg-[#181818] text-white"
                  : "border-[#e0e0e0] bg-white text-[#555] hover:border-[#555]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-3 flex flex-col gap-3">
        {sorted.map((option) => {
          const rate = discountRate(option);
          const isSelected = selected.includes(option.label);

          return (
            <li
              key={option.label}
              className={`rounded-xl border p-5 transition-colors ${
                isSelected ? "border-teal-700 bg-teal-50/40" : "border-[#eee] bg-white"
              }`}
            >
              <p className="break-keep text-sm font-bold text-[#181818]">{option.label}</p>
              {option.note ? <p className="mt-1 text-xs text-teal-700">{option.note}</p> : null}
              <ul className="mt-2.5 flex flex-col gap-1">
                {productFeatures.map((line) => (
                  <li key={line} className="break-keep text-xs leading-relaxed text-[#959595]">
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-end justify-between gap-4">
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  {option.price ? (
                    <>
                      <span className="text-xl font-extrabold text-[#181818]">
                        {formatWon(option.price)}
                      </span>
                      {option.original ? (
                        <del className="text-[13px] text-[#bbb]">{formatWon(option.original)}</del>
                      ) : null}
                      {rate ? (
                        <span className="text-[13px] font-extrabold text-teal-700">{rate}%</span>
                      ) : null}
                    </>
                  ) : (
                    <span className="text-[15px] font-bold text-teal-700">상담 후 안내</span>
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => toggle(option.label)}
                  aria-pressed={isSelected}
                  className={`shrink-0 rounded-full border px-5 py-2 text-[13px] font-semibold transition-colors ${
                    isSelected
                      ? "border-teal-700 bg-teal-700 text-white"
                      : "border-[#181818] bg-white text-[#181818] hover:bg-[#181818] hover:text-white"
                  }`}
                >
                  {isSelected ? "담김 ✓" : "담기"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
        <button
          type="button"
          onClick={handleReserve}
          className="flex-1 rounded-full bg-teal-700 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          예약하기{selected.length > 0 ? ` (${selected.length})` : ""}
        </button>
        <a
          href={siteContact.kakaoChatUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full border border-[#E2C400] bg-[#FEE500] px-7 py-3.5 text-center text-sm font-semibold text-[#191919] transition hover:bg-[#F7DE00]"
        >
          카카오톡 상담
        </a>
      </div>
      {selected.length > 0 ? (
        <p className="mt-2 text-[11px] text-[#959595]">
          담은 구성이 예약 신청서의 문의 내용에 자동으로 채워집니다.
        </p>
      ) : null}
    </div>
  );
}
