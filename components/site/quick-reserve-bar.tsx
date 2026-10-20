"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import ReserveForm from "@/components/site/reserve-form";

const STORAGE_KEY = "renewal-reserve-bar-collapsed";
const STORAGE_EVENT = "renewal-reserve-bar-change";
let fallbackCollapsed = false;

function subscribe(onChange: () => void) {
  window.addEventListener(STORAGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(STORAGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getCollapsed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return fallbackCollapsed;
  }
}

function getServerCollapsed() {
  return false;
}

export default function QuickReserveBar() {
  const collapsed = useSyncExternalStore(subscribe, getCollapsed, getServerCollapsed);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // 폼 줄바꿈, 접힘 상태, 하단 안전 영역까지 포함한 실제 높이를 히어로와 공유한다.
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--quick-reserve-bar-height",
        `${bar.getBoundingClientRect().height}px`,
      );
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(bar);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--quick-reserve-bar-height");
    };
  }, []);

  const toggle = () => {
    const next = !collapsed;
    fallbackCollapsed = next;
    try {
      sessionStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      // 저장소 접근이 막혀도 현재 페이지에서는 접기/펼치기를 유지한다.
    }
    window.dispatchEvent(new Event(STORAGE_EVENT));
  };

  return (
    <div
      id="reserve"
      ref={barRef}
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
