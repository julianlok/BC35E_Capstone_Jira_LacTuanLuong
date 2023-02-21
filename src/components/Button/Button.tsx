import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: JSX.Element | React.ReactNode;
  type: string | any;
  className?: string;
  isLoading?: boolean;
  href?: string;
  kind?: string;
  onClick?: any;
};

const Button = ({
  children,
  onClick,
  className = "",
  isLoading = false,
  ...rest
}: Props) => {
  const child = !!isLoading ? (
    <div className="w-8 h-8 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  let defaultClassName =
    "text-base font-semibold rounded-xl flex items-center justify-center";

  switch (rest.kind) {
    case "primary":
      defaultClassName =
        defaultClassName +
        " bg-gradient-to-r from-[#00a7b4] to-[#a4d96c] text-white p-4 min-h-[56px]";
      break;

    case "secondary":
      defaultClassName =
        defaultClassName +
        " bg-secondary bg-opacity-20 text-secondary p-4 min-h-[56px]";
      break;

    case "cancel":
      defaultClassName =
        defaultClassName +
        " bg-stock hover:bg-gray-100 transition-all text-text3 text-base font-medium font-mono px-4 py-2 rounded-lg";
      break;

    case "success":
      defaultClassName =
        defaultClassName +
        " bg-blue-500 hover:bg-opacity-80  text-white px-4 py-2 font-mono";
      break;

    case "delete":
      defaultClassName =
        defaultClassName +
        " bg-red-500 hover:bg-opacity-80 text-white px-4 py-2 font-mono";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={defaultClassName + " " + className}>
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer ${
        defaultClassName +
        " " +
        (!!isLoading ? "opacity-50 pointer-events-none" : "")
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

export default Button;
