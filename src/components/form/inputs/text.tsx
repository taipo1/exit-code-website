"use client";

import { useState } from "react";
import InputLabel from "./input-label";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormData } from "..";
import InputError from "./input-error";
type Props = {
  id: keyof FormData;
  label: string;
  // placeholder?: string;
  validation?: {
    required?: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  error?: string | undefined;
  onChange: UseFormSetValue<FormData>;
  register: UseFormRegister<FormData>;
};

const TextInput = ({
  id,
  label,
  onChange,
  register,
  validation,
  error,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <InputLabel id={id} label={label} isFocused={isFocused} />
      <input
        type="text"
        id={id}
        {...register(id, validation)}
        onChange={(e) => {
          onChange(id, e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
        className={`w-full rounded-[4px] border border-white/80 bg-transparent px-4 py-2 text-white/80 transition-colors duration-200 placeholder:text-white/90 focus:border-primary-300 focus:outline-none focus:ring-0`}
      />
      {error && <InputError error={error} />}
    </div>
  );
};

export default TextInput;
