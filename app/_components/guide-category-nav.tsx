import Image from "next/image";
import Link from "next/link";

export type GuideCategory = "pain" | "herb" | "diet" | "beauty";

const categories: Array<{ key: GuideCategory; label: string; href: string }> = [
  { key: "pain", label: "통증", href: "/pain" },
  { key: "herb", label: "한약", href: "/herb" },
  { key: "diet", label: "다이어트", href: "/diet" },
  { key: "beauty", label: "미용", href: "/beauty" },
];

export const guideThemes = {
  pain: { tint: "#EFF6FF", accent: "#2563EB" },
  herb: { tint: "#F0F9F1", accent: "#2F9E62" },
  diet: { tint: "#FDF2F4", accent: "#D6336C" },
  beauty: { tint: "#F5F3FF", accent: "#7C3AED" },
} satisfies Record<GuideCategory, { tint: string; accent: string }>;

export default function GuideCategoryNav({ active }: { active: GuideCategory }) {
  const theme = guideThemes[active];

  return (
    <nav aria-label="안내 대분류" className="grid grid-cols-4 gap-1 border border-slate-200 bg-white p-1">
      {categories.map((category) => {
        const isActive = category.key === active;

        return (
          <Link
            key={category.key}
            href={category.href}
            aria-current={isActive ? "page" : undefined}
            style={{
              color: isActive ? "#ffffff" : "#64748b",
              backgroundColor: isActive ? theme.accent : undefined,
            }}
            className={`flex min-h-9 items-center justify-center px-1.5 text-center text-[11px] font-bold transition-colors sm:min-h-10 sm:text-sm ${
              isActive ? "text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function GuideSiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link href="/" aria-label="안성경희365한의원 메인 홈페이지">
          <div className="relative h-7 w-[150px] sm:h-9 sm:w-[190px]">
            <Image
              src="/assets/logo/logo-wordmark.png"
              alt="안성경희365한의원"
              fill
              className="object-contain object-left"
              sizes="190px"
              priority
            />
          </div>
        </Link>
        <Link
          href="/warning"
          className="border border-slate-300 px-2.5 py-1.5 text-[11px] font-bold text-slate-600 transition-colors hover:border-slate-500 sm:px-3 sm:py-2 sm:text-sm"
          style={{ color: "#475569" }}
        >
          전체 안내
        </Link>
      </div>
    </header>
  );
}

export function GuideHero({
  active,
  title,
  description,
}: {
  active: GuideCategory;
  title: string;
  description: string;
}) {
  const theme = guideThemes[active];

  return (
    <section className="mt-3 border-b border-slate-300 pb-4 sm:pb-5">
      <p className="text-xs font-bold" style={{ color: theme.accent }}>안성경희365한의원</p>
      <h1 className="mt-1 break-keep text-[26px] font-extrabold leading-tight tracking-[-0.04em] text-slate-800 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 max-w-3xl break-keep text-base leading-[1.6] text-slate-600">
        {description}
      </p>
    </section>
  );
}

export function GuideContact({ active }: { active: GuideCategory }) {
  const theme = guideThemes[active];

  return (
    <section className="mt-4 px-4 py-5 sm:px-5" style={{ backgroundColor: theme.accent, color: "#ffffff" }}>
      <h2 className="text-lg font-extrabold">궁금한 점이 있으신가요?</h2>
      <p className="mt-1 text-base leading-[1.6]" style={{ color: "#ffffff" }}>
        전화 또는 카카오톡 채널로 문의해 주세요.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <a
          href="tel:031-8057-0750"
          className="flex min-h-12 items-center justify-center bg-white px-2 py-2 text-center text-sm font-bold sm:text-base"
          style={{ color: "#334155" }}
        >
          전화 031-8057-0750
        </a>
        <a
          href="http://pf.kakao.com/_RWgxnG/chat"
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center bg-white px-2 py-2 text-center text-sm font-bold sm:text-base"
          style={{ color: "#334155" }}
        >
          카카오톡 채널
        </a>
      </div>
    </section>
  );
}
