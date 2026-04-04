import Image from "next/image";
import Link from "next/link";
import { getNaverBlogPosts } from "@/lib/naver-blog";
import Reveal from "@/components/home/reveal";
import SectionTitle from "@/components/home/section-title";

const fallbackImages = [
  "/assets/people/people-1.jpg",
  "/assets/interior/interior-1.jpg",
  "/assets/people/people-2.jpg",
];

export default async function BlogSection() {
  const posts = await getNaverBlogPosts();

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Reveal>
          <SectionTitle
            eyebrow="Blog Story"
            title="병원 소식과 건강 정보를 블로그에서 함께 전합니다"
            description="네이버 블로그의 최신 글을 홈페이지에서도 바로 볼 수 있게 연결했습니다."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.link} delayMs={index * 50}>
              <article className="interactive-card overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
                <div className="relative min-h-[220px] bg-slate-100">
                  <Image
                    src={post.image ?? fallbackImages[index % fallbackImages.length]}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm font-semibold text-teal-700">{post.pubDate}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900">{post.title}</h3>
                  <p className="mt-4 line-clamp-2 text-base leading-8 text-slate-600">
                    {post.description}
                  </p>
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex text-sm font-semibold text-slate-900"
                  >
                    블로그 글 보기
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
