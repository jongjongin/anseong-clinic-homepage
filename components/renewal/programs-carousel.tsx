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
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <h3 className="break-keep text-xl font-bold text-slate-900">{program.title}</h3>
              <p className="mt-1 break-keep text-sm text-slate-500">{program.subtitle}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 break-keep text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rotate-45 bg-teal-700" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${program.slug}`}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
              >
                자세히 보기
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-teal-700 hover:bg-teal-700 hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="다음 프로그램"
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-teal-700 hover:bg-teal-700 hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
