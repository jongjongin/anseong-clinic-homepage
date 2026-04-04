import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "안성경희365한의원",
  description: "안성경희365한의원 홈페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white text-zinc-900">{children}</body>
    </html>
  );
}
