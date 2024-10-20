import Container from "@/components/base/container";
import ImageBorder from "../image-border";
import RevealWrapper from "../gsap/reveal-wrapper";
import vrMadness from "@/public/assets/vr-madness.jpg";
// import MouseTracker from "../gsap/mouse-tracker";
// import GsapFloater from "../gsap/floater";
const TextImage = () => (
  <section className="relative">
    {/* <RevealWrapper Element={"div"}>
      <GsapFloater className="absolute justify-end -left-80 hidden 2xl:flex pr-2 w-[500px] h-[500px] border-[18px] rounded-2xl border-primary-300 inset-0 z-50" >
        <p className="font-grotesk w-2/4 text-2xl text-right">Thats real screen real-estate</p>
      </GsapFloater>
    </RevealWrapper> */}
    <Container className={"my-32 grid-rows-1 md:grid-rows-1 lg:grid-rows-4"}>
      <div className="col-span-4 col-start-2 row-span-1 md:col-start-1 md:row-start-1 md:row-span-3 lg:row-span-3 md:col-span-5">
        <ImageBorder src={vrMadness} width={505} height={337} className="top-[40px] left-[40px] md:top-[104px] md:left-[104px]" />
      </div>
      <RevealWrapper Element="div" className="col-start-1 row-start-3 row-span-12 col-span-6 md:row-start-2 md:col-start-8 md:-translate-y-1 md:col-span-5 md:row-span-4 lg:col-start-8 lg:row-start-2 lg:col-span-5 flex items-start xl:-translate-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="flex items-start font-grotesk text-xl md:text-4xl font-bold text-white">
            Optimimalisatie van jouw bedrijfs proces als sleutel tot succes
          </h2>
          <div className="self-center flex flex-col gap-4">
            <p>Jouw bedrijf verdient geen standaard website, maar een slimme, toekomstbestendige oplossing die met je meegroeit.</p> 
            <p>
              Bij Exit Code 0 bouwen we digitale producten die niet alleen vandaag presteren, maar ook klaar zijn voor de uitdagingen van morgen.
            </p>
          </div>
        </div>
      </RevealWrapper>
    </Container>
  </section>
);

export default TextImage;
