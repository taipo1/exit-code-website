type Props = {
  title: string;
  onClick?(): void;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  className?: string;
  hiarchy: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
};

const Button = ({
  title,
  onClick,
  disabled,
  type,
  hiarchy,
  className,
}: Props) => {
  const btnStyle = {
    primary:
      "bg-primary-300 hover:bg-primary-400 text-white disabled:opacity-80",
    secondary:
      "bg-secondary-300 hover:bg-secondary-400 text-white disabled:bg-secondary-200",
    tertiary:
      "bg-tertiary-300 hover:bg-tertiary-400 text-white disabled:bg-tertiary-200",
  };

  return (
    <button
      className={`${btnStyle[hiarchy]} rounded px-4 py-2 font-bold ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
