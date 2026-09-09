import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/home/reveal";
import SkinIcon from "@/components/renewal/skin-icons";
import type { SkinIconKey, SkinResultKey } from "@/lib/skin-check";
import { skinPhotos } from "@/lib/skin-photos";

type Side = { icon: SkinIconKey; name: string; trait: string; how: string };

/** 원장 직원교육자료 「① 병변 구분」에서 실제로 가장 많이 헷갈리는 세 쌍 */
const comparisons: { question: string; pair: [Side, Side] }[] = [
  {
    question: "만지면 올라와 있나요?",
    pair: [
      { icon: "raised", name: "검버섯", trait: "도톰하고 거칠어요", how: "검버섯 제거" },
      { icon: "flat", name: "흑자", trait: "평평하고 매끈해요", how: "듀얼토닝" },
    ],
  },
  {
    question: "경계가 뚜렷한가요?",
    pair: [
      { icon: "melasma", name: "기미", trait: "흐릿하고 대칭이에요", how: "듀얼토닝" },
      { icon: "lentigo", name: "흑자", trait: "경계가 또렷해요", how: "듀얼토닝" },
    ],
  },
  {
    question: "눈가 알갱이가 무슨 색인가요?",
    pair: [
      { icon: "syringoma", name: "한관종", trait: "살색이고 단단해요", how: "CO2 제거" },
      { icon: "milium", name: "비립종", trait: "속이 하얘요", how: "CO2 제거" },
    ],
  },
];

/** 실제 병변 사진 (상업적 이용 가능 자료만 · 출처 표기) */
const realPhotos: { key: SkinResultKey; name: string; how: string }[] = [
  { key: "seborrheic", name: "검버섯", how: "검버섯 제거" },
  { key: "lentigo", name: "흑자", how: "듀얼토닝" },
  { key: "melasma", name: "기미", how: "듀얼토닝" },
  { key: "freckle", name: "주근깨", how: "듀얼토닝" },
  { key: "flat-wart", name: "편평사마귀", how: "CO2 제거" },
  { key: "milium", name: "비립종", how: "CO2 제거" },
];

export default function SkinCheckBanner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="gb-font break-keep text-[28px] font-bold leading-[1.3] text-[#171717] sm:text-[40px]">
              점인가요, 검버섯인가요?
            </h2>
            <p className="mx-auto mt-4 max-w-[400px] break-keep text-[16px] leading-[1.7] text-[#454545]">
              비슷해 보여도 제거하는 방법이 다릅니다.
            </p>
          </div>
        </Reveal>

        {/* 비교: 모바일은 스와이프, 데스크톱은 3열 */}
        <Reveal>
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:mt-14 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0">
            {comparisons.map((item) => (
              <article
                key={item.question}
                className="w-[86%] shrink-0 snap-center rounded-[20px] border-2 border-[#e6e6e6] bg-white p-5 sm:w-[62%] lg:w-auto lg:p-7"
              >
                <h3 className="gb-font break-keep text-center text-[19px] font-bold text-[#171717] lg:text-[21px]">
                  {item.question}
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {item.pair.map((side) => (
                    <div key={side.name + side.trait} className="min-w-0 text-center">
                      <SkinIcon
                        name={side.icon}
                        className="mx-auto h-[68px] w-[68px] lg:h-[74px] lg:w-[74px]"
                      />
                      <p className="mt-3 break-keep text-[17px] font-bold text-[#171717]">
                        {side.name}
                      </p>
                      <p className="mt-1.5 break-keep text-[13.5px] leading-snug text-[#5f5f5f]">
                        {side.trait}
                      </p>
                      <p className="mt-3 break-keep rounded-full bg-teal-50 px-2 py-2 text-[13.5px] font-bold text-teal-800">
                        {side.how}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 text-center lg:mt-14">
            <Link
              href="/skin-check"
              className="group inline-flex w-full max-w-[340px] items-center justify-center gap-2 rounded-full bg-[#171717] px-8 py-4.5 text-[17px] font-bold text-white transition hover:bg-teal-700 sm:w-auto"
            >
              1분 퀴즈로 내 고민 확인하기
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        {/* 실제 병변 사진 */}
        <Reveal>
          <div className="mt-16 sm:mt-24">
            <h3 className="gb-font break-keep text-center text-[24px] font-bold text-[#171717] sm:text-[30px]">
              실제로는 이렇게 보입니다
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
              {realPhotos.map((item) => {
                const photo = skinPhotos[item.key];
                if (!photo) return null;

                return (
                  <figure key={item.key} className="min-w-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#f0f0ef]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3">
                      <p className="break-keep text-[17px] font-bold text-[#171717]">{item.name}</p>
                      <p className="mt-1.5 inline-block break-keep rounded-full bg-teal-50 px-3 py-1.5 text-[13px] font-bold text-teal-800">
                        {item.how}
                      </p>
                      <p className="mt-2 break-all text-[10.5px] leading-tight text-[#9a9a9a]">
                        {photo.credit}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
