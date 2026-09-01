import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReserveCtaButton from "@/components/site/reserve-cta-button";
import { formatWon, getMenuCategory, getMenuItem, menuItems } from "@/lib/menu-items";
import { siteContact } from "@/lib/site-nav";

export const dynamicParams = false;

export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuItem(slug);

  return {
    title: item ? item.title : "시술메뉴",
    robots: { index: false, follow: false },
  };
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getMenuItem(slug);

  if (!item) {
    notFound();
  }

  const category = getMenuCategory(item.category);
  const related = menuItems
    .filter((other) => other.category === item.category && other.slug !== item.slug)
    .slice(0, 4);

  return (
    <main className="bg-white pt-20 lg:pt-44">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-24 sm:px-8">
        <nav className="flex items-center gap-2 py-5 text-xs text-[#999]">
          <Link href="/renewal" className="transition-colors hover:text-teal-700">
            홈
          </Link>
          <span aria-hidden>›</span>
          <Link href="/renewal/menu" className="transition-colors hover:text-teal-700">
            시술메뉴/이벤트
          </Link>
          <span aria-hidden>›</span>
          <Link
            href={`/renewal/menu?category=${item.category}`}
            className="transition-colors hover:text-teal-700"
          >
            {item.categoryLabel}
          </Link>
        </nav>

        {/* 상단: 이미지 + 메뉴판 */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#f8f8f8]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-teal-700">{item.categoryLabel}</p>
            <h1 className="gb-font mt-2.5 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-3xl">
              {item.title}
            </h1>
            <p className="mt-2 break-keep text-sm leading-relaxed text-[#888]">{item.subtitle}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.hashtags.map((tag) => (
                <span key={tag} className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
                  {tag}
                </span>
              ))}
            </div>

            {/* 하위 메뉴판 */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-[#eee]">
              <div className="flex items-center justify-between bg-[#f8f8f8] px-5 py-3">
                <p className="text-sm font-bold text-[#181818]">메뉴판</p>
                <p className="text-xs text-[#999]">{item.eventLabel}</p>
              </div>
              <ul className="divide-y divide-[#f2f2f2]">
                {item.options.map((option) => (
                  <li key={option.label} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                    <div className="min-w-0">
                      <p className="break-keep text-sm font-medium text-[#333]">{option.label}</p>
                      {option.note ? <p className="mt-0.5 text-xs text-teal-700">{option.note}</p> : null}
                    </div>
                    <p className="shrink-0 text-right">
                      {option.original ? (
                        <del className="mr-2 text-xs text-[#bbb]">{formatWon(option.original)}</del>
                      ) : null}
                      {option.price ? (
                        <span className="text-[15px] font-extrabold text-[#181818]">
                          {formatWon(option.price)}
                        </span>
                      ) : (
                        <span className="text-[13px] font-bold text-teal-700">상담 후 안내</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {item.included?.length ? (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.included.map((line) => (
                  <li key={line} className="rounded-full border border-[#eee] px-3 py-1 text-xs text-[#777]">
                    ✓ {line}
                  </li>
                ))}
              </ul>
            ) : null}

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {item.schedule ? (
                <div className="rounded-xl bg-[#f8f8f8] px-4 py-3">
                  <dt className="text-xs text-[#999]">횟수 · 간격</dt>
                  <dd className="mt-1 break-keep font-semibold text-[#333]">{item.schedule}</dd>
                </div>
              ) : null}
              {item.recovery ? (
                <div className="rounded-xl bg-[#f8f8f8] px-4 py-3">
                  <dt className="text-xs text-[#999]">회복</dt>
                  <dd className="mt-1 break-keep font-semibold text-[#333]">{item.recovery}</dd>
                </div>
              ) : null}
            </dl>

            {item.description ? (
              <p className="mt-5 break-keep rounded-2xl border border-teal-100 bg-teal-50/60 px-5 py-4 text-sm leading-relaxed text-slate-700">
                {item.description}
              </p>
            ) : null}

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <ReserveCtaButton className="flex-1 rounded-full bg-teal-700 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-teal-800">
                이 시술 상담신청
              </ReserveCtaButton>
              <a
                href={siteContact.kakaoChatUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-[#E2C400] bg-[#FEE500] px-7 py-3.5 text-center text-sm font-semibold text-[#191919] transition hover:bg-[#F7DE00]"
              >
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>

        {/* 하단: 상담 포인트 + 전/후 안내 */}
        {category ? (
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#eee] p-6">
              <h2 className="text-sm font-bold text-[#181818]">이런 경우 상담해 보세요</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {category.concerns.map((line) => (
                  <li key={line} className="flex items-start gap-2 break-keep text-sm leading-relaxed text-[#666]">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-teal-700" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#eee] p-6">
              <h2 className="text-sm font-bold text-[#181818]">시술 전에는</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {category.preCare.map((line) => (
                  <li key={line} className="flex items-start gap-2 break-keep text-sm leading-relaxed text-[#666]">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-teal-700" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#eee] p-6">
              <h2 className="text-sm font-bold text-[#181818]">시술 후에는</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {category.postCare.map((line) => (
                  <li key={line} className="flex items-start gap-2 break-keep text-sm leading-relaxed text-[#666]">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 bg-teal-700" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        {/* 같은 카테고리 시술 */}
        {related.length > 0 ? (
          <div className="mt-16">
            <div className="flex items-end justify-between">
              <h2 className="gb-font text-lg font-bold text-[#181818]">같은 고민의 다른 시술</h2>
              <Link
                href={`/renewal/menu?category=${item.category}`}
                className="text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
              >
                {item.categoryLabel} 전체 보기 →
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
              {related.map((other) => (
                <Link key={other.slug} href={`/renewal/menu/${other.slug}`} className="group flex flex-col gap-3">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#f8f8f8]">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width:1024px) 25vw, 50vw"
                    />
                  </div>
                  <div>
                    <p className="break-keep text-sm font-bold leading-snug text-[#181818] transition-colors group-hover:text-teal-700">
                      {other.title}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-[#181818]">
                      {other.priceFrom > 0 ? (
                        <>
                          {formatWon(other.priceFrom)} <span className="font-medium text-[#999]">~</span>
                        </>
                      ) : (
                        <span className="font-bold text-teal-700">상담 후 안내</span>
                      )}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <p className="mt-14 text-center text-[11px] text-[#aaa]">
          부가세 포함 금액 · 병변 상태에 따라 비용이 달라질 수 있습니다 · 2026.08 기준
        </p>
      </div>
    </main>
  );
}
