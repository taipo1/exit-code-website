import Hero from "@/components/hero";
import Mission from "@/components/mission";
import ClientJourneyExplainer from "@/components/client-journey-explainer";
import Cases from "@/components/cases";
import About from "@/components/about";
import Cta from "@/components/cta";
import ScrollEffects from "@/components/gsap/home-page-timeline";


export default function Home() {
  return (
    <div className="mb-20">
        <ScrollEffects />
        <Hero />
        <div id="mission-wrapper" className="min-h-fit flex items-center justify-center">
          <Mission />
        </div>
        <Cases />
        <Cta />
        <ClientJourneyExplainer />
        <About />
    </div>
  );
}
