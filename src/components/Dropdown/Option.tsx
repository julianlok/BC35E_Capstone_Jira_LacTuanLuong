import React from "react";
import { Props } from "./Dropdow";

const Option = ({ children, onClick, className = " " }: Props) => {
  return (
    <div
      className={`py-4 px-5 cursor-pointer flex items-center justify-between transition-all ease-linear text-sm hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] hover:border-l-4 hover:border-l-primary hover:bg-opacity-20 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Option;
