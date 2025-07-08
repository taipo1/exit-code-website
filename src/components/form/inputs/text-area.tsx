"use client";

import { useState } from "react";
import InputLabel from "./input-label";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormData } from "..";
type Props = {
  id: keyof FormData;
  label: string;
  onChange: UseFormSetValue<FormData>;
  register: UseFormRegister<FormData>;
};

const TextArea = ({ id, label, onChange, register }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <InputLabel
        gifLink={
          "https://media1.tenor.com/m/GFVmeemwP9UAAAAd/boodschap-3fm.gif"
        }
        id={id}
        label={label}
        isFocused={isFocused}
      />
      <textarea
        id={id}
        {...register(id, { required: "Met wie?!?" })}
        placeholder=""
        onChange={(e) => onChange(id, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`min-h-[150px] w-full rounded-[4px] border border-white bg-transparent px-4 py-2 text-white transition-colors duration-200 placeholder:text-white focus:border-primary-400 focus:outline-none focus:ring-0`}
      />
    </div>
  );
};

export default TextArea;
