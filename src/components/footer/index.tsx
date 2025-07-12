import LogoWhite from "@/svg/logo-white";
import Container from "../base/container";
import Link from "../base/link";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 pt-12 text-white">
      <Container className="grid grid-cols-1 gap-y-6">
        {/* Merk & USP */}
        <div className="col-span-full flex flex-col gap-4 md:col-span-3">
          <LogoWhite className="w-44" />
          <p className="text-base text-white/90 sm:text-lg">
            Digitale ruis eruit. Grip erin. Één maker die systemen versimpelt,
            versnelt en slimmer maakt.
          </p>
        </div>

        {/* Juridisch */}
        <div className="col-span-6 flex flex-col gap-2 md:col-span-3 md:col-start-4">
          <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
            Juridisch
          </h3>
          <Link linkStyle="text" href="/privacy">
            Privacybeleid
          </Link>
          <Link linkStyle="text" href="/algemene-voorwaarden">
            Algemene voorwaarden
          </Link>
          <Link linkStyle="text" href="/geen-cookies">
            Geen cookies?
          </Link>
        </div>

        {/* Contactgegevens */}
        <div className="col-span-6 row-start-3 flex flex-col gap-2 md:col-span-3 md:col-start-4 md:row-start-2 lg:col-start-7 lg:row-start-1">
          <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
            Gegevens
          </h3>
          <span className="text-sm sm:text-base">KvK: 95373152</span>
          <span className="text-sm sm:text-base">Btw: NL005149286B92</span>
          <span className="text-sm sm:text-base">Arnhem</span>
          {/* <Link linkStyle="text" href="mailto:hello@gericht.nl" target="_blank">
            hello@gericht.nl
          </Link> */}
          <Link
            linkStyle="text"
            href="https://www.linkedin.com/company/digitaal-gericht"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>

        {/* Actie / CTA */}
        {/* <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
            Klaar om te starten?
          </h3>
          <Link linkStyle="primary" href="#contact">
            Frictie-scan aanvragen
          </Link>
          <Link linkStyle="text" href="#contact">
            Stuur een bericht
          </Link>
        </div> */}
      </Container>

      {/* Onderste strook */}
      <div className="mt-12 bg-white py-4">
        <Container>
          <p className="col-span-full text-center text-xs text-secondary-400 sm:text-sm">
            Gemaakt zonder ruis. © 2025 Gericht
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
