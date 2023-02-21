import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { portalType } from "../../types/global";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

const portalWrapperElm = createPortalWrapper();

const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose,
  visible = false,
  children,
}: portalType) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);

  const renderContent = (
    <div
      className={`fixed inset-0 z-[99]  ${
        visible ? "" : "opacity-0 invisible"
      } ${containerClassName}`}
      style={containerStyle}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-30 "
        onClick={onClose}
      ></div>
      <div
        className={`content relative z-10 ${bodyClassName}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

export default Portal;
