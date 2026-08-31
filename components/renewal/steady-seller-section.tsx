import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/home/reveal";
import SteadySellerCarousel from "@/components/renewal/steady-seller-carousel";

export default function SteadySellerSection() {
  return (
    <section id="beauty-menu" className="relative overflow-hidden py-20 text-white lg:py-28">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/interior/interior-1.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">Steady Seller</p>
              <h2 className="mt-3 break-keep text-2xl font-bold leading-snug sm:text-4xl">
                합리적인 가격과 진정성 있는 치료로
                <br className="hidden sm:block" /> 확실한 변화를 보여드리겠습니다
              </h2>
              <p className="mt-3 break-keep text-sm leading-relaxed text-white/70 sm:text-base">
                피부 미용 프로그램 가격표 — 카테고리를 눌러 원하는 시술을 확인해 보세요.
              </p>
            </div>
            <Link
              href="/services/beauty"
              className="group flex shrink-0 items-center gap-2 text-sm font-bold tracking-widest transition-opacity hover:opacity-70"
            >
              VIEW MORE
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <SteadySellerCarousel />
        </Reveal>
      </div>
    </section>
  );
}
