"use client";
import { useState } from "react";
import Button from "../base/button";

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

  return (
    <>
      <Button
        onClick={handleOpen}
        type="button"
        title="Start!"
        hiarchy="primary"
        className="max-h-fit shrink"
      />
      {isOpen && (
        <>
          <button
            onClick={handleClose}
            className="absolute bottom-0 left-0 right-0 top-0 h-screen w-screen bg-black/60 backdrop-blur-[2px]"
          />
        </>
      )}
    </>
  );
};

export default ContactButton;
