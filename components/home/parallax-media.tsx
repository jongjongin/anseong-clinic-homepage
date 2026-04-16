"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  strength?: number;
};

export default function ParallaxMedia({
  src,
  alt,
  sizes,
  className,
  priority = false,
  strength = 18,
}: ParallaxMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const element = containerRef.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const normalized = Math.max(-1, Math.min(1, centerOffset / viewportHeight));

      setOffset(normalized * strength * -1);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-[-6%]"
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.04)`,
          transition: "transform 160ms linear",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={className ?? "object-cover"}
          sizes={sizes}
          priority={priority}
        />
      </div>
    </div>
  );
}
