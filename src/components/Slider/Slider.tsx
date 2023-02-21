import React from "react";
import { useField } from "formik";
export type RangeType = {
  id?: string;
  name: string;
  type?: string;
  min: number;
  max: number;
  defaultValue: number;
};

const Slider = ({ min, max, ...props }: RangeType) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex-col items-center justify-center h-full">
      <div className="flex items-center gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>

        <input
          className="w-full  bg-[#f4f5f6]"
          type="range"
          {...props}
          {...field}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-[#B1B5C3]">{min}h logged</span>
        <span className="font-medium text-[#B1B5C3]">{max}h remaining</span>
      </div>
    </div>
  );
};

export default Slider;
