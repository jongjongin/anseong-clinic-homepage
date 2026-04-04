"use client";

import { useRef } from "react";
import Image from "next/image";
import { doctorsSectionContent } from "@/components/home/content";

export default function DoctorsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const amount = Math.max(container.clientWidth * 0.82, 280);
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-500">
          좌우로 넘기면서 각 원장님의 약력을 편하게 볼 수 있습니다.
        </p>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard("prev")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
            aria-label="이전 의료진 보기"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("next")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
            aria-label="다음 의료진 보기"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {doctorsSectionContent.items.map((doctor) => (
          <article
            key={doctor.name}
            className="interactive-card w-[88vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-slate-200 bg-white sm:w-[360px]"
          >
            <div className="relative min-h-[340px] bg-[linear-gradient(180deg,#f4f8f8_0%,#e8f0ef_100%)]">
              <Image
                src={doctor.image}
                alt={`${doctor.name} 원장 프로필`}
                fill
                className="object-contain object-top"
                sizes="360px"
              />
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-sm font-semibold tracking-[0.08em] text-teal-700 uppercase">
                {doctor.role}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{doctor.name}</h3>
              <p className="mt-3 text-sm font-medium text-slate-500">{doctor.summary}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                {doctor.credentials.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
