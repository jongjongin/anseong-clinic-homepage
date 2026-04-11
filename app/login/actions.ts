"use server";

import { redirect } from "next/navigation";
import { clearSession, createSession, validateCredentials } from "@/lib/auth";

export type LoginFormState = {
  error?: string;
};

export const loginAction = async (
  _prevState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> => {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!email || !password) {
    return { error: "이메일과 비밀번호를 모두 입력해 주세요." };
  }

  const isValid = await validateCredentials(email, password);

  if (!isValid) {
    return { error: "이메일 또는 비밀번호가 맞지 않습니다." };
  }

  await createSession(email);
  redirect("/reviews/list");
};

export const logoutAction = async () => {
  await clearSession();
  redirect("/login");
};
