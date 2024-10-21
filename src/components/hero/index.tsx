import Container from "@/components/base/container";
import LogoIcon from "@/svg/logo-icon";
const Hero = () => { 
  return (
    <Container className="">
      <div className="col-span-4 col-start-5 gap-6 flex flex-col items-center justify-center min-h-[480px]">
        <LogoIcon className="w-48 h-40" fill="fill-primary-300"/>
        <h1 className="font-grotesk w-full text-[70px] leading-none -translate-y-6 text-center">EXIT CODE 0</h1>
      </div>
    </Container>
  );
}

export default Hero