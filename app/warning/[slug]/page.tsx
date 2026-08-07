import { notFound, permanentRedirect } from "next/navigation";

const painSlugs = new Set([
  "acupuncture",
  "pharmacopuncture",
  "bee-venom",
  "chuna",
  "shockwave",
]);

export default async function LegacyWarningDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (painSlugs.has(slug)) {
    permanentRedirect(`/pain/${slug}`);
  }

  if (slug === "skin-booster") {
    permanentRedirect("/beauty#skin-booster");
  }

  notFound();
}
