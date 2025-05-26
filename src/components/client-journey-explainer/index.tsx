import Container from "../base/container";
import JourneyCard from "./journey-card";
import IconLarge from "@/svg/icon-large";

const ClientJourneyExplainer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4">
      <Container className="my-10 grid-rows-4 lg:grid-rows-2">
        <div className="col-span-5 col-start-1 row-span-1 xl:col-span-4 xl:col-start-2">
          <h2 className="flex flex-col gap-2 text-2xl text-[26px] font-bold">
            <span>Wat we doen</span>{" "}
            <span>als we ons ergens mee bemoeien.</span>
          </h2>
          <p className="mt-4 text-lg">
            We bouwen precies wat jouw bedrijf nodig heeft om soepeler te
            draaien. Minder gedoe, meer grip. En altijd gericht op resultaat.
          </p>
        </div>
        <div className="col-span-12 col-start-1 row-span-3 row-start-2 flex -translate-y-16 justify-around gap-[72px] max-lg:flex-col lg:row-span-1 xl:col-span-10 xl:col-start-2 xl:justify-between">
          <JourneyCard
            title="Eén sessie. Tien inzichten."
            description="We stappen in jouw operatie en halen boven wat vertraagt, verdwijnt of fout gaat. Geen audit, maar een scherpe spiegel."
            index={1}
          />
          <JourneyCard
            title="Van knelpunt naar werkend systeem."
            description="We bouwen tools die je proces écht beter maken: dashboards, koppelingen, automatisering. Geen templatewerk, maar slimme bouwblokken."
            index={2}
            className="-translate-y-10"
          />
          <JourneyCard
            title="Doorgroeien & doorbouwen"
            description="Ook na livegang blijven we aan. We monitoren, verbeteren en bouwen door waar nodig. Geen lock-in, wel duurzame impact."
            index={3}
            className="translate-y-8"
          />
        </div>
        <div className="col-span-4 col-start-6 row-span-5 row-start-1 flex justify-end xl:col-start-7">
          <IconLarge />
        </div>
      </Container>
    </div>
  );
};

export default ClientJourneyExplainer;
