import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "한약 복용법과 주의사항",
  description: "한약 복용법, 데우는 방법, 복용 시 주의사항, 보관 방법과 복용 기한을 안내합니다.",
  alternates: {
    canonical: "/herbal-medicine",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const guideSections = [
  {
    number: "01",
    title: "복용법",
    items: [
      "정해진 시간과 횟수를 지켜 꾸준히 복용하셔야 좋은 효과를 볼 수 있습니다. 복용 횟수와 시간은 처방 시 받은 개별 안내를 따라 주세요.",
      "따뜻하게 데워서 복용해 주세요.",
      "성분이 가라앉아 있으면 충분히 흔든 뒤 복용해 주세요.",
      "다른 약을 복용 중이시라면 원장님께 문의한 뒤 복용해 주세요.",
    ],
  },
  {
    number: "02",
    title: "데우는 방법",
    items: [
      "컵에 한약을 따른 뒤 전자레인지로 약 30초 데워 복용해 주세요.",
      "또는 따뜻한 물이 담긴 컵에 한약 봉지를 약 5분 동안 담가 둔 뒤 복용해 주세요.",
    ],
  },
  {
    number: "03",
    title: "복용 시 주의사항",
    items: [
      "술은 치료 효과를 방해하거나 지연시킬 수 있으니 삼가 주세요.",
      "건강한 식단으로 규칙적인 식사를 해 주세요.",
      "특정 음식이 궁금하시면 담당 원장님과 상의해 주세요.",
    ],
  },
  {
    number: "04",
    title: "보관 방법",
    items: [
      "한약은 냉장 보관해 주세요.",
      "당일 복용하실 한약은 상온에 보관해도 됩니다.",
    ],
  },
  {
    number: "05",
    title: "복용 기한",
    items: ["처방 후 3개월 이내에 복용해 주세요."],
  },
];

export default function HerbalMedicineGuidePage() {
  return (
    <div className="min-h-screen bg-[#f6f7f5] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <Link href="/" aria-label="안성경희365한의원 메인 홈페이지">
            <div className="relative h-7 w-[150px] sm:h-9 sm:w-[190px]">
              <Image
                src="/assets/logo/logo-wordmark.png"
                alt="안성경희365한의원"
                fill
                className="object-contain object-left"
                sizes="190px"
                priority
              />
            </div>
          </Link>
          <Link
            href="/"
            className="border border-slate-300 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950 sm:px-3 sm:py-2 sm:text-sm"
          >
            메인으로
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-8">
        <section className="border-b border-slate-300 pb-4 sm:pb-5">
          <p className="text-xs font-semibold text-teal-700">안성경희365한의원</p>
          <h1 className="mt-1 break-keep text-[26px] font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
            한약 복용법과 주의사항
          </h1>
          <p className="mt-2 break-keep text-sm leading-6 text-slate-600 sm:text-base">
            안전하고 효과적인 복용을 위해 아래 내용을 확인해 주세요.
          </p>
        </section>

        <aside className="mt-3 border-l-4 border-teal-700 bg-[#edf6f3] px-4 py-3">
          <p className="break-keep text-sm font-bold leading-6 text-teal-950">
            복용 횟수와 시간은 처방 시 받은 개별 안내를 가장 먼저 따라 주세요.
          </p>
        </aside>

        <section aria-label="한약 복약 안내" className="mt-3 grid gap-3 md:grid-cols-2">
          {guideSections.map((section, index) => (
            <article
              key={section.number}
              className={`border border-slate-200 bg-white p-4 sm:p-5 ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-teal-700 text-xs font-bold text-white">
                  {section.number}
                </span>
                <h2 className="text-lg font-bold tracking-[-0.02em] text-slate-900 sm:text-xl">{section.title}</h2>
              </div>
              <ul className={`mt-2 divide-y divide-slate-100 ${index === 0 ? "md:grid md:grid-cols-2 md:gap-x-6 md:divide-y-0" : ""}`}>
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2.5 py-2.5 text-base leading-7 text-slate-600">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-teal-600" />
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-3 border border-slate-800 bg-slate-900 px-4 py-4 text-white sm:flex sm:items-center sm:justify-between sm:gap-5 sm:px-5">
          <div>
            <h2 className="text-base font-bold">복용 중 궁금한 점이 있으신가요?</h2>
            <p className="mt-1 text-sm leading-5 text-slate-300">안성경희365한의원으로 연락해 주세요.</p>
          </div>
          <a
            href="tel:031-8057-0750"
            className="mt-3 inline-flex w-full items-center justify-center bg-white px-4 py-3 text-base font-bold sm:mt-0 sm:w-auto"
            style={{ color: "#0f172a" }}
          >
            031-8057-0750
          </a>
        </section>

        <p className="mt-3 break-keep text-center text-[11px] leading-5 text-slate-400">
          본 페이지는 공통 복약 안내입니다. 개인별 복용법은 진료 시 받은 안내를 우선해 주세요.
        </p>
      </main>
    </div>
  );
}

