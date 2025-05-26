import Container from "@/components/base/container";
import LogoIcon from "@/svg/logo-icon";
import BaseLink from "../base/link";

const Hero = () => { 
  return (
    <section className="w-full min-h-[60vh] flex justify-center items-end" id="hero">
      <Container className="max-md:px-6 py-12">
        <div className="col-span-12 flex flex-col gap-5 md:grid grid-cols-12">
          <div className="md:col-span-6 md:col-start-2 xl:col-span-5 row-span-3 row-start-1 xl:col-start-3 gap-6 flex flex-col justify-center">
            <h2 className="w-full flex flex-col text-[28px] sm:text-[32px] leading-[2.2rem] lg:text-[40px] xl:text-[42px] lg:leading-[2.8rem] text-left">
              <span className="font-semibold">Genoeg mooie websites.</span>
              <span className="font-medium">Tijd voor een die werkt!</span>
            </h2>
            <p className="text-2xl">Gericht bouwt digitale tools die eruitzien als een website — maar draaien als een motor. Voor ondernemers die vooruit willen.</p>
            <BaseLink href="/contact" className="w-fit" asButton="primary" label="Ga vooruit" />
          </div>
          <LogoIcon className="col-span-3 row-start-3 row-span-1 col-start-7 self-end w-2/3 md:w-full md:translate-y-8 h-auto" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;