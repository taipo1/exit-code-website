type Props = {
  title: string;
  description: string;
  index: number;
  className?: string;
}

const JourneyCard = ({ title, description, index, className }: Props) => {
  return (
    <div className={`max-h-fit min-w-[308px] max-w-[308px] col-span-3 pt-6 pb-8 gap-1 flex pointer-events-none items-start justify-start px-2 bg-secondary-400 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center justify-center self-center pointer-events-none">
        <div className="w-5 h-5 rounded-md -translate-x-[16px] rotate-45 bg-white" />
      </div>
      <div className="flex flex-col w-full items-start justify-start gap-2">
        <p className="text-[46px] font-medium w-full text-white">{index}<span className="text-primary-400">.</span></p>
        <h3 className="text-lg w-full font-semibold text-white">{title}</h3>
        <p className="text-white opacity-90 max-w-[242px] text-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default JourneyCard;