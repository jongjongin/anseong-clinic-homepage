"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SkinIcon from "@/components/renewal/skin-icons";
import { openReserveSheet } from "@/components/site/reserve-cta-button";
import { moleAlert, skinQuestions, skinResults, type SkinResultKey } from "@/lib/skin-check";
import { skinPhotos } from "@/lib/skin-photos";
import { siteContact } from "@/lib/site-nav";

type Screen =
  | { kind: "intro" }
  | { kind: "question"; id: string }
  | { kind: "result"; key: SkinResultKey }
  | { kind: "alert" };

/** 가장 긴 경로(고민 → 모양 → 위험신호)가 3문항이라 진행 표시의 분모로 사용한다 */
const TOTAL_STEPS = 3;

/** 선택한 항목이 눌린 걸 눈으로 확인한 뒤 다음 화면으로 넘어가는 시간 */
const PICK_FEEDBACK_MS = 260;

const screenKeyOf = (screen: Screen) =>
  screen.kind === "question"
    ? `q-${screen.id}`
    : screen.kind === "result"
      ? `r-${screen.key}`
      : screen.kind;

export default function SkinCheckQuiz() {
  const [screen, setScreen] = useState<Screen>({ kind: "intro" });
  const [history, setHistory] = useState<Screen[]>([]);
  const [direction, setDirection] = useState<"next" | "back">("next");

  const go = (next: Screen) => {
    setDirection("next");
    setHistory((prev) => [...prev, screen]);
    setScreen(next);
  };

  const goBack = () => {
    setDirection("back");
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      setScreen(prev[prev.length - 1]);
      return prev.slice(0, -1);
    });
  };

  const restart = () => {
    setDirection("next");
    setHistory([]);
    setScreen({ kind: "intro" });
  };

  // intro가 history에 포함되므로 문항 번호는 history 길이와 같다
  const step = Math.min(history.length, TOTAL_STEPS);
  const isFinished = screen.kind === "result" || screen.kind === "alert";

  const enterClass = isFinished
    ? "quiz-reveal"
    : direction === "next"
      ? "quiz-in-right"
      : "quiz-in-left";

  return (
    <div className="mx-auto w-full max-w-[720px]">
      <div className="overflow-hidden rounded-[24px] border border-[#e2e2e2] bg-white shadow-[0_30px_70px_-32px_rgba(15,23,42,0.22)] sm:rounded-[28px]">
        {/* 진행 표시 */}
        <div className="flex items-center justify-between gap-4 border-b border-[#ededed] bg-[#f7f7f6] px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <p className="text-[13px] font-bold text-[#454545]">
              {screen.kind === "intro" ? "시작" : isFinished ? "결과" : `${step} / ${TOTAL_STEPS}`}
            </p>
            <div className="flex items-center gap-1.5" aria-hidden>
              {Array.from({ length: TOTAL_STEPS }, (_, index) => (
                <span
                  key={index}
                  className={`h-1 w-8 rounded-full transition-colors duration-500 ${
                    isFinished || index < step ? "bg-teal-700" : "bg-[#d8d8d8]"
                  }`}
                />
              ))}
            </div>
          </div>

          {history.length > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="-mr-2 px-2 py-1 text-[14px] font-medium text-[#5f5f5f] transition-colors hover:text-[#171717]"
            >
              ← 이전
            </button>
          ) : null}
        </div>

        <div key={screenKeyOf(screen)} className={enterClass}>
          {screen.kind === "intro" ? (
            <IntroCard onStart={() => go({ kind: "question", id: "start" })} />
          ) : screen.kind === "question" ? (
            <QuestionCard id={screen.id} onSelect={go} />
          ) : screen.kind === "alert" ? (
            <AlertCard onRestart={restart} />
          ) : (
            <ResultCard resultKey={screen.key} onRestart={restart} />
          )}
        </div>
      </div>

      <p className="mt-5 break-keep px-2 text-center text-[12.5px] leading-relaxed text-[#7a7a7a]">
        상담 전 참고용이며 진단이 아닙니다. 최종 확인은 원장 진료로 안내해 드립니다.
      </p>
    </div>
  );
}

