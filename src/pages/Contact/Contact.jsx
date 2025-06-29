import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto my-16 px-4">
      <h1 data-aos="zoom-in-left" className="text-primary text-4xl custome-font uppercase font-bold text-center mb-10">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  p-8 rounded-xl shadow-xl text-white">
        {/* Left Side - Contact Info */}
        <div data-aos="zoom-in-right" className="flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent text-2xl" />
            <span>shahadathasan743599@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-accent text-2xl" />
            <span>+8801301608623</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-accent text-2xl" />
            <span>+8801301608623</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form data-aos="zoom-in-left" className="space-y-6">
          <div>
            <label className="block mb-2 text-accent font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-accent font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-accent font-semibold">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-accent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-black font-semibold py-3 px-6 rounded-full hover:bg-white transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
