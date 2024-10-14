import Image from "next/image";
import Container from "@/components/base/container";
import SecontionTitle from "@/components/base/section-title";
import thumbnail from "@/public/assets/case_thumbnail.jpg"
import caseHighlight from "@/public/assets/case_highlight.png"

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
      <div className="box-s z-20 col-span-5 col-start-2 row-start-1 flex h-[230px] items-end rounded-lg bg-primary-400 p-6">
        <p className="font-grotesk text-xl font-semibold text-white">
          Hoort jouw project hier ook bij? <br />
          Neem contact op
        </p>
      </div>
      <div className="col-span-6 grid-rows-1 grid grid-cols-6 row-start-2 h-[230px] overflow-hidden rounded-lg bg-dark-300">
        <div className="relative col-start-1  row-start-1 col-span-3 min-w-[308px] h-full">
          <Image fill src={thumbnail} alt="" />
        </div>
        <div className="relative col-span-3 row-start-1 col-start-4 flex flex-col gap-2 p-4">
          <h3 className="font-grotesk text-2xl font-bold">
            Modern E-commerce Pos Integration
          </h3>
          <p className="font-base pr-12 font-roboto">
            Elevator pitch Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Maecenas euismod vitae est sit
          </p>
        </div>
      </div>
      <div className="relative col-span-6 col-start-7 row-span-2 h-[480px] rounded-lg overflow-hidden bg-black">
        <Image fill src={caseHighlight} alt="caseHighlight" />
      </div>
    </Container>
  </section>
);
export default Cases;
