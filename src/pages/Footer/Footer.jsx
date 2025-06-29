import React from "react";
import footerLogo from "../../assets/Portfolio.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center   rounded p-10 text-white">
      <img
        data-aos="fade-down"
        className="w-30 h-30 rounded-full border-4 border-primary"
        src={footerLogo}
        alt=""
      />
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            data-aos="zoom-in-right"
            target="_blank"
            href="https://www.facebook.com/shahadat.shariar.2024"
            className="text-white"
          >
            <FaFacebook size={35} />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            href="https://www.linkedin.com/in/m-k-shahadat-mohammad-942577305/"
            className="text-white"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            data-aos="zoom-in-left"
            target="_blank"
            href="https://github.com/ShahadatHasan623"
            className="text-white"
          >
            <FaGithub size={35} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Shahadat hossain
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
