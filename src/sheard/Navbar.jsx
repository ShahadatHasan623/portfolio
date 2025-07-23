import React from "react";
import navbarLogo from "../assets/logo.png";
import resume from '../../public/MERN STACK WEB DEVELOPER.pdf'
const Navbar = () => {
  const links = (
    <>
      <li>
        <a className="hover:border-b-2" href="#about">About Me</a>
      </li>
      <li>
        <a className="hover:border-b-2" href="#skills">Skills</a>
      </li>
      <li>
        <a className="hover:border-b-2" href="#education">Education</a>
      </li>
      <li>
        <a className="hover:border-b-2" href="#project">Project</a>
      </li>
      <li>
        <a className="hover:border-b-2" href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 max-w-7xl mx-auto mt-5 px-8 rounded-xl shadow-xl backdrop-blur-xl bg-[#1a263880] border-l-2 border-blue-300 border-r-2  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="flex flex-col gap-2  dropdown-content bg-base-100 text-black  z-10 mt-3 w-52 p-2 "
          >
            {links}
          </ul>
        </div>
        <img className="h-16 w-45" src={navbarLogo} alt="" />
      </div>
      <div className="navbar-center items-center hidden lg:flex">
        <ul className=" flex items-center gap-3 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href={resume}
          download='resume'
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
