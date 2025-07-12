import Container from "../base/container";
import JourneyAnimation from "./journey-animations";
import JourneyCard from "./journey-card";
import IconLarge from "@/svg/icon-large";

const ClientJourneyExplainer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden overflow-y-visible lg:mb-24">
      <JourneyAnimation />
      <Container className="my-10 gap-y-4">
        <div
          id="journey-intro"
          className="relative z-10 col-span-6 col-start-1 row-span-1 row-start-1 lg:col-span-5 xl:col-span-4 xl:col-start-2"
        >
          <h2
            id="journey-heading"
            className="flex flex-col gap-2 pr-4 text-2xl text-[26px] font-bold leading-[1.2]"
          >
            Wat we doen als we ons ergens mee bemoeien.
          </h2>
          <p id="journey-subtext" className="relative mt-4 pl-3 text-lg">
            <span className="absolute left-0 top-2 h-[82%] w-[2px] bg-primary-300/50" />
            We bouwen precies wat jouw bedrijf nodig heeft om soepeler te
            draaien. Minder gedoe, meer grip en altijd gericht op resultaat.
          </p>
        </div>
        <div
          id="journey-cards"
          className="relative z-10 col-span-full row-start-2 flex flex-col justify-between gap-[72px] md:col-span-3 md:col-start-1 lg:col-span-12 lg:col-start-1 lg:mt-16 lg:flex-row xl:col-span-10 xl:col-start-2"
        >
          <JourneyCard
            title="Één sessie. Tien inzichten."
            description="We stappen in jouw operatie en halen boven wat vertraagt, verdwijnt of fout gaat. Geen audit wel een scherpe spiegel."
            index={1}
          />
          <JourneyCard
            title="Van knelpunt naar werkend systeem."
            description="We bouwen tools die je proces écht beter maken: dashboards, koppelingen, automatisering. Maatwerk toegespitst op jouw organisatie."
            index={2}
            className="self-start"
          />
          <JourneyCard
            title="Doorgroeien & doorbouwen"
            description="Ook na livegang blijven we aan. We monitoren, verbeteren en bouwen door waar nodig."
            index={3}
            className=""
          />
        </div>
        <div
          id="big-icon"
          className="relative z-0 col-span-4 col-start-3 row-span-3 row-start-1 flex items-start justify-end md:items-center lg:col-start-7 lg:row-start-1 lg:items-start"
        >
          <IconLarge className="-translate-y-12 scale-95 lg:-translate-y-0 lg:scale-100" />
        </div>
      </Container>
    </div>
  );
};

export default ClientJourneyExplainer;
