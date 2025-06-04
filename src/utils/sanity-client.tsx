import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "w9kisel0",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
