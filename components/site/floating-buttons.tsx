"use client";

import { useEffect, useState } from "react";
import { siteContact } from "@/lib/site-nav";

type FloatingButtonsProps = {
  onReserveClick: () => void;
};

export default function FloatingButtons({ onReserveClick }: FloatingButtonsProps) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleReserve = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      const bar = document.getElementById("reserve");
      bar?.scrollIntoView({ behavior: "smooth", block: "end" });
      return;
    }

    onReserveClick();
  };

  const circle =
    "flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition duration-200 hover:scale-110";

  return (
    <div className="fixed bottom-[7.5rem] right-4 z-[60] flex flex-col items-center gap-3 md:bottom-24 lg:bottom-28 lg:right-8">
      <button
        type="button"
        onClick={handleReserve}
        aria-label="상담 예약"
        className={`${circle} bg-teal-700 text-white`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="m9 14.5 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        href={siteContact.kakaoChatUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="카카오톡 상담"
        className={`${circle} bg-[#FEE500] text-[#191919]`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
          <path d="M12 3C6.9 3 3 6.2 3 10.1c0 2.5 1.6 4.7 4.1 6l-.9 3.4c-.1.3.3.6.6.4l4-2.6c.4 0 .8.1 1.2.1 5.1 0 9-3.2 9-7.2S17.1 3 12 3Z" />
        </svg>
      </a>

      <a
        href={siteContact.naverBlogUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="네이버 블로그"
        className={`${circle} bg-[#03C75A] text-white`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
          <path d="M4 4h5.1l5.6 8.2V4H20v16h-5.1l-5.6-8.2V20H4V4Z" />
        </svg>
      </a>

      <button
        type="button"
        aria-label="맨 위로"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${circle} border border-slate-200 bg-white text-slate-700 ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
          <path d="m6 14 6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
