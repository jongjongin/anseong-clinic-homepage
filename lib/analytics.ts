export function track(
  event: string,
  params: Record<string, string | number | boolean | undefined> = {},
) {
  try {
    if (typeof window === "undefined") return;

    const analyticsWindow = window as unknown as {
      gtag?: (
        command: "event",
        event: string,
        params: Record<string, string | number | boolean>,
      ) => void;
      dataLayer?: unknown[];
    };
    const definedParams = Object.fromEntries(
      Object.entries(params).filter((entry): entry is [string, string | number | boolean] => entry[1] !== undefined),
    );

    if (typeof analyticsWindow.gtag === "function") {
      analyticsWindow.gtag("event", event, definedParams);
    } else {
      if (!Array.isArray(analyticsWindow.dataLayer)) analyticsWindow.dataLayer = [];
      analyticsWindow.dataLayer.push({ event, ...definedParams });
    }
  } catch {
    // 측정 오류가 화면이나 사용자 동작에 영향을 주지 않게 한다.
  }
}
