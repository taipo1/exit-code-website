import LogoWhite from "@/svg/logo-white";
import Container from "../base/container";
import Link from "../base/link";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 pt-12 text-white">
      <Container className="mb-8 gap-y-4">
        <div className="col-span-4 row-start-1 flex flex-col items-start justify-start gap-4 lg:col-span-2 lg:col-start-2 lg:justify-center">
          <LogoWhite className="w-full" />
        </div>
        <div className="col-span-6 col-start-1 row-start-2 flex flex-col gap-2 lg:col-span-3 lg:col-start-9 lg:row-start-2">
          <h3 className="text-white">Voor de sociale bemoeial</h3>
          <Link
            href="https://www.linkedin.com/company/digitaal-gericht"
            linkStyle="text"
            className="max-w-fit"
            label="LinkedIn"
          />
        </div>
        <div className="col-span-6 row-start-3 flex flex-col justify-start gap-6 text-white md:gap-2 lg:col-span-3 lg:col-start-2">
          <p className="text-md text-left text-white">
            Eén maker, één aanspreekpunt, korte lijnen. Gericht helpt je
            systemen versimpelen, versnellen en slimmer maken.
          </p>
          <ul>
            <li>Kvk: 95373152</li>
            <li>Btw: NL005149286B92</li>
            <li>Adres: Singravenhof 80, Arnhem</li>
          </ul>
        </div>
        {/* <div className="col-span-12 col-start-1 flex flex-col lg:col-span-3 lg:col-start-6 lg:row-start-2">
          <h3 className="text-white">Voor de nieuwschierige</h3>
          <a href="#" className="text-md text-white">
            nieuwsbrief
          </a>
        </div> */}
      </Container>
      <div className="bg-white py-2">
        <Container>
          <div className="col-span-6 row-start-3 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
            <a href="/privacy" className="text-md text-secondary-400">
              Privacybeleid
            </a>
            <a
              href="/algemene-voorwaarden"
              className="text-md text-secondary-400"
            >
              Algemene voorwaarden
            </a>
            <p className="text-md text-center text-secondary-400 md:text-left">
              © 2025 Gericht. Alle rechten voorbehouden.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
