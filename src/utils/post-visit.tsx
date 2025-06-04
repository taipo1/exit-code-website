// lib/utils/post-visit.ts
export const postVisit = async (screen: string): Promise<void> => {
  if (typeof window === "undefined") return;

  const searchParams = new URLSearchParams(window.location.search);
  const utmSource = searchParams.get("utm_source");
  const utmMedium = searchParams.get("utm_medium");
  const utmCampaign = searchParams.get("utm_campaign");

  try {
    const hasTracked = localStorage.getItem("gericht-visitor-tracked");
    if (hasTracked) return;

    await fetch("/api/track-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ screen, utmSource, utmMedium, utmCampaign }),
    });

    // localStorage.setItem("gericht-visitor-tracked", "true");
  } catch (error) {
    console.error("Failed to post visit:", error);
  }
};
