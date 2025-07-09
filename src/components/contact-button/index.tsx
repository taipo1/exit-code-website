"use client";
import Button from "../base/button";
import { useContactForm } from "@/context/contact-form-provider";

const ContactButton = ({
  label,
  id,
  className,
}: {
  label?: string;
  id?: string;
  className?: string;
}) => {
  const { openModal } = useContactForm();
  //  rework: post visit
  // // This is only here because its the only client component in the repo
  // useEffect(() => {
  //   const screen = `${window.innerWidth}x${window.innerHeight}`;
  // }, []);

  return (
    <Button
      id={id}
      onClick={openModal}
      type="button"
      title={label || "Contact"}
      hiarchy="primary"
      className={`max-h-fit shrink ${className}`}
      ariaLabel="Open contact form"
    />
  );
};

export default ContactButton;
