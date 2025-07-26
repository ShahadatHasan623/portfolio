import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "8801301608623";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hi, I am *${name}*.\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto my-20 px-4">
      <h1
        data-aos="fade-down"
        className="text-primary text-4xl custome-font uppercase font-bold text-center mb-12 tracking-wide"
      >
        Contact
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
      >
        {/* Left - Info */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center space-y-6 text-white text-base"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent text-xl" />
            <span className="break-words">shahadathasan743599@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-accent text-xl" />
            <span>+8801301608623</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-accent text-xl" />
            <span>+8801301608623</span>
          </div>
        </div>

        {/* Right - Form */}
        <form
          data-aos="fade-left"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-accent font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
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
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
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
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-accent to-primary text-black font-semibold transition-all duration-300 hover:brightness-110 hover:scale-[1.01] shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
