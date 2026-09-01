"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { doctorsSectionContent } from "@/components/home/content";

export default function RenewalDoctorsCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [expandedName, setExpandedName] = useState<string | null>(null);

  return (
    <div className="renewal-swiper relative">
      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        className="!pb-14"
      >
        {doctorsSectionContent.items.map((doctor) => {
          const expanded = expandedName === doctor.name;

          return (
            <SwiperSlide key={doctor.name} className="!h-auto">
              <div className="flex h-full flex-col overflow-hidden border border-[#eee] bg-white transition-colors duration-300 hover:border-[#181818]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} ${doctor.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width:1280px) 25vw, (min-width:640px) 45vw, 85vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline gap-2">
                    <h3 className="gb-font text-lg font-bold text-[#181818]">{doctor.name}</h3>
                    <span className="text-[13px] text-teal-700">{doctor.role}</span>
                  </div>
                  <p className="mt-1.5 break-keep text-[13px] text-[#959595]">{doctor.summary}</p>

                  <div
                    className={`mt-4 grid transition-[grid-template-rows] duration-300 ${
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <ul className="flex flex-col gap-1 overflow-hidden text-xs leading-relaxed text-[#959595]">
                      {doctor.credentials.map((credential) => (
                        <li key={credential} className="break-keep">
                          · {credential}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedName(expanded ? null : doctor.name)}
                    aria-expanded={expanded}
                    className="gb-font mt-auto border-t border-[#f2f2f2] pt-4 text-left text-[13px] text-[#181818] transition-colors hover:text-teal-700"
                  >
                    {expanded ? "약력 접기 ↑" : "약력 보기 ↓"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute bottom-0 right-0 z-20 flex gap-2">
        <button
          type="button"
          aria-label="이전 의료진"
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-[#464646] transition hover:border-[#181818] hover:bg-[#181818] hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="다음 의료진"
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
