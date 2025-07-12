const PrivacyBeleid = () => {
  return (
    <section className="mx-auto max-w-4xl space-y-6 bg-white p-8 font-dmSans text-dark-500">
      <h1 className="text-3xl font-bold text-primary-300">
        Privacybeleid, Gericht
      </h1>
      <p className="italic">Laatst bijgewerkt: juli 2025</p>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary-300">
          1. Wie zijn wij?
        </h2>
        <p>
          Gericht is een eenmanszaak gevestigd in Nederland. Wij helpen kleine
          teams en ondernemers met digitale optimalisatie: dashboards,
          klantflows en functionele websites.
          <br />
          <br />
          <strong>Handelsnaam: </strong> Gericht.nl
          <br />
          <strong>Bedrijfsnaam:</strong> ExitCode0
          <br />
          <strong>E-mail:</strong> info@gericht.nl
          <br />
          <strong>KvK-nummer:</strong> 95373152
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          2. Onze privacyprincipes
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Zo min mogelijk data</li>
          <li>Geen third-party tracking</li>
          <li>Alles lokaal (first party) en anoniem</li>
          <li>Volledig transparant</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          3. Wat we wél verzamelen, en waarom
        </h2>
        <table className="w-full border border-secondary-400 text-sm">
          <thead>
            <tr className="bg-secondary-400 text-left">
              <th className="p-2 text-white">Gegevenstype</th>
              <th className="p-2 text-white">Wanneer?</th>
              <th className="p-2 text-white">Waarom?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary-400">
            <tr>
              <td className="p-2">Naam en e-mailadres</td>
              <td className="p-2">Bij contactaanvraag of intakeformulier</td>
              <td className="p-2">Om te kunnen reageren of samenwerken</td>
            </tr>
            <tr>
              <td className="p-2">Bedrijfsnaam, KvK-gegevens</td>
              <td className="p-2">Bij offerte of projectstart</td>
              <td className="p-2">Voor facturatie en juridische documenten</td>
            </tr>
            <tr>
              <td className="p-2">Anonieme gebruiksdata</td>
              <td className="p-2">Bij gebruik van gericht.nl</td>
              <td className="p-2">
                Om gedragspatronen te analyseren en de website te verbeteren
              </td>
            </tr>
            <tr>
              <td className="p-2">Afgekort IP-adres</td>
              <td className="p-2">
                Alleen bij foutmeldingen of beveiligingsincidenten
              </td>
              <td className="p-2">
                Voor misbruikdetectie en systeembeveiliging
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-primary-300">
          4. Over onze anonieme tracking
        </h2>
        <p>
          Gericht gebruikt een lichte, cookieloze meetmethode om te begrijpen
          wat werkt en wat schuurt. Dit gebeurt:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Volledig first-party</li>
          <li>Zonder gebruikersprofielen of herleidbaarheid</li>
          <li>Zonder unieke identifiers of tracking over sessies heen</li>
          <li>Uitsluitend voor verbetering van de dienstverlening</li>
        </ul>

        <p className="mt-2">
          Voorbeelden: welke pagina’s worden bezocht, waar wordt niet op
          geklikt, hoe lang blijft iemand ergens.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          5. Wat we niet doen
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Geen cookies van Google, Meta of andere advertentiebedrijven</li>
          <li>Geen gebruikersprofielen of gekoppelde IP-logs</li>
          <li>Geen pixeltracking via externe partijen</li>
          <li>Geen dataverkoop of overdracht</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          6. Jouw rechten (AVG)
        </h2>
        <p>
          Je hebt het recht op inzage, correctie, verwijdering en bezwaar. Stuur
          een e-mail naar{" "}
          <a
            href="mailto:info@gericht.nl"
            className="text-primary-300 underline"
          >
            info@gericht.nl
          </a>
          , dan handelen we je verzoek binnen 14 dagen af.
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">
          7. Beveiliging & opslag
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Data-opslag uitsluitend binnen de EU</li>
          <li>Toegang is beperkt tot noodzakelijke medewerkers</li>
          <li>Encryptie en toegangsbescherming standaard toegepast</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          8. Bewaartermijnen
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Contactformulieren: max. 6 maanden</li>
          <li>Projectdata: 7 jaar (fiscale verplichting)</li>
          <li>Gebruiksdata (anoniem): max. 12 maanden</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          9. Partners & verwerkers
        </h2>
        <p>
          Gericht werkt met een select aantal betrouwbare partners binnen de EU,
          met wie verwerkersovereenkomsten zijn gesloten.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Domain registery: TransIP</li>
          <li>Hosting: Vercel</li>
          <li>Facturatie: Moneybird</li>
          <li>Analytics: eigen first-party oplossing</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-300">
          10. Vragen of klachten?
        </h2>
        <p>
          Mail ons via{" "}
          <a
            href="mailto:info@gericht.nl"
            className="text-primary-300 underline"
          >
            info@gericht.nl
          </a>
          . Komen we er niet uit, dan kun je terecht bij de Autoriteit
          Persoonsgegevens via{" "}
          <a
            href="https://autoriteitpersoonsgegevens.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-300 underline"
          >
            autoriteitpersoonsgegevens.nl
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-primary-300">Tot slot</h2>
        <p>
          Gericht bouwt systemen die ruis wegnemen, niet toevoegen. Wat we niet
          verzamelen, kan ook niet lekken. Wij kiezen bewust voor helderheid,
          eenvoud en rust.
        </p>
      </div>
    </section>
  );
};

export default PrivacyBeleid;
