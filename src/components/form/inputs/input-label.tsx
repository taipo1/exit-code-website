const InputLabel = ({
  label,
  id,
  isFocused,
}: {
  label: string;
  id: string;
  isFocused?: boolean;
}) => {
  return (
    <label htmlFor={id} className="flex items-center justify-start gap-[6px]">
      <span className="font-medium">{label}</span>
      <span
        className={`-translate-y-[2px] font-bold transition-all ${!isFocused ? "text-white" : "text-primary-400"}`}
      >
        /
      </span>
    </label>
  );
};

export default InputLabel;
