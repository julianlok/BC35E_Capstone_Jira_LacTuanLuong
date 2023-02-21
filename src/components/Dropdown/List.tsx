import React from "react";
import { Props } from "./Dropdow";

const List = ({ children, show, className }: Props) => {
  return (
    <>
      {show && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden z-10 ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default List;
