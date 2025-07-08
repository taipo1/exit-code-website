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
      <div
        id="mission-wrapper"
        className="flex min-h-fit items-center justify-center"
      >
        <Mission />
      </div>
      <div className="h-[600px]" />
      {/* get some cases bitch */}
      {/* <Cases /> */}
      <ClientJourneyExplainer />
      <Cta />
      <About />
    </div>
  );
}
