"use client";

import { siteContact } from "@/lib/site-nav";

type SiteMobileBarProps = {
  onReserveClick: () => void;
};

export default function SiteMobileBar({ onReserveClick }: SiteMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[65] border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={siteContact.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-slate-700 transition-colors active:bg-slate-50"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-teal-700" aria-hidden>
            <path
              d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          전화하기
        </a>
        <button
          type="button"
          onClick={onReserveClick}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-slate-700 transition-colors active:bg-slate-50"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-teal-700" aria-hidden>
            <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          상담예약
        </button>
        <a
          href={siteContact.naverMapUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-slate-700 transition-colors active:bg-slate-50"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-teal-700" aria-hidden>
            <path
              d="M12 21s-6.5-5.4-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.6-6.5 10-6.5 10Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          오시는길
        </a>
      </div>
    </div>
  );
}
