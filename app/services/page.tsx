import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
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
      <main className="bg-white pb-24 pt-8 lg:pt-12">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <p className="mar-font text-xs tracking-[0.3em] text-[#959595]">PROGRAM</p>
          <h1 className="gb-font mt-4 break-keep text-2xl font-bold leading-snug text-[#181818] sm:text-4xl">
            현재 불편한 증상에 맞는
            <br className="sm:hidden" /> 진료 프로그램을 확인해 보세요
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-[13px] leading-relaxed text-[#959595] sm:text-[15px]">
            척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 보약, 여성질환, 미용 진료까지 —
            필요한 진료를 상세 페이지에서 확인하실 수 있습니다.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((service, index) => (
              <article
                key={service.slug}
                className="group flex flex-col border border-[#eee] bg-white p-8 transition-colors duration-300 hover:border-[#181818]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-teal-700">진료 프로그램</span>
                  <span className="mar-font text-sm text-[#d0d0d0]">0{index + 1}</span>
                </div>
                <h2 className="gb-font mt-5 break-keep text-xl font-bold text-[#181818]">{service.title}</h2>
                <p className="mt-1.5 break-keep text-[13px] text-[#959595]">{service.subtitle}</p>
                <p className="mt-4 flex-1 break-keep text-[13px] leading-[1.8] text-[#6d6d6d]">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="gb-font mt-6 inline-flex items-center gap-2 border-t border-[#f2f2f2] pt-5 text-sm text-[#181818] transition-colors hover:text-teal-700"
                >
                  자세히 보기
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
