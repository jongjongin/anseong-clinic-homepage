"use client";

import { useEffect, useRef, useState } from "react";
import { eventsSectionContent } from "@/components/home/content";

export default function EventsCarousel() {
  const visibleItems = eventsSectionContent.items.filter((event) => {
    if (!event.endDate) {
      return true;
    }

    const today = new Date();
    const endDate = new Date(`${event.endDate}T23:59:59`);

    return today <= endDate;
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const total = visibleItems.length;

  if (total === 0) {
    return null;
  }

  useEffect(() => {
    if (total <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [total]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 40) {
      goToNext();
    } else if (distance < -40) {
      goToPrevious();
    }
  };

  return (
    <div className="mt-12">
      {total > 1 ? (
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {visibleItems.map((event, index) => (
              <button
                key={event.title}
                type="button"
                aria-label={`${index + 1}번 이벤트 보기`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-8 bg-slate-900" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-900"
              aria-label="이전 이벤트"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-900"
              aria-label="다음 이벤트"
            >
              →
            </button>
          </div>
        </div>
      ) : null}

      <div
        className="mt-6 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {visibleItems.map((event) => (
            <div key={event.title} className="w-full shrink-0">
              <article className="interactive-card flex h-full min-h-[360px] flex-col rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8">
                <p className="text-sm font-semibold tracking-[0.1em] text-teal-700 uppercase">
                  {event.category}
                </p>
                <h3 className="mt-5 break-keep text-2xl font-bold leading-[1.3] text-slate-900 sm:text-[1.9rem]">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-slate-400">{event.period}</p>
                <p className="mt-5 flex-1 break-keep text-base leading-8 text-slate-600">{event.description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={eventsSectionContent.consultationHref}
                    className="rounded-full border border-[#E2C400] bg-[#FEE500] px-5 py-3 text-center text-sm font-semibold !text-slate-950 transition-colors hover:bg-[#F7DE00]"
                    style={{ color: "#191919" }}
                  >
                    이벤트 상담하기
                  </a>
                  <a
                    href={event.detailUrl ?? "#"}
                    className="rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
                  >
                    {eventsSectionContent.buttonLabel}
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
