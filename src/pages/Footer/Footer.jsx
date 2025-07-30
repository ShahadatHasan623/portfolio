import React from "react";
import footerLogo from "../../assets/Portfolio.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center rounded p-10 text-white bg-[#111827] shadow-xl">
      {/* Profile Image */}
      <img
        data-aos="fade-down"
        className="w-32 h-32 object-cover rounded-full border-4 border-primary shadow-md hover:scale-105 transition duration-300 ease-in-out"
        src={footerLogo}
        alt="Profile"
      />

      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-6 mt-4">
          <a
            data-aos="zoom-in-right"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/shahadat.shariar.2024"
            className="text-white hover:text-blue-400 transition-transform transform hover:scale-125 duration-300"
          >
            <FaFacebook size={35} />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/md-shahadat-942577305/"
            className="text-white hover:text-blue-300 transition-transform transform hover:scale-125 duration-300"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            data-aos="zoom-in-left"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ShahadatHasan623"
            className="text-white hover:text-gray-300 transition-transform transform hover:scale-125 duration-300"
          >
            <FaGithub size={35} />
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside className="mt-4 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} - All rights reserved by{" "}
          <span className="text-primary font-semibold">Shahadat Hossain</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
