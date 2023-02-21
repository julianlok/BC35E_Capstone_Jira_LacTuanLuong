import React from "react";
import { portalType } from "../../types/global";
import Portal from "../Portal/Portal";

const ModalBase = ({ visible, children, onClose }: portalType) => {
  return (
    <>
      <Portal
        visible={visible}
        onClose={onClose}
        containerClassName="flex items-center justify-center"
      >
        {children}
      </Portal>
    </>
  );
};

export default ModalBase;
