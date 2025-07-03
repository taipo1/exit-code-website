import LogoWhite from "@/svg/logo-white";
import Container from "../base/container";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 py-12 text-white">
      <Container className="gap-y-4">
        <div className="col-span-12 row-start-1 flex flex-col items-start justify-start gap-4 md:col-span-2 md:col-start-2 md:justify-center">
          <LogoWhite className="w-full" />
        </div>
        <div className="col-span-12 row-start-2 flex flex-col justify-start gap-2 text-white md:col-span-3 md:col-start-2">
          <p className="text-md text-left text-white">
            Gericht is een technische eenmanszaak met strategisch verstand. Geen
            agency. Geen ego. Wel resultaat.
          </p>
          <p className="text-md text-left text-white">
            KvK 12345678 — Btw NL123456789B01 Singravenhof 80, Arnhem
          </p>
        </div>
        <div className="col-span-12 col-start-1 flex flex-col md:col-span-3 md:col-start-6 md:row-start-2">
          <h3 className="text-white">Voor de nieuwsgierige</h3>
          <a href="#" className="text-md text-white">
            nieuwsbrief
          </a>
        </div>
        <div className="col-span-12 col-start-1 flex flex-col md:col-span-3 md:col-start-9 md:row-start-2">
          <h3 className="text-white">Voor de sociale bemoeial</h3>
          <a href="#" className="text-md text-white">
            linkedin
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
