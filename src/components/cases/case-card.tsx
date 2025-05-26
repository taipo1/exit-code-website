import BaseImage from "../base/base-image";
import highlight from "@/public/assets/case_highlight.png";
import Link from "../base/link";

const CaseCard = () => (
  <div className="case-card relative rounded-lg bg-secondary-400 opacity-100 shadow-lg">
    <div className="border-b-3 aspect-video w-full border-primary-400">
      <BaseImage fill src={highlight} alt="Case Image" />
    </div>
    <div className="p-10 pt-8">
      <h2 className="mb-4 text-[20px] font-bold text-white">
        Geautomatiseerde planning voor de bouw- en installatiebranche
      </h2>
      <p className="text-white">
        Minder bellen, facturatie to go en meer grip op hun planning
      </p>
    </div>
    <div className="group absolute bottom-3 right-3 flex items-center justify-center transition-all hover:h-full hover:w-full">
      <Link
        href="/cases/1"
        className="block h-[26px] w-[26px] rounded-full bg-primary-400 p-2 text-center text-[10px] tracking-[0px] text-white transition-all hover:h-full group-hover:w-full group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rounded-none"
      >
        {/* TODO: ADD IN ICON */}
        {">>"}
      </Link>
    </div>
  </div>
);

export default CaseCard;
