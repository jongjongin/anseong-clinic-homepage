import Image from "next/image";
import { gallerySectionContent } from "@/components/home/content";
import ParallaxMedia from "@/components/home/parallax-media";
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
                <ParallaxMedia
                  src={gallerySectionContent.interiorImages[0].src}
                  alt={gallerySectionContent.interiorImages[0].alt}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  strength={24}
                />
              </div>
              {gallerySectionContent.interiorImages.slice(1).map((image, index) => (
                <div
                  key={image.src}
                  className="interactive-card relative min-h-[240px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white"
                >
                  <ParallaxMedia
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                    strength={16}
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
                  <ParallaxMedia
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    strength={18}
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
