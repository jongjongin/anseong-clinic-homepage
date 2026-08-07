import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "다이어트, 이렇게 관리하세요",
  description: "안성경희365한의원의 다이어트 프로그램 복용법과 식단, 생활 관리 방법을 안내합니다.",
  alternates: {
    canonical: "/diet",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const programs = [
  {
    name: "쏙쏙빠정",
    label: "정제 프로그램",
    items: [
      "식사 1시간 전 빈속에 1알씩, 하루 4알을 복용합니다. 예: 오전 7시 · 11시 · 오후 3시 · 5시",
      "처음에는 하루 2알부터 시작하고, 두근거림이나 불면이 없으면 하루 4알까지 늘려 주세요.",
      "4알 복용이 불편하면 하루 2~3알로 줄여 복용하세요.",
    ],
  },
  {
    name: "쏙쏙탕",
    label: "탕약 프로그램",
    items: [
      "아침 · 점심 · 저녁 식사 1시간 전 빈속에 복용합니다.",
      "첫날은 2포로 시작하고, 이후에는 하루 3포를 복용합니다.",
    ],
  },
  {
    name: "디톡스",
    label: "3~5일 프로그램",
    items: [
      "위장을 쉬게 하고 노폐물 배출과 부종 완화를 돕는 과정으로, 평균 1.5~2kg 감량을 목표로 합니다.",
      "1일차: 아침·점심은 일반식, 저녁은 선식과 붓기탕을 드세요.",
      "2일차부터: 선식 · 붓기탕 · 비움환을 복용하고, 저녁은 당질 제한 식사를 하세요.",
      "비움환 복용 후 배변이 너무 잦으면 하루 1회로 줄여도 됩니다.",
    ],
  },
];

const prohibitedFoods = [
  { rank: "1순위", food: "밀가루", detail: "빵 · 면" },
  { rank: "2순위", food: "술", detail: "모든 주류" },
  { rank: "3순위", food: "주스·음료수", detail: "당이 든 음료" },
  { rank: "4순위", food: "과일", detail: "감량 중 제한" },
];

export default function DietGuidePage() {
  return (
    <div className="min-h-screen bg-[#f6f7f5] text-slate-900">
      <GuideHeader />

      <main className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-8">
        <section className="border-b border-slate-300 pb-4 sm:pb-5">
          <p className="text-xs font-semibold text-emerald-700">안성경희365한의원 다이어트</p>
          <h1 className="mt-1 break-keep text-[26px] font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
            다이어트, 이렇게 관리하세요
          </h1>
          <p className="mt-2 break-keep text-sm leading-6 text-slate-600 sm:text-base">
            매일의 작은 습관이 목표에 가까워지는 가장 확실한 방법입니다. 아래 순서대로 함께 실천해 보세요.
          </p>
        </section>

        <aside className="mt-3 border-l-4 border-emerald-600 bg-[#ecf8f1] px-4 py-3">
          <p className="break-keep text-sm font-bold leading-6 text-emerald-950">
            완벽한 하루보다 꾸준한 하루가 중요합니다. 내 프로그램과 복용량부터 확인해 주세요.
          </p>
        </aside>

        <section aria-labelledby="program-title" className="mt-3 border border-slate-200 bg-white p-4 sm:p-5">
          <SectionTitle number="01" title="내 프로그램 확인" id="program-title" />
          <div className="mt-3 grid gap-2">
            {programs.map((program) => (
              <article key={program.name} className="border border-slate-200 bg-[#fafbf9]">
                <div className="flex items-center gap-3 px-4 py-3.5 font-bold">
                  <span>
                    <span className="text-base text-slate-900">{program.name}</span>
                    <span className="ml-2 text-xs font-semibold text-emerald-700">{program.label}</span>
                  </span>
                </div>
                <ul className="border-t border-slate-200 px-4 py-2">
                  {program.items.map((item) => (
                    <li key={item} className="flex gap-2.5 border-b border-slate-100 py-2.5 text-[15px] leading-6 text-slate-600 last:border-0">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600" />
                      <span className="break-keep">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-3 border-l-2 border-emerald-500 pl-3 text-sm leading-6 text-slate-600">
            라인약침·산삼비만약침을 병행할 수 있습니다. 원장님 상담 시 안내해 드립니다.
          </p>
        </section>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <GuideCard number="02" title="식단이 제일 중요합니다">
            <ul className="space-y-2.5 text-[15px] leading-6 text-slate-600">
              <Bullet><strong className="text-slate-900">식사량은 평소의 절반</strong>으로 줄여 주세요.</Bullet>
              <Bullet>붓기를 줄이고 감량 속도를 높이도록 저염식으로 드세요.</Bullet>
              <Bullet>맵고 짠 자극적인 음식은 혈압과 식욕을 높일 수 있으니 피하세요.</Bullet>
            </ul>
            <p className="mt-3 bg-emerald-50 px-3 py-2.5 text-sm leading-6 text-emerald-950">
              추천: 나물 · 생선구이 · 두부 · 상추 · 양배추 · 다시마 · 미역
            </p>
          </GuideCard>

          <GuideCard number="03" title="절대 금지식품">
            <ol className="grid grid-cols-2 gap-2">
              {prohibitedFoods.map((item) => (
                <li key={item.rank} className="border border-rose-100 bg-rose-50 px-3 py-3">
                  <span className="block text-[11px] font-bold text-rose-600">{item.rank}</span>
                  <strong className="mt-0.5 block text-base text-slate-900">{item.food}</strong>
                  <span className="mt-0.5 block text-xs text-slate-500">{item.detail}</span>
                </li>
              ))}
            </ol>
          </GuideCard>

          <GuideCard number="04" title="12시간 금식">
            <p className="break-keep text-[15px] leading-7 text-slate-600">
              저녁 <strong className="text-slate-900">6시, 늦어도 7시 이후에는 금식</strong>해 주세요. 이 시간에 집중 감량이 일어납니다.
            </p>
            <p className="mt-3 border-l-2 border-amber-500 pl-3 text-sm leading-6 text-slate-600">
              공복으로 잠들기 힘들다면 호두나 아몬드를 5개 이내로만 드세요.
            </p>
          </GuideCard>

          <GuideCard number="05" title="물 섭취">
            <ul className="space-y-2.5 text-[15px] leading-6 text-slate-600">
              <Bullet>식사 중과 식전 30분부터 식후 1시간까지는 붓기를 줄이기 위해 물을 피하세요.</Bullet>
              <Bullet>그 외 공복 시간에는 물을 수시로 드세요.</Bullet>
            </ul>
          </GuideCard>

          <GuideCard number="06" title="매일 체크">
            <ul className="space-y-2.5 text-[15px] leading-6 text-slate-600">
              <Bullet>체중은 하루 2번, 아침 화장실을 다녀온 후와 저녁 취침 전에 확인하세요.</Bullet>
              <Bullet><strong className="text-slate-900">2주에 한 번 내원해 인바디 측정과 상담</strong>을 받으세요.</Bullet>
            </ul>
          </GuideCard>

          <GuideCard number="07" title="이런 증상이 있다면">
            <ul className="space-y-2.5 text-[15px] leading-6 text-slate-600">
              <Bullet>두근거림과 불면은 초기 며칠 내 대부분 사라집니다.</Bullet>
              <Bullet>지속되면 용량을 줄이고, 쏙쏙빠정은 하루 2~3알로 조절하세요.</Bullet>
              <Bullet>그래도 불편하면 카카오톡이나 전화로 연락해 주세요.</Bullet>
              <Bullet>변비가 생기면 내원 시 비움환을 처방받을 수 있습니다.</Bullet>
            </ul>
          </GuideCard>

          <GuideCard number="08" title="운동·스트레스" wide>
            <div className="grid gap-3 sm:grid-cols-2">
              <p className="break-keep bg-slate-50 px-3 py-3 text-[15px] leading-6 text-slate-600">
                <strong className="block text-slate-900">운동</strong>
                새 운동은 식욕이 늘 수 있어 권하지 않습니다. 기존에 하던 운동은 그대로 유지하세요.
              </p>
              <p className="break-keep bg-emerald-50 px-3 py-3 text-[15px] leading-6 text-slate-600">
                <strong className="block text-slate-900">스트레스</strong>
                스트레스는 지방 연소를 방해합니다. 잘 웃고 잘 자는 것이 다이어트에 큰 도움이 됩니다.
              </p>
            </div>
          </GuideCard>

          <GuideCard number="09" title="하루 식단 예시" wide>
            <div className="grid gap-2 sm:grid-cols-3">
              <MealCard meal="아침" menu="밥 ½공기 · 구운김 · 계란후라이 · 미소된장국" />
              <MealCard meal="점심" menu="곤약밥 · 닭가슴살 100g · 김치" />
              <MealCard meal="저녁" menu="고구마 1개 · 삶은 달걀 · 오이스틱 · 요거트" />
            </div>
            <p className="mt-3 text-center text-xs leading-5 text-slate-500">더 많은 예시는 내원 시 식단표로 제공해 드립니다.</p>
          </GuideCard>
        </div>

        <ContactSection />
      </main>
    </div>
  );
}

function GuideHeader() {
  return (
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
          href="/warning"
          className="border border-slate-300 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-950 sm:px-3 sm:py-2 sm:text-sm"
        >
          안내 목록
        </Link>
      </div>
    </header>
  );
}

function SectionTitle({ number, title, id }: { number: string; title: string; id?: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-emerald-600 text-xs font-bold text-white">{number}</span>
      <h2 id={id} className="text-lg font-bold tracking-[-0.02em] sm:text-xl">{title}</h2>
    </div>
  );
}

function GuideCard({ number, title, wide = false, children }: { number: string; title: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <article className={`border border-slate-200 bg-white p-4 sm:p-5 ${wide ? "md:col-span-2" : ""}`}>
      <SectionTitle number={number} title={title} />
      <div className="mt-3">{children}</div>
    </article>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-600" />
      <span className="break-keep">{children}</span>
    </li>
  );
}

function MealCard({ meal, menu }: { meal: string; menu: string }) {
  return (
    <div className="border border-slate-200 bg-[#fafbf9] px-3 py-3">
      <strong className="text-sm text-emerald-700">{meal}</strong>
      <p className="mt-1 break-keep text-sm leading-6 text-slate-600">{menu}</p>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="mt-3 border border-slate-800 bg-slate-900 px-4 py-4 text-white sm:px-5">
      <h2 className="text-base font-bold">혼자 고민하지 마세요</h2>
      <p className="mt-1 text-sm leading-5 text-slate-300">복용이나 관리가 불편하면 전화 또는 카카오톡으로 바로 문의해 주세요.</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <a
          href="tel:031-8057-0750"
          className="flex min-h-11 items-center justify-center bg-white px-3 py-2 text-center text-sm font-bold text-slate-900"
          style={{ color: "#0f172a" }}
        >
          전화 031-8057-0750
        </a>
        <a
          href="http://pf.kakao.com/_RWgxnG/chat"
          target="_blank"
          rel="noreferrer"
          className="flex min-h-11 items-center justify-center bg-[#FEE500] px-3 py-2 text-center text-sm font-bold text-[#191919]"
          style={{ color: "#191919" }}
        >
          카카오톡 문의
        </a>
      </div>
    </section>
  );
}
