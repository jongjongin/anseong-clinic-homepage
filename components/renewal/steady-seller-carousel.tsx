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
    <div className="flex h-full flex-col bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <p className="mar-font text-[10px] tracking-[0.25em] text-[#959595]">BEAUTY MENU</p>
      <h3 className="gb-font mt-2.5 break-keep text-[17px] font-bold text-[#181818]">{category.title}</h3>
      <p className="mt-1 break-keep text-xs text-[#959595]">{category.subtitle}</p>

      <div className="mt-6 flex flex-1 flex-col gap-5 border-t border-[#f2f2f2] pt-6">
        {category.items.map((item) => (
          <div key={item.name}>
            <p className="break-keep text-[13px] font-semibold text-[#464646]">{item.name}</p>
            {item.note ? <p className="mt-0.5 break-keep text-[11px] text-teal-700">{item.note}</p> : null}
            <ul className="mt-2 flex flex-col gap-1.5">
              {item.prices.map((price) => (
                <li key={`${item.name}-${price.label}`} className="flex items-baseline justify-between gap-3 text-[13px]">
                  <span className="break-keep text-[#959595]">{price.label}</span>
                  <span className="whitespace-nowrap text-right">
                    {price.original ? (
                      <del className="mr-1.5 text-[11px] text-[#c4c4c4]">{price.original}</del>
                    ) : null}
                    <span className="font-bold text-[#181818]">{price.price}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {category.footnotes?.length ? (
        <p className="mt-5 break-keep text-[11px] leading-relaxed text-[#b0b0b0]">
          {category.footnotes.join(" · ")}
        </p>
      ) : null}

      <Link
        href={`/menu?category=${category.key}`}
        className="gb-font group mt-6 inline-flex items-center gap-2 border-t border-[#f2f2f2] pt-5 text-sm text-[#181818] transition-colors hover:text-teal-700"
      >
        자세히 보기
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
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
    `shrink-0 whitespace-nowrap rounded-full border px-5 py-2 text-[13px] font-medium transition-colors duration-300 ${
      selected
        ? "border-white bg-white text-[#181818]"
        : "border-white/30 bg-transparent text-white/80 hover:border-white hover:text-white"
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
