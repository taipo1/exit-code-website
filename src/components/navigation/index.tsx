import Image from "next/image";
import Container from "@/components/base/container";
import headerAura from "@/public/assets/header-aura.png";
const Navigation = () => {
  return (
    <div className="sticky top-0">
    <Container className="relative overflow-visible">
      <div className="absolute -top-16 overflow-visible right-0">
        <Image className="z-0" src={headerAura} alt="headerAuro" width={700} height={550} />
      </div>
    </Container>
    <nav className="relative bg-dark-400 border-b-2 border-primary-300 z-80">
      <Container>
        <ul>
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
  )
}

export default Navigation;