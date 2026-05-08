import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import { CtaSection, Footer, Header, MobileContactBar } from "@/components/home";
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
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="bg-white">
        <Script id={`${service.slug}-faq-jsonld`} type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </Script>
        <Script id={`${service.slug}-breadcrumb-jsonld`} type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </Script>
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <Link
              href="/#departments"
              className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
            >
              진료과목으로 돌아가기
            </Link>

            <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">진료과목 안내</p>
                <h1 className="mt-4 break-keep text-[2.4rem] font-bold leading-[1.2] text-slate-900 sm:text-[3.1rem]">
                  {service.title}
                </h1>
                <p className="mt-5 break-keep text-lg leading-8 text-teal-700">{service.subtitle}</p>
                <p className="mt-6 break-keep text-base leading-8 text-slate-600 sm:text-lg">
                  {service.intro}
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
                <div className="relative min-h-[260px] bg-slate-100">
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
          <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
            <article className="rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">이런 분께 안내합니다</p>
              <ul className="mt-5 space-y-4 break-keep text-base leading-8 text-slate-600">
                {service.symptoms.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">진료 안내</p>
              <p className="mt-5 break-keep text-base leading-8 text-slate-600">{service.summary}</p>
              <ul className="mt-6 space-y-4 break-keep text-base leading-8 text-slate-600">
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
          <div className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1fr_1fr] lg:px-8">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">내원 전 준비사항</p>
              <p className="mt-4 break-keep text-base leading-8 text-slate-600">
                처음 내원 전에는 현재 가장 불편한 증상과 생활 속에서 언제 더 불편한지 정도만 생각해 오셔도 충분합니다.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {service.checkpoints.map((item) => (
                  <div key={item} className="rounded-[1.5rem] bg-slate-50 p-5">
                    <p className="break-keep text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">이런 고민으로 상담하십니다</p>
              <div className="mt-5 space-y-4">
                {service.commonConcerns.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <p className="break-keep text-base leading-8 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {service.detailSections ? (
          <section className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.14em] text-teal-700 uppercase">상세 진료 포인트</p>
                <h2 className="mt-3 break-keep text-3xl font-bold text-slate-900 sm:text-[2.4rem]">
                  현재 상태에 맞춰 필요한 부분을 차근차근 확인합니다
                </h2>
              </div>

              <div className="mt-8 grid gap-5">
                {service.detailSections.map((section) => (
                  <article key={section.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <h3 className="break-keep text-2xl font-bold text-slate-900">{section.title}</h3>
                        <p className="mt-4 break-keep text-base leading-8 text-slate-600">{section.description}</p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {section.items.map((item) => (
                          <div key={item.title} className="rounded-[1.5rem] bg-slate-50 p-5">
                            <h4 className="break-keep text-base font-semibold text-teal-700">{item.title}</h4>
                            <p className="mt-3 break-keep text-sm leading-7 text-slate-600">{item.description}</p>
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

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1fr_1fr] lg:px-8">
            <article className="rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">진료는 이렇게 진행됩니다</p>
              <div className="mt-5 space-y-4">
                {service.process.map((step, index) => (
                  <div key={step.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h2 className="break-keep text-lg font-semibold text-slate-900">{step.title}</h2>
                        <p className="mt-2 break-keep text-sm leading-7 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">처음 오시는 분께 안내드립니다</p>
              <div className="mt-5 space-y-4">
                {service.guidanceNotes.map((item) => (
                  <div key={item} className="rounded-[1.5rem] bg-slate-50 p-5">
                    <p className="break-keep text-base leading-8 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <article className="rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">담당 의료진 안내</p>
              <p className="mt-4 break-keep text-sm leading-7 text-slate-500">
                현재 불편한 증상과 생활 속 불편을 함께 살피며, 처음 내원하시는 분도 이해하기 쉬운 방향으로 진료 흐름을 안내해드립니다.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {service.doctors.map((doctor) => (
                  <div key={doctor.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
                        <Image
                          src={doctor.image}
                          alt={`${doctor.name} ${doctor.role}`}
                          fill
                          className="object-cover object-top"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <h2 className="break-keep text-xl font-bold text-slate-900">
                          {doctor.name} {doctor.role}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 break-keep text-sm leading-7 text-teal-700">{doctor.summary}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">내원 전 생활 안내</p>
              <div className="mt-5 space-y-4">
                {service.homeCare.map((item) => (
                  <div key={item} className="rounded-[1.5rem] bg-slate-50 p-5">
                    <p className="break-keep text-base leading-8 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-slate-400 uppercase">자주 묻는 안내</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {service.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                    <h3 className="break-keep text-lg font-semibold text-slate-900">{faq.question}</h3>
                    <p className="mt-3 break-keep text-base leading-8 text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
