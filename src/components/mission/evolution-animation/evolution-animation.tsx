import Image from "../../base/base-image";
import background from "@/public/assets/evolution-background.jpg";
import evolutionPattern from "@/public/assets/evolution-pattern.svg";
import Ape from "@/svg/ape";
import Oermens from "@/svg/oermens";
const EvolutionAnimation = () => {
  return (
    <div className="grid grow grid-cols-8 grid-rows-1 gap-2 overflow-hidden">
      <div className="relative z-10 col-span-full row-start-1 aspect-video [&>*]:overflow-hidden">
        <Image fill src={background} alt="evolution background" />
      </div>
      <div className="relative z-20 col-span-full row-start-1 aspect-video">
        <Image fill src={evolutionPattern} alt="gericht brand pattern" />
      </div>
      <div className="relative z-30 col-span-2 col-start-1 row-start-1 flex items-end justify-center pb-4">
        <Ape
          id="ape-1"
          className="translate-y-[6px] scale-[.6] lg:scale-[.8] lg:-translate-y-[13px] xl:-translate-y-[32px]"
        />
      </div>
      <div className="relative z-30 col-span-2 col-start-3 row-start-1 flex items-end justify-center pb-4">
        <Ape
          id="ape-2"
          className="translate-y-[4px] scale-[.65] lg:scale-[.9] lg:-translate-y-[16px] xl:-translate-y-[36px]"
        />
      </div>
      <div className="relative z-30 col-span-2 col-start-5 row-start-1 flex items-end justify-center pb-4">
        <Ape
          id="ape-3"
          className="scale-[.7] lg:scale-100 lg:-translate-y-[20px] xl:-translate-y-[40px]"
        />
      </div>
      <div className="relative z-30 col-span-2 col-start-7 row-start-1 flex items-end justify-center pb-4">
        <Oermens
          id="ape-4"
          className="translate-y-[15px] scale-[.7] lg:scale-100 lg:-translate-y-[11px] xl:-translate-y-[28px]"
        />
      </div>
    </div>
  );
};
export default EvolutionAnimation;
