import Container from "../base/container";
import Image from "../base/base-image";
import me from "@/public/assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="my-24">
      <Container className="grid-rows-auto gap-4">
        <div className="col-span-6 mb-4 flex flex-col gap-2 xl:col-span-5 xl:col-start-2 xl:row-start-1">
          <h2 className="text-[32px] font-semibold leading-[.9] lg:text-[48px] lg:leading-[.8]">
            Bemoeial in beeld
          </h2>
          <p className="text-lg font-semibold text-primary-300">
            Wat gericht anders maakt
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-2 lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:gap-4 lg:pr-8 xl:col-span-3 xl:col-start-2 xl:pr-16">
          <h3 className="gap-2 text-lg font-semibold lg:text-2xl">
            <span className="font-semibold">Wij zijn bemoeials.</span> In de
            beste zin van het woord.
          </h3>

          <p className="relative mb-2 pl-3">
            <span className="absolute left-0 top-2 h-[90%] w-[2px] bg-primary-300/50" />
            Individualisten die de handen in één slaan gericht is gebouwd op
            nieuwsgierigheid. We willen weten hoe je werkt. Waar het piept. Waar
            je kansen laat liggen. Niet om te oordelen, maar om te bouwen wat er
            écht nodig is.
          </p>
          <p className="relative pl-3">
            <span className="absolute left-0 top-2 h-[88%] w-[2px] bg-primary-300/50" />
            We komen niet binnen met een gelikt voorstel. We stellen vragen.
            Dieper dan je gewend bent. Over je processen, je klanten, je doelen.
            Want daar ligt het echte werk.
          </p>
        </div>
        <div className="col-span-6 row-start-2 flex flex-col gap-2 lg:col-span-4 lg:col-start-5 xl:col-span-3 xl:col-start-5 xl:gap-4 xl:pr-16">
          <h3 className="text-lg font-semibold lg:text-2xl">
            Developers met strategische oren
          </h3>
          <div className="flex h-full flex-col justify-between gap-2">
            <p className="relative mb-2 pl-3">
              <span className="absolute left-0 top-2 h-[88%] w-[2px] bg-primary-300/50" />
              We begrijpen code, maar ook context. We zien je website niet als
              een eindproduct, maar als een onderdeel van je bedrijfsmotor.
              Daarom bouwen we niets wat losstaat van de rest.
            </p>
            <p className="relative pl-3">
              <span className="absolute left-0 top-2 h-[88%] w-[2px] bg-primary-300/50" />
              Geen agency vibe, geen klantenshow. Gewoon samenwerken. Kort op de
              bal. Zodat je sneller kunt verbeteren, en slimmer kunt groeien.
            </p>
          </div>
        </div>
        <div className="col-span-6 row-span-1 flex flex-col justify-start lg:col-span-4 lg:col-start-9 lg:row-span-2 xl:col-start-8 xl:row-span-2">
          <Image
            className="min-h-auto max-h-fit max-w-fit"
            src={me}
            alt={"A picture of Ramsey"}
          />
          <p className="mt-2">
            Altijd met grote ogen, gericht op <br /> wat anderen missen
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
