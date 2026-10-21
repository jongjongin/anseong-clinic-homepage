/**
 * 기간 한정 이벤트 — 홈 팝업·이벤트 띠·시술 상세 카드·자가 감별 결과에 쓴다.
 * 시술 이름·정가는 원장 가격표(lib/menu-items.ts)에서 가져오고,
 * 이벤트가는 원장이 확정한 값만 적는다(출처를 주석으로 남길 것).
 * 기간이 지나면 화면에서 자동으로 사라진다(서버는 1시간마다 다시 그리고, 브라우저도 시각을 확인).
 */
import { isEventActive, type EventOffer, type SiteEvent } from "@/lib/event-time";
import { getMenuItem } from "@/lib/menu-items";

export type { EventOffer, SiteEvent };

const stripPrefix = (title: string) => title.replace(/^\[[^\]]*\]\s*/, "");

/** 가격표의 시술·옵션에 이벤트가를 붙인다. 할인율은 가격표 정가(original) 기준. */
function offer(slug: string, optionLabel: string, price: number, note?: string): EventOffer {
  const item = getMenuItem(slug);
  const option = item?.options.find((candidate) => candidate.label === optionLabel);

  if (!item || !option) {
    throw new Error(`이벤트 시술을 가격표에서 찾을 수 없습니다: ${slug} / ${optionLabel}`);
  }

  const original = option.original ?? option.price;

  return {
    slug,
    name: stripPrefix(item.title),
    optionLabel,
    price,
    original,
    discount: original && original > price ? Math.round((1 - price / original) * 100) : undefined,
    note,
  };
}

/**
 * 가을 피부 이벤트 — 2026.9.1 ~ 10.31
 * 이벤트가는 원장이 10/16 보낸 단체 문자(제목 「공진단 기미토닝 이벤트 마감」) 그대로:
 * 듀얼토닝 10회 490,000원(스킨부스터 1회) · 라라필+물방울초음파 3회 199,000원.
 */
export const autumnSkinEvent: SiteEvent = {
  id: "autumn-skin-202610",
  title: "가을 피부 이벤트",
  subtitle: "기미엔 듀얼토닝 · 피부결엔 라라필",
  startsAt: "2026-09-01T00:00:00+09:00",
  endsAt: "2026-10-31T23:59:59+09:00",
  periodText: "10월 31일(토)까지",
  href: "/menu",
  offers: [offer("dual-toning", "10회", 490000, "스킨부스터 1회 포함"), offer("lala-peel", "+물방울 3회", 199000)],
  footnote: "부가세 포함 · 듀얼토닝은 매회 물방울초음파 6분 + 팩 마무리",
  inquiry: "가을 피부 이벤트(듀얼토닝·라라필) 상담을 원합니다.",
};

export const siteEvents: SiteEvent[] = [autumnSkinEvent];

/** 지금 진행 중인 첫 이벤트 (없으면 null) */
export function getActiveEvent(now: number = Date.now()) {
  return siteEvents.find((event) => isEventActive(event, now)) ?? null;
}

/** 이 시술 상세 페이지가 진행 중 이벤트에 들어 있으면 그 이벤트를 돌려준다 */
export function getActiveEventForMenu(slug: string, now: number = Date.now()) {
  return siteEvents.find((event) => isEventActive(event, now) && event.offers.some((o) => o.slug === slug)) ?? null;
}
