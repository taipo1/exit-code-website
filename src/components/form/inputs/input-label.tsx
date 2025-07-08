import Image from "@/components/base/base-image";

const InputLabel = ({
  label,
  id,
  isFocused,
  gifLink,
}: {
  label: string;
  id: string;
  isFocused?: boolean;
  gifLink?: string;
}) => {
  return (
    <label
      htmlFor={id}
      className="group relative flex max-w-fit items-center justify-start gap-[6px]"
    >
      {gifLink && (
        <div className="pointer-events-none absolute left-0 top-8 aspect-video h-16 opacity-0 group-hover:opacity-100">
          <Image fill src={gifLink} alt="Boodschap" />
        </div>
      )}
      <span className="font-medium">{label}</span>
      <span
        className={`-translate-y-[2px] font-bold transition-all duration-200 ${!isFocused ? "text-white" : "text-primary-400"}`}
      >
        /
      </span>
    </label>
  );
};

export default InputLabel;
