import React from "react";
import { Link, Outlet } from "react-router";
import navbarLogo from "../../assets/logo.png";

const Details = () => {
  return (
    <div>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50">
        <div className="navbar max-w-7xl mx-auto mt-5 px-8 rounded-xl shadow-xl backdrop-blur-xl bg-[#1a263880] border-l-2 border-blue-300 border-r-2 text-white">
          <Link to="/" className="navbar-start">
            <img className="h-16 w-45" src={navbarLogo} alt="Logo" />
          </Link>

          <div className="navbar-end">
            <a
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Hire Me
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Content below navbar */}
      <Outlet />
    </div>
  );
};

export default Details;
