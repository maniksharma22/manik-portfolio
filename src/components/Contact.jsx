import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_kqvt9m9";
    const contactTemplateID = "template_slnje1l";
    const autoReplyTemplateID = "template_nh8xmw9";
    const userID = "DgKVwYSHGln2mdGz0";

    // Clear old message and start fast parallel submission
    setStatusMessage("");

    Promise.all([
      emailjs.sendForm(serviceID, contactTemplateID, form.current, userID),
      emailjs.sendForm(serviceID, autoReplyTemplateID, form.current, userID),
    ])
      .then(() => {
        setStatusMessage("Thanks for reaching out! I’ll get back to you soon.");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email error:", error.text);
        setStatusMessage("Something went wrong. Please try again later.");
      });
  };

  return (
    <motion.section
      id="contact"
      className="relative bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white py-20 px-6 text-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-5xl font-extrabold mb-8 text-yellow-400 drop-shadow-lg relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📬 Let's Connect
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 mb-10 max-w-xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
      >
        Feel free to drop a message—I'm always happy to connect!
      </motion.p>

      <form
        ref={form}
        className="max-w-2xl mx-auto space-y-6 relative z-10"
        onSubmit={handleSubmit}
      >
        <motion.input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
          required
        />
        <motion.textarea
          rows="5"
          name="message_content"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
          required
        ></motion.textarea>
        <motion.button
          type="submit"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-yellow-500/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {/* ✅ Clean Success or Error Message */}
        {statusMessage && (
          <p className="text-green-400 font-medium pt-4">{statusMessage}</p>
        )}
      </form>

      {/* — or connect with me here — */}
      <motion.p
        className="mt-10 text-gray-400 text-lg relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        — or connect with me here —
      </motion.p>

      <motion.div
        className="flex justify-center gap-8 text-3xl mt-12 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a
          href="https://github.com/maniksharma22"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-white hover:text-yellow-400 transition duration-300"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/manik-sharma-10186922b"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-white hover:text-yellow-400 transition duration-300"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:maniksharma0325@gmail.com"
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-white hover:text-yellow-400 transition duration-300"
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
