import type { Metadata } from "next";
import GuideCategoryNav, {
  GuideContact,
  GuideHero,
  guideThemes,
} from "@/app/_components/guide-category-nav";
import WarningIcon from "@/app/warning/warning-icon";

const BEAUTY_THEME = guideThemes.beauty;

export const metadata: Metadata = {
  title: "피부미용 시술 안내",
  description:
    "CO2 레이저를 이용한 점·쥐젖·편평사마귀 제거, CO2 프락셀, 토닝, 듀얼토닝, LDM, 스킨부스터와 라라필 시술을 안내합니다.",
  alternates: {
    canonical: "/beauty",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const procedures = [
  {
    id: "lesion-removal",
    number: "01",
    title: "CO2 레이저 — 점·쥐젖·편평사마귀 제거",
    subtitle: "병변을 먼저 확인하고 필요한 부위만 정교하게 제거합니다.",
    targets: ["튀어나오거나 눈에 띄는 점", "목·겨드랑이 등의 쥐젖", "얼굴에 번지는 편평사마귀"],
    treatment: [
      "점처럼 보여도 서로 다른 병변일 수 있어 크기, 색, 경계와 변화 양상을 먼저 확인합니다.",
      "병변의 종류와 깊이에 따라 CO2 레이저 등으로 필요한 조직을 제거하며, 큰 병변이나 진단이 필요한 병변은 다른 방법을 안내할 수 있습니다.",
      "편평사마귀는 인유두종바이러스(HPV)와 관련되어 보이는 병변을 제거해도 새로 생기거나 다시 나타날 수 있습니다.",
    ],
    recovery: [
      "시술 후 붉은 기, 화끈거림, 소량의 진물과 얇은 딱지가 생길 수 있습니다.",
      "재생테이프·연고·세안 시작 시점은 제거 깊이와 부위에 따라 다르므로 받은 안내를 우선해 주세요. 오염되거나 젖은 보호재는 안내받은 방법으로 교체하세요.",
      "딱지나 각질을 억지로 떼지 말고, 화장품·스크럽·필링 제품은 상처가 완전히 아물기 전까지 시술 부위에 사용하지 마세요.",
      "수영장, 사우나·찜질방, 격한 운동과 과음은 상처가 안정될 때까지 피하고, 상처가 아문 뒤에도 자외선 차단을 꼼꼼히 해 주세요.",
      "편평사마귀 부위는 긁거나 면도하지 말고 만진 뒤 손을 씻어 다른 부위로 번지는 것을 줄여 주세요.",
    ],
    caution:
      "갑자기 커지거나 색·모양이 변한 점, 반복해서 피가 나는 병변은 진단이 먼저입니다. 시술 후 출혈이 멈추지 않거나 고름·악취·심한 열감, 빠르게 번지는 붉은 기와 큰 물집이 생기면 바로 연락해 주세요.",
  },
  {
    id: "co2-fractional",
    number: "02",
    title: "CO2 프락셀",
    subtitle: "피부에 미세한 치료 기둥을 만들어 흉터와 피부결 개선을 돕습니다.",
    targets: ["패인 여드름 흉터", "거친 피부결과 넓어 보이는 모공", "잔주름과 광노화 피부"],
    treatment: [
      "프락셔널 CO2 레이저는 피부 전체가 아닌 미세한 점 형태로 에너지를 전달해 주변 피부를 남겨 두는 박피성 레이저 시술입니다.",
      "마취크림을 바른 뒤 흉터의 모양, 피부 타입과 회복 가능 기간에 맞춰 강도와 횟수를 조절합니다.",
      "흉터의 깊이와 형태에 따라 여러 차례 시술이나 다른 치료의 병행이 필요할 수 있습니다.",
    ],
    recovery: [
      "시술 직후 화끈거림, 붉은 기, 부기와 미세한 딱지 또는 각질이 생길 수 있으며 강도에 따라 회복 기간이 달라집니다.",
      "재생 기간에는 순한 세안과 충분한 보습을 유지하고 스크럽, 필링, 레티놀과 산 성분은 쉬어 주세요.",
      "자외선 노출은 색소침착 위험을 높일 수 있습니다. 피부가 회복될 때까지 강한 햇빛을 피하고 자외선 차단제를 사용하세요.",
    ],
    caution:
      "염증 후 색소침착, 오래가는 붉은 기, 색소 저하, 감염과 흉터가 드물게 생길 수 있어 피부 타입에 맞춘 강도 선택이 중요합니다.",
  },
  {
    id: "toning",
    number: "03",
    title: "토닝",
    subtitle: "낮은 에너지의 레이저를 고르게 조사해 색소와 피부 톤을 관리합니다.",
    targets: ["기미와 고르지 않은 피부 톤", "칙칙함과 잔색소", "반복 관리가 필요한 색소 고민"],
    treatment: [
      "일반적으로 저출력 1064nm Q-switched Nd:YAG 레이저를 피부에 고르게 조사하는 방식으로 진행합니다.",
      "기미는 자외선, 열, 호르몬 등 여러 요인의 영향을 받아 한 번에 없애기보다 피부 반응을 보며 반복 관리합니다.",
      "잡티의 종류와 깊이에 따라 토닝보다 다른 파장이나 병행 치료가 더 적합할 수 있습니다.",
    ],
    recovery: [
      "시술 후 가벼운 붉은 기, 건조함이나 따끔거림이 생길 수 있으므로 보습과 자외선 차단을 꾸준히 해 주세요.",
      "사우나, 뜨거운 찜질과 강한 햇빛처럼 피부 열을 높이는 환경은 시술 직후 피하는 것이 좋습니다.",
      "피부 톤이 갑자기 얼룩덜룩하게 밝아지거나 색 변화가 지속되면 다음 시술 전에 반드시 알려 주세요.",
    ],
    caution:
      "짧은 간격의 반복 시술이나 누적 에너지가 과하면 드물게 점상·얼룩 형태의 색소 저하가 생길 수 있어 반응에 맞춘 간격과 강도가 중요합니다.",
  },
  {
    id: "dual-toning",
    number: "04",
    title: "듀얼토닝(제네시스토닝)",
    subtitle: "색소 토닝과 제네시스 방식의 열 자극을 함께 구성하는 복합 관리입니다.",
    targets: ["색소와 붉은 기가 함께 있는 피부", "피부결·모공과 잔주름", "톤과 피부 컨디션의 복합 관리"],
    treatment: [
      "색소를 목표로 하는 저출력 토닝에 비박피성 1064nm Nd:YAG 제네시스 방식의 진피 가열을 더해 피부 상태를 함께 관리합니다.",
      "제네시스 방식은 피부 표면을 벗겨내지 않고 열을 전달하며 붉은 기, 피부결과 잔주름 개선을 보조하는 데 사용됩니다.",
      "두 레이저의 순서와 강도는 색소의 종류, 홍조와 민감도에 따라 달라집니다.",
    ],
    recovery: [
      "대개 일상생활이 가능하지만 일시적인 붉은 기, 열감, 건조함이 나타날 수 있습니다.",
      "시술 당일에는 뜨거운 목욕, 사우나, 격한 운동과 자극적인 화장품을 피하고 보습해 주세요.",
      "매일 자외선 차단을 하고 시술 후 피부색이나 붉은 기의 변화를 관찰해 주세요.",
    ],
    caution:
      "비박피성 시술도 화상, 물집, 색소침착·저하와 오래가는 붉은 기가 생길 수 있으며, 효과와 회복은 개인마다 다릅니다.",
  },
  {
    id: "ldm",
    number: "05",
    title: "LDM",
    subtitle: "서로 다른 고주파 초음파를 빠르게 전환해 피부 컨디션을 관리합니다.",
    targets: ["민감하고 붉어진 피부", "건조함과 피부 컨디션 저하", "레이저·주사 시술 후 진정 관리"],
    treatment: [
      "LDM(Local Dynamic Micromassage)은 3MHz와 10MHz 등 서로 다른 초음파 주파수를 빠르게 교차시키는 비침습적 관리입니다.",
      "초음파 젤을 바른 뒤 핸드피스를 피부에 움직이며 진행하고, 피부 상태에 따라 사용하는 모드와 시간이 달라집니다.",
      "피부 진정과 보습, 붓기 및 피부결 관리를 목적으로 단독 또는 다른 시술 뒤에 병행할 수 있습니다.",
    ],
    recovery: [
      "절개나 주사 없이 진행해 일반적으로 별도의 회복 기간이 거의 없으며 따뜻함이나 가벼운 붉은 기를 느낄 수 있습니다.",
      "시술 뒤에는 순한 보습제를 사용하고 다른 시술을 함께 받은 경우 해당 시술의 주의사항을 우선해 주세요.",
      "피부 자극이나 붉은 기가 오래 지속되면 의료진에게 알려 주세요.",
    ],
    caution:
      "임신 중이거나 치료 부위에 감염·상처가 있는 경우, 삽입형 의료기기 또는 금속 삽입물이 있는 경우에는 시술 전 반드시 알려 주세요.",
  },
  {
    id: "skin-booster",
    number: "06",
    title: "스킨부스터",
    subtitle: "피부 고민에 맞는 성분을 피부층에 주입해 수분감과 피부결을 관리합니다.",
    targets: ["속건조와 잔주름", "탄력과 피부결 저하", "칙칙하고 생기 없는 피부"],
    treatment: [
      "스킨부스터는 히알루론산, 폴리뉴클레오타이드(PN) 등 제품별로 성분과 목적이 다르므로 피부 상태와 알레르기 이력을 확인해 선택합니다.",
      "마취크림을 바른 뒤 손주사나 기기를 이용해 피부에 소량씩 주입하며 제품에 따라 권장 부위와 주입 깊이가 달라집니다.",
      "볼륨을 만드는 필러나 표정근을 조절하는 보툴리눔 톡신과는 목적이 다르며, 필요한 횟수와 유지 기간에는 개인차가 있습니다.",
    ],
    recovery: [
      "주사 자국, 엠보싱, 붉은 기, 부기와 멍이 생길 수 있으며 대부분 시간이 지나며 줄어듭니다.",
      "당일에는 시술 부위를 누르거나 문지르지 말고 과음, 사우나, 뜨거운 목욕과 격한 운동을 피하세요.",
      "세안과 화장 시작 시점, 사용을 쉬어야 할 화장품은 제품과 시술 방법에 따라 안내받은 내용을 따라 주세요.",
    ],
    caution:
      "심한 통증과 함께 피부가 하얗거나 보랏빛으로 변하는 경우, 시야 흐림·시력 변화·심한 눈 통증이 생기면 즉시 의료진 또는 응급의료기관의 확인이 필요합니다.",
  },
  {
    id: "lhala-peel",
    number: "07",
    title: "라라필",
    subtitle: "LHA와 알칼리 성분, 지질 성분을 활용하는 피부결 관리 필링입니다.",
    targets: ["묵은 각질과 거친 피부결", "피지와 칙칙한 피부 톤", "수분감이 부족한 피부"],
    treatment: [
      "라라필(LHALA Peel)은 LHA, 알칼리 성분 H2sol™과 지질 성분을 조합한 필링 프로그램입니다.",
      "피부를 세정한 뒤 단계별 용액을 바르고 닦아내며, 피부 상태에 따라 진정·보습 관리를 함께 진행합니다.",
      "피부 타입, 여드름과 민감도에 따라 도포 시간과 반복 간격을 조절합니다.",
    ],
    recovery: [
      "가벼운 화끈거림, 붉은 기, 건조함과 미세한 각질이 나타날 수 있습니다.",
      "각질을 문질러 떼지 말고 보습제를 충분히 사용하며 외출할 때 자외선 차단제를 발라 주세요.",
      "시술 전후에는 의료진이 안내한 기간 동안 스크럽, 레티놀, AHA·BHA 등 자극적인 제품 사용을 쉬어 주세요.",
    ],
    caution:
      "피부가 벗겨졌거나 염증·감염이 있는 경우, 최근 강한 필링이나 레이저 시술을 받은 경우에는 피부가 회복된 뒤 진행할 수 있습니다.",
  },
];

export default function BeautyGuidePage() {
  return (
    <div className="min-h-screen text-[#334155]" style={{ backgroundColor: BEAUTY_THEME.tint }}>

      <main className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-8">
        <GuideCategoryNav active="beauty" />

        <GuideHero
          active="beauty"
          title="피부 고민에 맞춘 미용 시술 안내"
          description="같은 고민도 피부 타입과 병변의 깊이에 따라 필요한 시술이 다릅니다. 시술 특징과 회복 과정을 확인하고 진료 후 알맞은 방법을 결정하세요."
        />

        <aside className="mt-3 bg-white px-5 py-4 sm:px-6">
          <p className="break-keep text-base font-bold leading-[1.7] text-[#334155]">
            결과, 통증과 회복 기간에는 개인차가 있습니다. 온라인 안내보다 진료 시 받은 개별 안내를 우선해 주세요.
          </p>
        </aside>

        <nav aria-label="미용 시술 바로가기" className="mt-3 grid grid-cols-2 gap-px overflow-hidden bg-slate-200 sm:grid-cols-4">
          {procedures.map((procedure) => (
            <a
              key={procedure.id}
              href={`#${procedure.id}`}
              className="group flex min-h-[132px] flex-col items-center justify-center bg-white px-3 py-4 text-center transition-colors hover:bg-slate-50 sm:min-h-[150px]"
            >
              <span className="flex h-12 w-12 items-center justify-center" style={{ color: BEAUTY_THEME.accent }}>
                <WarningIcon name={getBeautyIcon(procedure.id)} className="h-11 w-11" />
              </span>
              <span className="mt-2 break-keep text-[15px] font-bold leading-6 text-[#334155]">
                {getBeautyNavTitle(procedure.title)}
              </span>
            </a>
          ))}
        </nav>

        <section className="mt-3 bg-white px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-xs font-bold tracking-[0.16em]" style={{ color: BEAUTY_THEME.accent }}>BEFORE TREATMENT</p>
          <h2 className="mt-2 text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">시술 전 꼭 알려 주세요</h2>
          <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {[
              "임신·수유 중이거나 임신 가능성이 있는 경우",
              "복용 중인 약, 항응고제·아스피린·광과민 약물이 있는 경우",
              "최근 이소트레티노인 복용, 필링·레이저·주사 시술을 받은 경우",
              "켈로이드, 알레르기, 헤르페스 또는 색소침착 병력이 있는 경우",
              "치료 부위에 상처, 염증, 감염 또는 심한 여드름이 있는 경우",
              "최근 강한 햇빛 노출이나 태닝으로 피부가 붉어진 경우",
            ].map((item) => (
              <p key={item} className="flex gap-3 border-t border-slate-200 py-3 text-base leading-[1.7] text-[#334155]">
                <span aria-hidden="true" className="mt-[0.72rem] h-px w-3 shrink-0" style={{ backgroundColor: BEAUTY_THEME.accent }} />
                <span className="break-keep">{item}</span>
              </p>
            ))}
          </div>
        </section>

        <section aria-label="미용 시술 상세 안내" className="mt-3 overflow-hidden bg-white">
          {procedures.map((procedure) => (
            <article
              key={procedure.id}
              id={procedure.id}
              className="scroll-mt-4 border-t border-slate-200 px-5 py-7 first:border-t-0 sm:px-8 sm:py-10"
            >
              <div className="grid gap-4 sm:grid-cols-[64px_1fr] sm:gap-5">
                <span className="flex h-14 w-14 items-center justify-center" style={{ color: BEAUTY_THEME.accent, backgroundColor: BEAUTY_THEME.tint }}>
                  <WarningIcon name={getBeautyIcon(procedure.id)} className="h-9 w-9" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-[0.16em]" style={{ color: BEAUTY_THEME.accent }}>
                    BEAUTY {procedure.number}
                  </p>
                  <h2 className="mt-1 break-keep text-[23px] font-extrabold leading-[1.3] tracking-[-0.04em] text-slate-800 sm:text-[30px]">
                    {procedure.title}
                  </h2>
                  <p className="mt-2 break-keep text-base leading-[1.7] text-slate-500">{procedure.subtitle}</p>
                </div>
              </div>

              <div className="mt-5 border-y border-slate-200 py-4">
                <h3 className="text-sm font-bold" style={{ color: BEAUTY_THEME.accent }}>이런 고민에</h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                  {procedure.targets.map((target) => (
                    <span key={target} className="inline-flex items-center gap-2 break-keep text-base font-bold leading-[1.7] text-[#334155]">
                      <span aria-hidden="true" className="h-1.5 w-1.5" style={{ backgroundColor: BEAUTY_THEME.accent }} />
                      {target}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-7 md:grid-cols-2 md:gap-10">
                <InfoList title="시술 안내" items={procedure.treatment} />
                <InfoList title="회복과 관리" items={procedure.recovery} />
              </div>

              <div
                className="mt-6 px-4 py-4 text-base leading-[1.7] text-[#334155] sm:px-5"
                style={{ backgroundColor: BEAUTY_THEME.tint }}
              >
                <strong className="mr-2 font-bold" style={{ color: BEAUTY_THEME.accent }}>꼭 확인</strong>
                <span className="break-keep font-bold">{procedure.caution}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-3 bg-white px-5 py-7 sm:px-8 sm:py-9">
          <p className="text-xs font-bold tracking-[0.16em]" style={{ color: BEAUTY_THEME.accent }}>AFTER CARE</p>
          <h2 className="mt-2 text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">모든 시술 후 공통 관리</h2>
          <div className="mt-4 border-t border-slate-200">
            {[
              ["자외선 차단", "강한 햇빛을 피하고 피부가 회복된 뒤에도 자외선 차단제를 꾸준히 사용하세요."],
              ["보습과 진정", "순한 세안제와 보습제를 사용하고 피부를 문지르거나 각질을 억지로 떼지 마세요."],
              ["열과 자극 피하기", "안내받은 기간 동안 과음, 사우나·찜질방, 뜨거운 목욕과 격한 운동을 피하세요."],
              ["바로 연락할 때", "심한 통증, 큰 물집, 고름, 빠르게 번지는 붉은 기나 예상하지 못한 색 변화가 있으면 연락해 주세요."],
            ].map(([title, description]) => (
              <div key={title} className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[150px_1fr] sm:gap-6">
                <h3 className="text-base font-bold text-slate-800">{title}</h3>
                <p className="break-keep text-base leading-[1.7] text-[#334155]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <GuideContact active="beauty" />

        <p className="mt-3 break-keep text-center text-[11px] leading-5 text-slate-400">
          본 페이지는 일반적인 시술 안내이며 진단을 대신하지 않습니다. 실제 장비, 강도, 횟수와 회복 안내는 진료 후 결정됩니다.
        </p>
      </main>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-extrabold tracking-[-0.02em] text-slate-800">{title}</h3>
      <ul className="mt-2 divide-y divide-slate-100">
        {items.map((item) => (
          <li key={item} className="flex gap-3 py-3 text-base leading-[1.7] text-[#334155] first:pt-1">
            <span aria-hidden="true" className="mt-[0.72rem] h-px w-3 shrink-0" style={{ backgroundColor: BEAUTY_THEME.accent }} />
            <span className="break-keep">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getBeautyIcon(id: string): "skin" | "laser" {
  return id === "ldm" || id === "skin-booster" || id === "lhala-peel" ? "skin" : "laser";
}

function getBeautyNavTitle(title: string) {
  return title.replace("CO2 레이저 — ", "");
}
