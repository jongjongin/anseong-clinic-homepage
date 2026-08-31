"use client";

import { createContext, useContext, useState } from "react";
import FloatingButtons from "@/components/site/floating-buttons";
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

  return (
    <ReserveSheetContext.Provider value={{ openSheet: () => setIsSheetOpen(true) }}>
      <FloatingButtons onReserveClick={() => setIsSheetOpen(true)} />
      <QuickReserveBar />
      <SiteMobileBar onReserveClick={() => setIsSheetOpen(true)} />
      <ReserveSheet open={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </ReserveSheetContext.Provider>
  );
}
