const SecontionTitle = ({ label, className }) => (
  <div className={className}>
    <h2 className="text-stroke -translate-y-0 font-grotesk text-[108px] font-semibold leading-none text-transparent text-stroke-white">
      {label}
    </h2>
    <div className="h-6 -translate-y-[37px] bg-gradient-to-t from-dark-500 from-60%" />
  </div>
);

export default SecontionTitle;
