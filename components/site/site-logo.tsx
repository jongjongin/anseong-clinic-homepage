import Image from "next/image";

type SiteLogoProps = {
  className?: string;
  /** 어두운 배경 위에서 흰색으로 표시 */
  inverted?: boolean;
};

export default function SiteLogo({ className = "", inverted = false }: SiteLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/assets/logo/logo-wordmark-transparent.png"
        alt="안성경희365한의원 로고"
        fill
        className={`object-contain ${inverted ? "brightness-0 invert" : ""}`}
        sizes="260px"
      />
    </div>
  );
}
