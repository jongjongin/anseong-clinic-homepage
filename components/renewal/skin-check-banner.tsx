import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/home/reveal";
import SkinIcon from "@/components/renewal/skin-icons";
import type { SkinIconKey } from "@/lib/skin-check";

type Comparison = {
  question: string;
  rule: string;
  pair: { icon: SkinIconKey; name: string; trait: string }[];
};

/** 원장 직원교육자료 「① 병변 구분」에서 실제로 가장 많이 헷갈리는 세 쌍 */
const comparisons: Comparison[] = [
  {
    question: "만졌을 때 올라와 있나요?",
    rule: "만져지면 검버섯, 평평하고 매끈하면 흑자입니다.",
    pair: [
      { icon: "raised", name: "검버섯", trait: "도톰하고 거칠어요" },
      { icon: "flat", name: "흑자 · 잡티", trait: "평평하고 매끈해요" },
    ],
  },
  {
    question: "경계가 뚜렷한가요?",
    rule: "기미는 경계가 흐리고 좌우 대칭, 흑자는 경계가 또렷한 단독 반점입니다.",
    pair: [
      { icon: "melasma", name: "기미", trait: "흐릿하고 대칭이에요" },
      { icon: "lentigo", name: "흑자", trait: "경계가 또렷해요" },
    ],
  },
  {
    question: "눈가 알갱이가 무슨 색인가요?",
    rule: "살색으로 단단하면 한관종, 속이 하얗게 비치면 비립종입니다.",
    pair: [
      { icon: "syringoma", name: "한관종", trait: "살색이고 단단해요" },
      { icon: "milium", name: "비립종", trait: "속이 하얗게 비쳐요" },
    ],
  },
];

/** 사진: Pexels 무료 라이선스(상업적 이용 가능, 출처 표기 의무 없음) */
const guides = [
  {
    src: "/assets/skin-check/uv-protection.webp",
    alt: "팔에 자외선 차단제를 덜어내는 모습",
    title: "색소는 햇빛에 진해집니다",
    body: "기미·주근깨·흑자는 자외선에 그대로 반응합니다. 치료 중에는 차단제가 절반입니다.",
  },
  {
    src: "/assets/skin-check/self-check.webp",
    alt: "손거울로 얼굴을 확인하는 모습",
    title: "한 달에 한 번 같은 자리를 보세요",
    body: "모양이 비대칭으로 변하거나 크기가 커졌다면 제거보다 진료 확인이 먼저입니다.",
  },
  {
    src: "/assets/skin-check/consult.webp",
    alt: "진료실에서 피부 상태를 함께 확인하는 모습",
    title: "헷갈리면 눈으로 확인합니다",
    body: "겉보기에 비슷해도 치료 방법이 다릅니다. 카카오톡으로 사진만 보내주셔도 됩니다.",
  },
];

export default function SkinCheckBanner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="mar-font text-[11px] tracking-[0.3em] text-teal-700">SELF CHECK</p>
            <h2 className="gb-font mx-auto mt-4 max-w-[560px] break-keep text-[26px] font-bold leading-[1.35] text-[#181818] sm:text-[36px]">
              점인 줄 알았는데
              <br />
              검버섯이었다면?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] break-keep text-[14px] leading-[1.9] text-[#6d6d6d] sm:text-[15px]">
              비슷해 보여도 치료 방법이 전혀 다릅니다. 그림으로 먼저 비교해 보세요.
            </p>
          </div>
        </Reveal>

        {/* 비교 카드: 모바일은 스와이프, 데스크톱은 3열 */}
        <Reveal>
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:mt-14 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0">
            {comparisons.map((item) => (
              <article
                key={item.question}
                className="flex w-[85%] shrink-0 snap-center flex-col rounded-[22px] border border-[#ececec] bg-[#fbfbfa] p-6 sm:w-[62%] lg:w-auto lg:p-7"
              >
                <h3 className="gb-font break-keep text-[17px] font-bold text-[#181818] lg:text-[19px]">
                  {item.question}
                </h3>

                <div className="mt-6 flex items-start gap-3">
                  {item.pair.map((side, index) => (
                    <div key={side.name} className="flex flex-1 items-start gap-3">
                      {index === 1 ? (
                        <span
                          aria-hidden
                          className="mar-font mt-6 shrink-0 self-start text-[11px] tracking-widest text-[#c4c4c4]"
                        >
                          VS
                        </span>
                      ) : null}
                      <div className="min-w-0 flex-1 text-center">
                        <SkinIcon
                          name={side.icon}
                          className="mx-auto h-[62px] w-[62px] lg:h-[68px] lg:w-[68px]"
                        />
                        <p className="mt-3 break-keep text-[14px] font-semibold text-[#181818]">
                          {side.name}
                        </p>
                        <p className="mt-1 break-keep text-[11.5px] leading-snug text-[#a0a0a0]">
                          {side.trait}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 break-keep border-t border-[#ececec] pt-5 text-[13px] leading-[1.8] text-[#6d6d6d]">
                  {item.rule}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        {/* 실제 사진 + 실제 안내 */}
        <Reveal>
          <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:gap-6">
            {guides.map((guide) => (
              <figure key={guide.title} className="min-w-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#f3f3f2]">
                  <Image
                    src={guide.src}
                    alt={guide.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="gb-font break-keep text-[16px] font-bold text-[#181818]">
                    {guide.title}
                  </p>
                  <p className="mt-2 break-keep text-[13px] leading-[1.8] text-[#6d6d6d]">
                    {guide.body}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 text-center lg:mt-16">
            <Link
              href="/skin-check"
              className="group inline-flex w-full max-w-[340px] items-center justify-center gap-2 rounded-full bg-[#181818] px-8 py-4.5 text-[15px] font-semibold text-white transition hover:bg-teal-700 sm:w-auto"
            >
              1분 퀴즈로 내 고민 감별하기
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <p className="mt-4 text-[12px] text-[#b4b4b4]">
              기미 · 주근깨 · 흑자 · 검버섯 · 점 · 쥐젖 · 편평사마귀 · 한관종
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
