import type { Metadata } from "next";
import { BlogSection, Footer, Header } from "@/components/home";

export const metadata: Metadata = {
  title: "블로그 글 | 안성경희365한의원",
  description: "안성경희365한의원의 네이버 블로그 글을 한곳에서 볼 수 있습니다.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
