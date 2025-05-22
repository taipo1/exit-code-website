import Container from "@/components/base/container";
const Navigation = () => {
  return (
    <>
    <div className="sticky top-0 z-30">
      <nav className="relative bg-dark-400 border-b-2 border-primary-300 z-50">
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
    </>
  )
}

export default Navigation;