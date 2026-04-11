import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 안성경희365한의원",
  description: "안성경희365한의원 홈페이지 이용약관",
};

const sections = [
  {
    title: "1. 목적",
    body: [
      "본 약관은 안성경희365한의원이 제공하는 홈페이지 서비스 이용과 관련하여 기본적인 사항을 정하는 것을 목적으로 합니다.",
    ],
  },
  {
    title: "2. 서비스의 내용",
    body: [
      "홈페이지는 병원 소개, 진료 안내, 위치 안내, 상담 연결 등 병원 관련 정보를 제공합니다.",
      "진료후기 열람 기능은 로그인 등 별도 인증 후 제공될 수 있습니다.",
      "실제 진료 예약, 상담, 결제 등은 외부 채널 또는 별도 절차를 통해 진행될 수 있습니다.",
    ],
  },
  {
    title: "3. 이용자의 의무",
    body: [
      "이용자는 홈페이지를 통해 제공되는 정보를 관련 법령 및 사회질서에 반하는 목적으로 사용해서는 안 됩니다.",
      "허위 문의, 시스템 방해 행위, 타인의 권리를 침해하는 행위는 금지됩니다.",
    ],
  },
  {
    title: "4. 저작권",
    body: [
      "홈페이지에 게시된 텍스트, 이미지, 디자인 등은 안성경희365한의원 또는 정당한 권리를 가진 자에게 권리가 있습니다.",
      "사전 동의 없는 무단 복제, 배포, 전송은 제한될 수 있습니다.",
    ],
  },
  {
    title: "5. 면책",
    body: [
      "홈페이지에 제공되는 정보는 일반적인 안내 목적이며, 구체적인 진단이나 치료 판단은 의료진 상담 및 진료를 통해 결정됩니다.",
      "병원 운영 시간, 이벤트, 진료 가능 여부 등은 실제 운영 상황에 따라 변경될 수 있습니다.",
    ],
  },
  {
    title: "6. 약관의 변경",
    body: [
      "본 약관은 운영 정책 및 관계 법령 변경에 따라 수정될 수 있으며, 변경 시 홈페이지를 통해 안내합니다.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
        <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">Terms</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">이용약관</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          본 약관은 안성경희365한의원 홈페이지 이용에 관한 기본 사항을 안내하기 위한 문서입니다.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              <div className="mt-4 space-y-3 text-base leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
