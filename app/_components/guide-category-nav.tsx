import Link from "next/link";

export type GuideCategory = "pain" | "herb" | "diet" | "beauty";

const categories: Array<{ key: GuideCategory; label: string; href: string }> = [
  { key: "pain", label: "통증", href: "/pain" },
  { key: "herb", label: "한약", href: "/herb" },
  { key: "diet", label: "다이어트", href: "/diet" },
  { key: "beauty", label: "미용", href: "/beauty" },
];

export default function GuideCategoryNav({ active }: { active: GuideCategory }) {
  return (
    <nav aria-label="안내 대분류" className="grid grid-cols-4 gap-1 border border-slate-200 bg-white p-1">
      {categories.map((category) => {
        const isActive = category.key === active;

        return (
          <Link
            key={category.key}
            href={category.href}
            aria-current={isActive ? "page" : undefined}
            style={{ color: isActive ? "#ffffff" : "#64748b" }}
            className={`flex min-h-9 items-center justify-center px-1.5 text-center text-[11px] font-bold transition-colors sm:min-h-10 sm:text-sm ${
              isActive
                ? "bg-slate-900 text-white"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}
