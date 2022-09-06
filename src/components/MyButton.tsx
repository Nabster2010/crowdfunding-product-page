import React from "react";

const MyButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className=" h-full block mr-4 mt-0   md:w-auto text-white bg-Moderatecyan px-6 py-3 font-medium rounded-full hover:bg-Darkcyan transition"
    >
      {children}
    </button>
  );
};

export default MyButton;
