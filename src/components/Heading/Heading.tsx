import React from "react";
import { Link } from "react-router-dom";
import { Props } from "../Dropdown/Dropdow";
import HeaderSearch from "../HeaderSearch/HeaderSearch";

const Heading = ({ children, className }: Props) => {
  return (
    <div className="mb-2 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
      <div className="w-2/6">
        <HeaderSearch></HeaderSearch>
      </div>
      <div className="flex items-start gap-x-6">
        <Link
          to="/add-project"
          className="flex items-center justify-center rounded-full w-14 h-14 text-white bg-secondary bg-opacity-60 "
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
        <div className="flex-1">
          <h1 className="text-text1 font-semibold text-[22px] mb-2">
            Create Your Project
          </h1>
          <p className="text-text3 text-sm mb-2">
            Jump right into our editor and create your first project!
          </p>
          <Link to="#" className="text-sm text-primary ">
            Need any help? Learn More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
