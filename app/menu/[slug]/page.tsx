import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MenuProducts from "@/components/renewal/menu-products";
import { menuDetailSections, menuProductFeatures } from "@/lib/menu-details";
import { formatWon, getMenuCategory, getMenuItem, menuItems } from "@/lib/menu-items";

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
  const features = menuProductFeatures[item.slug] ?? [];
  const detailSections = menuDetailSections[item.slug] ?? [];
  const related = menuItems
    .filter((other) => other.category === item.category && other.slug !== item.slug)
    .slice(0, 4);

  return (
    <main className="bg-white pt-20 lg:pt-44">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-24 sm:px-8">
        <nav className="flex items-center gap-2 py-5 text-xs text-[#999]">
          <Link href="/" className="transition-colors hover:text-teal-700">
            홈
          </Link>
          <span aria-hidden>›</span>
          <Link href="/menu" className="transition-colors hover:text-teal-700">
            시술메뉴/이벤트
          </Link>
          <span aria-hidden>›</span>
          <Link
            href={`/menu?category=${item.category}`}
            className="transition-colors hover:text-teal-700"
          >
            {item.categoryLabel}
          </Link>
        </nav>

        {/* 상단: 이미지 + 시술 상품 */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="lg:sticky lg:top-40 lg:self-start">
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
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-teal-700">{item.categoryLabel}</p>
            <h1 className="gb-font mt-2.5 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-3xl">
              {item.title}
            </h1>
            <p className="mt-3 break-keep text-sm leading-[1.8] text-[#6d6d6d]">
              {item.description ?? item.subtitle}
              {" (부가세 포함)"}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.hashtags.map((tag) => (
                <span key={tag} className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
                  {tag}
                </span>
              ))}
            </div>

            <MenuProducts itemTitle={item.title} options={item.options} productFeatures={features} />

            {item.included?.length ? (
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {item.included.map((line) => (
                  <li key={line} className="rounded-full border border-[#eee] px-3 py-1 text-xs text-[#777]">
                    ✓ {line}
                  </li>
                ))}
              </ul>
            ) : null}

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
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
          </div>
        </div>

        {/* TREATMENT DETAIL — 시술 상세 */}
        {detailSections.length > 0 ? (
          <section className="mx-auto mt-20 max-w-3xl">
            <div className="text-center">
              <p className="mar-font text-xs tracking-[0.3em] text-[#959595]">TREATMENT DETAIL</p>
              <h2 className="gb-font mt-3 text-2xl font-bold text-[#181818]">시술 상세</h2>
            </div>
            <div className="mt-10 flex flex-col gap-10">
              {detailSections.map((section, index) => (
                <div key={section.heading}>
                  <h3 className="gb-font break-keep text-lg font-bold text-[#181818]">
                    {index + 1}. {section.heading}
                  </h3>
                  <div className="mt-3 flex flex-col gap-3">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="break-keep text-sm leading-[1.9] text-[#6d6d6d]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* 상담 포인트 + 전/후 안내 */}
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
                href={`/menu?category=${item.category}`}
                className="text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
              >
                {item.categoryLabel} 전체 보기 →
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
              {related.map((other) => (
                <Link key={other.slug} href={`/menu/${other.slug}`} className="group flex flex-col gap-3">
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
