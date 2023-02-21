import React from "react";
import { Props } from "./Dropdow";

const Search = ({ placeholder, ...props }: Props) => {
  return (
    <div className="p-2">
      <input
        type="text"
        placeholder={placeholder}
        className="p-4 outline-none w-full border border-gray-200 rounded"
        {...props}
      />
    </div>
  );
};

export default Search;
