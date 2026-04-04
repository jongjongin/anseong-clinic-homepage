import Image from "next/image";

type LogoWordmarkProps = {
  className?: string;
};

export default function LogoWordmark({ className = "" }: LogoWordmarkProps) {
  return (
    <div className={`relative h-14 w-[230px] overflow-hidden ${className}`}>
      <Image
        src="/assets/logo/logo.png"
        alt="안성경희365한의원 로고"
        fill
        className="object-cover"
        style={{ objectPosition: "18% 42%", transform: "scale(1.9)" }}
        sizes="230px"
      />
    </div>
  );
}
