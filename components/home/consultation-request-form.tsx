"use client";

import { useState } from "react";
import { ctaSectionContent } from "@/components/home/content";

export default function ConsultationRequestForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedNote = note.trim();

    if (!trimmedName || !trimmedPhone) {
      setMessage("이름과 전화번호를 먼저 입력해 주세요.");
      return;
    }

    const consultationMessage = [
      "[안성경희365한의원 상담 신청]",
      `이름: ${trimmedName}`,
      `전화번호: ${trimmedPhone}`,
      `상담 내용: ${trimmedNote || "증상 상담 요청"}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(consultationMessage);
      setMessage("상담 내용이 복사되었습니다. 이어서 카카오톡 상담창으로 연결합니다.");
    } catch {
      setMessage("카카오톡 상담창으로 연결합니다. 아래 내용을 직접 보내 주세요.");
    }

    window.open(ctaSectionContent.kakaoChatUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm sm:p-6 lg:mt-0 lg:min-w-[340px]">
      <p className="text-sm font-semibold tracking-[0.12em] text-white/70 uppercase">
        상담 신청
      </p>
      <p className="mt-3 text-sm leading-6 text-white/80">
        이름과 전화번호를 남겨 주시면 카카오톡 상담으로 이어서 문의하실 수 있습니다.
      </p>

      <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="consult-name">
            이름
          </label>
          <input
            id="consult-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="이름을 입력해 주세요"
            className="w-full rounded-2xl border border-white/14 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-[#FEE500]"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="consult-phone">
            전화번호
          </label>
          <input
            id="consult-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="010-0000-0000"
            className="w-full rounded-2xl border border-white/14 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-[#FEE500]"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white" htmlFor="consult-note">
            상담 내용
          </label>
          <textarea
            id="consult-note"
            name="note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="불편한 증상이나 상담 내용을 간단히 적어 주세요"
            className="min-h-[120px] w-full rounded-2xl border border-white/14 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-[#FEE500]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full border border-[#E2C400] bg-[#FEE500] px-6 py-4 text-base font-semibold text-slate-950 transition-colors hover:bg-[#F7DE00]"
        >
          카카오톡으로 상담 신청하기
        </button>

        <a
          href={`tel:${ctaSectionContent.phoneNumber}`}
          className="block rounded-full bg-white px-6 py-4 text-center text-base font-semibold text-slate-950"
        >
          전화 상담하기
        </a>
      </form>

      <p className="mt-4 text-xs leading-5 text-white/70">
        제출 시 입력 내용이 복사되고 카카오톡 상담창으로 연결됩니다.
      </p>
      {message ? <p className="mt-3 text-sm font-medium text-[#FEE500]">{message}</p> : null}
    </div>
  );
}
