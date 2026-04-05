import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "회원정보 확인 | 안성경희365한의원",
  description: "네이버 로그인 회원정보 확인 예시 화면",
};

const memberFields = [
  { label: "회원이름", value: "김그린" },
  { label: "이메일 주소", value: "green1999@naver.com" },
  { label: "성별", value: "여성" },
  { label: "닉네임", value: "네이버김그린" },
  { label: "휴대전화번호", value: "010-1234-5678" },
  { label: "출생연도", value: "1999" },
  { label: "연령대", value: "20-29" },
  { label: "생일", value: "03-14" },
];

export default function ReviewsMemberInfoPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">
            Member Info
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            네이버 로그인 후 회원정보 확인 화면
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            검수용 화면에서는 네이버 로그인 후 제공받은 회원정보가 서비스 내부에서 어떻게 활용되는지 확인할 수 있어야 합니다.
          </p>

          <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white text-3xl font-bold text-slate-700">
                김
              </div>
              <div>
                <p className="text-sm font-semibold text-teal-700">프로필 사진</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">김그린님의 회원정보 관리</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  네이버 로그인으로 확인된 회원정보 예시 화면입니다.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {memberFields.map((field) => (
                <div
                  key={field.label}
                  className="grid gap-3 rounded-[1.4rem] border border-slate-200 bg-white p-5 md:grid-cols-[170px_1fr]"
                >
                  <p className="text-lg font-bold text-slate-900">{field.label}</p>
                  <p className="text-lg text-slate-700">{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reviews"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-800"
            >
              로그인 안내 화면으로 돌아가기
            </Link>
            <Link
              href="/reviews/list"
              className="inline-flex rounded-full border border-[#1ec800] bg-[#03c75a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#02b351]"
            >
              로그인 후 후기 화면 보기
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
