import React from "react";
import { useField } from "formik";
import { propsInput } from "../../types/global";

const Textarea = ({ className, ...props }: propsInput) => {
  const [field] = useField(props);

  return (
    <>
      <textarea
        className={`w-full border border-gray-400 transition-all overflow-hidden resize-none rounded-lg px-2 pt-1 placeholder:text-sm focus:outline-none focus:border-blue-400 ${className}`}
        {...field}
        {...props}
      ></textarea>
    </>
  );
};

export default Textarea;
