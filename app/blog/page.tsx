import type { Metadata } from "next";
import Script from "next/script";
import { BlogSection, Footer, Header } from "@/components/home";

const siteUrl = "https://anseong365.com";

export const metadata: Metadata = {
  title: "한의원 블로그 | 안성경희365한의원 건강정보",
  description: "안성경희365한의원의 진료 안내, 건강정보, 병원 소식을 블로그 최신 글로 확인하실 수 있습니다.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "한의원 블로그 | 안성경희365한의원",
    description: "안성경희365한의원의 진료 안내, 건강정보, 병원 소식을 블로그 최신 글로 확인하실 수 있습니다.",
    url: `${siteUrl}/blog`,
  },
};

const blogBreadcrumbStructuredData = {
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
      name: "블로그",
      item: `${siteUrl}/blog`,
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Script id="blog-breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(blogBreadcrumbStructuredData)}
      </Script>
      <Header />
      <main>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
