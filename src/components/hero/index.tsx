import Container from "@/components/base/container";
import LogoIcon from "@/svg/logo-icon";
import BaseLink from "../base/link";

const Hero = () => {
  return (
    <section
      className="flex min-h-[60vh] w-full items-end justify-center"
      id="hero"
    >
      <Container className="py-12 max-md:px-6">
        <div className="col-span-12 flex grid-cols-12 flex-col gap-5 md:grid">
          <div className="row-span-3 row-start-1 flex flex-col justify-center gap-6 md:col-span-6 md:col-start-2 xl:col-span-5 xl:col-start-3">
            <h2 className="flex w-full flex-col text-left text-[28px] leading-[2.2rem] sm:text-[32px] lg:text-[40px] lg:leading-[2.8rem] xl:text-[42px]">
              <span className="font-semibold">Genoeg mooie websites.</span>
              <span className="font-medium">Tijd voor een die werkt!</span>
            </h2>
            <p className="text-2xl">
              Gericht bouwt digitale tools die eruitzien als een website — maar
              draaien als een motor. Voor ondernemers die vooruit willen.
            </p>
            <BaseLink
              href="/contact"
              className="w-fit"
              asButton="primary"
              label="Ga vooruit"
            />
          </div>
          <LogoIcon className="col-span-3 col-start-7 row-span-1 row-start-3 h-auto w-2/3 self-end md:w-full md:translate-y-8" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
