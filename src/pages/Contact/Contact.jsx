import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // তোমার WhatsApp ফোন নম্বর (দেশ কোডসহ, প্লাস ছাড়া)
  const whatsappNumber = "8801301608623";

  // Input change handler
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // WhatsApp message format encode
    const whatsappMessage = encodeURIComponent(
      `Hi, I am *${name}*.\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // WhatsApp URL with message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp link in new tab
    window.open(whatsappURL, "_blank");

    // Optionally reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto my-16 px-4">
      <h1
        data-aos="zoom-in-left"
        className="text-primary text-4xl custome-font uppercase font-bold text-center mb-10"
      >
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 rounded-xl shadow-xl text-white ">
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
        <form
          data-aos="zoom-in-left"
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 text-accent font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-accent focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-accent font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-accent focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-accent font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-accent focus:ring-2 focus:ring-accent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-black font-semibold py-3 px-6 rounded-full hover:bg-white transition-all duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
