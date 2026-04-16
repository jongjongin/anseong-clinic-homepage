import { ctaSectionContent } from "@/components/home/content";

export default function ConsultationRequestForm() {
  return (
    <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm sm:p-6 lg:mt-0 lg:min-w-[340px]">
      <p className="text-sm font-semibold tracking-[0.12em] text-white/70 uppercase">상담 문의</p>
      <p className="mt-3 text-sm leading-6 text-white/80">
        카카오톡 상담과 전화 상담 중 편한 방법으로 바로 문의하실 수 있습니다.
      </p>

      <div className="mt-5 space-y-3">
        <a
          href={ctaSectionContent.kakaoChatUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full rounded-full border border-[#E2C400] bg-[#FEE500] px-6 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-[#F7DE00]"
        >
          카카오톡 상담하기
        </a>

        <a
          href={`tel:${ctaSectionContent.phoneNumber}`}
          className="block rounded-full border border-white bg-white px-6 py-4 text-center text-base font-semibold !text-slate-950"
          style={{ color: "#0f172a" }}
        >
          전화 상담하기
        </a>
      </div>

      <p className="mt-4 text-xs leading-5 text-white/70">진료시간, 위치, 예약 문의도 함께 안내해드립니다.</p>
    </div>
  );
}
