import React, { useEffect, useState } from "react";

type Props = {
  duration: number;
  colors?: string;
  text1: string;
  text2?: string;
};

const Loading = ({ duration, colors, text1, text2 }: Props) => {
  let [on, setOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOn(!on);
    }, duration || 1000);
  }, [on]);

  return (
    <div
      className={`w-10 p-2 m-2 border-0px rounded duration-300 text-center relative ${
        on ? `${colors || "bg-blue-300"} -top-5` : "bg-red-300 top-0"
      }`}
    >
      {on ? text2 || ":)" : text1}
    </div>
  );
};

export default Loading;
