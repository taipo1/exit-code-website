"use client";
import { useState, useEffect } from "react";
import Button from "../base/button";
import { postVisit } from "@/utils/post-visit";

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

  // This is only here because its the only client component in the repo
  useEffect(() => {
    const screen = `${window.innerWidth}x${window.innerHeight}`;
    postVisit(screen);
  }, []);

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
