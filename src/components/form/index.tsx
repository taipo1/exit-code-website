"use client";

import { useForm } from "react-hook-form";
import TextInput from "./inputs/text";
import TextArea from "./inputs/text-area";
import { FieldValues } from "react-hook-form";

export type FormData = {
  email: string;
  message: string;
  name: string;
  number: string;
  subject: string;
};

const Form = () => {
  const { handleSubmit, register, setValue } = useForm<FormData>({
    defaultValues: {
      email: "",
      message: "",
      name: "",
      number: "",
      subject: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    console.log("Form submitted:", data);
    await fetch("/api/send-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        id="name"
        label="Name"
        onChange={setValue}
        register={register}
      />
      <TextInput
        id="email"
        label="Email"
        onChange={setValue}
        register={register}
      />
      <TextInput
        id="number"
        label="Telefoon"
        onChange={setValue}
        register={register}
      />
      <TextInput
        id="subject"
        label="Onderwerp"
        onChange={setValue}
        register={register}
      />
      <TextArea
        id="message"
        label="Message"
        onChange={setValue}
        register={register}
      />
      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 w-full rounded-[4px] px-4 py-2 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
