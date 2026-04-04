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
      <p className="text-sm font-semibold tracking-[0.14em] text-teal-700 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}
