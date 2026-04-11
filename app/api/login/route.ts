import { NextResponse } from "next/server";
import {
  SESSION_COOKIE_NAME,
  createSessionValue,
  getAuthConfig,
  getSessionCookieOptions,
  validateCredentials,
} from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as {
    email?: string;
    password?: string;
  };

  const trimmedEmail = String(email ?? "").trim();
  const trimmedPassword = String(password ?? "").trim();

  if (!trimmedEmail || !trimmedPassword) {
    return NextResponse.json(
      { error: "이메일과 비밀번호를 모두 입력해 주세요." },
      { status: 400 },
    );
  }

  const isValid = await validateCredentials(trimmedEmail, trimmedPassword);

  if (!isValid) {
    return NextResponse.json(
      { error: "이메일 또는 비밀번호가 맞지 않습니다." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    SESSION_COOKIE_NAME,
    createSessionValue(trimmedEmail, getAuthConfig().secret),
    getSessionCookieOptions(),
  );

  return response;
}
