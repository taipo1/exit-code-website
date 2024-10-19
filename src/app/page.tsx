import Hero from "@/components/hero";
import About from "@/components/about";
import TextImage from "@/components/text-image";
import CtaExplainer from "@/components/cta-explainer";
import Cases from "@/components/cases";
import Contact from "@/components/contact";
import { Loader } from "@/components/loader";
import RevealWrapper from "@/components/reveal-wrapper";

export default function Home() {
  return (
    <div>
      <Loader />
      <RevealWrapper Element={'span'} delay={.6}>
        <Hero />

        <TextImage />
        <About />
        <CtaExplainer />
        <Cases />
        <Contact />
      </RevealWrapper>
    </div>
  );
}
