import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Footer, Header, MobileContactBar } from "@/components/home";
import { servicePages } from "@/lib/service-pages";

const siteUrl = "https://anseong365.com";

export const metadata: Metadata = {
  title: "진료과목 안내 | 안성 통증·교통사고·추나 한의원",
  description:
    "안성경희365한의원의 척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 보약, 여성질환 진료를 확인하세요.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "진료과목 안내 | 안성경희365한의원",
    description:
      "안성경희365한의원의 척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 보약, 여성질환 진료 안내입니다.",
    url: `${siteUrl}/services`,
  },
};

const servicesItemListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/services#itemlist`,
  name: "안성경희365한의원 진료과목",
  itemListElement: servicePages.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${siteUrl}/services/${service.slug}`,
    description: service.summary,
  })),
};

const servicesBreadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "진료과목 안내",
      item: `${siteUrl}/services`,
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Script id="services-itemlist-jsonld" type="application/ld+json">
        {JSON.stringify(servicesItemListStructuredData)}
      </Script>
      <Script id="services-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(servicesBreadcrumbStructuredData)}
      </Script>
      <Header />
      <main>
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold tracking-[0.18em] text-teal-700 uppercase">진료과목 안내</p>
            <h1 className="mt-4 break-keep text-[2.4rem] font-bold leading-[1.2] text-slate-900 sm:text-[3.1rem]">
              현재 불편한 증상에 맞는 진료과목을 확인해 보세요
            </h1>
            <p className="mt-6 max-w-3xl break-keep text-base leading-8 text-slate-600 sm:text-lg">
              척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 보약, 여성질환, 미용 진료까지
              현재 필요한 진료를 상세 페이지에서 더 자세히 확인하실 수 있습니다.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 py-16 sm:grid-cols-2 sm:px-6 sm:py-20 lg:px-8">
            {servicePages.map((service, index) => (
              <article
                key={service.slug}
                className="rounded-[2rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                    진료과목
                  </span>
                  <span className="text-sm font-semibold text-slate-300">0{index + 1}</span>
                </div>
                <h2 className="mt-6 break-keep text-2xl font-bold text-slate-900">{service.title}</h2>
                <p className="mt-3 break-keep text-sm font-semibold text-teal-700">{service.subtitle}</p>
                <p className="mt-5 break-keep text-base leading-8 text-slate-600">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex rounded-full border border-slate-950 bg-slate-950 px-5 py-3 text-sm font-semibold !text-white shadow-[0_12px_24px_rgba(15,23,42,0.16)] transition-colors hover:bg-slate-800"
                >
                  자세히 보기
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
