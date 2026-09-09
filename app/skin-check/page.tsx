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

        <div className="mx-auto max-w-[560px] text-center">
          <h1 className="gb-font mt-2 break-keep text-[28px] font-bold leading-[1.3] text-[#171717] sm:text-[40px]">
            점인가요, 검버섯인가요?
          </h1>
          <p className="mt-4 break-keep text-[16px] leading-[1.7] text-[#454545]">
            비슷해 보여도 제거하는 방법이 다릅니다.
          </p>
        </div>

        <div className="mt-10 sm:mt-14">
          <SkinCheckQuiz />
        </div>
      </div>
    </main>
  );
}
