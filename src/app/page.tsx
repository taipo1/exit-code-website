import Hero from "@/components/hero";
import Mission from "@/components/mission";
import ClientJourneyExplainer from "@/components/client-journey-explainer";
import About from "@/components/about";
import Cta from "@/components/cta";
// import Cases from "@/components/cases";

export default function Home() {
  return (
    <div className="mb-20">
      <Hero />
      <Mission />
      {/* get some cases */}
      {/* <Cases /> */}
      <ClientJourneyExplainer />
      <Cta />
      <About />
    </div>
  );
}
