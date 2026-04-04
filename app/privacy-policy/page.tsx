import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 안성경희365한의원",
  description: "안성경희365한의원 개인정보처리방침",
};

const sections = [
  {
    title: "1. 개인정보의 처리 목적",
    body: [
      "안성경희365한의원은 상담 연결, 문의 응대, 서비스 운영 및 개선을 위해 필요한 범위에서 개인정보를 처리할 수 있습니다.",
      "현재 홈페이지에서는 별도의 회원가입 기능을 제공하지 않으며, 전화 상담 및 외부 상담 채널 연결 과정에서 필요한 정보만 최소한으로 확인합니다.",
    ],
  },
  {
    title: "2. 처리하는 개인정보 항목",
    body: [
      "전화 상담 또는 카카오 상담 과정에서 이름, 연락처, 상담 내용 등이 수집될 수 있습니다.",
      "웹사이트 이용 과정에서 접속 일시, 브라우저 정보, IP 주소 등 기본적인 로그 정보가 자동으로 생성될 수 있습니다.",
    ],
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: [
      "수집된 개인정보는 처리 목적 달성 시 지체 없이 파기하는 것을 원칙으로 합니다.",
      "관계 법령에 따라 일정 기간 보관이 필요한 경우 해당 법령이 정한 기간 동안 보관할 수 있습니다.",
    ],
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: [
      "안성경희365한의원은 정보주체의 동의 또는 법령상 근거가 있는 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다.",
    ],
  },
  {
    title: "5. 정보주체의 권리와 행사 방법",
    body: [
      "정보주체는 언제든지 개인정보 열람, 정정, 삭제, 처리정지 등을 요청할 수 있습니다.",
      "관련 요청은 대표번호 또는 병원 공식 상담 채널을 통해 접수하실 수 있습니다.",
    ],
  },
  {
    title: "6. 개인정보의 안전성 확보 조치",
    body: [
      "개인정보에 대한 접근 제한, 관리적 점검, 보관 환경 관리 등 안전성 확보를 위한 조치를 시행합니다.",
    ],
  },
  {
    title: "7. 처리방침 변경",
    body: [
      "본 개인정보처리방침은 운영 상황 및 관련 법령 변경에 따라 수정될 수 있으며, 변경 시 홈페이지를 통해 안내합니다.",
      "본 문서는 사이트 운영 초기용 초안이며 실제 수집 항목 및 운영 프로세스에 따라 최종 검토 후 보완이 필요합니다.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10">
        <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">
          Privacy Policy
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">개인정보처리방침</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          안성경희365한의원은 개인정보 보호법 등 관계 법령을 고려하여 본 방침을 운영합니다.
          아래 내용은 현재 홈페이지 운영 구조를 기준으로 정리한 초안입니다.
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
