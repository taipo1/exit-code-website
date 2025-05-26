import Link from "next/link";

type Props = {
  href: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
  asButton?: "primary" | "secondary" | "tertiary";
};

const BaseLink = ({ href, label, asButton, className, children }: Props) => {
  const btnStyle = {
    primary: "bg-primary-300 hover:bg-primary-400 text-white py-2 px-4 rounded",
    secondary:
      "bg-secondary-300 hover:bg-secondary-400 text-white py-2 px-4 rounded",
    tertiary:
      "bg-tertiary-300 hover:bg-tertiary-400 text-white py-2 px-4 rounded",
  };
  return (
    <Link
      href={href}
      className={`${asButton ? btnStyle[asButton] : ""} ${className}`}
    >
      {label && label}
      {children && children}
    </Link>
  );
};

export default BaseLink;
