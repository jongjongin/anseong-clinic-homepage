"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { formatEventWon, isEventActive, type SiteEvent } from "@/lib/event-time";

/** 1분마다 시각을 다시 확인 — 마감 시각이 지나면 바로 사라지게 */
const subscribe = (onChange: () => void) => {
  const timer = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(timer);
};

type EventRibbonProps = {
  event: SiteEvent;
  /** strip: 홈 히어로 아래 띠 · card: 시술메뉴/상세 페이지 안 */
  variant?: "strip" | "card";
  /** 상세 페이지에서 그 시술의 이벤트 가격만 보여 줄 때 */
  slug?: string;
};

/**
 * 진행 중 이벤트 안내 띠. 서버는 기간 안일 때만 그리고(페이지는 1시간마다 갱신),
 * 브라우저에서도 마감 시각을 확인해 지난 이벤트는 숨긴다.
 */
export default function EventRibbon({ event, variant = "strip", slug }: EventRibbonProps) {
  const active = useSyncExternalStore(subscribe, () => isEventActive(event), () => true);

  if (!active) return null;

  const lead = event.offers[0];

  if (variant === "strip") {
    return (
      <Link href={event.href} className="group block bg-[#0f3d3a] text-white">
        <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 py-3.5 sm:px-8 lg:justify-center lg:gap-5 lg:py-4">
          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-extrabold tracking-wider text-[#0f3d3a]">
            EVENT
          </span>
          <div className="min-w-0 flex-1 lg:flex-none">
            <p className="truncate text-[15px] font-bold lg:text-base">
              {event.title}
              <span className="hidden font-medium text-white/85 lg:inline">
                {" "}
                · {lead.name} {lead.optionLabel} {formatEventWon(lead.price)}
              </span>
            </p>
            <p className="truncate text-[13px] text-white/85 lg:hidden">
              {lead.name} {lead.optionLabel} {formatEventWon(lead.price)} · {event.periodText}
            </p>
          </div>
          <span className="hidden text-sm text-white/85 lg:inline">{event.periodText}</span>
          <span aria-hidden className="shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    );
  }

  const offer = slug ? event.offers.find((candidate) => candidate.slug === slug) : undefined;

  const detail = offer
    ? `${offer.optionLabel} ${formatEventWon(offer.price)}${offer.discount ? ` (${offer.discount}% 할인)` : ""}`
    : `토닝 ${lead.optionLabel}권 특별가`;

  const body = (
    <span className="min-w-0 flex-1 break-keep">
      <span className="block text-[12px] font-bold tracking-wide text-teal-700">EVENT · {event.periodText}</span>
      <span className="mt-0.5 block text-[15px] font-bold text-[#0f3d3a]">{event.title}</span>
      <span className="mt-0.5 block text-[13px] text-[#454545]">{detail}</span>
      {offer?.note ? <span className="mt-0.5 block text-[13px] font-semibold text-teal-700">+ {offer.note}</span> : null}
    </span>
  );

  const cardClass = "flex items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/70 px-4 py-3.5";

  if (offer) {
    return <div className={cardClass}>{body}</div>;
  }

  return (
    <Link href={event.href} className={`group ${cardClass} transition-colors hover:bg-teal-50`}>
      {body}
      <span aria-hidden className="shrink-0 text-[#0f3d3a] transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
