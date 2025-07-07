import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPhp,
  FaDatabase,
  FaChartBar,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";

const skills = [
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "DSA", icon: <BsCodeSlash className="text-pink-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
  { name: "MySQL", icon: <FaDatabase className="text-gray-400" /> },
  { name: "Canva", icon: <SiCanva className="text-indigo-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Pandas", icon: <FaChartBar className="text-green-400" /> },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-gold-300 py-16 px-6 text-center bg-[url('/bg-texture.png')] bg-cover bg-fixed"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-yellow-300 hover:text-yellow-400 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-yellow-400/30 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 24px rgba(234, 179, 8, 0.5)",
            }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium text-yellow-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
