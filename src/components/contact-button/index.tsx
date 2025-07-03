"use client";
import { useState, useEffect } from "react";
import Button from "../base/button";
import { postVisit } from "@/utils/post-visit";
import Form from "../form";

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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute bottom-0 left-0 right-0 top-0 z-0 h-screen w-screen bg-secondary-300/60 backdrop-blur-[2px]"
          />
          <div className="relative z-30 rounded-lg bg-secondary-300 p-12 text-white">
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
