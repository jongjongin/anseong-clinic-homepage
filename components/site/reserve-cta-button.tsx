"use client";

export const OPEN_RESERVE_SHEET_EVENT = "open-reserve-sheet";

/** 예약 바텀시트를 엽니다. message를 주면 문의 내용에 미리 채워집니다. */
export const openReserveSheet = (message?: string) => {
  window.dispatchEvent(new CustomEvent(OPEN_RESERVE_SHEET_EVENT, { detail: { message } }));
};

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

    openReserveSheet();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
