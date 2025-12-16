import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaChartBar,
  FaJava,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiApachemaven,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiIntellijIdea,
  SiVisualStudioCode,
  SiVercel,
} from "react-icons/si";

import { BsCodeSlash } from "react-icons/bs";

const skills = [
  // Programming Languages
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-400" /> },

  // Backend & Build Tools
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Maven", icon: <SiApachemaven className="text-red-500" /> },

  // Web Development
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },

  // Databases
  { name: "MySQL", icon: <FaDatabase className="text-blue-300" /> },

  // Data & Analytics
  { name: "Pandas", icon: <FaChartBar className="text-green-400" /> },
  { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },

  // Developer & Deployment Tools
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijIdea className="text-purple-400" /> },
  { name: "VS Code", icon: <SiVisualStudioCode className="text-blue-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-gold-300 py-16 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-yellow-300"
        whileHover={{ scale: 1.05 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center shadow-md transition-all duration-300"
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
