import { motion } from "framer-motion";

export default function About() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="about"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 text-center bg-[url('/bg-texture.png')] bg-cover bg-fixed"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-yellow-300 hover:text-yellow-400 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed text-justify"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        I'm a recent 2025 Computer Engineering graduate with an 8.01 CGPA and a deep passion for building impactful solutions through technology. I enjoy creating clean, responsive, and functional web applications using HTML, CSS, JavaScript, React.js, PHP, and MySQL.
        <br /><br />
        Through internships and multiple hands-on projects, I’ve developed strong full-stack development skills and love turning ideas into real-world applications.
      </motion.p>

      <motion.button
        onClick={scrollToProjects}
        className="mt-10 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-yellow-500/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Projects →
      </motion.button>
    </motion.section>
  );
}
