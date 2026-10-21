import type { Metadata } from "next";
import Link from "next/link";
import { siteContact } from "@/lib/site-nav";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: true },
};

const shortcuts = [
  { href: "/", title: "홈", description: "병원 안내 보기" },
  { href: "/menu", title: "시술메뉴·이벤트", description: "시술과 혜택 보기" },
  { href: "/services", title: "진료과목", description: "진료 안내 보기" },
  { href: "/skin-check", title: "1분 피부 자가 감별", description: "내 피부 확인하기" },
];

export default function NotFound() {
  return (
    <main className="bg-white pt-8 pb-24 lg:pt-12">
      <div className="mx-auto w-full max-w-[720px] px-4 sm:px-8">
        <p className="mar-font text-xs tracking-[0.3em] text-[#5f5f5f]">404</p>
        <h1 className="gb-font mt-4 break-keep text-2xl font-bold leading-snug text-[#181818] lg:text-4xl">
          찾으시는 페이지가 없습니다
        </h1>
        <p className="mt-4 text-[13px] leading-relaxed text-[#454545] sm:text-[15px]">
          주소가 바뀌었거나 삭제된 페이지입니다.
        </p>

        <nav aria-label="바로가기" className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
          {shortcuts.map((shortcut) => (
            <Link
              key={shortcut.href}
              href={shortcut.href}
              className="group rounded-2xl border border-[#e5e5e5] bg-white p-3 transition-colors hover:border-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 sm:p-5"
            >
              <span className="block break-keep text-[15px] font-bold text-[#181818] group-hover:text-teal-700">
                {shortcut.title}
              </span>
              <span className="mt-2 block text-[13px] text-[#5f5f5f]">
                {shortcut.description}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
          <a
            href={siteContact.phoneHref}
            className="flex min-h-16 flex-col items-center justify-center rounded-full bg-[#0f3d3a] px-3 py-3 text-center text-sm font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            전화 문의
            <span className="mt-1 text-[13px] font-normal">{siteContact.phone}</span>
          </a>
          <a
            href={siteContact.kakaoChatUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-16 items-center justify-center rounded-full bg-[#FEE500] px-3 py-3 text-center text-sm font-bold text-[#191919] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            카카오톡 상담
            <span className="sr-only"> (새 창)</span>
          </a>
        </div>
      </div>
    </main>
  );
}
