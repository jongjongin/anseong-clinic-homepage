import Image from "next/image";
import { doctorsSectionContent } from "@/components/home/content";

export default function DoctorsCarousel() {
  return (
    <div className="mt-12">
      <p className="break-keep text-sm font-medium text-slate-500">
        네 분의 진료 분야와 약력을 한 화면에서 비교해 보실 수 있습니다.
      </p>

      <div className="mt-6 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
        {doctorsSectionContent.items.map((doctor) => (
          <article
            key={doctor.name}
            className="interactive-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white"
          >
            <div className="relative aspect-[4/5] bg-[linear-gradient(180deg,#f4f8f8_0%,#e8f0ef_100%)]">
              <Image
                src={doctor.image}
                alt={`${doctor.name} 원장 프로필`}
                fill
                className="object-contain object-top"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm font-semibold tracking-[0.08em] text-teal-700 uppercase">
                {doctor.role}
              </p>
              <h3 className="mt-1 break-keep text-2xl font-bold text-slate-900">{doctor.name}</h3>
              <p className="mt-2 min-h-12 break-keep text-sm font-medium leading-6 text-slate-500">{doctor.summary}</p>
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 break-keep text-[13px] leading-[1.4rem] text-slate-600">
                {doctor.credentials.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
