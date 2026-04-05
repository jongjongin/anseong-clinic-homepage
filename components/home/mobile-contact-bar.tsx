"use client";

import { heroContent, infoSectionContent } from "@/components/home/content";

const mobileActions = [
  {
    label: "전화하기",
    href: heroContent.phoneHref,
    className: "bg-slate-950 text-white",
  },
  {
    label: "상담예약",
    href: heroContent.reservationHref,
    className: "bg-slate-950 text-white",
  },
  {
    label: "오시는길",
    href: infoSectionContent.naverMapUrl,
    className: "border border-slate-300 bg-white text-slate-950",
  },
];

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/96 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
        {mobileActions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={`flex min-h-13 items-center justify-center rounded-2xl px-3 py-3 text-sm font-semibold ${action.className}`}
            style={{ color: action.label === "오시는길" ? "#020617" : "#ffffff" }}
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}
