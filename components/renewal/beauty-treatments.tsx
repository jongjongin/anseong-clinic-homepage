import Image from "next/image";
import Link from "next/link";
import { formatWon, menuItems } from "@/lib/menu-items";

/** 미용 진료 상세에서 전체 시술 메뉴를 보여주는 섹션 */
export default function BeautyTreatments() {
  return (
    <section id="beauty-menu" className="bg-[#f8f8f8]">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mar-font text-xs tracking-[0.3em] text-[#959595]">TREATMENT MENU</p>
            <h2 className="gb-font mt-3 break-keep text-xl font-bold text-[#181818] sm:text-3xl">
              피부 미용 시술 전체 보기
            </h2>
            <p className="mt-3 break-keep text-[13px] text-[#959595] sm:text-sm">
              카드를 누르면 시술별 상세 메뉴판과 가격을 확인할 수 있습니다. (부가세 포함)
            </p>
          </div>
          <Link
            href="/menu"
            className="mar-font group flex shrink-0 items-center gap-2 text-sm tracking-[0.2em] text-[#181818] transition-opacity hover:opacity-60"
          >
            VIEW ALL
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems.map((item) => (
            <Link key={item.slug} href={`/menu/${item.slug}`} className="group flex flex-col gap-3.5">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-teal-700">{item.categoryLabel}</p>
                <p className="mt-1 break-keep text-[14px] font-bold leading-snug text-[#181818] transition-colors group-hover:text-teal-700">
                  {item.title}
                </p>
                <p className="mt-1 text-[14px] font-extrabold text-[#181818]">
                  {item.priceFrom > 0 ? (
                    <>
                      {formatWon(item.priceFrom)} <span className="font-medium text-[#999]">~</span>
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
    </section>
  );
}
