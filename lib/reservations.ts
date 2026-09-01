import { ensureReservationsTable, getSql } from "@/lib/db";

export const RESERVATION_TIME_SLOTS = (() => {
  const slots: string[] = [];
  for (let hour = 9; hour < 20; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
})();

export const RESERVATION_STATUSES = ["new", "contacted", "done"] as const;
export type ReservationStatus = (typeof RESERVATION_STATUSES)[number];

export type ReservationInput = {
  name: string;
  phone: string;
  service: string;
  desiredDate: string;
  desiredTime: string;
  message: string;
  privacyAgreed: boolean;
};

export type ReservationRow = {
  id: number;
  name: string;
  phone: string;
  service: string;
  desired_date: string | null;
  desired_time: string;
  message: string;
  privacy_agreed: boolean;
  status: string;
  created_at: string;
};

const PHONE_PATTERN = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

const todayIso = () => {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
};

export function validateReservationInput(
  input: unknown,
): { ok: true; value: ReservationInput } | { ok: false; error: string } {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "잘못된 요청입니다." };
  }

  const data = input as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const service = typeof data.service === "string" ? data.service.trim() : "";
  const desiredDate = typeof data.desiredDate === "string" ? data.desiredDate.trim() : "";
  const desiredTime = typeof data.desiredTime === "string" ? data.desiredTime.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const privacyAgreed = data.privacyAgreed === true;

  if (!name || name.length > 40) {
    return { ok: false, error: "성함을 확인해 주세요." };
  }

  if (!PHONE_PATTERN.test(phone)) {
    return { ok: false, error: "연락처를 확인해 주세요. 예) 010-1234-5678" };
  }

  if (service.length > 60) {
    return { ok: false, error: "진료 항목을 확인해 주세요." };
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(desiredDate) || Number.isNaN(Date.parse(desiredDate))) {
    return { ok: false, error: "희망일을 선택해 주세요." };
  }

  if (desiredDate < todayIso()) {
    return { ok: false, error: "희망일은 오늘 이후 날짜로 선택해 주세요." };
  }

  if (!RESERVATION_TIME_SLOTS.includes(desiredTime)) {
    return { ok: false, error: "예약시간을 선택해 주세요." };
  }

  if (message.length > 1000) {
    return { ok: false, error: "문의 내용은 1,000자 이내로 작성해 주세요." };
  }

  if (!privacyAgreed) {
    return { ok: false, error: "개인정보 수집·이용에 동의해 주세요." };
  }

  return {
    ok: true,
    value: { name, phone, service, desiredDate, desiredTime, message, privacyAgreed },
  };
}

export async function createReservation(input: ReservationInput): Promise<boolean> {
  const sql = getSql();

  if (!sql) {
    return false;
  }

  await ensureReservationsTable(sql);
  await sql`
    INSERT INTO reservations (name, phone, service, desired_date, desired_time, message, privacy_agreed)
    VALUES (${input.name}, ${input.phone}, ${input.service}, ${input.desiredDate}, ${input.desiredTime}, ${input.message}, ${input.privacyAgreed})
  `;

  return true;
}

export async function listReservations(): Promise<ReservationRow[] | null> {
  const sql = getSql();

  if (!sql) {
    return null;
  }

  await ensureReservationsTable(sql);
  const rows = await sql`
    SELECT id, name, phone, service, desired_date::text, desired_time, message, privacy_agreed, status, created_at::text
    FROM reservations
    ORDER BY created_at DESC
    LIMIT 500
  `;

  return rows as ReservationRow[];
}

export async function updateReservationStatus(id: number, status: ReservationStatus) {
  const sql = getSql();

  if (!sql || !RESERVATION_STATUSES.includes(status)) {
    return;
  }

  await ensureReservationsTable(sql);
  await sql`UPDATE reservations SET status = ${status} WHERE id = ${id}`;
}

export type PendingReminder = {
  id: number;
  name: string;
  phone: string;
  service: string;
  desired_date: string | null;
  desired_time: string;
  message: string;
  reminder_count: number;
  minutes_waiting: number;
};

/** 아직 차트에 등록되지 않은(status='new') 신청 중 리마인드가 필요한 건들 */
export async function listPendingReminders(options: {
  firstDelayMinutes: number;
  repeatMinutes: number;
  maxReminders: number;
}): Promise<PendingReminder[] | null> {
  const sql = getSql();

  if (!sql) {
    return null;
  }

  await ensureReservationsTable(sql);

  const rows = await sql`
    SELECT
      id, name, phone, service, desired_date::text, desired_time, message,
      reminder_count,
      FLOOR(EXTRACT(EPOCH FROM (now() - created_at)) / 60)::int AS minutes_waiting
    FROM reservations
    WHERE status = 'new'
      AND reminder_count < ${options.maxReminders}
      AND created_at < now() - make_interval(mins => ${options.firstDelayMinutes})
      AND (
        last_reminded_at IS NULL
        OR last_reminded_at < now() - make_interval(mins => ${options.repeatMinutes})
      )
    ORDER BY created_at ASC
    LIMIT 20
  `;

  return rows as PendingReminder[];
}

export async function markReminded(id: number) {
  const sql = getSql();

  if (!sql) {
    return;
  }

  await sql`
    UPDATE reservations
    SET reminder_count = reminder_count + 1, last_reminded_at = now()
    WHERE id = ${id}
  `;
}
