import React from "react";
import { useField } from "formik";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent/ErrorComponent";
import { propsInput } from "../../types/global";

const Input = ({
  children,
  className = "bg-bgInput",
  ...props
}: propsInput) => {
  const [field, meta] = useField(props);
  return (
    <div className="relative ">
      <input
        className={`w-full px-6 py-4 border  rounded-xl text-sm font-medium placeholder:text-text4 dark:placeholder:text-text-2 ${className} ${
          meta.touched && meta.error
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStoke"
        } ${children ? "pr-14" : ""}`}
        {...props}
        {...field}
      />
      {meta.touched && meta.error ? (
        <span className="absolute bottom-0 left-1 translate-y-6 text-sm text-error font-medium pointer-events-none error-input">
          {meta.error}
        </span>
      ) : null}
      {children && (
        <span className=" absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
