import Image from "next/image";
import Link from "next/link";
import { introSectionContent } from "@/components/home/content";

const panels = [
  {
    image: "/assets/interior/interior-2.jpg",
    title: "아픈 부위만 보지 않습니다",
    description: introSectionContent.paragraphs[0],
    href: "/services",
    linkLabel: "진료 프로그램 보기",
  },
  {
    image: "/assets/people/people-1.jpg",
    title: "꼭 필요한 치료만, 충분한 설명과 함께",
    description: introSectionContent.paragraphs[1],
    href: "/renewal#doctors",
    linkLabel: "의료진 소개 보기",
  },
];

export default function TwoPanelSection() {
  return (
    <section id="intro" className="relative flex flex-col items-center justify-center bg-white lg:flex-row">
      {panels.map((panel, index) => (
        <div
          key={panel.title}
          className={`relative flex h-[420px] w-full flex-col items-center justify-center overflow-hidden px-6 text-center text-white lg:h-[550px] lg:w-1/2 ${
            index === 0 ? "-mb-2 lg:mb-0" : "-mt-2 lg:mt-0"
          }`}
        >
          <Image src={panel.image} alt="" fill className="-z-10 object-cover object-center" sizes="(min-width:1024px) 50vw, 100vw" />
          <div className="absolute inset-0 z-0 bg-black/70" />
          <div className="relative z-10 max-w-md">
            <h3 className="break-keep text-2xl font-semibold leading-snug lg:text-3xl">{panel.title}</h3>
            <p className="mt-6 break-keep text-sm leading-relaxed text-white/80 lg:text-base">{panel.description}</p>
            <Link
              href={panel.href}
              className="group mt-8 inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm font-semibold transition-colors hover:border-white"
            >
              {panel.linkLabel}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      ))}

      {/* 중앙 원형 배지 (데스크톱) */}
      <div className="relative z-10 my-4 flex aspect-square w-[230px] items-center justify-center overflow-hidden rounded-full bg-white/80 text-center shadow-2xl backdrop-blur lg:absolute lg:left-1/2 lg:top-1/2 lg:my-0 lg:w-[260px] lg:-translate-x-1/2 lg:-translate-y-1/2">
        <div className="flex flex-col items-center gap-2 px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-700">365 Days</p>
          <p className="break-keep text-xl font-bold leading-snug text-slate-900">
            365일 진료하는
            <br />
            안성경희365한의원
          </p>
          <p className="break-keep text-xs text-slate-500">{introSectionContent.paragraphs[2]}</p>
        </div>
      </div>
    </section>
  );
}
