type SecontionTitleProps = {
  label: string;
  className?: string;
};

const SecontionTitle = ({ label, className }: SecontionTitleProps) => (
  <div className={`${className} min-w-fit`}>
    <h2 className="text-stroke font-grotesk text-stroke-white min-w-fit -translate-y-0 text-[108px] font-semibold leading-none text-transparent">
      {label}
    </h2>
    <div className="h-6 w-full -translate-y-[37px] bg-gradient-to-t from-dark-500 from-60%" />
  </div>
);

export default SecontionTitle;
