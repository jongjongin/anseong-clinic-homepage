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
    "안성경희365한의원은 안성시 남파로 103에 위치한 365일 진료 한의원입니다. 척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 여성질환 진료와 카카오톡·전화 상담을 안내합니다.",
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
  openGraph: {
    title: "안성경희365한의원 | 안성 365일 진료 한의원",
    description:
      "안성시 남파로 103에 위치한 안성경희365한의원입니다. 365일 진료, 척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 여성질환 진료를 안내합니다.",
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
      "안성시 남파로 103에 위치한 안성경희365한의원입니다. 365일 진료, 척추관절, 교통사고, 약침추나, 소아성장, 다이어트, 여성질환 진료를 안내합니다.",
    images: ["/assets/logo/logo-wordmark.png"],
  },
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteUrl}/#clinic`,
  name: "안성경희365한의원",
  url: siteUrl,
  image: `${siteUrl}/assets/logo/logo-wordmark.png`,
  logo: `${siteUrl}/assets/logo/logo-wordmark.png`,
  telephone: "031-8057-0750",
  address: {
    "@type": "PostalAddress",
    streetAddress: "경기도 안성시 남파로 103 203호, 204호",
    addressLocality: "안성시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
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
        <Script id="local-business-jsonld" type="application/ld+json">
          {JSON.stringify(localBusinessStructuredData)}
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
