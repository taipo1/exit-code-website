import Image from "../base/base-image";
import Container from "../base/container";
import pattern from "@/public/assets/pattern.png";
import CtaAnimation from "./cta-animation";

const Cta = () => (
  <section className="mb-20 md:my-20" id="cta">
    <CtaAnimation />
    <Container className="">
      <div
        id="cta-card"
        className="relative col-span-8 rounded-sm border-t-4 border-primary-300 bg-secondary-400 max-md:mx-5 md:col-start-3"
      >
        <div className="relative z-10 flex flex-col gap-2 px-8 py-16">
          <h2 className="text-[36px] font-semibold leading-[1] text-white">
            Klaar om{" "}
            <span className="text-orange-500" id="cta-highlight">
              slimmer
            </span>{" "}
            te groeien?
          </h2>
          <p className="text-[22px] text-white">
            We prikken snel door je processen heen...
          </p>
          <div className="flex gap-2">
            <a
              href="/contact"
              id="cta-button-primary"
              className="cta-button rounded bg-primary-300 px-4 py-2 text-white transition-colors hover:bg-primary-400"
            >
              Neem contact op
            </a>
          </div>
        </div>
        <div className="absolute top-0 z-0 h-full w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-secondary-400 to-secondary-300 opacity-85"></div>
          <Image
            className="z-0 min-w-full translate-x-4 translate-y-4 scale-125"
            src={pattern}
            alt="Pattern"
          />
        </div>
      </div>
    </Container>
  </section>
);

export default Cta;
