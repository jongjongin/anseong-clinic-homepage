import Image from "next/image";
import Link from "next/link";
import { skinResults, type SkinResultKey } from "@/lib/skin-check";
import { skinPhotos } from "@/lib/skin-photos";

/** 사진이 있는 병변을 보여주는 순서 */
const order: SkinResultKey[] = [
  "melasma",
  "lentigo",
  "seborrheic",
  "mole",
  "freckle",
  "pih",
  "skin-tag",
  "flat-wart",
  "syringoma",
  "milium",
  "redness",
  "acne",
];

export default function SkinPhotoGallery({ compact = false }: { compact?: boolean }) {
  const items = order
    .map((key) => ({ key, photo: skinPhotos[key], result: skinResults[key] }))
    .filter((item) => item.photo);

  return (
    <div
      className={`grid grid-cols-2 gap-4 sm:gap-5 ${
        compact ? "sm:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {items.map(({ key, photo, result }) => (
        <figure key={key} className="min-w-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#f0f0ef]">
            <Image
              src={photo!.src}
              alt={photo!.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3">
            <p className="break-keep text-[17px] font-bold text-[#171717]">{result.name}</p>
            <Link
              href={`/menu/${result.recommend.slug}`}
              className="mt-1.5 inline-block break-keep rounded-full bg-teal-50 px-3 py-1.5 text-[13px] font-bold text-teal-800 transition hover:bg-teal-100"
            >
              {result.recommend.label}
            </Link>
            <p className="mt-2 break-all text-[10.5px] leading-tight text-[#9a9a9a]">
              {photo!.credit}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
