"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteLogo from "@/components/site/site-logo";
import { siteContact, siteNavItems } from "@/lib/site-nav";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

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
      className={`fixed inset-0 z-[90] bg-black/50 transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
        onClick={(event) => event.stopPropagation()}
        className={`flex h-full w-[85vw] max-w-[500px] transform flex-col bg-white transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-[#edebe9] pl-4">
          <SiteLogo className="h-9 w-[160px]" />
          <button type="button" aria-label="메뉴 닫기" onClick={onClose} className="p-4 text-slate-700">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
          {siteNavItems.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-slate-100">
                <button
                  type="button"
                  aria-expanded={expanded === item.label}
                  onClick={() =>
                    setExpanded((current) => (current === item.label ? null : item.label))
                  }
                  className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-slate-900"
                >
                  <span>{item.label}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                      expanded === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    expanded === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 pb-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="rounded-lg px-3 py-2 text-[15px] text-slate-600 transition-colors hover:bg-slate-50 hover:text-teal-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="border-b border-slate-100 py-4 text-base font-semibold text-slate-900 transition-colors hover:text-teal-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex flex-col gap-3 px-6 pb-8">
          <a
            href={siteContact.phoneHref}
            className="rounded-full bg-teal-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            전화 상담 {siteContact.phone}
          </a>
          <a
            href={siteContact.kakaoChatUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#E2C400] bg-[#FEE500] px-5 py-3 text-center text-sm font-semibold text-[#191919] transition-colors hover:bg-[#F7DE00]"
          >
            카카오톡 상담하기
          </a>
        </div>
      </div>
    </div>
  );
}
