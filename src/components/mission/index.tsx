import Container from "@/components/base/container";
import Oermens from "@/public/assets/oermens_raw.jpg";
import BaseImage from "@/components/base/base-image";
import MissionAnimation from "./mission-animation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const translate = "-translate-y-2 -translate-y-4 -translate-y-6";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative flex flex-col items-center justify-start bg-white opacity-0"
    >
      <MissionAnimation />
      <Container className={"my-12 grid-rows-6 gap-y-2"}>
        <div className="col-span-6 col-start-2 row-span-6 row-start-1 pr-6">
          <BaseImage src={Oermens} alt={"A picture of Ramsey"} />
        </div>
        <h2
          id="mission-title"
          className="col-span-4 col-start-8 row-start-1 text-[26px] font-medium leading-none opacity-0"
        >
          Van knelpunt naar{" "}
          <span
            id="mission-highlight"
            className="font-semibold text-primary-300"
          ></span>
        </h2>
        <div className="col-span-4 col-start-8 row-span-5 row-start-2 flex -translate-y-4 flex-col gap-4 text-[18px] text-lg">
          <p className="mission-description">
            Websites worden vaak gebouwd om te zeggen wat je doet. Maar
            verbeteren zelden waar je mee bezig bent.
          </p>

          <p className="mission-description">
            Gericht is er voor ondernemers die verder willen. Die kansen zien om
            slimmer te werken.
          </p>

          <p className="mission-description">
            Wij zijn bemoeials met een plan. We graven in je processen. Zo zien
            we wat schuurt. En bouwen wat stroomlijnt. Automatisering, AI,
            maatwerk. Geen buzzwords — gewoon gericht wat werkt.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
