import Container from "@/components/base/container";
import Image from "@/components/base/base-image";
import me from "@/public/assets/me.jpg";
import RevealWrapper from "@/components/gsap/reveal-wrapper";

const tools = [
  ["React", "Typescript", "Jest", "Ci/Cd", "Sanity"],
  ["RestApi", "Figma", "GraphQL", "Node.js"],
  ["Next.js", "Tailwind", "Vercel", "Vue", "Azure"],
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const translate = "-translate-y-2 -translate-y-4 -translate-y-6";

const About = () => {
  const enterDelay = .6
  return (
  <Container className={"my-12"}>
    <div  className="col-span-5 col-start-2 md:col-span-5 xl:col-span-4 xl:row-start-1 xl:row-span-3 flex flex-col gap-4">
        <RevealWrapper Element={"h2"} className="flex flex-col">
          <span className="-translate-x-[5px] text-stroke max-h-fit font-grotesk text-[70px] xl:text-[106px] font-bold leading-[.78] text-transparent text-stroke-white">Ramsey</span>
          <RevealWrapper Element={"p"} delay={enterDelay + .3} className="-translate-y-[2px]">Front-end developer</RevealWrapper>
        </RevealWrapper>
        <RevealWrapper Element={"div"} delay={enterDelay + .2}>
          <h3 className="font-bold">Liever lui dan moe, maar dan positief?</h3>
          <p className="">Het klinkt een beetje gek.. Maar mijn ultieme doel in elk project is om zo min mogelijk code te schrijven. Efficient werken met herbruikbaarheid als drijfveer.
          Zo kom je tot  snel en schaalbaar resultaat</p>
        </RevealWrapper>
    </div>

    <div className="col-span-4 col-start-1 max-sm:row-start-2 lg:col-span-5 row-span-3 lg:row-start-1 lg:col-start-6 lg:translate-y-16 xl:translate-y-8 xl:col-span-4 xl:col-start-8 xl:row-span-4 self-end xl:row-start-1 relative aspect-square z-10 overflow-hidden rounded-lg">
      <Image fill src={me} alt={"A picture of Ramsey"}></Image>
    </div>
    <div className="col-span-4 col-start-2 max-sm:row-start-3 lg:col-span-5 row-span-3 lg:row-start-1 z-0 lg:col-start-7 lg:translate-y-32 self-end xl:self-start xl:-translate-y-0 xl:col-span-4 xl:col-start-9 xl:row-span-4 aspect-square xl:row-start-1 border-[10px] rounded-lg border-primary-300" /> 
    <RevealWrapper Element={"div"} delay={enterDelay + .125} className="col-span-5 col-start-1 max-sm:row-start-6 md:col-span-7 md:col-start-6 md:row-start-1 xl:col-span-3 xl:col-start-5 xl:row-start-1 xl:row-span-2">
      <h3 className="font-bold">In het kort</h3>
      <p className="">31 jaar jong extrovert en een tikje eigenwijs. Mijn vriendin claimt dat ik rode energie uitstraal, ik weet niet precies wat dat betekent. Van jongs af aan creatief en ondernemend bezig en na een design opleiding mijn passie voor code ontdekt.</p>
    </RevealWrapper>
    <RevealWrapper Element={"div"} delay={enterDelay + .25} className="max-sm:row-start-7 col-span-5 col-start-2 lg:mt-2 lg:col-start-1 xl:mt-0 lg:col-span-5 xl:col-span-3 xl:row-start-3 xl:row-span-2 xl:col-start-5">
      <h3 className="font-bold">De kracht van meerdere individuen</h3>
      <p className="">Samen sta je sterker maar toch werk ik alleen. Wanneer er behoefte is aan een hogere capaciteit of een aanvullende specialicatie werk ik nauw samen met andere individuen. Zo kan er flexibel opgeschaald worden op basis van behoefte.</p>
    </RevealWrapper>
    <div className="max-sm:row-start-8 col-start-1 col-span-6 lg:col-span-5 xl:col-span-4 lg:col-start-1 flex flex-col">
      <RevealWrapper delay={.4} Element={"h2"} className="text-stroke max-h-fit font-grotesk text-6xl font-bold leading-none text-transparent text-stroke-white">Toolbox</RevealWrapper>
      <div>
      {tools.map((toolRow, i) => (
        <div key={i} className={`-translate-y-${i * 2} flex gap-2`}>
          {toolRow.map((tool, j) => (
            <RevealWrapper className="rounded-lg pt-1 font-grotesk text-xl font-bold text-white" Element={"p"} delay={enterDelay + .2 + (j * i/4  * 0.2)}
            key={j}
            >
              {tool}
            </RevealWrapper>
          ))}
        </div>
      ))}
      </div>
    </div>
  </Container>
)
};

export default About;
