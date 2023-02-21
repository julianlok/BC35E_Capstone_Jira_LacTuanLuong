import React from "react";
import Button from "../../Button/Button";

type Props = {
  success: string;
  cancel: string;
  className?: string;
};

const FormConfirm = ({ success, cancel, className = "justify-end" }: Props) => {
  return (
    <div className={`flex items-center  gap-x-3 ${className}`}>
      <Button type="button" kind="cancel">
        {cancel}
      </Button>
      <Button type="button" kind="success">
        {success}
      </Button>
    </div>
  );
};

export default FormConfirm;