function IntroCard({ onStart }: { onStart: () => void }) {
  return (
    <div className="bg-gradient-to-b from-teal-50/60 to-white px-6 py-14 text-center sm:px-12 sm:py-20">
      <div className="mx-auto flex max-w-[300px] items-center justify-center gap-3">
        {(["mole", "seborrheic", "melasma", "freckle"] as const).map((name) => (
          <SkinIcon key={name} name={name} className="h-14 w-14 sm:h-16 sm:w-16" />
        ))}
      </div>

      <h2 className="gb-font mt-10 break-keep text-[27px] font-bold leading-[1.35] text-[#171717] sm:text-[36px]">
        기미인가요, 점인가요?
      </h2>
      <p className="mx-auto mt-4 max-w-[330px] break-keep text-[16px] leading-[1.75] text-[#454545]">
        3문항이면 어떤 병변인지, 무엇으로 제거하는지 알려드립니다.
      </p>

      <button
        type="button"
        onClick={onStart}
        className="group mt-10 inline-flex w-full max-w-[320px] items-center justify-center gap-2.5 rounded-full bg-[#171717] px-11 py-4.5 text-[17px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(15,23,42,0.5)] transition hover:bg-teal-700 sm:w-auto"
      >
        시작하기
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
}

function QuestionCard({
  id,
  onSelect,
}: {
  id: string;
  onSelect: (next: Screen) => void;
}) {
  const question = skinQuestions[id];
  const [picked, setPicked] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  if (!question) {
    return null;
  }

  const choose = (index: number, next: Screen) => {
    if (picked !== null) return; // 연타 방지
    setPicked(index);
    timer.current = setTimeout(() => onSelect(next), PICK_FEEDBACK_MS);
  };

  return (
    <div className="px-4 py-10 sm:px-10 sm:py-14">
      <h2 className="gb-font break-keep text-center text-[27px] font-bold leading-tight text-[#171717] sm:text-[34px]">
        {question.title}
      </h2>

      <div className="mt-8 flex flex-col gap-3 sm:mt-10">
        {question.options.map((option, index) => {
          const isPicked = picked === index;

          return (
            <button
              key={option.label}
              type="button"
              style={{ animationDelay: `${140 + index * 65}ms` }}
              onClick={() =>
                choose(
                  index,
                  option.result
                    ? { kind: "result", key: option.result }
                    : option.next === "mole-alert"
                      ? { kind: "alert" }
                      : { kind: "question", id: option.next ?? "start" },
                )
              }
              className={`quiz-option group flex min-h-[84px] items-center gap-4 rounded-2xl border-2 bg-white px-4 py-3.5 text-left transition-all duration-200 sm:px-5 ${
                isPicked
                  ? "border-teal-700 bg-teal-50"
                  : "border-[#e2e2e2] hover:border-teal-700 hover:bg-teal-50/40"
              } ${picked !== null && !isPicked ? "opacity-40" : ""}`}
            >
              {option.icon ? (
                <SkinIcon
                  name={option.icon}
                  className="h-[60px] w-[60px] shrink-0 sm:h-[64px] sm:w-[64px]"
                />
              ) : null}

              <span className="min-w-0 flex-1">
                <span className="block break-keep text-[17px] font-bold leading-snug text-[#171717] sm:text-[18px]">
                  {option.label}
                </span>
                {option.hint ? (
                  <span className="mt-1.5 block break-keep text-[13.5px] leading-snug text-[#5f5f5f]">
                    {option.hint}
                  </span>
                ) : null}
              </span>

              <span
                aria-hidden
                className={`shrink-0 pr-1 text-[18px] transition-all duration-200 ${
                  isPicked ? "text-teal-700" : "text-[#b0b0b0] group-hover:translate-x-1 group-hover:text-teal-700"
                }`}
              >
                →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** 결과 화면에서 가장 크게 보여야 하는 "무엇으로 제거/치료하는가" 블록 */
function TreatmentBlock({
  action,
  label,
  reason,
  slug,
}: {
  action: string;
  label: string;
  reason: string;
  slug: string;
}) {
  return (
    <div className="mt-8 rounded-2xl bg-teal-700 p-6 text-white sm:p-7">
      <p className="text-[14px] font-bold text-teal-100">이렇게 {action}합니다</p>
      <p className="gb-font mt-2 break-keep text-[26px] font-bold leading-tight sm:text-[30px]">
        {label}
      </p>
      <p className="mt-3 break-keep text-[15px] leading-[1.7] text-teal-50">{reason}</p>
      <Link
        href={`/menu/${slug}`}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-[16px] font-bold text-teal-800 transition hover:bg-teal-50"
      >
        프로그램 보기
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

function AlertCard({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="px-5 py-10 sm:px-10 sm:py-14">
      <div className="text-center">
        <SkinIcon name="warn-asymmetry" className="mx-auto h-20 w-20" />
        <h2 className="gb-font mt-6 break-keep text-[25px] font-bold leading-snug text-[#171717] sm:text-[30px]">
          {moleAlert.title}
        </h2>
      </div>

      <div className="mt-7 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 sm:p-6">
        {moleAlert.body.map((line) => (
          <p
            key={line}
            className="break-keep text-[15px] leading-[1.75] text-[#3d3323] [&+&]:mt-3"
          >
            {line}
          </p>
        ))}
      </div>

      <ContactActions
        message={"[자가 감별] 점 - 모양·크기 변화가 있어 확인이 필요하다고 나왔습니다. 진료 상담 원합니다."}
        onRestart={onRestart}
      />
    </div>
  );
}

function ResultCard({ resultKey, onRestart }: { resultKey: SkinResultKey; onRestart: () => void }) {
  const result = skinResults[resultKey];
  const photo = skinPhotos[resultKey];

  return (
    <div className="px-5 py-10 sm:px-10 sm:py-14">
      <div className="text-center">
        <SkinIcon name={resultKey} className="mx-auto h-24 w-24 sm:h-28 sm:w-28" />
        <p className="mt-5 text-[14px] font-bold text-teal-700">이런 병변에 가까워요</p>
        <h2 className="gb-font mt-2 break-keep text-[32px] font-bold leading-tight text-[#171717] sm:text-[40px]">
          {result.name}
        </h2>
        <p className="mx-auto mt-4 max-w-[400px] break-keep text-[16px] leading-[1.7] text-[#454545]">
          {result.summary}
        </p>
      </div>

      {photo ? (
        <figure className="mt-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f0f0ef]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 720px) 100vw, 640px"
              className="object-cover"
            />
            <figcaption className="absolute left-0 top-0 rounded-br-2xl bg-[#171717]/80 px-3.5 py-2 text-[13px] font-bold text-white">
              실제 사진
            </figcaption>
          </div>
          <p className="mt-2 text-[11px] text-[#8a8a8a]">{photo.credit}</p>
        </figure>
      ) : null}

      {/* 무엇으로 제거하는지 — 결과 화면의 주인공 */}
      <TreatmentBlock
        action={result.action}
        label={result.recommend.label}
        reason={result.recommend.reason}
        slug={result.recommend.slug}
      />

      {result.alsoRecommend ? (
        <Link
          href={`/menu/${result.alsoRecommend.slug}`}
          className="group mt-3 flex items-center gap-4 rounded-2xl border-2 border-[#e2e2e2] bg-white px-5 py-4 transition hover:border-teal-700"
        >
          <span className="min-w-0 flex-1">
            <span className="block break-keep text-[19px] font-bold text-[#171717]">
              {result.alsoRecommend.label}
            </span>
            <span className="mt-1.5 block break-keep text-[14px] leading-snug text-[#5f5f5f]">
              {result.alsoRecommend.reason}
            </span>
          </span>
          <span
            aria-hidden
            className="shrink-0 text-[18px] text-[#b0b0b0] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-teal-700"
          >
            →
          </span>
        </Link>
      ) : null}

      <ul className="mt-7 flex flex-wrap justify-center gap-2">
        {result.features.map((feature) => (
          <li
            key={feature}
            className="break-keep rounded-full border border-[#dcdcdc] bg-[#fafafa] px-4 py-2 text-[14px] font-medium text-[#454545]"
          >
            {feature}
          </li>
        ))}
      </ul>

      <p className="mt-6 break-keep rounded-2xl bg-[#f5f5f4] px-5 py-5 text-[15px] leading-[1.7] text-[#3d3d3d]">
        <span className="font-bold text-[#171717]">구분 포인트 </span>
        {result.distinguish}
      </p>

      {result.note ? (
        <p className="mt-3 break-keep rounded-2xl border-2 border-teal-200 bg-teal-50 px-5 py-5 text-[15px] leading-[1.7] text-[#1f3d38]">
          {result.note}
        </p>
      ) : null}

      <a
        href="/skin-check#photos"
        className="group mt-3 flex items-center justify-center gap-2 rounded-2xl border-2 border-[#e2e2e2] bg-white px-5 py-4 text-[15px] font-bold text-[#171717] transition hover:border-teal-700 hover:text-teal-700"
      >
        전체 질환 예시 사진 보기
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>

      <ContactActions
        message={`[자가 감별] ${result.name} 으로 나왔습니다. ${result.recommend.label} 상담 원합니다.`}
        onRestart={onRestart}
      />
    </div>
  );
}

function ContactActions({ message, onRestart }: { message: string; onRestart: () => void }) {
  return (
    <>
      <div className="mt-7 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => openReserveSheet(message)}
          className="rounded-full bg-[#171717] px-7 py-4.5 text-center text-[16px] font-bold text-white transition hover:bg-teal-700"
        >
          이 내용으로 상담 신청
        </button>
        <a
          href={siteContact.kakaoChatUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border-2 border-[#E2C400] bg-[#FEE500] px-7 py-4.5 text-center text-[16px] font-bold text-[#191919] transition hover:bg-[#F7DE00]"
        >
          카카오톡으로 사진 보내기
        </a>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#ededed] pt-5">
        <button
          type="button"
          onClick={onRestart}
          className="text-[14px] font-medium text-[#5f5f5f] transition-colors hover:text-[#171717]"
        >
          ↻ 다시 하기
        </button>
        <a
          href={siteContact.phoneHref}
          className="text-[14px] font-bold text-[#171717] hover:text-teal-700"
        >
          전화 {siteContact.phone}
        </a>
      </div>
    </>
  );
}
