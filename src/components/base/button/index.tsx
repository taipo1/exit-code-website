type Props = {
  title?: string;
  onClick?(): void;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  className?: string;
  hiarchy: "primary" | "secondary" | "tertiary" | "custom";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  ariaLabel: string;
  id?: string;
};

const Button = ({
  title,
  onClick,
  disabled,
  type,
  hiarchy,
  className,
  children,
  ariaLabel,
  id,
}: Props) => {
  const btnStyle = {
    primary:
      "bg-primary-300 hover:bg-primary-400 text-white disabled:opacity-80",
    secondary:
      "bg-secondary-300 hover:bg-secondary-400 text-white disabled:bg-secondary-200",
    tertiary:
      "bg-tertiary-300 hover:bg-tertiary-400 text-white disabled:bg-tertiary-200",
    custom: "",
  };

  return (
    <button
      id={id}
      className={`${btnStyle[hiarchy]} ${hiarchy === "custom" ? "" : "rounded px-4 py-2 font-bold"} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
    >
      {children || title}
    </button>
  );
};

export default Button;
