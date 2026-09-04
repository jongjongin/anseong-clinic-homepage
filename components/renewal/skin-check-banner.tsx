import Link from "next/link";
import Reveal from "@/components/home/reveal";

const examples = ["기미", "주근깨", "흑자", "검버섯", "점", "쥐젖", "편평사마귀", "한관종"];

export default function SkinCheckBanner() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 border border-[#eee] bg-[#f8f8f8] px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-12">
            <div className="min-w-0">
              <p className="mar-font text-[11px] tracking-[0.3em] text-[#959595]">SELF CHECK</p>
              <h2 className="gb-font mt-4 break-keep text-xl font-bold leading-snug text-[#181818] sm:text-3xl">
                점인 줄 알았는데 검버섯이었다면?
              </h2>
              <p className="mt-4 break-keep text-[13px] leading-[1.9] text-[#6d6d6d] sm:text-sm">
                비슷해 보여도 치료 방법이 전혀 다릅니다. 몇 가지 질문에 답하면 어떤 병변에 가까운지,
                어떤 시술이 맞는지 안내해 드립니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {examples.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#e0e0e0] bg-white px-3 py-1 text-xs text-[#6d6d6d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/skin-check"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#181818] px-8 py-4 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              1분 자가 감별 시작하기
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
