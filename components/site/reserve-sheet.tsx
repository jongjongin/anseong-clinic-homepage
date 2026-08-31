"use client";

import { useEffect } from "react";
import ReserveForm from "@/components/site/reserve-form";

type ReserveSheetProps = {
  open: boolean;
  onClose: () => void;
};

export default function ReserveSheet({ open, onClose }: ReserveSheetProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      onClick={onClose}
      className={`fixed inset-0 z-[80] bg-black/50 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="빠른 상담신청"
        onClick={(event) => event.stopPropagation()}
        className={`absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl bg-white p-6 pb-[max(env(safe-area-inset-bottom),1.5rem)] transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-lg">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-slate-900">빠른 상담신청</p>
              <p className="mt-0.5 text-xs text-slate-500">365일 진료 · 확인 후 순차 연락드립니다</p>
            </div>
            <button
              type="button"
              aria-label="닫기"
              onClick={onClose}
              className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ReserveForm layout="sheet" />
        </div>
      </div>
    </div>
  );
}
