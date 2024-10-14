import Image from "next/image";
import Container from "@/components/base/container";

const TextImage = () => (
  <Container className={"my-32 grid-rows-4"}>
    <div className="relative z-20 col-span-4 col-start-1 row-span-3 row-start-1 overflow-hidden rounded-lg bg-dark-300">
      <Image
        fill
        src="https://via.placeholder.com/400x300"
        className="z-20"
        alt=""
      />
    </div>
    <div className="col-span-4 col-start-2 row-span-3 row-start-2 h-[267px] rounded-lg border-[12px] border-primary-300" />
    <div className="col-span-7 col-start-6 row-span-3 row-start-2 flex items-center">
      <div className="grid grid-cols-7 gap-5">
        <h2 className="col-span-2 flex items-start font-grotesk text-[22px] font-bold leading-[34px] text-white">
        Optimimalisatie van jouw bedrijfs proces als sleutel tot succes
        </h2>
        <div className="col-span-5 self-center flex flex-col gap-4">
          <p>Jouw bedrijf verdient geen standaard website, maar een slimme, toekomstbestendige oplossing die met je meegroeit.</p> 
          <p>
            Bij Exit Code 0 bouwen we digitale producten die niet alleen vandaag presteren, maar ook klaar zijn voor de uitdagingen van morgen.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default TextImage;
