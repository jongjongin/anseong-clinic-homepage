import type { Metadata } from "next";
import GuideCategoryNav, {
  GuideContact,
  GuideHero,
  guideThemes,
} from "@/app/_components/guide-category-nav";

export const metadata: Metadata = {
  title: "한약 복용법과 주의사항",
  description: "한약 복용법, 데우는 방법, 주의사항, 보관 방법과 복용 기한을 안내합니다.",
  alternates: {
    canonical: "/herb",
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
      "정해진 시간과 횟수를 지켜 꾸준히 복용해야 좋은 효과를 볼 수 있습니다. 복용 횟수와 시간은 처방 시 개별 안내를 따라 주세요.",
      "따뜻하게 데워서 복용하세요.",
      "성분이 가라앉아 있으면 충분히 흔든 후 복용하세요.",
      "다른 약을 복용 중이시라면 원장님께 문의 후 복용해 주세요.",
    ],
  },
  {
    number: "02",
    title: "데우는 방법",
    items: [
      "컵에 한약을 따른 후 전자레인지로 30초 정도 데워 드세요.",
      "또는 봉지째 물이 담긴 컵에 5분 정도 담근 후 드셔도 됩니다.",
    ],
  },
  {
    number: "03",
    title: "주의사항",
    items: [
      "술은 치료 효과를 방해하거나 지연시키니 삼가 주세요.",
      "건강한 식단으로 규칙적인 식사를 해 주세요.",
      "특정 음식이 궁금하시면 담당 원장님과 상의해 주세요.",
      "뿌리약재 특성상 복용 초기에 일시적으로 변이 묽어질 수 있으며, 이는 정상 반응입니다.",
    ],
  },
  {
    number: "04",
    title: "보관",
    items: ["한약은 냉장 보관해 주세요. 당일 복용하실 약은 상온 보관해도 됩니다."],
  },
  {
    number: "05",
    title: "복용 기한",
    items: ["처방 후 3개월 이내에 복용해 주세요."],
  },
];

export default function HerbGuidePage() {
  const theme = guideThemes.herb;

  return (
    <div className="min-h-screen text-[#334155]" style={{ backgroundColor: theme.tint }}>

      <main className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-8">
        <GuideCategoryNav active="herb" />

        <GuideHero
          active="herb"
          title="한약 복용법과 주의사항"
          description="처방받은 한약을 안전하고 효과적으로 복용하기 위해 아래 내용을 확인해 주세요."
        />

        <aside className="mt-3 border-l-4 bg-white px-4 py-3" style={{ borderLeftColor: theme.accent }}>
          <p className="break-keep text-base font-bold leading-[1.6] text-[#334155]">
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
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: theme.accent }}
                >
                  {section.number}
                </span>
                <h2 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">{section.title}</h2>
              </div>
              <ul className={`mt-2 divide-y divide-slate-100 ${index === 0 ? "md:grid md:grid-cols-2 md:gap-x-6 md:divide-y-0" : ""}`}>
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2.5 py-2.5 text-base leading-[1.6] text-[#334155]">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0"
                      style={{ backgroundColor: theme.accent }}
                    />
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <GuideContact active="herb" />

        <p className="mt-3 break-keep text-center text-[11px] leading-5 text-slate-400">
          본 페이지는 공통 복약 안내입니다. 개인별 복용법은 진료 시 받은 안내를 우선해 주세요.
        </p>
      </main>
    </div>
  );
}
