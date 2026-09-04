import type { Metadata } from "next";
import Link from "next/link";
import SkinCheckQuiz from "@/components/renewal/skin-check-quiz";

const siteUrl = "https://anseong365.com";

export const metadata: Metadata = {
  title: "내 피부 고민 자가 감별 | 기미·잡티·점·검버섯 구분",
  description:
    "기미, 주근깨, 흑자, 검버섯, 점, 쥐젖, 편평사마귀 등 헷갈리는 피부 병변을 몇 가지 질문으로 구분해 보세요. 안성경희365한의원 상담 전 참고용 안내입니다.",
  alternates: { canonical: "/skin-check" },
  openGraph: {
    title: "내 피부 고민 자가 감별 | 안성경희365한의원",
    description:
      "기미·주근깨·흑자·검버섯·점·쥐젖·편평사마귀를 몇 가지 질문으로 구분해 보는 자가 감별 안내입니다.",
    url: `${siteUrl}/skin-check`,
  },
};

export default function SkinCheckPage() {
  return (
    <main className="bg-white pb-24 pt-8 lg:pt-12">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <nav className="flex items-center gap-2 py-5 text-xs text-[#999]">
          <Link href="/" className="transition-colors hover:text-teal-700">
            홈
          </Link>
          <span aria-hidden>›</span>
          <span className="text-[#464646]">피부 고민 자가 감별</span>
        </nav>

        <div className="mx-auto max-w-[720px] text-center">
          <p className="mar-font text-xs tracking-[0.3em] text-[#959595]">SELF CHECK</p>
          <h1 className="gb-font mt-4 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-4xl">
            &lsquo;점인 줄 알았는데&rsquo;
            <br />
            헷갈리는 피부 고민, 먼저 구분해 보세요
          </h1>
          <p className="mt-4 break-keep text-[13px] leading-[1.9] text-[#959595] sm:text-[15px]">
            기미·주근깨·흑자·검버섯·점·쥐젖·편평사마귀는 겉보기에 비슷해도 치료 방법이 전혀 다릅니다.
            몇 가지 질문에 답하면 어떤 병변에 가까운지, 어떤 시술이 맞는지 안내해 드립니다.
          </p>
        </div>

        <div className="mt-12">
          <SkinCheckQuiz />
        </div>
      </div>
    </main>
  );
}
