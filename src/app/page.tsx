import Hero from "@/components/hero";
import Mission from "@/components/mission";
import ClientJourneyExplainer from "@/components/client-journey-explainer";
import About from "@/components/about";

export default function Home() {
  return (
    <div>
        <Hero />
        <Mission />
        <ClientJourneyExplainer />
        <About />
    </div>
  );
}
