"use client";

import { useForm } from "react-hook-form";
import TextInput from "./inputs/text";
import TextArea from "./inputs/text-area";
import { FieldValues } from "react-hook-form";
import Button from "../base/button";
import { useState } from "react";

export type FormData = {
  email: string;
  message: string;
  name: string;
  number: string;
  subject: string;
};

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      message: "",
      name: "",
      number: "",
      subject: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("/api/send-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.error) {
      console.log("if error ");
      setError("root", {
        message: result.error,
      });
    } else {
      setSubmitted(true);
      reset();
    }
  };

  return (
    <>
      {submitted ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-green-500">Bedankt voor je bericht!</p>
        </div>
      ) : (
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
            className="w-full"
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
