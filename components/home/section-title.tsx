type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignmentClass}`}>
      <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[2rem] font-bold leading-tight text-slate-900 sm:text-[2.35rem] lg:text-[2.8rem]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
