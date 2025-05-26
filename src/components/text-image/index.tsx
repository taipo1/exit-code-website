import Container from "@/components/base/container";
import ImageBorder from "../image-border";
import RevealWrapper from "../gsap/reveal-wrapper";
import vrMadness from "@/public/assets/vr-madness.jpg";
// import MouseTracker from "../gsap/mouse-tracker";
// import GsapFloater from "../gsap/floater";
const TextImage = () => (
  <section className="relative">
    <Container className={"my-32 grid-rows-1 md:grid-rows-1 lg:grid-rows-4"}>
      <div className="col-span-4 col-start-2 row-span-1 md:col-span-5 md:col-start-1 md:row-span-3 md:row-start-1 lg:row-span-3">
        <ImageBorder
          src={vrMadness}
          width={505}
          height={337}
          className="left-[40px] top-[40px] md:left-[104px] md:top-[104px]"
        />
      </div>
      <RevealWrapper
        Element="div"
        className="col-span-6 col-start-1 row-span-12 row-start-3 flex items-start md:col-span-5 md:col-start-8 md:row-span-4 md:row-start-2 md:-translate-y-1 lg:col-span-5 lg:col-start-8 lg:row-start-2 xl:-translate-y-6"
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-grotesk flex items-start text-xl font-bold text-white md:text-4xl">
            Optimimalisatie van jouw bedrijfs proces als sleutel tot succes
          </h2>
          <div className="flex flex-col gap-4 self-center">
            <p>
              Jouw bedrijf verdient geen standaard website, maar een slimme,
              toekomstbestendige oplossing die met je meegroeit.
            </p>
            <p>
              Bij Exit Code 0 bouwen we digitale producten die niet alleen
              vandaag presteren, maar ook klaar zijn voor de uitdagingen van
              morgen.
            </p>
          </div>
        </div>
      </RevealWrapper>
    </Container>
  </section>
);

export default TextImage;
