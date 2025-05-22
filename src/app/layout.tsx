import type { Metadata } from "next";
import { DM_Sans  } from "next/font/google";
import Navigation from "@/components/navigation";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--dm-sans",
});


export const metadata: Metadata = {
  title: "Gericht",
  description: "opzoek naar oplossingen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
