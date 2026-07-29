import type { WarningGuide } from "@/app/warning/data";

type WarningIconProps = {
  name: WarningGuide["icon"];
  className?: string;
};

export default function WarningIcon({ name, className = "" }: WarningIconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (name) {
    case "acupuncture":
      return (
        <svg {...commonProps}>
          <path d="M18 46 45 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="m42 16 6-6 6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="m13 51 7-3-4-4-3 7Z" fill="currentColor" />
          <path d="M14 22c4-4 8-6 13-6M38 49c4-1 8-4 11-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
        </svg>
      );
    case "pharmacopuncture":
      return (
        <svg {...commonProps}>
          <path d="M21 42 42 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="m37 16 11 11M41 12l11 11M34 19l10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="m18 45-7 7M15 48l4 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 19c-5 2-9 6-11 11M45 40c-2 5-6 9-11 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
        </svg>
      );
    case "bee":
      return (
        <svg {...commonProps}>
          <ellipse cx="32" cy="34" rx="12" ry="15" stroke="currentColor" strokeWidth="3" />
          <path d="M22 28h20M21 36h22M25 44h14" stroke="currentColor" strokeWidth="2.5" />
          <path d="M25 22c-7-12-17-4-12 5 2 4 6 5 9 5M39 22c7-12 17-4 12 5-2 4-6 5-9 5" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M32 49v7M28 18l-5-6M36 18l5-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "chuna":
      return (
        <svg {...commonProps}>
          <path d="M31 10c-5 8-1 11-4 17-2 5-7 7-7 13 0 8 6 14 14 14s14-6 14-14c0-6-5-9-7-13-3-6 1-9-4-17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 17h8M28 25h12M24 34h20M24 42h20M29 50h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M14 24c-4 4-6 9-6 14M50 24c4 4 6 9 6 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
        </svg>
      );
    case "shockwave":
      return (
        <svg {...commonProps}>
          <path d="M7 33h8l5-13 8 27 8-34 8 27 5-7h8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 49c5 4 12 6 20 6s15-2 20-6M12 16c5-4 12-6 20-6s15 2 20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".5" />
        </svg>
      );
    case "skin":
      return (
        <svg {...commonProps}>
          <path d="M18 16c8-8 20-8 28 0 6 6 6 15 3 22-3 8-10 16-17 16s-14-8-17-16c-3-7-3-16 3-22Z" stroke="currentColor" strokeWidth="3" />
          <path d="M24 30h.1M40 30h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M26 41c4 3 8 3 12 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 8V3M48 13l4-4M16 13l-4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
        </svg>
      );
    case "laser":
      return (
        <svg {...commonProps}>
          <path d="m13 46 20-20 10 10-20 20H13V46Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="m33 26 8-8 10 10-8 8M44 15l5-5M51 21h7M38 13V6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="m19 44 6 6" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="51" cy="39" r="3" fill="currentColor" opacity=".65" />
        </svg>
      );
  }
}
