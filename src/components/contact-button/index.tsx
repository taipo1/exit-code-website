"use client";
import { useState } from "react";
import Button from "../base/button";
// import { postVisit } from "@/utils/post-visit";
import Form from "../form";
import Close from "@/svg/ close";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  //  rework: post visit
  // // This is only here because its the only client component in the repo
  // useEffect(() => {
  //   const screen = `${window.innerWidth}x${window.innerHeight}`;
  // }, []);

  return (
    <>
      <Button
        onClick={handleOpen}
        type="button"
        title="Contact"
        hiarchy="primary"
        className="max-h-fit shrink"
        ariaLabel="Open contact form"
      />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute bottom-0 left-0 right-0 top-0 z-0 h-screen w-screen bg-secondary-300/60 backdrop-blur-[2px]"
            aria-label="Close contact form"
          />
          <div className="relative z-30 mx-2 flex max-h-[85vh] flex-col gap-2 overflow-scroll rounded-lg bg-secondary-300 px-12 pb-12 pt-6 text-white transition-all">
            <Button
              hiarchy="custom"
              type="button"
              className="group absolute right-4 top-4 rounded-full p-2 transition-all duration-150 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
              onClick={handleClose}
              ariaLabel="Close contact form"
            >
              <Close className="transition-colors hover:text-primary-400 group-focus:text-primary-400" />
            </Button>
            <h2 className="text-white">Praten is gratis</h2>
            <p className="text-white">
              Als je vragen hebt, neem gerust contact op!
            </p>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactButton;
