"use client";

import { useEffect, useState } from "react";
import ReserveForm from "@/components/site/reserve-form";

const STORAGE_KEY = "renewal-reserve-bar-collapsed";

export default function QuickReserveBar() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      setCollapsed(sessionStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      // 저장소 접근이 막힌 환경에서는 기본(펼침) 상태 유지
    }
  }, []);

  const toggle = () => {
    setCollapsed((current) => {
      const next = !current;
      try {
        sessionStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <div
      id="reserve"
      className="fixed inset-x-0 bottom-0 z-[70] hidden pb-[max(env(safe-area-inset-bottom),1rem)] lg:block"
    >
      <div className="pointer-events-none flex justify-center px-3 sm:px-6">
        <div className="pointer-events-auto w-full">
          {collapsed ? (
            <div className="mx-auto flex w-max">
              <button
                type="button"
                onClick={toggle}
                className="flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-6 py-3 text-sm font-bold text-teal-800 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white"
              >
                빠른 상담신청
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                  <path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="mx-auto w-[min(96vw,1400px)] max-w-none rounded-2xl border border-white/30 bg-white/85 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur">
              <div className="flex items-end gap-4">
                <div className="flex flex-col gap-1 pb-1">
                  <p className="whitespace-nowrap text-sm font-bold text-teal-800">빠른 상담신청</p>
                  <p className="whitespace-nowrap text-xs text-slate-500">365일 진료 · 당일 확인</p>
                </div>
                <div className="min-w-0 flex-1">
                  <ReserveForm layout="bar" />
                </div>
                <button
                  type="button"
                  onClick={toggle}
                  aria-label="상담신청 바 접기"
                  className="mb-1 shrink-0 rounded-full border border-slate-200 p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
