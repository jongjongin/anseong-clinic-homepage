type BlogPost = {
  title: string;
  link: string;
  description: string;
  image: string | null;
  pubDate: string;
  dateValue: number;
};

const BLOG_RSS_URLS = [
  "https://rss.blog.naver.com/jonginyoun113.xml",
  "https://rss.blog.naver.com/anseong365khclinic.xml",
];
const BLOG_REVALIDATE_SECONDS = 1800;

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

function extractMetaContent(html: string, property: string) {
  const metaRegex = new RegExp(
    `<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["'][^>]*>`,
    "i",
  );

  return html.match(metaRegex)?.[1] ?? null;
}

function extractMainFrameUrl(html: string, baseUrl: string) {
  const match = html.match(/<iframe[^>]+id=["']mainFrame["'][^>]+src=["']([^"']+)["']/i);

  if (!match?.[1]) {
    return null;
  }

  try {
    return new URL(match[1], baseUrl).toString();
  } catch {
    return null;
  }
}

function normalizeUrl(url: string) {
  const trimmed = decodeHtml(url).trim();

  if (!trimmed) {
    return "";
  }

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }

  return trimmed;
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

function parseDateValue(pubDate: string) {
  const date = new Date(pubDate);

  if (Number.isNaN(date.getTime())) {
    return 0;
  }

  return date.getTime();
}

function parseRss(xml: string): BlogPost[] {
  const itemMatches = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return itemMatches.map((item) => {
    const title = stripHtml(extractTagValue(item, "title"));
    const link = normalizeUrl(extractTagValue(item, "link"));
    const descriptionRaw = extractTagValue(item, "description");
    const description = stripHtml(descriptionRaw);
    const image = extractImageFromDescription(descriptionRaw);
    const rawPubDate = extractTagValue(item, "pubDate");
    const pubDate = formatDate(rawPubDate);
    const dateValue = parseDateValue(rawPubDate);

    return {
      title,
      link,
      description,
      image,
      pubDate,
      dateValue,
    };
  });
}

async function fetchBlogMeta(link: string) {
  try {
    const response = await fetch(link, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const directImage = extractMetaContent(html, "og:image");
    const directUrl = extractMetaContent(html, "og:url");

    if (directImage || directUrl) {
      return {
        image: directImage ? normalizeUrl(directImage) : null,
        link: directUrl ? normalizeUrl(directUrl) : link,
      };
    }

    const mainFrameUrl = extractMainFrameUrl(html, link);

    if (!mainFrameUrl) {
      return null;
    }

    const frameResponse = await fetch(mainFrameUrl, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!frameResponse.ok) {
      return null;
    }

    const frameHtml = await frameResponse.text();
    const image = extractMetaContent(frameHtml, "og:image");
    const canonicalUrl = extractMetaContent(frameHtml, "og:url");

    return {
      image: image ? normalizeUrl(image) : null,
      link: canonicalUrl ? normalizeUrl(canonicalUrl) : link,
    };
  } catch {
    return null;
  }
}

async function fetchBlogPostsFromRss(rssUrl: string) {
  try {
    const response = await fetch(rssUrl, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    return parseRss(xml);
  } catch {
    return [];
  }
}

export async function getNaverBlogPosts() {
  try {
    const rssPosts = await Promise.all(BLOG_RSS_URLS.map((rssUrl) => fetchBlogPostsFromRss(rssUrl)));
    const posts = rssPosts
      .flat()
      .sort((a, b) => b.dateValue - a.dateValue)
      .slice(0, 12);

    const enrichedPosts = await Promise.all(
      posts.map(async (post) => {
        const meta = await fetchBlogMeta(post.link);

        return {
          ...post,
          image: meta?.image ?? post.image,
          link: meta?.link ?? post.link,
        };
      }),
    );

    return enrichedPosts;
  } catch {
    return [];
  }
}
