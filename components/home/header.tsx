import Image from "next/image";
import Link from "next/link";
import { headerMenuItems } from "@/components/home/content";
import LogoWordmark from "@/components/home/logo-wordmark";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white">
            <Image src="/assets/logo/logo.png" alt="안성경희365한의원 로고" fill className="object-contain p-1.5" sizes="44px" />
          </div>
          <LogoWordmark className="hidden sm:block" />
          <div className="sm:hidden">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-teal-700 uppercase">Anseong Clinic</p>
            <p className="mt-1 text-base font-bold text-slate-900">안성경희365한의원</p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {headerMenuItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.label} href={item.href} className="transition-colors hover:text-sky-700">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="transition-colors hover:text-sky-700">
                {item.label}
              </a>
            ),
          )}
        </nav>

        <a
          href="#consult"
          className="shrink-0 rounded-full border border-sky-700 bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 sm:px-5"
        >
          상담 예약
        </a>
      </div>
    </header>
  );
}
