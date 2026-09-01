"use client";

import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export type ProgramCard = {
  slug: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

type ProgramsCarouselProps = {
  programs: ProgramCard[];
};

export default function ProgramsCarousel({ programs }: ProgramsCarouselProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="renewal-swiper relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.15 },
          640: { slidesPerView: 1.8 },
          768: { slidesPerView: 2.2 },
          1280: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className="!pb-14"
      >
        {programs.map((program) => (
          <SwiperSlide key={program.slug} className="!h-auto">
            <div className="flex h-full flex-col border border-[#eee] bg-white p-9 transition-colors duration-300 hover:border-[#181818]">
              <h3 className="gb-font break-keep text-[19px] font-bold text-[#181818]">{program.title}</h3>
              <p className="mt-1.5 break-keep text-[13px] text-[#959595]">{program.subtitle}</p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-[#f2f2f2] pt-6">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 break-keep text-[13px] leading-relaxed text-[#6d6d6d]">
                    <span className="mt-[7px] block h-1 w-1 shrink-0 rotate-45 bg-teal-700" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${program.slug}`}
                className="gb-font group mt-7 inline-flex items-center gap-2 text-sm text-[#181818] transition-colors hover:text-teal-700"
              >
                자세히 보기
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 right-0 z-20 flex gap-2">
        <button
          type="button"
          aria-label="이전 프로그램"
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-[#464646] transition hover:border-[#181818] hover:bg-[#181818] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="다음 프로그램"
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-[#464646] transition hover:border-[#181818] hover:bg-[#181818] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
