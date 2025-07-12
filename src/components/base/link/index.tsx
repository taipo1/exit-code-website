import Link from "next/link";

type Props = {
  href: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
  linkStyle?: "primary" | "secondary" | "text";
  target?: "_blank";
};

const BaseLink = ({
  href,
  label,
  linkStyle,
  className,
  children,
  target,
}: Props) => {
  const btnStyle = {
    primary: "bg-primary-300 hover:bg-primary-400 text-white py-2 px-4 rounded",
    secondary:
      "bg-secondary-300 hover:bg-secondary-400 text-white py-2 px-4 rounded",
    text: "border-b-2 border-transparent hover:border-primary-400 text-lg max-w-fit text-white",
  };

  return (
    <Link
      href={href}
      className={`${linkStyle ? btnStyle[linkStyle] : ""} ${className}`}
      target={target}
    >
      {label && label}
      {children && children}
    </Link>
  );
};

export default BaseLink;
