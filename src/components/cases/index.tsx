import Container from "@/components/base/container";
import CaseCard from "./case-card";
import CasesAnimation from "./cases-animation";

const Cases = () => (
  <section id="cases" className="-translate-y-16">
    <CasesAnimation />
    <Container>
      <div className="col-span-4 col-start-3 flex flex-col gap-4">
        <h2 className="col-span-4 col-start-3 -translate-y-2 pr-8 text-[44px] font-medium leading-[1.1]">
          Hoe anderen{" "}
          <span className="font-semibold text-primary-300">gericht</span> te
          werk gaan.
        </h2>
        <CaseCard />
      </div>
      <div className="col-span-4 col-start-7 flex flex-col gap-4">
        <CaseCard />
        <div className="case-cta flex flex-col">
          <h3 className="text-2xl font-semibold">
            Wil jij ook oogjes op je gericht?
          </h3>
          <p>Kijk waar het schuurt en begin te polijsten</p>
        </div>
      </div>
    </Container>
  </section>
);
export default Cases;
