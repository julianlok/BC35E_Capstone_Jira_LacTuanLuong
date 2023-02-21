import React from "react";
import { createPortal } from "react-dom";
import { Coords } from "../../types/global";

type Props = {
  children?: React.ReactNode;
  coords: Coords;
};

const TooltipContent = ({ children, coords }: Props) => {
  return createPortal(
    <p
      className="p-3 bg-text1 text-white rounded-xl inline-block absolute -translate-y-full max-w-[200px] "
      style={{
        top: coords.x,
        left: coords.y - coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("#comment") as HTMLElement
  );
};

export default TooltipContent;
