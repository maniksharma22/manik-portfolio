import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

// Custom LeetCode Icon
const LeetCodeIcon = ({ size = 30 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 32 32" fill="currentColor">
    <path d="M20.4 7.2 18.2 9.4a7.2 7.2 0 1 1 0 10.2l-7-7a.8.8 0 0 1 0-1.2l7-7L16 2l-7 7a3.2 3.2 0 0 0 0 4.4l7 7a11.2 11.2 0 0 0 0-15.8z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-4 overflow-hidden">
      {/* Name */}
      <motion.h1
        className="text-5xl font-bold mb-4 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Manik Sharma
      </motion.h1>

      {/* Role */}
      <motion.p
        className="text-xl text-gray-400 mb-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Web Developer | Full Stack Engineer
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 mb-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="https://github.com/maniksharma22" target="_blank" className="hover:text-blue-400 transition">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/manik-sharma-10186922b" target="_blank" className="hover:text-blue-400 transition">
          <FaLinkedin size={30} />
        </a>
        <a href="https://leetcode.com/u/maniksharma22/" target="_blank" className="hover:text-yellow-400 transition">
          <LeetCodeIcon />
        </a>
      </motion.div>

      {/* Resume Button - Black & Golden */}
      <motion.a
        href="/Manik_Sharma_Resume.pdf"
        download
        className="bg-yellow-400 text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium shadow-md hover:bg-yellow-300 hover:shadow-yellow-500/40 transition-all duration-300 z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <FaDownload />
        Download Resume
      </motion.a>
    </section>
  );
}
