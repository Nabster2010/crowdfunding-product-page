import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=" py-12 px-10 md:px-20 w-full bg-heroDesktop bg-no-repeat bg-cover h-[72vh]">
      {menuOpen && (
        <div className=" fixed z-10  top-0 left-0 right-0  h-screen  bg-black/50  "></div>
      )}
      <nav className="relative flex justify-between items-center">
        <div className="z-20">
          <img src="/images/logo.svg" alt="logo" />
        </div>

        <ul className="hidden md:flex items-center justify-end gap-8 text-white font-normal">
          <li className="relative ">
            <a
              href="#"
              className="after:scale-x-0  hover:after:scale-x-100 after:transform after:absolute after:bottom-0 after:left-0 after:contents-[''] after:border-b after:border-white after:w-full after:transition "
            >
              About
            </a>
          </li>
          <li className="relative ">
            <a
              href="#"
              className="after:scale-x-0  hover:after:scale-x-100 after:transform after:absolute after:bottom-0 after:left-0 after:contents-[''] after:border-b after:border-white after:w-full after:transition "
            >
              Discover
            </a>
          </li>
          <li className="relative ">
            <a
              href="#"
              className="after:scale-x-0  hover:after:scale-x-100 after:transform after:absolute after:bottom-0 after:left-0 after:contents-[''] after:border-b after:border-white after:w-full after:transition "
            >
              Get Started
            </a>
          </li>
        </ul>
        {/* mobile nav */}
        <span className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
              </g>
            </svg>
          ) : (
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
              </g>
            </svg>
          )}
        </span>
        <div
          className={`absolute top-20 md:hidden left-0 right-0 z-20 shadow-md bg-white w-full rounded-lg transform scale-y-0 opacity-0 transition duration-700 origin-top-right ${
            menuOpen && "scale-y-100  opacity-100 "
          }`}
        >
          <ul className=" flex flex-col items-start justify-end  text-black font-medium text-2xl divide-y">
            <li className="relative block w-full py-4 px-8 hover:text-Moderatecyan transition">
              <a href="#">About</a>
            </li>
            <li className="relative block w-full py-4 px-8 hover:text-Moderatecyan transition ">
              <a href="#">Discover</a>
            </li>
            <li className="relative block w-full py-4 px-8 hover:text-Moderatecyan transition ">
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
