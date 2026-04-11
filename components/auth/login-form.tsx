"use client";

import { useActionState } from "react";
import { loginAction, type LoginFormState } from "@/app/login/actions";

const initialState: LoginFormState = {};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-800" htmlFor="login-email">
          이메일
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-800" htmlFor="login-password">
          비밀번호
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400"
          required
        />
      </div>

      {state.error ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {state.error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isPending ? "로그인 확인 중..." : "로그인"}
      </button>
    </form>
  );
}
