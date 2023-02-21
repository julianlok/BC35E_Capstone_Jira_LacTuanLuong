import React from "react";
import btnGg from "../../assets/img/Google.png";
type Props = {
  text: string;
  onClick?: any;
};

const ButtonGoogle = ({
  text = "Sign up with google",
  onClick = () => {},
}: Props) => {
  return (
    <button
      className="flex items-center justify-center gap-x-3 w-full py-3 border border-strock rounded-xl text-text2 dark:text-white text-base font-semibold mb-5 "
      onClick={onClick}
    >
      <img srcSet={`${btnGg} 2x`} alt="..." />
      <span>{text}</span>
    </button>
  );
};

export default ButtonGoogle;
