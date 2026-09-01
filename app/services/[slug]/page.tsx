import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import BeautyTreatments from "@/components/renewal/beauty-treatments";
import RenewalCtaSection from "@/components/renewal/cta-section";
import { getServicePage, servicePages } from "@/lib/service-pages";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {
      title: "진료 안내",
    };
  }

  return {
    title: `${service.title} 안내`,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} 안내 | 안성경희365한의원`,
      description: service.seoDescription,
      images: [
        {
          url: service.image,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://anseong365.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "진료과목 안내",
        item: "https://anseong365.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://anseong365.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#181818]">
      <main className="bg-white">
        <Script id={`${service.slug}-faq-jsonld`} type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </Script>
        <Script id={`${service.slug}-breadcrumb-jsonld`} type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </Script>
        <section className="bg-white">
          <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:py-12">
            <nav className="flex items-center gap-2 text-xs text-[#999]">
              <Link href="/" className="transition-colors hover:text-teal-700">홈</Link>
              <span aria-hidden>›</span>
              <Link href="/services" className="transition-colors hover:text-teal-700">진료 프로그램</Link>
              <span aria-hidden>›</span>
              <span className="text-[#464646]">{service.title}</span>
            </nav>

            <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-4xl">
                <p className="text-[13px] font-semibold tracking-wide text-[#464646]">진료 프로그램</p>
                <h1 className="gb-font mt-4 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-4xl">
                  {service.title}
                </h1>
                <p className="mt-4 break-keep text-[15px] text-teal-700">{service.subtitle}</p>
                <p className="mt-6 break-keep text-sm leading-[1.9] text-[#6d6d6d] sm:text-[15px]">
                  {service.intro}
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl">
                <div className="relative min-h-[260px] bg-[#f8f8f8]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-5 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr]">
            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">이런 분께 안내합니다</p>
              <ul className="mt-5 space-y-4 break-keep text-sm leading-[1.9] text-[#6d6d6d]">
                {service.symptoms.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">진료 안내</p>
              <p className="mt-5 break-keep text-sm leading-[1.9] text-[#6d6d6d]">{service.summary}</p>
              <ul className="mt-6 space-y-4 break-keep text-sm leading-[1.9] text-[#6d6d6d]">
                {service.care.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-[#FEE500]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_1fr]">
            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">내원 전 준비사항</p>
              <p className="mt-4 break-keep text-sm leading-[1.9] text-[#6d6d6d]">
                처음 내원 전에는 현재 가장 불편한 증상과 생활 속에서 언제 더 불편한지 정도만 생각해 오셔도 충분합니다.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {service.checkpoints.map((item) => (
                  <div key={item} className="rounded-xl bg-[#f8f8f8] p-5">
                    <p className="break-keep text-[13px] leading-[1.8] text-[#464646]">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">이런 고민으로 상담하십니다</p>
              <div className="mt-5 space-y-4">
                {service.commonConcerns.map((item) => (
                  <div key={item} className="rounded-xl border border-[#f2f2f2] bg-white p-5">
                    <p className="break-keep text-sm leading-[1.9] text-[#6d6d6d]">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {service.detailSections ? (
          <section className="bg-[#f8f8f8]">
            <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-wide text-teal-700">상세 진료 포인트</p>
                <h2 className="mt-3 gb-font break-keep text-2xl font-bold text-[#181818] sm:text-3xl">
                  현재 상태에 맞춰 필요한 부분을 차근차근 확인합니다
                </h2>
              </div>

              <div className="mt-8 grid gap-5">
                {service.detailSections.map((section) => (
                  <article key={section.title} className="border border-[#eee] bg-white p-6 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <h3 className="gb-font break-keep text-xl font-bold text-[#181818]">{section.title}</h3>
                        <p className="mt-4 break-keep text-sm leading-[1.9] text-[#6d6d6d]">{section.description}</p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {section.items.map((item) => (
                          <div key={item.title} className="rounded-xl bg-[#f8f8f8] p-5">
                            <h4 className="break-keep text-base font-semibold text-teal-700">{item.title}</h4>
                            <p className="mt-3 break-keep text-[13px] leading-[1.8] text-[#6d6d6d]">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {service.slug === "beauty" ? <BeautyTreatments /> : null}

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_1fr]">
            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">진료는 이렇게 진행됩니다</p>
              <div className="mt-5 space-y-4">
                {service.process.map((step, index) => (
                  <div key={step.title} className="rounded-xl border border-[#f2f2f2] bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h2 className="break-keep text-[15px] font-semibold text-[#181818]">{step.title}</h2>
                        <p className="mt-2 break-keep text-[13px] leading-[1.8] text-[#6d6d6d]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">처음 오시는 분께 안내드립니다</p>
              <div className="mt-5 space-y-4">
                {service.guidanceNotes.map((item) => (
                  <div key={item} className="rounded-xl bg-[#f8f8f8] p-5">
                    <p className="break-keep text-sm leading-[1.9] text-[#6d6d6d]">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1200px] gap-5 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">담당 의료진 안내</p>
              <p className="mt-4 break-keep text-[13px] leading-[1.8] text-[#959595]">
                현재 불편한 증상과 생활 속 불편을 함께 살피며, 처음 내원하시는 분도 이해하기 쉬운 방향으로 진료 흐름을 안내해드립니다.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {service.doctors.map((doctor) => (
                  <div key={doctor.name} className="rounded-xl border border-[#f2f2f2] bg-white p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[#eee] bg-[#f8f8f8]">
                        <Image
                          src={doctor.image}
                          alt={`${doctor.name} ${doctor.role}`}
                          fill
                          className="object-cover object-top"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <h2 className="break-keep text-lg font-bold text-[#181818]">
                          {doctor.name} {doctor.role}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 break-keep text-[13px] leading-[1.8] text-teal-700">{doctor.summary}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border border-[#eee] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">내원 전 생활 안내</p>
              <div className="mt-5 space-y-4">
                {service.homeCare.map((item) => (
                  <div key={item} className="rounded-xl bg-[#f8f8f8] p-5">
                    <p className="break-keep text-sm leading-[1.9] text-[#6d6d6d]">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 sm:pb-20">
            <article className="border border-[#eee] bg-[#f8f8f8] p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#959595]">자주 묻는 안내</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {service.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-[#f2f2f2] bg-white p-5">
                    <h3 className="break-keep text-[15px] font-semibold text-[#181818]">{faq.question}</h3>
                    <p className="mt-3 break-keep text-sm leading-[1.9] text-[#6d6d6d]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <RenewalCtaSection />
      </main>
    </div>
  );
}
