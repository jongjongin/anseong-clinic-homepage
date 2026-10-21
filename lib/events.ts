/**
 * 기간 한정 이벤트 — 홈 팝업·이벤트 띠에 쓴다.
 * 가격은 원장 가격표(lib/menu-items.ts)에서 그대로 가져온다. 여기서 숫자를 새로 적지 말 것.
 * 기간이 지나면 화면에서 자동으로 사라진다(서버는 1시간마다 다시 그리고, 브라우저도 시각을 확인).
 */
import { isEventActive, type EventOffer, type SiteEvent } from "@/lib/event-time";
import { getMenuItem } from "@/lib/menu-items";

export type { EventOffer, SiteEvent };

const stripPrefix = (title: string) => title.replace(/^\[[^\]]*\]\s*/, "");

function offer(slug: string, optionLabel: string): EventOffer {
  const item = getMenuItem(slug);
  const option = item?.options.find((candidate) => candidate.label === optionLabel);

  if (!item || !option || option.price === undefined) {
    throw new Error(`이벤트 가격을 가격표에서 찾을 수 없습니다: ${slug} / ${optionLabel}`);
  }

  return {
    slug,
    name: stripPrefix(item.title),
    optionLabel,
    price: option.price,
    original: option.original,
    discount: option.original ? Math.round((1 - option.price / option.original) * 100) : undefined,
    note: option.note,
  };
}

/** 앤디야그(Nd:YAG, 큐마스터플러스) 토닝 이벤트 — 2026.9.1 ~ 10.31 */
export const ndyagEvent: SiteEvent = {
  id: "ndyag-toning-202609",
  title: "앤디야그 토닝 이벤트",
  subtitle: "기미·잡티·홍조 10회권 특별가",
  startsAt: "2026-09-01T00:00:00+09:00",
  endsAt: "2026-10-31T23:59:59+09:00",
  periodText: "10월 31일(토)까지",
  href: "/menu/dual-toning",
  offers: [offer("dual-toning", "10회"), offer("laser-toning", "10회"), offer("genesis", "10회")],
  footnote: "부가세 포함 · 매회 물방울초음파 6분 + 팩 마무리",
  inquiry: "앤디야그 토닝 이벤트 상담을 원합니다.",
};

export const siteEvents: SiteEvent[] = [ndyagEvent];

/** 지금 진행 중인 첫 이벤트 (없으면 null) */
export function getActiveEvent(now: number = Date.now()) {
  return siteEvents.find((event) => isEventActive(event, now)) ?? null;
}

/** 이 시술 상세 페이지가 진행 중 이벤트에 들어 있으면 그 이벤트를 돌려준다 */
export function getActiveEventForMenu(slug: string, now: number = Date.now()) {
  return siteEvents.find((event) => isEventActive(event, now) && event.offers.some((o) => o.slug === slug)) ?? null;
}
