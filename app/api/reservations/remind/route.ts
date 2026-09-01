import { NextResponse } from "next/server";
import { listPendingReminders, markReminded } from "@/lib/reservations";
import { ADMIN_LINK, sendSlackMessage } from "@/lib/slack";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** 첫 알림 후 이 시간이 지나도 미처리면 리마인드 시작 */
const FIRST_DELAY_MINUTES = 10;
/** 리마인드 반복 간격 */
const REPEAT_MINUTES = 20;
/** 무한 반복 방지 상한 */
const MAX_REMINDERS = 12;

/** 진료시간(KST 09:00~20:00)에만 리마인드를 보낸다 */
const isBusinessHours = () => {
  const kstHour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Seoul",
      hour: "2-digit",
      hour12: false,
    }).format(new Date()),
  );

  return kstHour >= 9 && kstHour < 20;
};

const buildReminderText = (item: {
  name: string;
  phone: string;
  service: string;
  desired_date: string | null;
  desired_time: string;
  message: string;
  reminder_count: number;
  minutes_waiting: number;
}) => {
  const round = item.reminder_count + 1;
  const urgent = round >= 4;
  const waited =
    item.minutes_waiting >= 60
      ? `${Math.floor(item.minutes_waiting / 60)}시간 ${item.minutes_waiting % 60}분`
      : `${item.minutes_waiting}분`;

  const lines = [
    `${urgent ? "🚨" : "⏰"} *아직 차트에 등록되지 않은 상담 신청이 있습니다* (${round}번째 알림 · ${waited} 경과)`,
    `• 성함: ${item.name}`,
    `• 연락처: ${item.phone}`,
    `• 진료 항목: ${item.service || "-"}`,
    `• 희망일시: ${item.desired_date ?? "-"} ${item.desired_time}`,
  ];

  if (item.message) {
    lines.push(`• 문의 내용: ${item.message}`);
  }

  lines.push(`\nOK차트 등록 후 ${ADMIN_LINK} 를 눌러 '연락 완료'로 바꾸면 알림이 멈춥니다.`);

  return lines.join("\n");
};

const runReminders = async (force = false) => {
  if (!force && !isBusinessHours()) {
    return NextResponse.json({ ok: true, skipped: "outside-business-hours" });
  }

  const pending = await listPendingReminders({
    firstDelayMinutes: FIRST_DELAY_MINUTES,
    repeatMinutes: REPEAT_MINUTES,
    maxReminders: MAX_REMINDERS,
  });

  if (pending === null) {
    return NextResponse.json({ ok: false, error: "database-not-configured" }, { status: 503 });
  }

  let sent = 0;

  for (const item of pending) {
    try {
      const delivered = await sendSlackMessage(buildReminderText(item));

      if (delivered) {
        await markReminded(item.id);
        sent += 1;
      }
    } catch (error) {
      console.error("[reservations/remind] failed for id", item.id, error);
    }
  }

  return NextResponse.json({ ok: true, pending: pending.length, sent });
};

/** ?force=1 을 붙이면 진료시간 밖에서도 실행한다 (테스트용, 리마인드 간격은 그대로 지킴) */
const isForced = (request: Request) =>
  new URL(request.url).searchParams.get("force") === "1";

export async function GET(request: Request) {
  return runReminders(isForced(request));
}

export async function POST(request: Request) {
  return runReminders(isForced(request));
}
