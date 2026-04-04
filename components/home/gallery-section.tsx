import Image from "next/image";
import { gallerySectionContent } from "@/components/home/content";
import Reveal from "@/components/home/reveal";
import SectionTitle from "@/components/home/section-title";

export default function GallerySection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={gallerySectionContent.eyebrow}
            title={gallerySectionContent.title}
            description={gallerySectionContent.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="interactive-card relative min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white sm:col-span-2 sm:min-h-[420px]">
                <Image
                  src={gallerySectionContent.interiorImages[0].src}
                  alt={gallerySectionContent.interiorImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              {gallerySectionContent.interiorImages.slice(1).map((image, index) => (
                <div
                  key={image.src}
                  className="interactive-card relative min-h-[240px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="grid gap-5">
              {gallerySectionContent.peopleImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`interactive-card relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white ${
                    index === 0 ? "min-h-[280px]" : "min-h-[340px]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
