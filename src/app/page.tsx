import TextImage from "@/components/text-image";
import Cases from "@/components/cases";
import CtaExplainer from "@/components/cta-explainer";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <About />
      <TextImage />
      <CtaExplainer />
      <Cases />
      <Contact />
    </div>
  );
}
