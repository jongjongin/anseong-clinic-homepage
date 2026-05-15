import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://anseong365.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "안성경희365한의원 | 안성 365일 진료 한의원",
    template: "%s | 안성경희365한의원",
  },
  description:
    "안성 남파로 103, 365일 진료 한의원. 통증·교통사고·다이어트 상담을 안내합니다.",
  keywords: [
    "안성 한의원",
    "안성경희365한의원",
    "안성 365일 진료",
    "안성 교통사고 한의원",
    "안성 추나",
    "안성 다이어트 한의원",
    "안성 여성질환 한의원",
    "안성 소아성장 한의원",
    "안성 남파로 한의원",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "Y1HDm3x7SBcFxSt6CDvqwbeAwfB4HTF_q50aChsqyS8",
    other: {
      "naver-site-verification": "5e1034ffbcb04356a0a109edb07619dc0b2b83a0",
    },
  },
  openGraph: {
    title: "안성경희365한의원 | 안성 365일 진료 한의원",
    description:
      "안성 남파로 103, 365일 진료 한의원. 통증·교통사고·다이어트 상담을 안내합니다.",
    url: siteUrl,
    siteName: "안성경희365한의원",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/assets/logo/logo-wordmark.png",
        width: 1200,
        height: 630,
        alt: "안성경희365한의원",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안성경희365한의원 | 안성 365일 진료 한의원",
    description:
      "안성 남파로 103, 365일 진료 한의원. 통증·교통사고·다이어트 상담을 안내합니다.",
    images: ["/assets/logo/logo-wordmark.png"],
  },
};

const clinicStructuredData = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${siteUrl}/#clinic`,
  name: "안성경희365한의원",
  alternateName: "Anseong Kyunghee 365 Korean Medicine Clinic",
  url: siteUrl,
  image: `${siteUrl}/assets/logo/logo-wordmark.png`,
  logo: `${siteUrl}/assets/logo/logo-wordmark.png`,
  telephone: "031-8057-0750",
  priceRange: "$$",
  hasMap: "https://www.google.com/maps/search/?api=1&query=%EC%95%88%EC%84%B1%EA%B2%BD%ED%9D%AC365%ED%95%9C%EC%9D%98%EC%9B%90",
  medicalSpecialty: [
    "척추관절 통증",
    "교통사고 후유증",
    "약침·추나",
    "소아성장",
    "다이어트",
    "보약",
    "여성질환",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "경기도 안성시 남파로 103 203호, 204호",
    addressLocality: "안성시",
    addressRegion: "경기도",
    postalCode: "17579",
    addressCountry: "KR",
  },
  openingHours: ["Mo-Fr 09:00-20:00", "Sa-Su 09:00-15:00"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "031-8057-0750",
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean"],
    },
  ],
  sameAs: [
    "https://blog.naver.com/jonginyoun113",
    "https://blog.naver.com/anseong365khclinic",
    "https://naver.me/xzxmqtNK",
    "https://place.map.kakao.com/247448692",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "안성",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YHLX7HXLFV" />
        <Script id="google-analytics-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YHLX7HXLFV');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NJKP5RRP');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w6mwf7n6h0");
          `}
        </Script>
        <Script id="clinic-jsonld" type="application/ld+json">
          {JSON.stringify(clinicStructuredData)}
        </Script>
      </head>
      <body className="bg-white text-zinc-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJKP5RRP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
