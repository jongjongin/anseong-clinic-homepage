import Image from "next/image";
import Reveal from "@/components/home/reveal";
import { siteContact } from "@/lib/site-nav";

const snsCards = [
  {
    label: "공식 블로그 1",
    title: "진료 이야기와 건강 정보",
    href: siteContact.naverBlogUrl,
    image: "/assets/interior/interior-3.jpg",
  },
  {
    label: "공식 블로그 2",
    title: "병원 소식과 이벤트",
    href: siteContact.naverBlogUrl2,
    image: "/assets/people/people-2.jpg",
  },
];

export default function SnsSection() {
  return (
    <section id="sns" className="relative overflow-hidden py-16 text-white lg:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src="/assets/people/people-2.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">SNS Contents</p>
            <h2 className="mt-2 break-keep text-2xl font-semibold leading-tight lg:text-4xl">
              블로그에서 만나는
              <br className="sm:hidden" /> 안성경희365한의원
            </h2>
            <p className="mt-3 break-keep text-sm text-white/70">
              진료 후기와 건강 정보, 병원 소식을 네이버 블로그에서 확인해 보세요.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {snsCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="group relative mx-auto block aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-[28px] shadow-2xl md:max-w-[340px]"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/55" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 p-8 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#03C75A] text-white shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                      <path d="M4 4h5.1l5.6 8.2V4H20v16h-5.1l-5.6-8.2V20H4V4Z" />
                    </svg>
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{card.label}</p>
                  <p className="break-keep text-lg font-bold">{card.title}</p>
                  <p className="translate-y-1 text-sm font-semibold text-teal-200 opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    블로그 바로가기 →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
