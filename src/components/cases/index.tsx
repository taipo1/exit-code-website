import Image from "next/image";
import Container from "@/components/base/container";
import SecontionTitle from "@/components/base/section-title";

const Cases = () => (
  <section className="mt-24">
    <Container>
      <div className="relative col-span-6 col-start-2 max-h-28 overflow-hidden"></div>
    </Container>
    <Container>
      <SecontionTitle
        className={"col-start-2 row-start-1 -translate-y-[84px]"}
        label="Cases"
      />
      <div className="box-s z-20 col-span-5 col-start-2 row-start-1 flex h-[230px] items-end rounded-lg bg-primary-400 p-6 shadow-[-5px_-26px_24px_-20px_rgba(0,_0,_0,_0.2)]">
        <p className="font-grotesk text-xl font-semibold text-white">
          Hoort jouw project hier ook bij? <br />
          Neem contact op
        </p>
      </div>
      <div className="col-span-6 row-start-2 flex h-[230px] overflow-hidden rounded-lg bg-dark-300">
        <div className="relative aspect-square h-full">
          <Image fill src="https://via.placeholder.com/308x230" alt="" />
        </div>
        <div className="relative flex flex-col gap-2 p-4">
          <h3 className="font-grotesk text-3xl font-bold">
            Modern E-commerce Pos Integration
          </h3>
          <p className="font-base pr-12 font-roboto">
            Elevator pitch Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Maecenas euismod vitae est sit
          </p>
          <a href="#" className="absolute bottom-2 right-4">
            Read more
          </a>
        </div>
      </div>
      <div className="col-span-6 col-start-7 row-span-2 h-[480px] rounded-lg bg-black"></div>
    </Container>
  </section>
);
export default Cases;
