import React from "react";
import { Props } from "./Dropdow";

const ListTag = ({ children, show, className }: Props) => {
  return (
    <>
      {show && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow rounded-lg overflow-x-hidden overflow-y-auto scrollbar-none max-h-[180px] h-[180px] z-10 ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default ListTag;
