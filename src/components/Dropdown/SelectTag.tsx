import React from "react";
import { Props } from "./Dropdow";

const SelectTag = ({
  show,
  onClick,
  placeholder = "",
  className = "max-w-[460px] text-text5 bg-[#F4F5F6]",
  nodeRef,
  data = [],
  searchFilter,
  removeUser,
  clearListUser,
}: Props) => {
  const renderIcon = () => {
    if (data.length === 0) {
      return show ? (
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
      );
    } else {
      return (
        <span
          className="hover:text-error"
          onClick={() => {
            clearListUser();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </span>
      );
    }
  };

  return (
    <div
      ref={nodeRef}
      className={`flex items-center justify-between gap-x-5 px-6 py-4 border rounded-xl text-sm cursor-pointer select-none font-semibold ${className}`}
      onClick={onClick}
    >
      <div>
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 ">
          {data?.map(({ userId, name }) => (
            <li
              key={userId + name}
              className="flex items-center justify-between gap-x-2 p-1 border border-strock bg-white rounded-lg"
            >
              <span className="text-text1 ">{name}</span>
              <span
                className="flex items-center justify-center w-4 h-4 border rounded-full hover:text-error hover:border-error transition-all"
                onClick={() => {
                  removeUser(userId);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </span>
            </li>
          ))}

          <li>
            <input
              className="text-text1 bg-transparent w-[150px] max-w-[150px] placeholder:text-text2"
              onChange={searchFilter}
              type="text"
              placeholder={placeholder}
            />
          </li>
        </ul>
      </div>
      <span>{renderIcon()}</span>
    </div>
  );
};

export default SelectTag;
