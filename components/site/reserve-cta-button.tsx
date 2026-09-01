"use client";

export const OPEN_RESERVE_SHEET_EVENT = "open-reserve-sheet";

type ReserveCtaButtonProps = {
  className?: string;
  children: React.ReactNode;
};

/** 데스크톱은 하단 상담 바로 스크롤, 모바일은 예약 바텀시트를 엽니다. */
export default function ReserveCtaButton({ className = "", children }: ReserveCtaButtonProps) {
  const handleClick = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth", block: "end" });
      return;
    }

    window.dispatchEvent(new CustomEvent(OPEN_RESERVE_SHEET_EVENT));
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
