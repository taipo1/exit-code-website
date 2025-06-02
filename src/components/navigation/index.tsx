import Container from "@/components/base/container";
import LogoIcon from "@/svg/logo-icon";
const Navigation = () => {
  return (
    <div className="sticky top-0 z-30">
      <nav className="relative z-50 bg-gradient-to-b from-white to-white/90 pt-2 backdrop-blur">
        <Container>
          <div className="col-span-2 col-start-2">
            <a
              href="#"
              className="relative w-1/2 max-w-[130px] text-2xl font-bold"
            >
              <LogoIcon className="max-h-[60px] max-w-[130px]" />
            </a>
          </div>
          <ul className="col-span-5 flex items-center space-x-4 uppercase">
            <li>
              <a className="font-dmSans text-[16px]" href="/home">
                Home
              </a>
            </li>
            <li>
              <a className="font-dmSans text-[16px]" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="font-dmSans text-[16px]" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default Navigation;
