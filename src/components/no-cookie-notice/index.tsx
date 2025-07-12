import Container from "../base/container";

const NoCookiesNotice = () => {
  return (
    <section className="px-6 py-16 text-white md:py-24">
      <Container>
        <div className="z-10 col-span-6 row-start-1 mx-auto flex max-w-3xl flex-col gap-6 text-left md:col-start-4">
          <h2 className="text-3xl font-bold text-primary-400 md:text-4xl">
            Waarom we geen cookies gebruiken
          </h2>

          <p>
            Gericht houdt dingen graag simpel en zuiver. Dat geldt ook voor deze
            website.
          </p>

          <p>
            Je vindt hier geen cookies, geen scripts van derden en geen externe
            trackers. We volgen je niet, we maken geen profiel van je, en we
            verkopen niks door.
          </p>

          <p>
            Wat we gebruiken: een eigen, anoniem logging-systeem dat draait op
            onze eigen omgeving. Daarmee zien we hoe mensen door de site bewegen
            en waar dingen beter kunnen. Geen persoonsgegevens, geen IP’s, geen
            ID’s. Alleen gedrag. Wat er gebeurt, en hoe.
          </p>

          <p>We willen snappen waar het systeem kraakt. Niet wie erop klikt.</p>

          <div className="flex flex-col gap-4 pt-6 sm:flex-row">
            {/* <a
              href="/frictie-scan"
              className="rounded-md bg-primary-400 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-primary-300"
            >
              Frictie-scan aanvragen
            </a> */}
            {/* <a
              href="/contact"
              className="rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-neutral-950"
            >
              Stuur een bericht
            </a> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NoCookiesNotice;
