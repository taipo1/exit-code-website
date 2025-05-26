import Container from "../base/container";
import Image from "../base/base-image";
import me from "@/public/assets/me.jpg";

const About = () => {
  return (
    <section id="about">
      <Container className="grid-rows-auto">
        <div className="col-span-5 col-start-2 row-start-1 mb-4 flex flex-col gap-2">
          <h2 className="text-[48px] font-semibold leading-[.6]">
            Bemoeial in beeld
          </h2>
          <p className="font-semibold text-primary-300">
            Wat gericht anders maakt
          </p>
        </div>
        <div className="col-span-3 col-start-2 row-start-2 flex flex-col gap-4 pr-16">
          <h3 className="gap-2 text-2xl font-semibold">
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
        <div className="col-span-3 col-start-5 row-start-2 flex flex-col gap-4 pr-16">
          <h3 className="gap-2 text-2xl font-semibold">
            Developers met strategische oren
          </h3>
          <div className="flex h-full flex-col justify-between gap-2">
            <p className="mb-2 border-l-2 border-primary-300 border-opacity-50 pl-2">
              We begrijpen code, maar ook context. We zien je website niet als
              een eindproduct, maar als een onderdeel van je bedrijfsmotor.
              Daarom bouwen we niets wat losstaat van de rest.
            </p>
            <p className="border-l-2 border-primary-300 border-opacity-50 pl-2">
              Geen agency-vibe, geen klantenshow. Gewoon samenwerken. Kort op de
              bal. Zodat je sneller kunt verbeteren, en slimmer kunt groeien.
            </p>
          </div>
        </div>
        <div className="col-span-4 col-start-8 row-span-2 flex flex-col justify-start">
          <Image className="min-h-auto" src={me} alt={"A picture of Ramsey"} />
          <p className="-translate-y-6">
            Altijd met grote ogen. Gericht op <br /> wat anderen missen
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
