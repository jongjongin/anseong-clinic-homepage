"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  beautyMenuCategories,
  beautyMenuUpdated,
  type BeautyMenuCategory,
} from "@/lib/beauty-menu";

const ALL_KEY = "all";

function CategoryCard({ category }: { category: BeautyMenuCategory }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white/95 p-7 shadow-[0_14px_40px_rgba(0,0,0,0.25)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Beauty Menu</p>
      <h3 className="mt-2 break-keep text-lg font-bold text-slate-900">{category.title}</h3>
      <p className="mt-1 break-keep text-xs text-slate-500">{category.subtitle}</p>

      <div className="mt-5 flex flex-1 flex-col gap-4">
        {category.items.map((item) => (
          <div key={item.name}>
            <p className="break-keep text-sm font-semibold text-slate-800">{item.name}</p>
            {item.note ? <p className="mt-0.5 break-keep text-[11px] text-teal-700">{item.note}</p> : null}
            <ul className="mt-1.5 flex flex-col gap-1">
              {item.prices.map((price) => (
                <li key={`${item.name}-${price.label}`} className="flex items-baseline justify-between gap-3 text-[13px]">
                  <span className="break-keep text-slate-500">{price.label}</span>
                  <span className="whitespace-nowrap text-right">
                    {price.original ? (
                      <del className="mr-1.5 text-[11px] text-slate-400">{price.original}</del>
                    ) : null}
                    <span className="font-bold text-slate-900">{price.price}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {category.footnotes?.length ? (
        <p className="mt-4 break-keep text-[11px] leading-relaxed text-slate-400">
          {category.footnotes.join(" · ")}
        </p>
      ) : null}

      <Link
        href="/services/beauty"
        className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
      >
        자세히 보기
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

export default function SteadySellerCarousel() {
  const [activeKey, setActiveKey] = useState(ALL_KEY);

  const visibleCategories = useMemo(
    () =>
      activeKey === ALL_KEY
        ? beautyMenuCategories
        : beautyMenuCategories.filter((category) => category.key === activeKey),
    [activeKey],
  );

  const chipClass = (selected: boolean) =>
    `shrink-0 whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
      selected
        ? "border-teal-500 bg-teal-600 text-white"
        : "border-white/40 bg-transparent text-white hover:border-teal-500 hover:bg-teal-600"
    }`;

  return (
    <div>
      <div className="no-scrollbar flex flex-nowrap gap-2.5 overflow-x-auto pb-2 lg:flex-wrap lg:overflow-visible lg:pb-0">
        <button type="button" onClick={() => setActiveKey(ALL_KEY)} className={chipClass(activeKey === ALL_KEY)}>
          전체
        </button>
        {beautyMenuCategories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActiveKey(category.key)}
            className={chipClass(activeKey === category.key)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="renewal-swiper-dark mt-8 [&_.swiper]:!overflow-visible">
        <Swiper
          key={activeKey}
          spaceBetween={20}
          slidesPerView="auto"
          grabCursor
        >
          {visibleCategories.map((category) => (
            <SwiperSlide key={category.key} className="!h-auto !w-[300px] sm:!w-[330px]">
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="mt-6 text-[11px] text-white/50">
        부가세 포함 · 병변 상태에 따라 비용이 달라질 수 있습니다 · {beautyMenuUpdated} 기준
      </p>
    </div>
  );
}
