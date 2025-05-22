import Container from "../base/container";
import JourneyCard from "./journey-card";

const ClientJourneyExplainer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      {/* <h1 className="text-2xl font-bold">Client Journey Explainer</h1>
      <p className="mt-4 text-lg">
        This component explains the client journey in a clear and concise manner.
      </p> */}
      <Container className="my-10">
        <div className="col-span-10 col-start-2 flex gap-[72px] justify-between items-baseline">
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
      </Container>
    </div>
  );
};

export default ClientJourneyExplainer;