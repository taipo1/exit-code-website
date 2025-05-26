import Container from "@/components/base/container";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="my-12">
      <Container>
        <div className="col-span-6 flex flex-col justify-around gap-4">
          <h2 className="text-2xl font-bold leading-tight">
            Dit was mijn spreekbeurt. <br /> Zijn er nog vragen?
          </h2>
          <form>
            <div className="grid grid-cols-6 grid-rows-3 gap-5">
              <input
                type="text"
                placeholder="Naam"
                className="col-span-3 row-span-1 row-start-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="col-span-3 row-span-1 row-start-2"
              />
              <input
                type="text"
                placeholder="Onderwerp"
                className="col-span-3 row-span-1 row-start-3"
              />
              <textarea
                placeholder="Er was eens een..."
                className="col-span-3 row-span-2 max-h-[140px] min-h-[140px]"
              />
              <button className="col-span-2 col-start-5 row-span-1 rounded-lg border-[3px] border-dark-100 p-4 text-white">
                Verstuur
              </button>
            </div>
          </form>
        </div>
        <div className="relative col-span-5 col-start-7 flex items-center">
          <Image
            className="rounded-lg"
            width={505}
            height={337}
            src="https://via.placeholder.com/505x337"
            alt=""
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
