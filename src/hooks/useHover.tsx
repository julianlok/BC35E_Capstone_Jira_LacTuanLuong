import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mouseOver : Đưa chuột vào phần tử đó.
  // mouseOut : ___________ ra __________.

  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = nodeRef.current;
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      node?.removeEventListener("mouseover", handleMouseOver);
      node?.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return { hovered, nodeRef };
}
