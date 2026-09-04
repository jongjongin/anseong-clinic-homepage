"use client";

import Link from "next/link";
import { useState } from "react";
import { openReserveSheet } from "@/components/site/reserve-cta-button";
import { moleAlert, skinQuestions, skinResults, type SkinResultKey } from "@/lib/skin-check";
import { siteContact } from "@/lib/site-nav";

type Screen =
  | { kind: "intro" }
  | { kind: "question"; id: string }
  | { kind: "result"; key: SkinResultKey }
  | { kind: "alert" };

/** 가장 긴 경로(상태 → 모양 → 위험신호)가 3문항이라 진행률의 분모로 사용한다 */
const TOTAL_STEPS = 3;

const OPTION_BADGES = ["A", "B", "C", "D", "E", "F"];

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
  const progress = isFinished ? 100 : screen.kind === "intro" ? 0 : (step / TOTAL_STEPS) * 100;

  const enterClass = isFinished
    ? "quiz-reveal"
    : direction === "next"
      ? "quiz-in-right"
      : "quiz-in-left";

  return (
    <div className="mx-auto w-full max-w-[720px]">
      {/* 진행 바 */}
      <div className="mb-8">
        <div className="flex items-end justify-between">
          <p className="mar-font text-[11px] tracking-[0.25em] text-[#959595]">
            {screen.kind === "intro"
              ? "START"
              : isFinished
                ? "RESULT"
                : `Q${step} / ${TOTAL_STEPS}`}
          </p>
          {history.length > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="text-[13px] text-[#959595] transition-colors hover:text-[#181818]"
            >
              ← 이전으로
            </button>
          ) : null}
        </div>
        <div className="mt-3 h-[3px] w-full bg-[#eee]">
          <div
            className="h-full bg-teal-700 transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 화면 전환: key를 바꿔 다시 마운트하면서 넘김 애니메이션 */}
      <div key={screenKeyOf(screen)} className={enterClass}>
        {screen.kind === "intro" ? (
          <IntroCard onStart={() => go({ kind: "question", id: "start" })} />
        ) : screen.kind === "question" ? (
          <QuestionCard id={screen.id} step={step} onSelect={go} />
        ) : screen.kind === "alert" ? (
          <AlertCard onRestart={restart} />
        ) : (
          <ResultCard resultKey={screen.key} onRestart={restart} />
        )}
      </div>
    </div>
  );
}

