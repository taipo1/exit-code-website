// pages/api/track-visit.ts
import { sanityClient } from "@/utils/sanity-client"; // Adjust path if needed
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST")
    return new Response("Method Not Allowed", { status: 405 });

  // read the request body
  const body = await req.json();
  //  get user agent and referer from headers
  const referer = req.headers.get("referer");
  const userAgent = req.headers.get("user-agent");
  const screen = body?.screen || null;

  if (process.env.IS_PRODUCTION === "true") {
    try {
      await sanityClient.create({
        _type: "visit",
        timestamp: new Date().toISOString(),
        referrer: referer || null,
        userAgent: Array.isArray(userAgent) ? userAgent[0] : userAgent || null,
        screen,
      });

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Visit tracking error", error);
      return new Response(JSON.stringify({ error: "Failed to track visit" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}
