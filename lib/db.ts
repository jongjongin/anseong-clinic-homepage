import { neon } from "@neondatabase/serverless";

export type SqlClient = ReturnType<typeof neon>;

let cachedSql: SqlClient | null = null;
let tableReady: Promise<void> | null = null;

export function getSql(): SqlClient | null {
  // Vercel-Neon 연동은 환경에 따라 다른 이름으로 URL을 만든다
  const url =
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL ??
    process.env.DATABASE_URL_UNPOOLED ??
    process.env.POSTGRES_PRISMA_URL;

  if (!url) {
    return null;
  }

  if (!cachedSql) {
    cachedSql = neon(url);
  }

  return cachedSql;
}

export function ensureReservationsTable(sql: SqlClient): Promise<void> {
  if (!tableReady) {
    tableReady = sql`
      CREATE TABLE IF NOT EXISTS reservations (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        service TEXT NOT NULL DEFAULT '',
        desired_date DATE,
        desired_time TEXT NOT NULL DEFAULT '',
        message TEXT NOT NULL DEFAULT '',
        privacy_agreed BOOLEAN NOT NULL DEFAULT false,
        status TEXT NOT NULL DEFAULT 'new',
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `
      .then(
        () =>
          // 차트 등록 리마인더 추적용 (기존 테이블에도 안전하게 추가)
          sql`
            ALTER TABLE reservations
              ADD COLUMN IF NOT EXISTS reminder_count INT NOT NULL DEFAULT 0,
              ADD COLUMN IF NOT EXISTS last_reminded_at TIMESTAMPTZ
          `,
      )
      .then(() => undefined);
  }

  return tableReady;
}
