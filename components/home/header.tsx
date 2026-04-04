import { headerMenuItems } from "@/components/home/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-teal-700 uppercase sm:text-xs">
            Anseong Clinic
          </p>
          <p className="mt-1 text-base font-bold text-slate-900 sm:text-xl">안성경희365한의원</p>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {headerMenuItems.map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-sky-700">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#consult"
          className="shrink-0 rounded-full bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 sm:px-5"
        >
          상담 예약
        </a>
      </div>
    </header>
  );
}
