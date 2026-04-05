import Image from "next/image";

type LogoWordmarkProps = {
  className?: string;
};

export default function LogoWordmark({ className = "" }: LogoWordmarkProps) {
  return (
    <div className={`relative h-14 w-[260px] ${className}`}>
      <Image
        src="/assets/logo/logo-wordmark.png"
        alt="안성경희365한의원 로고"
        fill
        className="object-contain object-left"
        sizes="260px"
      />
    </div>
  );
}
