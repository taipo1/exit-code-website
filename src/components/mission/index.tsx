import Container from "@/components/base/container";
import MissionAnimation from "./mission-animation";
import EvolutionAnimation from "./evolution-animation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const translate = "-translate-y-2 -translate-y-4 -translate-y-6";

const Mission = () => {
  return (
    <section
      id="mission"
      className="relative flex w-full flex-col items-center justify-start bg-white opacity-0"
    >
      <MissionAnimation />
      <Container className={"grid-rows-4 gap-y-2 md:my-12 md:grid-rows-2"}>
        <div className="col-span-full row-span-1 row-start-1 flex justify-start md:col-span-6 md:col-start-2 md:pr-12 xl:row-span-2">
          <EvolutionAnimation />
        </div>
        <div className="col-span-6 row-span-3 flex flex-col gap-4 md:col-span-4 md:col-start-8 md:row-span-full">
          <h2
            id="mission-title"
            className="text-[26px] font-medium leading-none opacity-0"
          >
            Van knelpunt naar{" "}
            <span
              id="mission-highlight"
              className="font-semibold text-primary-300"
            ></span>
          </h2>
          <div className="flex flex-col gap-4 text-[18px] text-lg">
            <p className="mission-description">
              Websites worden vaak gebouwd om te zeggen wat je doet. Maar
              verbeteren zelden waar je mee bezig bent.
            </p>

            <p className="mission-description">
              Gericht is er voor ondernemers die verder willen. Die kansen zien
              om slimmer te werken.
            </p>

            <p className="mission-description">
              Wij zijn bemoeials met een plan. We graven in je processen. Zo
              zien we wat schuurt. En bouwen wat stroomlijnt. Automatisering,
              AI, maatwerk. Geen buzzwords — gewoon gericht wat werkt.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
