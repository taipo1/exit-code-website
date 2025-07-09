import LogoWhite from "@/svg/logo-white";
import Container from "../base/container";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 pt-12 text-white">
      <Container className="mb-8 gap-y-4">
        <div className="col-span-12 row-start-1 flex flex-col items-start justify-start gap-4 lg:col-span-2 lg:col-start-2 lg:justify-center">
          <LogoWhite className="w-full" />
        </div>
        <div className="col-span-12 row-start-2 flex flex-col justify-start gap-2 text-white lg:col-span-3 lg:col-start-2">
          <p className="text-md text-left text-white">
            Eén maker, één aanspreekpunt, korte lijnen. Gericht helpt je
            systemen versimpelen, versnellen en slimmer maken.
          </p>
          <p className="text-md text-left text-white">
            KvK 95373152, Btw: NL005149286B92 Singravenhof 80, Arnhem
          </p>
        </div>
        <div className="col-span-12 col-start-1 flex flex-col lg:col-span-3 lg:col-start-6 lg:row-start-2">
          <h3 className="text-white">legal</h3>
          {/* <a href="#" className="text-md text-white">
            nieuwsbrief
          </a> */}
        </div>
        <div className="col-span-12 col-start-1 flex flex-col lg:col-span-3 lg:col-start-9 lg:row-start-2">
          <h3 className="text-white">Voor de sociale bemoeial</h3>
          <a
            href="https://www.linkedin.com/company/digitaal-gericht"
            className="text-md text-white"
          >
            linkedin
          </a>
        </div>
      </Container>
      <div className="flex w-full items-center justify-center gap-4 bg-white py-2">
        <p className="text-md text-left text-secondary-400">
          © 2025 Gericht. Alle rechten voorbehouden.
        </p>
        <a href="/privacy" className="text-md text-secondary-400">
          Privacybeleid
        </a>
        <a href="/algemene-voorwaarden" className="text-md text-secondary-400">
          Algemene voorwaarden
        </a>
      </div>
    </footer>
  );
};

export default Footer;
