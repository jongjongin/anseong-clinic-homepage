"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function AnalyticsListener() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target
        : event.target instanceof Node ? event.target.parentElement : null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const method = href.startsWith("tel:") ? "phone"
        : href.includes("pf.kakao.com") ? "kakao_chat"
          : href.includes("naver.me") || href.includes("map.naver.com") ? "naver_map"
            : href.includes("map.kakao.com") ? "kakao_map"
              : href.includes("blog.naver.com") ? "naver_blog"
                : undefined;
      if (!method) return;

      track("contact_click", {
        method,
        link_location: target?.closest("[data-track]")?.getAttribute("data-track") ?? window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
