import React, { memo } from "react";
import { Props } from "./Dropdow";

const OptionTag = ({
  children,
  onClick,
  className = " hover:bg-opacity-20 ",
}: Props) => {
  return (
    <div
      className={`py-4 px-5 cursor-pointer flex items-center justify-between transition-all ease-linear text-sm font-medium select-none hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default memo(OptionTag);
