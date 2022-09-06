import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function SuccessModal({ show = true, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div
      onClick={onClose}
      className="fixed modal top-0 left-0 bottom-0 w-full flex items-center justify-center z-50 h-full  bg-black/30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white w-[90%] md:w-[35%] h-[400px] rounded-lg p-8 shadow-md overflow-y-auto scroll-smooth modal"
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("success-modal"));
  } else {
    return null;
  }
}

export default SuccessModal;
