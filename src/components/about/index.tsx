import Container from "@/components/base/container";
import Image from "@/components/base/base-image";
import me from "@/public/assets/me.jpg";
import Oermens from "@/public/assets/oermens_raw.jpg";
import RevealWrapper from "@/components/gsap/reveal-wrapper";
import BaseImage from "@/components/base/base-image";
import OpacityWrapper from "../gsap/opacity-wrapper";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const translate = "-translate-y-2 -translate-y-4 -translate-y-6";

const About = () => {
  const enterDelay = 1
  return (
  <Container className={"my-12 grid-rows-6 gap-y-2"}>
  <div className="col-span-6 row-start-1 row-span-6 col-start-2 pr-6">
    <BaseImage src={Oermens} alt={"A picture of Ramsey"} />
  </div>
  <RevealWrapper Element="h2" className="col-start-8 row-start-1 col-span-4 font-medium text-[26px] leading-none">
    Van knelpunt naar <span className="text-primary-300 font-semibold">krachtpatser.</span>
  </RevealWrapper>
  <OpacityWrapper delay={ 0.1} Element="div" className="col-start-8 text-lg col-span-4 row-start-2 row-span-5 text-[18px] flex flex-col gap-4 -translate-y-4">
    <p>Websites worden vaak gebouwd om te zeggen wat je doet. Maar verbeteren zelden waar je mee bezig bent.</p>

    <p>Gericht is er voor ondernemers die verder willen. Die kansen zien om slimmer te werken.</p>

    <p>Wij zijn bemoeials met een plan.We graven in je processen. Zo zien we wat schuurt. En bouwen wat stroomlijnt. Automatisering, AI, maatwerk. Geen buzzwords — gewoon gericht wat werkt.</p>
  </OpacityWrapper>
  </Container>
)
};

export default About;
