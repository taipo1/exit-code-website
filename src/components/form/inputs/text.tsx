"use client";

import { useState } from "react";
import InputLabel from "./input-label";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormData } from "..";
type Props = {
  id: keyof FormData;
  label: string;
  // placeholder?: string;
  onChange: UseFormSetValue<FormData>;
  register: UseFormRegister<FormData>;
};

const TextInput = ({ id, label, onChange, register }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <InputLabel id={id} label={label} isFocused={isFocused} />
      <input
        type="text"
        id={id}
        {...register(id, { required: "Met wie?!?" })}
        onChange={(e) => onChange(id, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full rounded-[4px] border ${isFocused ? "border-primary-400" : "border-white"} s bg-transparent px-4 py-2 text-white transition-colors duration-200 placeholder:text-white focus:border-primary-300 focus:outline-none focus:ring-0`}
      />
    </div>
  );
};

export default TextInput;
