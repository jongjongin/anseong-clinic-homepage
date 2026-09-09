import type { ReactElement } from "react";
import type { SkinIconKey } from "@/lib/skin-check";

/**
 * 병변 구분용 일러스트.
 * 사진은 저작권·혐오감 문제가 있어 피부 톤 스와치 위에 병변 특징만 그린 도식으로 만들었다.
 * 위로 솟은 병변은 그림자를, 평평한 색소는 그림자를 빼서 "만져지는지"가 한눈에 보이게 한다.
 */

const SKIN = "#F2DCCB";
const SKIN_LINE = "#DFBFA6";
const BROWN_DARK = "#40291B";
const BROWN = "#95612F";
const BROWN_SOFT = "#B98354";
const RED = "#D9605A";

type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 96 96",
  role: "img",
  "aria-hidden": true,
  focusable: "false",
} as const;

/** 위로 솟은 병변 아래 깔아 입체감을 주는 그림자 */
function Shadow({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#7A5638" opacity="0.18" />;
}

function Skin({ id }: { id: string }) {
  return (
    <>
      <defs>
        <clipPath id={id}>
          <rect width="96" height="96" rx="26" />
        </clipPath>
      </defs>
      <rect width="96" height="96" rx="26" fill={SKIN} />
    </>
  );
}

/* ── 개념 아이콘: 만져진다 vs 평평하다 (단면도) ────────────────────── */

function IconRaised({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <rect width="96" height="96" rx="26" fill="#FBF6F1" />
      <g clipPath="url(#sk-c-raised)">
        <defs>
          <clipPath id="sk-c-raised">
            <rect width="96" height="96" rx="26" />
          </clipPath>
        </defs>
        <rect x="0" y="60" width="96" height="36" fill={SKIN} />
        <path d="M30 60 Q34 32 48 32 Q62 32 66 60 Z" fill={BROWN} />
        <path d="M30 60 Q34 32 48 32 Q54 32 57 40 Q46 42 40 60 Z" fill="#A97042" />
        <path d="M0 60 H96" stroke={SKIN_LINE} strokeWidth="3" />
        <path d="M78 30 V56" stroke={BROWN_SOFT} strokeWidth="2" strokeLinecap="round" />
        <path d="M74 34 L78 29 L82 34" stroke={BROWN_SOFT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}

function IconFlat({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <rect width="96" height="96" rx="26" fill="#FBF6F1" />
      <g clipPath="url(#sk-c-flat)">
        <defs>
          <clipPath id="sk-c-flat">
            <rect width="96" height="96" rx="26" />
          </clipPath>
        </defs>
        <rect x="0" y="60" width="96" height="36" fill={SKIN} />
        <path d="M26 60 h44 v10 h-44 Z" fill={BROWN} opacity="0.75" />
        <path d="M0 60 H96" stroke={SKIN_LINE} strokeWidth="3" />
        <path d="M22 46 H74" stroke={BROWN_SOFT} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 5" />
      </g>
    </svg>
  );
}

/* ── 튀어나온 병변 ────────────────────────────────────────────────── */

function IconMole({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-mole" />
      <Shadow cx={50} cy={54} rx={16} ry={13} />
      <circle cx="48" cy="48" r="15" fill={BROWN_DARK} />
      <ellipse cx="43" cy="43" rx="5" ry="3.5" fill="#6A4630" opacity="0.65" />
    </svg>
  );
}

function IconSkinTag({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-tag" />
      <Shadow cx={52} cy={58} rx={15} ry={9} />
      <path
        d="M40 66 Q36 50 44 40 Q52 30 60 36 Q68 42 62 54 Q56 66 48 68 Z"
        fill="#E0BBA0"
        stroke="#CBA184"
        strokeWidth="2"
      />
      <path d="M46 62 Q46 50 52 42" stroke="#CBA184" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IconFlatWart({ className }: IconProps): ReactElement {
  const bumps = [
    [30, 36],
    [48, 30],
    [64, 42],
    [36, 56],
    [54, 62],
    [70, 62],
  ];
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-wart" />
      {bumps.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 6} y={y - 4} width="14" height="12" rx="4" fill="#7A5638" opacity="0.16" />
          <rect x={x - 7} y={y - 6} width="14" height="12" rx="4" fill="#E3BFA4" stroke="#C79E80" strokeWidth="1.6" />
        </g>
      ))}
      <path d="M26 66 L74 34" stroke="#C79E80" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.7" />
    </svg>
  );
}

function IconSyringoma({ className }: IconProps): ReactElement {
  const dots = [
    [34, 52],
    [46, 46],
    [58, 50],
    [40, 62],
    [54, 62],
    [66, 58],
  ];
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-syringoma" />
      <path d="M22 34 Q48 20 74 34" stroke={SKIN_LINE} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {dots.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x + 1} cy={y + 2} r="7" fill="#7A5638" opacity="0.16" />
          <circle cx={x} cy={y} r="7" fill="#E5C3A9" stroke="#C79E80" strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}

function IconMilium({ className }: IconProps): ReactElement {
  const dots = [
    [38, 52],
    [52, 46],
    [62, 58],
  ];
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-milium" />
      <path d="M22 34 Q48 20 74 34" stroke={SKIN_LINE} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {dots.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x + 1} cy={y + 2} r="8" fill="#7A5638" opacity="0.14" />
          <circle cx={x} cy={y} r="8" fill="#FFFCF6" stroke="#DEC4AC" strokeWidth="1.5" />
          <circle cx={x - 2.5} cy={y - 2.5} r="2" fill="#FFFFFF" />
        </g>
      ))}
    </svg>
  );
}

