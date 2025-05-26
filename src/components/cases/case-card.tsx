import BaseImage from "../base/base-image";
import highlight from "@/public/assets/case_highlight.png";
import Link from "../base/link";

const CaseCard = () => (
  <div className="case-card bg-secondary-400 rounded-lg shadow-lg relative opacity-100">
    <div className="w-full aspect-video border-b-3 border-primary-400">
      <BaseImage fill src={highlight} alt="Case Image" />
    </div>
    <div className="p-10 pt-8">
      <h2 className="text-[20px] text-white font-bold mb-4">Geautomatiseerde planning voor de bouw- en installatiebranche</h2>
      <p className="text-white">Minder bellen, facturatie to go en meer grip op hun planning</p>
    </div>
    <div className="flex justify-center group hover:w-full hover:h-full transition-all items-center absolute bottom-3 right-3">
      <Link href="/cases/1" className="block w-[26px] h-[26px] text-[10px] transition-all hover:h-full group-hover:w-full group-hover:rounded-none group-hover:translate-x-3 group-hover:translate-y-3 bg-primary-400 tracking-[0px] text-white text-center p-2 rounded-full">
        {/* TODO: ADD IN ICON */}
        {">>"}
      </Link>
    </div>
  </div>
)

export default CaseCard;