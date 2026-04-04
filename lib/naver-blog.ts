type BlogPost = {
  title: string;
  link: string;
  description: string;
  image: string | null;
  pubDate: string;
};

const BLOG_RSS_URL = "https://rss.blog.naver.com/jonginyoun113.xml";

function decodeHtml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripHtml(value: string) {
  return decodeHtml(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function extractTagValue(source: string, tag: string) {
  const match = source.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function extractImageFromDescription(description: string) {
  const decoded = decodeHtml(description);
  const match = decoded.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

function formatDate(pubDate: string) {
  const date = new Date(pubDate);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

function parseRss(xml: string): BlogPost[] {
  const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return itemMatches.map((item) => {
    const title = stripHtml(extractTagValue(item, "title"));
    const link = extractTagValue(item, "link");
    const descriptionRaw = extractTagValue(item, "description");
    const description = stripHtml(descriptionRaw);
    const image = extractImageFromDescription(descriptionRaw);
    const pubDate = formatDate(extractTagValue(item, "pubDate"));

    return {
      title,
      link,
      description,
      image,
      pubDate,
    };
  });
}

export async function getNaverBlogPosts() {
  try {
    const response = await fetch(BLOG_RSS_URL, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    return parseRss(xml).slice(0, 9);
  } catch {
    return [];
  }
}
