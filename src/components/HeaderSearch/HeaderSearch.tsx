import React from "react";

type Props = {
  onChange?: any;
};

const HeaderSearch = ({ onChange }: Props) => {
  return (
    <div className="bg-gray-100 rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full  flex items-center">
      <div className="flex-1 px-5">
        <input
          onChange={onChange}
          type="text"
          placeholder="Search..."
          className="bg-transparent w-full text-sm text-text1 placeholder:text-text4 "
        />
      </div>
      <div className="w-[72px] rounded-full bg-secondary bg-opacity-20 text-secondary h-10 flex items-center justify-center flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderSearch;
