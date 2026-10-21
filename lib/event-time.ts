/**
 * 이벤트 타입과 기간 판정 — 브라우저 코드에서도 쓰므로 가격표 같은 큰 데이터를 가져오지 않는다.
 * 이벤트 내용(가격)은 lib/events.ts 에 있다.
 */

export type EventOffer = {
  slug: string;
  name: string;
  optionLabel: string;
  price: number;
  original?: number;
  /** 할인율(%) — 정가가 있을 때만 */
  discount?: number;
  note?: string;
};

export type SiteEvent = {
  id: string;
  title: string;
  subtitle: string;
  /** KST 기준 ISO 시각 */
  startsAt: string;
  endsAt: string;
  periodText: string;
  href: string;
  offers: EventOffer[];
  footnote: string;
  /** 예약 시트 문의 내용에 미리 채울 문구 */
  inquiry: string;
  /** 포스터 이미지가 생기면 넣는다 (public/ 아래 경로). 있으면 팝업이 포스터를 보여 준다. */
  poster?: { src: string; width: number; height: number; alt: string };
};

export function isEventActive(event: Pick<SiteEvent, "startsAt" | "endsAt">, now: number = Date.now()) {
  return now >= Date.parse(event.startsAt) && now <= Date.parse(event.endsAt);
}

export const formatEventWon = (value: number) => `${value.toLocaleString("ko-KR")}원`;
