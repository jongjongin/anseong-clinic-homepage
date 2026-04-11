import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/login-form";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "로그인 | 안성경희365한의원",
  description: "안성경희365한의원 로그인",
};

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/reviews/list");
  }

  return (
    <main className="min-h-screen bg-[#fcfcfb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">Login</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            진료후기 확인을 위한 로그인
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            병원에서 관리하는 이메일과 비밀번호로 로그인한 뒤 진료후기를 확인할 수 있도록 구성합니다.
          </p>

          <LoginForm />

          <p className="mt-4 text-sm leading-6 text-slate-500">
            지금은 가장 단순한 1개 계정 로그인 방식부터 시작합니다. 나중에 계정 추가나 비밀번호 변경 기능으로 확장할 수 있습니다.
          </p>
          <div className="mt-5 rounded-[1.5rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-800">
            테스트 로그인 계정
            <br />
            이메일: admin@anseong365.com
            <br />
            비밀번호: Anseong365!2026
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">Process</p>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            직접 관리하는 로그인은 이런 순서로 만듭니다
          </h2>
          <div className="mt-8 space-y-4">
            {[
              "1. 로그인 페이지를 만들고 이메일/비밀번호 입력 화면을 준비합니다.",
              "2. 비밀번호가 맞는지 확인하는 인증 로직을 붙입니다.",
              "3. 로그인 상태를 유지할 수 있도록 세션 쿠키를 만듭니다.",
              "4. 후기 페이지는 로그인한 사용자만 볼 수 있게 보호합니다.",
              "5. 나중에는 사용자 추가, 비밀번호 변경, 로그아웃까지 확장합니다.",
            ].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reviews"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
            >
              후기 안내 화면 보기
            </Link>
            <Link
              href="/reviews/list"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
            >
              로그인 후 후기 예시 보기
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
