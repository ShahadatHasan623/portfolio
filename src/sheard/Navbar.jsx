import React, { useState } from "react";
import navbarLogo from "../assets/logo.png";
import resume from '../../public/MERN STACK WEB DEVELOPER.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li>
        <a className="hover:border-b-2 hover:border-red-500 transition-all" href="#about" onClick={() => setIsOpen(false)}>About Me</a>
      </li>
      <li>
        <a className="hover:border-b-2 hover:border-red-500 transition-all" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
      </li>
      <li>
        <a className="hover:border-b-2 hover:border-red-500 transition-all" href="#education" onClick={() => setIsOpen(false)}>Education</a>
      </li>
      <li>
        <a className="hover:border-b-2 hover:border-red-500 transition-all" href="#project" onClick={() => setIsOpen(false)}>Project</a>
      </li>
      <li>
        <a className="hover:border-b-2 hover:border-red-500 transition-all" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 max-w-7xl mx-auto mt-5 px-6 py-3 rounded-xl shadow-xl backdrop-blur-xl bg-[#1a263880] border-l-2 border-blue-300 border-r-2 text-white flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img className="h-14 w-auto" src={navbarLogo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-6 font-semibold text-lg">
        {links}
      </ul>

      {/* Resume Button */}
      <div className="hidden lg:block">
        <a
          href={resume}
          download="resume"
          className="relative inline-flex items-center justify-center px-6 py-3 font-medium overflow-hidden rounded-xl group bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 text-white transition"
        >
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-700 rounded transform rotate-45 translate-x-1/2 -translate-y-1/2"></span>
          <span className="relative z-10">Resume</span>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a2638cc] backdrop-blur-md border-t border-blue-300 shadow-lg lg:hidden rounded-b-xl mt-1 z-40">
          <ul className="flex flex-col items-center gap-4 py-4 font-semibold text-white text-lg">
            {links}
            <li>
              <a
                href={resume}
                download="resume"
                className="inline-block px-8 py-3 font-medium rounded-xl bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 transition text-white"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