function IconSeborrheic({ className }: IconProps): ReactElement {
  const texture = [
    [40, 42],
    [50, 38],
    [58, 46],
    [44, 52],
    [56, 56],
    [36, 58],
  ];
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-seborrheic" />
      <path
        d="M32 44 Q30 30 46 28 Q64 26 68 42 Q72 58 58 64 Q40 70 34 58 Z"
        transform="translate(3,4)"
        fill="#7A5638"
        opacity="0.2"
      />
      <path
        d="M32 44 Q30 30 46 28 Q64 26 68 42 Q72 58 58 64 Q40 70 34 58 Z"
        fill="#8A5730"
      />
      {texture.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" fill="#5F3A1E" opacity="0.75" />
      ))}
    </svg>
  );
}

/* ── 평평한 색소 ──────────────────────────────────────────────────── */

function IconMelasma({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-melasma" />
      <defs>
        <radialGradient id="sk-g-melasma">
          <stop offset="0%" stopColor="#9E6B41" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#9E6B41" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#9E6B41" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="48" rx="24" ry="21" fill="url(#sk-g-melasma)" />
      <ellipse cx="66" cy="48" rx="24" ry="21" fill="url(#sk-g-melasma)" />
      <path d="M48 20 V76" stroke="#FFFFFF" strokeWidth="1.6" strokeDasharray="4 5" opacity="0.75" />
    </svg>
  );
}

function IconFreckle({ className }: IconProps): ReactElement {
  const dots = [
    [30, 38], [42, 32], [54, 36], [66, 42], [34, 50], [46, 46],
    [58, 50], [70, 54], [28, 60], [40, 58], [52, 62], [64, 64],
    [36, 68], [48, 72], [60, 74], [24, 46], [72, 34], [44, 24],
  ];
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-freckle" />
      {dots.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i % 3 === 0 ? 3.4 : 2.6} fill="#A9713D" opacity="0.85" />
      ))}
    </svg>
  );
}

function IconLentigo({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-lentigo" />
      <ellipse cx="48" cy="48" rx="21" ry="18" fill="#9C6A43" />
      <ellipse cx="48" cy="48" rx="21" ry="18" fill="none" stroke="#82552F" strokeWidth="1.6" />
    </svg>
  );
}

