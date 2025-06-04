// lib/utils/post-visit.ts
export const postVisit = async (screen: string): Promise<void> => {
  if (typeof window === "undefined") return;

  try {
    const hasTracked = localStorage.getItem("gericht-visitor-tracked");
    if (hasTracked) return;

    await fetch("/api/track-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ screen }),
    });

    // localStorage.setItem("gericht-visitor-tracked", "true");
  } catch (error) {
    console.error("Failed to post visit:", error);
  }
};
