import { neon } from "@neondatabase/serverless";

export type SqlClient = ReturnType<typeof neon>;

let cachedSql: SqlClient | null = null;
let tableReady: Promise<void> | null = null;

export function getSql(): SqlClient | null {
  const url = process.env.DATABASE_URL;

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
    `.then(() => undefined);
  }

  return tableReady;
}
