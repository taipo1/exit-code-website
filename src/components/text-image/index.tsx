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
    <div className="col-span-6 col-start-6 row-span-3 row-start-2 flex items-center">
      <div className="grid grid-cols-6 gap-5">
        <h2 className="text-stroke col-span-2 font-grotesk text-[29px] font-bold leading-8 text-transparent text-stroke-white">
          Creating High performance Applications
        </h2>
        <p className="col-span-4 self-center">
          Next.js, Vercel, and Sanity provide lightning-fast rendering,
          effortless scaling, and dynamic, real-time content managemenz. Perfect
          for your business’s growing demands!
        </p>
      </div>
    </div>
  </Container>
);

export default TextImage;
