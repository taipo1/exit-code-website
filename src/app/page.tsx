import Hero from "@/components/hero";
import About from "@/components/about";
import TextImage from "@/components/text-image";
import CtaExplainer from "@/components/cta-explainer";
import Cases from "@/components/cases";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TextImage />
      <CtaExplainer />
      <Cases />
      <Contact />
    </div>
  );
}
