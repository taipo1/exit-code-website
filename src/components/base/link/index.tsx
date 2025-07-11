import Link from "next/link";

type Props = {
  href: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
  linkStyle?: "primary" | "secondary" | "text";
};

const BaseLink = ({ href, label, linkStyle, className, children }: Props) => {
  const btnStyle = {
    primary: "bg-primary-300 hover:bg-primary-400 text-white py-2 px-4 rounded",
    secondary:
      "bg-secondary-300 hover:bg-secondary-400 text-white py-2 px-4 rounded",
    text: "hover:border-b-2 border-primary-400 text-xl font-medium text-white",
  };

  return (
    <Link
      href={href}
      className={`${linkStyle ? btnStyle[linkStyle] : ""} ${className}`}
    >
      {label && label}
      {children && children}
    </Link>
  );
};

export default BaseLink;
