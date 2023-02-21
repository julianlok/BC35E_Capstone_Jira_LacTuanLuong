import React from "react";

type Props = {};

const ErrorComponent = (props: Props) => {
  return (
    <div className="text-red-500 bg-red-100 p-5 rounded-lg">
      Look like component is error
    </div>
  );
};

export default ErrorComponent;
