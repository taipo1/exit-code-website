"use client";

import Button from "@/components/base/button";
import Close from "@/svg/ close";
import React, { createContext, useContext, useState, ReactNode } from "react";
import Form from "@/components/form";

type ContactFormContextProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ContactFormContext = createContext<ContactFormContextProps | undefined>(
  undefined,
);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};

type ContactFormProviderProps = {
  children: ReactNode;
};

export const ContactFormProvider: React.FC<ContactFormProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute bottom-0 left-0 right-0 top-0 z-0 h-screen w-screen bg-secondary-300/60 backdrop-blur-[2px]"
            aria-label="Close contact form"
          />
          <div className="relative z-30 mx-2 flex max-h-[85vh] flex-col gap-2 overflow-scroll rounded-lg bg-secondary-300 px-12 pb-12 pt-6 text-white transition-all">
            <Button
              hiarchy="custom"
              type="button"
              className="group absolute right-4 top-4 rounded-full p-2 transition-all duration-150 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
              onClick={closeModal}
              ariaLabel="Close contact form"
            >
              <Close className="transition-colors hover:text-primary-400 group-focus:text-primary-400" />
            </Button>
            <Form />
          </div>
        </div>
      )}
    </ContactFormContext.Provider>
  );
};
