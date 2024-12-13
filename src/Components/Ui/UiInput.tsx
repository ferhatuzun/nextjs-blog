"use client";
import { useEffect, useState } from "react";

type propsType = {
  placeholder?: string;
  value: (value: string) => void;
  isFinish:boolean
};

const UiInput = ({ placeholder, value,isFinish }: propsType) => {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    setInputValue("")
    value("")
  }, [isFinish])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value; 
    setInputValue(newValue);
    value(newValue)
  };
  

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-lg bg-secondary text-white p-4 pr-9 outline-none w-full placeholder:text-white"
      required
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default UiInput;


