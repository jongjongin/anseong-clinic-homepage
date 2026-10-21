"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { openReserveSheet } from "@/components/site/reserve-cta-button";
import { formatEventWon, isEventActive, type SiteEvent } from "@/lib/event-time";

const hideUntilKey = (id: string) => `event-popup:${id}:hide-until`;
const closedKey = (id: string) => `event-popup:${id}:closed`;

/** 다음 한국 시간 자정(ms) — "오늘 하루 보지 않기" 기준 */
const nextKstMidnight = (now: number) => {
  const offset = 9 * 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  return Math.floor((now + offset) / day) * day + day - offset;
};

const isHidden = (id: string) => {
  try {
    if (sessionStorage.getItem(closedKey(id)) === "1") return true;
    return Number(localStorage.getItem(hideUntilKey(id)) ?? 0) > Date.now();
  } catch {
    return false;
  }
};

/** 홈 첫 화면에만 뜨는 이벤트 팝업. 기간이 지나면 뜨지 않는다. */
export default function EventPopup({ events }: { events: SiteEvent[] }) {
  const pathname = usePathname();
  const [event, setEvent] = useState<SiteEvent | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const visible = event !== null && pathname === "/";

  useEffect(() => {
    if (pathname !== "/") return;

    const timer = window.setTimeout(() => {
      const active = events.find((candidate) => isEventActive(candidate) && !isHidden(candidate.id));
      if (active) setEvent(active);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [pathname, events]);

  const close = useCallback(
    (mode: "session" | "today") => {
      if (!event) return;
      try {
        if (mode === "today") {
          localStorage.setItem(hideUntilKey(event.id), String(nextKstMidnight(Date.now())));
        }
        sessionStorage.setItem(closedKey(event.id), "1");
      } catch {
        // 저장소가 막혀 있어도 지금 화면에서는 닫는다
      }
      setEvent(null);
    },
    [event],
  );

  useEffect(() => {
    if (!visible) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (keyEvent: KeyboardEvent) => {
      if (keyEvent.key === "Escape") close("session");
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible, close]);

  if (!visible || !event) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 px-4 py-6"
      onClick={() => close("session")}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-popup-title"
        onClick={(clickEvent) => clickEvent.stopPropagation()}
        className="flex max-h-full w-full max-w-[360px] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="min-h-0 overflow-y-auto">
          {event.poster ? (
            <>
              <h2 id="event-popup-title" className="sr-only">
                {event.title} · {event.periodText}
              </h2>
              <Link href={event.href} onClick={() => close("session")} className="block bg-[#f4f1ea]">
                <Image
                  src={event.poster.src}
                  width={event.poster.width}
                  height={event.poster.height}
                  alt={event.poster.alt}
                  sizes="360px"
                  className="h-auto max-h-[60svh] w-full object-contain"
                  priority
                />
              </Link>
            </>
          ) : (
            <>
              <div className="bg-[#0f3d3a] px-6 pb-6 pt-5 text-white">
                <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[12px] font-bold tracking-wide">
                  EVENT · {event.periodText}
                </p>
                <h2 id="event-popup-title" className="gb-font mt-3 text-[26px] font-bold leading-tight">
                  {event.title}
                </h2>
                <p className="mt-1.5 text-[14px] text-white/85">{event.subtitle}</p>
              </div>

              <ul className="divide-y divide-[#ececec] px-5">
                {event.offers.map((offer) => (
                  <li key={offer.slug} className="flex items-center justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="text-[15px] font-bold text-[#181818]">
                        {offer.name} <span className="text-[13px] font-medium text-[#5f5f5f]">{offer.optionLabel}</span>
                      </p>
                      {offer.note ? (
                        <p className="mt-0.5 text-[12px] font-semibold text-teal-700">+ {offer.note}</p>
                      ) : null}
                    </div>
                    <div className="shrink-0 text-right">
                      {offer.original ? (
                        <p className="text-[12px] text-[#5f5f5f]">
                          <del>{formatEventWon(offer.original)}</del>
                          {offer.discount ? <span className="ml-1 font-bold text-[#c2410c]">{offer.discount}%</span> : null}
                        </p>
                      ) : null}
                      <p className="text-[17px] font-extrabold text-[#0f3d3a]">{formatEventWon(offer.price)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="px-5 text-[12px] text-[#5f5f5f]">{event.footnote}</p>
            </>
          )}

          <div className="grid grid-cols-2 gap-2 px-5 pb-5 pt-4">
            <Link
              href={event.href}
              onClick={() => close("session")}
              className="rounded-full border border-[#0f3d3a] py-3 text-center text-[14px] font-bold text-[#0f3d3a] transition hover:bg-[#0f3d3a]/5"
            >
              자세히 보기
            </Link>
            <button
              type="button"
              onClick={() => {
                close("session");
                openReserveSheet(event.inquiry);
              }}
              className="rounded-full bg-[#0f3d3a] py-3 text-[14px] font-bold text-white transition hover:bg-[#0b2f2d]"
            >
              상담 예약
            </button>
          </div>
        </div>

        <div className="flex shrink-0 border-t border-[#ececec] text-[13px] text-[#454545]">
          <button type="button" onClick={() => close("today")} className="flex-1 py-3.5 transition hover:bg-[#f7f7f7]">
            오늘 하루 보지 않기
          </button>
          <span aria-hidden className="w-px bg-[#ececec]" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => close("session")}
            className="flex-1 py-3.5 font-semibold transition hover:bg-[#f7f7f7]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
