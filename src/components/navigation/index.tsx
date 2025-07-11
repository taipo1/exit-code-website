import Container from "@/components/base/container";
import LogoIcon from "@/svg/logo-icon";
import ContactButton from "../contact-button";
const Navigation = () => {
  return (
    <div className="sticky top-0 z-30">
      <nav className="relative z-50 bg-gradient-to-b pt-2 max-xl:bg-white">
        <Container>
          <div className="col-span-1 col-start-1">
            <a href="/" className="relative text-2xl font-bold">
              <LogoIcon className="max-h-[64px] max-w-[110px] md:max-w-[100px]" />
            </a>
          </div>
          <div className="col-span-2 col-start-11 flex shrink items-center justify-end">
            <ContactButton />
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navigation;
