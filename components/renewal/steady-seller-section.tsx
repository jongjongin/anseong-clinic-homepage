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
              <p className="mar-font text-xs tracking-[0.3em] text-white/60">STEADY SELLER</p>
              <h2 className="gb-font mt-4 break-keep text-[22px] font-bold leading-[1.55] sm:text-4xl sm:leading-[1.5]">
                합리적인 가격과 진정성 있는 치료로
                <br className="hidden sm:block" /> 확실한 변화를 보여드리겠습니다
              </h2>
              <p className="mt-4 break-keep text-[13px] leading-relaxed text-white/60 sm:text-[15px]">
                피부 미용 프로그램 가격표 — 카테고리를 눌러 원하는 시술을 확인해 보세요.
              </p>
            </div>
            <Link
              href="/renewal/menu"
              className="mar-font group flex shrink-0 items-center gap-2 text-sm tracking-[0.2em] transition-opacity hover:opacity-70"
            >
              VIEW MORE
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
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
