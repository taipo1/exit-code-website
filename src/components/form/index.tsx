"use client";

import { useForm } from "react-hook-form";
import TextInput from "./inputs/text";
import TextArea from "./inputs/text-area";
import { FieldValues } from "react-hook-form";
import Button from "../base/button";
import { useEffect, useState } from "react";

export type FormData = {
  email: string;
  message: string;
  name: string;
  number: string;
  subject: string;
};

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      message: "",
      name: "",
      number: "",
      subject: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("/api/send-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.error) {
      setError("root", {
        message: result.error,
      });
    } else {
      setSubmitted(true);
      reset();
    }
  };

  const formValues = watch();

  useEffect(() => {
    const hasEmptyField = Object.values(formValues).some(
      (value) => value === "",
    );

    if (hasEmptyField) {
      setIsReady(false);
    } else {
      setIsReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  return (
    <>
      {submitted ? (
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-2xl font-bold text-primary-400">
            We hebben je bericht
            <br /> in goede orde ontvangen
          </h3>
          <p className="text-white">
            Je hoort snel van ons. Vaak sneller dan je denkt.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-2xl font-bold text-primary-400">
            Digitaal vastgelopen?
          </h3>
          <p className="text-white">
            Stuur een bericht en we zetten het weer in beweging.
          </p>
        </div>
      )}
      {!submitted && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:w-[480px]"
        >
          <TextInput
            id="name"
            label="Name"
            validation={{
              required: "Laat even weten wie je bent",
            }}
            error={errors.name?.message || undefined}
            onChange={setValue}
            register={register}
          />
          <TextInput
            id="email"
            label="Email"
            validation={{
              required: "Email is verplicht",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Voer een geldig e-mailadres in",
              },
            }}
            error={errors.email?.message || undefined}
            onChange={setValue}
            register={register}
          />
          <TextInput
            id="number"
            label="Telefoon"
            validation={{
              required: "Bellen is sneller",
            }}
            error={errors.number?.message || undefined}
            onChange={setValue}
            register={register}
          />
          <TextInput
            id="subject"
            label="Onderwerp"
            validation={{
              required: "Onderwerp is verplicht",
            }}
            error={errors.subject?.message || undefined}
            onChange={setValue}
            register={register}
          />
          <TextArea
            id="message"
            label="Boodschap"
            onChange={setValue}
            register={register}
          />
          <Button
            hiarchy="primary"
            title="Verstuur"
            type="submit"
            className={`w-full ${isReady ? "" : "opacity-50"} transition-opacity duration-200`}
            ariaLabel="Verstuur formulier"
            disabled={isSubmitting}
          />

          {errors.root && (
            <p className="mt-2 text-sm text-red-200">
              {errors.root.message ||
                "Er ging iets mis, probeer het later opnieuw."}
            </p>
          )}
        </form>
      )}
    </>
  );
};

export default Form;
