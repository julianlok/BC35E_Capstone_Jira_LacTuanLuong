import React from "react";
import { createPortal } from "react-dom";

type Props = {};

const ProjectDetailModal = (props: Props) => {
  return createPortal(
    <div className="modal"></div>,
    document.getElementById("#root") as HTMLElement
  );
};

export default ProjectDetailModal;
