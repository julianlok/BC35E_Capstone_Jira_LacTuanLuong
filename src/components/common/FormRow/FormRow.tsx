import React from "react";

type Props = {
  children: JSX.Element | React.ReactNode;
  className?: string;
};

const FormRow = ({ children, className = "grid-cols-2" }: Props) => {
  return (
    <div className={`grid gap-x-[45px] mb-1 ${className}`}>{children}</div>
  );
};

export default FormRow;
