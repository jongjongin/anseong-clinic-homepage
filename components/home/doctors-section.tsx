import Image from "next/image";
import SectionTitle from "@/components/home/section-title";
import { doctorsSectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={doctorsSectionContent.eyebrow}
            title={doctorsSectionContent.title}
            description={doctorsSectionContent.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsSectionContent.items.map((doctor, index) => (
            <Reveal key={doctor.name} delayMs={index * 70}>
              <article className="interactive-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
                <div className="relative min-h-[340px] bg-[linear-gradient(180deg,#f4f8f8_0%,#e8f0ef_100%)]">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} 원장 프로필`}
                    fill
                    className="object-contain object-top"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm font-semibold tracking-[0.08em] text-teal-700 uppercase">
                    {doctor.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{doctor.name}</h3>
                  <p className="mt-3 text-sm font-medium text-slate-500">{doctor.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                    {doctor.credentials.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
