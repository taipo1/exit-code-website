type Props = {
  title: string;
  description: string;
  index: number;
  className?: string;
};

const JourneyCard = ({ title, description, index, className }: Props) => {
  return (
    <div
      className={`journey-card pointer-events-none z-30 col-span-3 flex h-fit grow justify-start gap-1 overflow-hidden rounded-lg bg-secondary-400 px-8 py-2 shadow-md max-sm:w-full lg:w-[308px] ${className}`}
    >
      <div className="mb-4 flex w-full flex-col items-start justify-start py-2">
        <p
          id="journey-icon"
          className="w-full text-[46px] font-medium text-white"
        >
          {index}
          <span className="text-primary-400">.</span>
        </p>
        <h3 className="w-full text-lg font-semibold text-white">{title}</h3>
        <p className="max-w-[242px] text-[16px] text-white opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default JourneyCard;
