import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent/ErrorComponent";
type Props = {
  name: string;
  checked: boolean;
  onClick: any;
  children?: JSX.Element | React.ReactNode;
};

const CheckBox = ({ checked, name, onClick = () => {}, children }: Props) => {
  return (
    <div className="flex items-start gap-x-5 my-8">
      <div
        className={` w-5 h-5 border  rounded cursor-pointer inline-flex justify-center items-center p-1 text-white ${
          checked
            ? "bg-primary border-primary"
            : "border-strockPhe dark:border-text3"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          name={name}
          onChange={onClick}
        />
        <span className={`select-none ${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && <label className="font-medium text-text3">{children}</label>}
    </div>
  );
};

export default withErrorBoundary(CheckBox, {
  FallbackComponent: ErrorComponent,
});
