import Container from "@/components/base/container";
import MissionAnimation from "./mission-animation";
import EvolutionAnimation from "./evolution-animation/evolution-animation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const translate = "-translate-y-2 -translate-y-4 -translate-y-6";

const Mission = () => {
  return (
    <div id="mission-wrapper">
      <section
        id="mission"
        className="justify-startopacity-0 relative flex w-full flex-col items-center"
      >
        <MissionAnimation />
        <Container
          className={
            "grid-rows-10 gap-y-2 lg:my-12 lg:grid-rows-3 xl:grid-rows-2"
          }
        >
          <div
            style={{ transform: "translateZ(0)" }}
            className="col-span-full row-span-3 row-start-1 flex justify-start overflow-hidden lg:col-span-6 lg:col-start-2 lg:row-span-2 lg:pr-12 xl:row-span-2"
          >
            <EvolutionAnimation />
          </div>
          <div className="col-span-6 row-span-7 flex flex-col gap-4 lg:col-span-4 lg:col-start-8 lg:row-span-full">
            <h2
              id="mission-title"
              className="mt-4 text-2xl font-semibold leading-none opacity-0 lg:mt-0 lg:text-[26px]"
            >
              Van knelpunt naar{" "}
              <span
                id="mission-highlight"
                className="font-semibold text-primary-300"
              ></span>
            </h2>
            <div className="flex flex-col gap-4 text-[18px] text-lg">
              <p className="mission-description opacity-0">
                Websites worden vaak gebouwd om te zeggen wat je doet. Maar
                verbeteren zelden waar je mee bezig bent.
              </p>

              <p className="mission-description opacity-0">
                Gericht is er voor ondernemers die verder willen. Die kansen
                zien om slimmer te werken.
              </p>

              <p className="mission-description opacity-0">
                Wij zijn bemoeials met een plan. We graven in je processen. Zo
                zien we wat schuurt. En bouwen wat stroomlijnt. Automatisering,
                AI, maatwerk. Geen buzzwords — gewoon gericht wat werkt.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Mission;
