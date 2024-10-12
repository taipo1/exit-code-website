import Image from "next/image";
import Container from "@/components/base/container";

import SecontionTitle from "@/components/base/section-title";

const tools = [
  ["React", "Typescript", "Jest", "Ci/Cd", "Sanity"],
  ["RestApi", "Figma", "GraphQL", "Node.js"],
  ["Next.js", "Tailwind", "Vercel", "Vue", "Azure"],
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const translate = "-translate-y-2 -translate-y-4 -translate-y-6";

const About = () => (
  <Container className={"my-12"}>
    <div className="col-span-7 col-start-1 row-start-1 flex flex-col justify-between">
      <div className="">
        <h2 className="text-stroke max-h-fit font-grotesk text-[108px] font-bold leading-none text-transparent text-stroke-white">
          Main Title
        </h2>
        <div className="grid grid-cols-7">
          <p className="col-span-6 text-xl">
            Elevator pitch Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Maecenas euismod vitae est sit amet luctus. Phasellus
            tincidunt risus id elit elementum malesuada.
          </p>
        </div>
      </div>
      <div className="max-h-[220px] translate-y-6 pt-2">
        <SecontionTitle label="Toolbox" />
        <div className="flex -translate-y-16 flex-col gap-3">
          {tools.map((toolRow, i) => (
            <div key={i} className={`-translate-y-${i * 2} flex gap-6`}>
              {toolRow.map((tool, j) => (
                <div
                  key={j}
                  className="rounded-lg font-grotesk text-4xl font-bold text-white"
                >
                  {tool}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="relative col-span-5 col-start-8 row-span-1 row-start-1 h-[480px] w-[506px] rounded-lg bg-slate-100">
      <Image
        fill
        src="https://via.placeholder.com/506x480"
        className="z-20"
        alt=""
      />
    </div>
    <div className="col-span-1 col-start-7 row-span-1 row-start-1 flex items-center justify-end">
      <div className="relative h-[386px] w-1 rounded-full bg-primary-300" />
    </div>
  </Container>
);

export default About;
