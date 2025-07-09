import Container from "../base/container";
import JourneyAnimation from "./journey-animations";
import JourneyCard from "./journey-card";
import IconLarge from "@/svg/icon-large";

const ClientJourneyExplainer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden p-4 md:mb-24">
      <JourneyAnimation />
      <Container className="my-10 gap-y-4">
        <div
          id="journey-intro"
          className="relative z-10 col-span-6 col-start-1 row-span-1 row-start-1 md:col-span-5 xl:col-span-4 xl:col-start-2"
        >
          <h2
            id="journey-heading"
            className="flex flex-col gap-2 text-2xl text-[26px] font-bold leading-[.9]"
          >
            <span>Wat we doen</span>{" "}
            <span>als we ons ergens mee bemoeien.</span>
          </h2>
          <p id="journey-subtext" className="mt-4 text-lg">
            We bouwen precies wat jouw bedrijf nodig heeft om soepeler te
            draaien. Minder gedoe, meer grip. En altijd gericht op resultaat.
          </p>
        </div>
        <div
          id="journey-cards"
          className="relative z-10 col-span-full row-start-2 flex flex-col justify-between gap-[72px] md:mt-16 md:flex-row lg:col-span-12 lg:col-start-1 xl:col-span-10 xl:col-start-2"
        >
          <JourneyCard
            title="Eén sessie. Tien inzichten."
            description="We stappen in jouw operatie en halen boven wat vertraagt, verdwijnt of fout gaat. Geen audit, maar een scherpe spiegel."
            index={1}
          />
          <JourneyCard
            title="Van knelpunt naar werkend systeem."
            description="We bouwen tools die je proces écht beter maken: dashboards, koppelingen, automatisering. maatwerk toegespitst op jouw organisatie."
            index={2}
            className="self-start lg:-translate-y-[44px]"
          />
          <JourneyCard
            title="Doorgroeien & doorbouwen"
            description="Ook na livegang blijven we aan. We monitoren, verbeteren en bouwen door waar nodig."
            index={3}
            className="md:self-end"
          />
        </div>
        <div
          id="big-icon"
          className="relative z-0 col-span-4 col-start-2 row-span-3 row-start-1 md:col-start-7 md:row-start-1"
        >
          <IconLarge className="scale-80 -translate-y-20 justify-end lg:-translate-y-0 lg:scale-100" />
        </div>
      </Container>
    </div>
  );
};

export default ClientJourneyExplainer;
