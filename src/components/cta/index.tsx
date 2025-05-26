import Image from "../base/base-image";
import Container from "../base/container";
import pattern from "@/public/assets/pattern.png";
import CtaAnimation from "./cta-animation";

const Cta = () => (
<section className="my-20" id="cta">
  <CtaAnimation />
  <Container>
    <div
      id="cta-card"
      className="col-span-8 col-start-3 border-t-4 border-primary-300 bg-secondary-400 relative rounded-sm"
    >
      <div className="px-8 py-16 flex flex-col gap-2 relative z-10">
        <h2 className="text-[36px] font-semibold leading-[1] text-white">
          Klaar om <span className="text-orange-500" id="cta-highlight">slimmer</span> te groeien?
        </h2>
        <p className="text-white text-[22px]">
          We prikken snel door je processen heen...
        </p>
        <div className="flex gap-2">
          <a
            href="/contact"
            id="cta-button-primary"
            className="cta-button bg-primary-300 hover:bg-primary-400 text-white py-2 px-4 rounded transition-colors"
          >
            Neem contact op
          </a>
          <a
            href="/cases"
            id="cta-button-secondary"
            className="cta-button bg-secondary-300 hover:bg-secondary-400 text-white py-2 px-4 rounded transition-colors"
          >
            Bekijk onze cases
          </a>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-300 opacity-85 z-10"></div>
        <Image
          className="min-w-full translate-x-4 translate-y-4 scale-125 z-0"
          src={pattern}
          alt="Pattern"
        />
      </div>
    </div>
  </Container>
</section>

);

export default Cta;