import Container from "@/components/base/container";
import LogoIcon from "@/svg/logo-icon";
const Navigation = () => {
  return (
    <div className="sticky top-0 z-30">
      <nav className="relative z-50 border-b-2 border-primary-300 bg-white">
        <Container>
          <div className="col-span-2 col-start-2">
            <a
              href="#"
              className="relative w-1/2 max-w-[130px] text-2xl font-bold"
            >
              <LogoIcon className="max-w-[130px]" />
            </a>
          </div>
          <ul className="col-span-5 flex space-x-4">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default Navigation;
