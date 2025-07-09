import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";
import { ContactFormProvider } from "@/context/contact-form-provider";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--dm-sans",
});

export const metadata: Metadata = {
  title:
    "Van knelpunt naar krachtpatser | gericht – Digitale oplossingen die werken",
  description: "opzoek naar oplossingen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <meta name="apple-mobile-web-app-title" content="Gericht.nl" />
      </head>
      <html lang="en">
        <body className={`${dmSans.variable} max-w-full antialiased`}>
          <ContactFormProvider>
            <Navigation />

            {children}
            <Footer />
          </ContactFormProvider>
        </body>
      </html>
    </>
  );
}
