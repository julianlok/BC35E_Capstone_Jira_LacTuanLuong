import React from "react";
import { Props } from "./Dropdow";

const Select = ({
  show,
  onClick,
  placeholder = "",
  className = " text-text2 bg-bgInput",
  nodeRef,
}: Props) => {
  return (
    <div
      ref={nodeRef}
      className={`flex items-center justify-between px-6 py-4  border border-strock rounded-xl text-sm font-semibold cursor-pointer select-none ${className}`}
      onClick={onClick}
    >
      <span>{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
