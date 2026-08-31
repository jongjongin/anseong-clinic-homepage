import Image from "next/image";
import Reveal from "@/components/home/reveal";
import { infoSectionContent } from "@/components/home/content";
import { siteContact } from "@/lib/site-nav";

export default function InfoSplitSection() {
  return (
    <section id="hours" className="bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="relative min-h-[280px] lg:min-h-[560px] lg:w-1/2">
          <Image
            src="/assets/interior/interior-3.jpg"
            alt="안성경희365한의원 내부"
            fill
            className="object-cover object-center"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>

        <div className="relative overflow-hidden lg:w-1/2">
          <div className="absolute inset-0">
            <Image src="/assets/interior/interior-2.jpg" alt="" fill className="object-cover object-center" sizes="(min-width:1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>

          <Reveal className="relative z-10 mx-auto flex max-w-md flex-col gap-8 px-6 py-16 text-white lg:px-10 lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-300">Information</p>
              <h2 className="mt-3 break-keep text-2xl font-bold leading-snug sm:text-3xl">
                진료시간 · 오시는 길
              </h2>
            </div>

            <dl className="flex flex-col divide-y divide-white/15 border-y border-white/15">
              {infoSectionContent.hours.map((row) => (
                <div key={row.day} className="flex items-center justify-between py-3 text-sm">
                  <dt className="font-semibold text-white/70">{row.day}</dt>
                  <dd className="font-bold">{row.time}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-2 text-sm leading-relaxed text-white/80">
              <p className="break-keep">{infoSectionContent.address}</p>
              <p className="break-keep text-white/60">{infoSectionContent.parking}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={siteContact.phoneHref}
                className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                {infoSectionContent.contact} 전화
              </a>
              <a
                href={infoSectionContent.naverMapUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-slate-900"
              >
                네이버지도
              </a>
              <a
                href={infoSectionContent.kakaoMapUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-slate-900"
              >
                카카오맵
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="h-[320px] w-full lg:h-[420px]">
        <iframe
          title="안성경희365한의원 위치 지도"
          src={infoSectionContent.embedMapUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
