import Container from "@/components/base/container";
import LogoIcon from "@/icons/logo-icon";

const CtaExplainer = () => (
  <Container className="my-24">
    <div className="col-span-5 col-start-2 flex flex-col items-start justify-center gap-1">
      <h2 className="font-grotesk text-[28px] font-bold">
        Lets build something great together.
      </h2>
      <p className="text-[17px]">
        Be it a new website for your endeavors. A webshop to increase sales or
        are you in need for extra capacity for your scrum team.
      </p>
    </div>
    <div className="relative col-span-4 col-start-8 flex h-[208px] rounded-lg bg-primary-400">
      <p className="ml-7 mt-6 max-w-fit font-grotesk text-[40px] font-bold leading-10 text-white">
        Increase your capacity with flexible hours!
      </p>
      <LogoIcon className={"absolute bottom-4 right-4 stroke-white"} />
    </div>
  </Container>
);

export default CtaExplainer;