function IntroCard({ onStart }: { onStart: () => void }) {
  return (
    <div className="border border-[#eee] bg-white px-7 py-12 text-center sm:px-10 sm:py-16">
      <p className="mar-font text-[11px] tracking-[0.3em] text-[#959595]">SKIN QUIZ</p>
      <h2 className="gb-font mt-5 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-3xl">
        내 피부 고민은
        <br />
        어떤 병변에 가까울까요?
      </h2>
      <p className="mx-auto mt-5 max-w-[420px] break-keep text-[13px] leading-[1.9] text-[#6d6d6d] sm:text-sm">
        최대 3문항, 약 1분이면 끝납니다. 화면을 넘기며 가장 비슷한 답을 고르면 어떤 병변에 가까운지와
        맞는 시술을 안내해 드립니다.
      </p>

      <div className="mx-auto mt-8 flex max-w-[420px] flex-wrap justify-center gap-1.5">
        {["기미", "주근깨", "흑자", "검버섯", "점", "쥐젖", "편평사마귀", "한관종"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#e6e6e6] px-3 py-1 text-xs text-[#959595]"
          >
            {item}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onStart}
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#181818] px-10 py-4 text-sm font-semibold text-white transition hover:bg-teal-700"
      >
        시작하기
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      <p className="mt-6 text-[11px] text-[#bbb]">상담 전 참고용 안내이며 진단이 아닙니다.</p>
    </div>
  );
}

function QuestionCard({
  id,
  step,
  onSelect,
}: {
  id: string;
  step: number;
  onSelect: (next: Screen) => void;
}) {
  const question = skinQuestions[id];

  if (!question) {
    return null;
  }

  return (
    <div className="border border-[#eee] bg-white px-6 py-9 sm:px-9 sm:py-11">
      <p className="mar-font text-[11px] tracking-[0.3em] text-teal-700">
        QUESTION {String(step).padStart(2, "0")}
      </p>
      <h2 className="gb-font mt-4 break-keep text-xl font-bold leading-snug text-[#181818] sm:text-2xl">
        {question.title}
      </h2>
      {question.description ? (
        <p className="mt-3 break-keep text-[13px] text-[#959595]">{question.description}</p>
      ) : null}

      <div className="mt-7 flex flex-col gap-2.5">
        {question.options.map((option, index) => (
          <button
            key={option.label}
            type="button"
            style={{ animationDelay: `${120 + index * 70}ms` }}
            onClick={() =>
              onSelect(
                option.result
                  ? { kind: "result", key: option.result }
                  : option.next === "mole-alert"
                    ? { kind: "alert" }
                    : { kind: "question", id: option.next ?? "start" },
              )
            }
            className="quiz-option group flex items-center gap-4 border border-[#eee] bg-white px-5 py-5 text-left transition-colors duration-200 hover:border-[#181818] sm:px-6"
          >
            <span
              aria-hidden
              className="mar-font flex h-8 w-8 shrink-0 items-center justify-center border border-[#e6e6e6] text-xs text-[#959595] transition-colors duration-200 group-hover:border-teal-700 group-hover:bg-teal-700 group-hover:text-white"
            >
              {OPTION_BADGES[index] ?? index + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block break-keep text-[15px] font-semibold text-[#181818]">
                {option.label}
              </span>
              {option.hint ? (
                <span className="mt-1 block break-keep text-xs text-[#959595]">{option.hint}</span>
              ) : null}
            </span>
            <span
              aria-hidden
              className="shrink-0 text-[#c4c4c4] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#181818]"
            >
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function AlertCard({ onRestart }: { onRestart: () => void }) {
  return (
    <div>
      <div className="border border-amber-200 bg-amber-50/70 p-7">
        <p className="text-xs font-semibold tracking-wide text-amber-800">확인이 필요합니다</p>
        <h2 className="gb-font mt-3 break-keep text-xl font-bold text-[#181818] sm:text-2xl">
          {moleAlert.title}
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {moleAlert.body.map((line) => (
            <p key={line} className="break-keep text-[13px] leading-[1.9] text-[#464646]">
              {line}
            </p>
          ))}
        </div>
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

  return (
    <div>
      <div className="border border-[#eee] bg-white p-7 sm:p-8">
        <p className="text-xs font-semibold tracking-wide text-teal-700">이런 병변에 가까워요</p>
        <h2 className="gb-font mt-3 break-keep text-2xl font-bold text-[#181818] sm:text-3xl">
          {result.name}
        </h2>
        <p className="mt-3 break-keep text-[13px] leading-[1.9] text-[#6d6d6d] sm:text-sm">
          {result.summary}
        </p>

        <div className="mt-7 border-t border-[#f2f2f2] pt-6">
          <p className="text-[13px] font-semibold text-[#181818]">이런 특징이 있어요</p>
          <ul className="mt-3 flex flex-col gap-2">
            {result.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 break-keep text-[13px] leading-relaxed text-[#6d6d6d]"
              >
                <span className="mt-[7px] block h-1 w-1 shrink-0 rotate-45 bg-teal-700" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 bg-[#f8f8f8] p-5">
          <p className="text-[13px] font-semibold text-[#181818]">이렇게 구분해요</p>
          <p className="mt-2 break-keep text-[13px] leading-[1.8] text-[#6d6d6d]">{result.distinguish}</p>
        </div>

        {result.note ? (
          <p className="mt-4 break-keep border border-teal-100 bg-teal-50/60 px-5 py-4 text-[13px] leading-[1.8] text-[#464646]">
            {result.note}
          </p>
        ) : null}
      </div>

      {/* 권장 시술 */}
      <div className="mt-4 border border-[#eee] bg-white p-7 sm:p-8">
        <p className="mar-font text-[11px] tracking-[0.25em] text-[#959595]">RECOMMENDED</p>
        <h3 className="gb-font mt-3 break-keep text-lg font-bold text-[#181818]">
          {result.recommend.label}
        </h3>
        <p className="mt-2 break-keep text-[13px] leading-[1.8] text-[#6d6d6d]">
          {result.recommend.reason}
        </p>
        <Link
          href={`/menu/${result.recommend.slug}`}
          className="gb-font group mt-5 inline-flex items-center gap-2 border-t border-[#f2f2f2] pt-5 text-sm text-[#181818] transition-colors hover:text-teal-700"
        >
          가격·상세 보기
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

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
      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
        <button
          type="button"
          onClick={() => openReserveSheet(message)}
          className="flex-1 rounded-full bg-teal-700 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          이 내용으로 상담 신청
        </button>
        <a
          href={siteContact.kakaoChatUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full border border-[#E2C400] bg-[#FEE500] px-7 py-3.5 text-center text-sm font-semibold text-[#191919] transition hover:bg-[#F7DE00]"
        >
          카카오톡으로 사진 보내기
        </a>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#f2f2f2] pt-5">
        <button
          type="button"
          onClick={onRestart}
          className="text-[13px] text-[#959595] transition-colors hover:text-[#181818]"
        >
          ↻ 처음부터 다시 하기
        </button>
        <a href={siteContact.phoneHref} className="text-[13px] text-[#181818] hover:text-teal-700">
          전화 문의 {siteContact.phone}
        </a>
      </div>

      <p className="mt-6 break-keep text-[11px] leading-relaxed text-[#aaa]">
        이 결과는 상담 전 참고용 안내이며 진단이 아닙니다. 실제 병변 구분과 시술 결정은 원장이 직접
        확인한 뒤 안내해 드립니다.
      </p>
    </>
  );
}
