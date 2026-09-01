"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import FloatingButtons from "@/components/site/floating-buttons";
import { OPEN_RESERVE_SHEET_EVENT } from "@/components/site/reserve-cta-button";
import QuickReserveBar from "@/components/site/quick-reserve-bar";
import ReserveSheet from "@/components/site/reserve-sheet";
import SiteMobileBar from "@/components/site/site-mobile-bar";

type ReserveSheetContextValue = {
  openSheet: () => void;
};

const ReserveSheetContext = createContext<ReserveSheetContextValue>({
  openSheet: () => {},
});

export const useReserveSheet = () => useContext(ReserveSheetContext);

export default function GlobalOverlays() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const openSheet = (event: Event) => {
      const detail = (event as CustomEvent<{ message?: string }>).detail;
      setPrefillMessage(detail?.message ?? "");
      setIsSheetOpen(true);
    };
    window.addEventListener(OPEN_RESERVE_SHEET_EVENT, openSheet);
    return () => window.removeEventListener(OPEN_RESERVE_SHEET_EVENT, openSheet);
  }, []);

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  return (
    <ReserveSheetContext.Provider value={{ openSheet: () => setIsSheetOpen(true) }}>
      <FloatingButtons onReserveClick={() => setIsSheetOpen(true)} />
      <QuickReserveBar />
      <SiteMobileBar onReserveClick={() => setIsSheetOpen(true)} />
      <ReserveSheet
        open={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        prefillMessage={prefillMessage}
      />
    </ReserveSheetContext.Provider>
  );
}
