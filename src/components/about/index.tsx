import Container from "../base/container";
import Image from "../base/base-image";
import me from "@/public/assets/me.jpg";

const About = () => {
  return (
    <section id="about">
      <Container className="grid-rows-auto gap-4">
        <div className="col-span-6 mb-4 flex flex-col gap-2 xl:col-span-5 xl:col-start-2 xl:row-start-1">
          <h2 className="text-[32px] font-semibold leading-[.9] md:text-[48px] md:leading-[.8]">
            Bemoeial in beeld
          </h2>
          <p className="font-semibold text-primary-300">
            Wat gericht anders maakt
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-2 md:gap-4 lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:pr-8 xl:col-span-3 xl:col-start-2 xl:pr-16">
          <h3 className="gap-2 text-lg font-semibold md:text-2xl">
            <span className="font-semibold">Wij zijn bemoeials.</span> In de
            beste zin van het woord.
          </h3>

          <p className="mb-2 border-l-2 border-primary-300 border-opacity-50 pl-2">
            individualisten die de handen in een slaan gericht is gebouwd op
            nieuwsgierigheid. We willen weten hoe je werkt. Waar het piept. Waar
            je kansen laat liggen. Niet om te oordelen, maar om te bouwen wat er
            écht nodig is.
          </p>
          <p className="border-l-2 border-primary-300 border-opacity-50 pl-2">
            We komen niet binnen met een gelikt voorstel. We stellen vragen.
            Dieper dan je gewend bent. Over je processen, je klanten, je doelen.
            Want daar ligt het echte werk.
          </p>
        </div>
        <div className="col-span-6 row-start-2 flex flex-col gap-2 lg:col-span-4 lg:col-start-5 xl:col-span-3 xl:col-start-5 xl:gap-4 xl:pr-16">
          <h3 className="text-lg font-semibold md:text-2xl">
            Developers met strategische oren
          </h3>
          <div className="flex h-full flex-col justify-between gap-2">
            <p className="mb-2 border-l-2 border-primary-300 border-opacity-50 pl-2">
              We begrijpen code, maar ook context. We zien je website niet als
              een eindproduct, maar als een onderdeel van je bedrijfsmotor.
              Daarom bouwen we niets wat losstaat van de rest.
            </p>
            <p className="border-l-2 border-primary-300 border-opacity-50 pl-2">
              Geen agency vibe, geen klantenshow. Gewoon samenwerken. Kort op de
              bal. Zodat je sneller kunt verbeteren, en slimmer kunt groeien.
            </p>
          </div>
        </div>
        <div className="col-span-6 row-span-1 flex flex-col justify-start md:col-span-4 lg:col-span-4 lg:col-start-9 lg:row-span-2 xl:col-start-8 xl:row-span-2">
          <Image
            className="min-h-auto max-h-fit max-w-fit"
            src={me}
            alt={"A picture of Ramsey"}
          />
          <p className="mt-2">
            Altijd met grote ogen. Gericht op <br /> wat anderen missen
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
