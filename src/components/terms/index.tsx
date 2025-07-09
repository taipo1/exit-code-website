const AlgemeneVoorwaarden = () => {
  return (
    <section className="mx-auto max-w-4xl space-y-6 bg-white p-8 font-dmSans text-dark-500">
      <h1 className="text-3xl font-bold text-primary-300">
        Algemene Voorwaarden, Gericht
      </h1>
      <p className="italic">Versie juli 2025</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary-300">
          1. Toepasselijkheid
        </h2>
        <p>
          Deze voorwaarden zijn van toepassing op alle offertes, werkzaamheden
          en overeenkomsten tussen Gericht en opdrachtgevers, tenzij
          schriftelijk anders is overeengekomen. Afwijkende voorwaarden van de
          opdrachtgever zijn uitdrukkelijk uitgesloten.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          2. Werkwijze & inspanningsverplichting
        </h2>
        <p>
          Gericht levert diensten op het gebied van digitale optimalisatie,
          automatisering en maatwerkontwikkeling. Gericht werkt altijd vanuit
          een inspanningsverplichting: we doen alles wat redelijkerwijs verwacht
          mag worden — maar we garanderen geen vooraf bepaald resultaat, tenzij
          dit schriftelijk en expliciet is vastgelegd.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          3. Offertes & overeenkomsten
        </h2>
        <p>
          Offertes zijn 30 dagen geldig en vrijblijvend. Een overeenkomst komt
          tot stand zodra een offerte schriftelijk of per e-mail wordt
          geaccepteerd, of zodra Gericht met toestemming van de opdrachtgever
          start met de uitvoering.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          4. Duur, retainerstructuur & opzegging
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Voor retainerdiensten zoals onderhoud, support of hosting geldt
            standaard een looptijd van één jaar.
          </li>
          <li>
            Na afloop wordt het contract automatisch met één jaar verlengd,
            tenzij een van beide partijen uiterlijk twee maanden vóór afloop
            schriftelijk opzegt.
          </li>
          <li>
            Gericht kan bij opzegging faciliteren in overdracht of migratie
            tegen het geldende uurtarief.
          </li>
          <li>
            Support buiten het retainerpakket wordt afzonderlijk gefactureerd
            tegen het geldende tarief van Gericht.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          5. Meerwerk & wijziging
        </h2>
        <p>
          Aanpassingen buiten de overeengekomen scope worden als meerwerk
          beschouwd. Gericht informeert de opdrachtgever tijdig over de gevolgen
          voor planning en kosten. Meerwerk wordt altijd op basis van het
          geldende uurtarief uitgevoerd, tenzij anders afgesproken.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          6. Prijzen & betaling
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Alle prijzen zijn exclusief btw.</li>
          <li>
            Betalingstermijn is 14 dagen na factuurdatum. Bij uitblijven van
            betaling is wettelijke rente verschuldigd.
          </li>
          <li>
            Gericht behoudt zich het recht voor tarieven jaarlijks te indexeren.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          7. Aansprakelijkheid
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            De aansprakelijkheid van Gericht is beperkt tot directe schade en
            maximaal het factuurbedrag (met een absoluut maximum van €5.000 per
            opdracht).
          </li>
          <li>
            Gericht is nooit aansprakelijk voor indirecte schade, gevolgschade,
            of gederfde winst.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          8. Hosting & overdracht
        </h2>
        <p>
          Hosting wordt verzorgd via externe partners. Gericht is niet
          aansprakelijk voor technische storingen buiten haar invloedssfeer. Bij
          beëindiging van een hostingcontract biedt Gericht optioneel
          ondersteuning bij migratie, overdracht van domein, DNS-instellingen en
          documentatie, tegen uurtarief.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          9. Intellectueel eigendom
        </h2>
        <p>
          Alle rechten op ontwerpen, code en systemen blijven bij Gericht,
          tenzij schriftelijk anders overeengekomen. De opdrachtgever krijgt een
          gebruiksrecht binnen zijn eigen organisatie.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          10. Vertrouwelijkheid & gegevensverwerking
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Partijen behandelen elkaars bedrijfsinformatie vertrouwelijk.</li>
          <li>
            Gericht verwerkt persoonsgegevens in lijn met de AVG. Bij
            structurele verwerking wordt een verwerkersovereenkomst afgesloten.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          11. Opzegging en ontbinding
        </h2>
        <p>
          Beide partijen kunnen een overeenkomst ontbinden bij een ernstige
          tekortkoming, mits na schriftelijke ingebrekestelling en redelijke
          hersteltermijn.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          12. Geschillen & toepasselijk recht
        </h2>
        <p>
          Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen
          worden bij voorkeur in overleg opgelost. Indien nodig wordt de
          bevoegde rechter in het arrondissement van Gericht ingeschakeld.
        </p>
      </div>

      <p className="mt-6 text-sm text-dark-300">
        Vragen of opmerkingen? Neem contact op via{" "}
        <a href="mailto:info@gericht.nl" className="text-primary-400 underline">
          info@gericht.nl
        </a>
        .
      </p>
    </section>
  );
};

export default AlgemeneVoorwaarden;
