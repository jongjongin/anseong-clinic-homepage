import { NextResponse } from "next/server";
import { createReservation, validateReservationInput } from "@/lib/reservations";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
};

const sendNotificationEmail = async (input: {
  name: string;
  phone: string;
  service: string;
  desiredDate: string;
  desiredTime: string;
  message: string;
}) => {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESERVATION_NOTIFY_EMAIL;

  if (!apiKey || !to) {
    return false;
  }

  const from = process.env.RESERVATION_FROM_EMAIL ?? "onboarding@resend.dev";
  const escape = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `안성경희365한의원 홈페이지 <${from}>`,
      to: [to],
      subject: `[상담신청] ${input.name} · ${input.desiredDate} ${input.desiredTime}`,
      html: `
        <h2>새 상담 신청이 접수되었습니다</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><b>성함</b></td><td>${escape(input.name)}</td></tr>
          <tr><td><b>연락처</b></td><td>${escape(input.phone)}</td></tr>
          <tr><td><b>진료 항목</b></td><td>${escape(input.service || "-")}</td></tr>
          <tr><td><b>희망일</b></td><td>${escape(input.desiredDate)}</td></tr>
          <tr><td><b>예약시간</b></td><td>${escape(input.desiredTime)}</td></tr>
          <tr><td><b>문의 내용</b></td><td>${escape(input.message || "-")}</td></tr>
        </table>
      `,
    }),
  });

  return response.ok;
};

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // 허니팟: 봇이 채우는 숨은 필드 — 채워져 있으면 조용히 성공 처리
  if (typeof body === "object" && body !== null && (body as Record<string, unknown>).company) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "요청이 너무 잦습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 },
    );
  }

  const validated = validateReservationInput(body);

  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  let savedToDb = false;
  let emailSent = false;

  try {
    savedToDb = await createReservation(validated.value);
  } catch (error) {
    console.error("[reservations] DB insert failed:", error);
  }

  try {
    emailSent = await sendNotificationEmail(validated.value);
  } catch (error) {
    console.error("[reservations] email notification failed:", error);
  }

  if (!savedToDb && !emailSent) {
    return NextResponse.json(
      {
        error:
          "현재 온라인 예약 접수가 어렵습니다. 전화(031-8057-0750) 또는 카카오톡으로 문의해 주세요.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
