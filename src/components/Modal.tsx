import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ show = true, onClose, title = "title", children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div
      onClick={onClose}
      className="fixed modal top-0 left-0 bottom-0 w-full flex items-center justify-center z-50 h-full  bg-black/30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white w-[90%] md:w-[60%] h-[500px] rounded-lg p-8 shadow-md overflow-y-auto scroll-smooth modal"
      >
        <div className="flex justify-end  ">
          <a
            href="#"
            className="text-xl font-bold text-gray-600"
            onClick={handleCloseClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
        </div>
        {title && <h1 className="text-xl font-extrabold">{title}</h1>}
        <div className="pt-2">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("myportal"));
  } else {
    return null;
  }
}

export default Modal;
