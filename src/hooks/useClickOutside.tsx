import { useState, useRef, useEffect } from "react";
export default function useClickOutside() {
  const [show, setShow] = useState<boolean>(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(this: Document, ev: MouseEvent) {
      if (nodeRef.current && !nodeRef.current.contains(ev.target as Node)) {
        setShow(false);
      }
    }

    document.addEventListener("click", handleOutside);

    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, []);

  return { show, setShow, nodeRef };
}