function IconPih({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-pih" />
      <circle cx="48" cy="48" r="18" fill="#A8734A" opacity="0.75" />
      <circle cx="48" cy="48" r="18" fill="none" stroke={RED} strokeWidth="1.6" strokeDasharray="4 5" opacity="0.8" />
      <circle cx="30" cy="70" r="5" fill="#A8734A" opacity="0.45" />
      <circle cx="70" cy="28" r="4" fill="#A8734A" opacity="0.4" />
    </svg>
  );
}

/* ── 혈관 · 여드름 ────────────────────────────────────────────────── */

function IconRedness({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-redness" />
      <defs>
        <radialGradient id="sk-g-redness">
          <stop offset="0%" stopColor={RED} stopOpacity="0.55" />
          <stop offset="100%" stopColor={RED} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="48" cy="48" rx="34" ry="30" fill="url(#sk-g-redness)" />
      <g stroke="#C4483F" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M28 62 Q40 52 44 38" />
        <path d="M44 50 Q52 46 60 50" />
        <path d="M52 62 Q60 56 68 58" />
        <path d="M36 44 Q42 42 46 46" />
      </g>
    </svg>
  );
}

function IconAcne({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-acne" />
      <Shadow cx={50} cy={52} rx={17} ry={14} />
      <circle cx="48" cy="46" r="16" fill="#E07B72" />
      <circle cx="48" cy="46" r="16" fill="none" stroke="#C4483F" strokeWidth="1.4" opacity="0.6" />
      <circle cx="48" cy="46" r="5.5" fill="#FFF6EC" />
      <circle cx="26" cy="70" r="3" fill="#B08464" opacity="0.7" />
      <circle cx="70" cy="70" r="3" fill="#B08464" opacity="0.7" />
      <circle cx="72" cy="26" r="2.6" fill="#B08464" opacity="0.6" />
    </svg>
  );
}

/* ── 점 위험 신호 ─────────────────────────────────────────────────── */

function IconWarnAsymmetry({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-asym" />
      <path
        d="M34 40 Q32 26 48 28 Q68 30 66 46 Q64 66 46 64 Q30 62 34 48 Z"
        fill={BROWN_DARK}
      />
      <path d="M48 20 V76" stroke="#FFFFFF" strokeWidth="1.8" strokeDasharray="4 5" opacity="0.9" />
    </svg>
  );
}

function IconWarnSize({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-size" />
      <circle cx="48" cy="42" r="21" fill={BROWN_DARK} />
      <g stroke="#6B4A31" strokeWidth="2" strokeLinecap="round">
        <path d="M27 74 H69" />
        <path d="M27 69 V79" />
        <path d="M69 69 V79" />
      </g>
    </svg>
  );
}

function IconWarnChange({ className }: IconProps): ReactElement {
  return (
    <svg {...svgProps} className={className}>
      <Skin id="sk-c-change" />
      <circle cx="28" cy="48" r="9" fill="#8A6448" />
      <circle cx="66" cy="48" r="18" fill={BROWN_DARK} />
      <g stroke="#6B4A31" strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M40 34 H48" />
        <path d="M45 30 L49 34 L45 38" />
      </g>
    </svg>
  );
}

const icons: Record<SkinIconKey, (props: IconProps) => ReactElement> = {
  raised: IconRaised,
  flat: IconFlat,
  mole: IconMole,
  "skin-tag": IconSkinTag,
  "flat-wart": IconFlatWart,
  syringoma: IconSyringoma,
  milium: IconMilium,
  seborrheic: IconSeborrheic,
  melasma: IconMelasma,
  freckle: IconFreckle,
  lentigo: IconLentigo,
  pih: IconPih,
  redness: IconRedness,
  acne: IconAcne,
  "warn-asymmetry": IconWarnAsymmetry,
  "warn-size": IconWarnSize,
  "warn-change": IconWarnChange,
};

export default function SkinIcon({ name, className }: { name: SkinIconKey; className?: string }) {
  const Component = icons[name];
  return Component ? <Component className={className} /> : null;
}
