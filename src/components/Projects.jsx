import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Suraksha Patrol",
      description:
        "AI-powered crime forecasting and smart policing platform using React.js, Node.js, and Blockchain.",
      link: "https://lovable.dev/projects/a3252a1a-6687-42fa-9db6-a804d54c8a83",
    },
    {
      title: "Responsive Portfolio Website",
      description:
        "Clean and responsive personal portfolio using HTML, CSS, JavaScript, SQL, and PHP.",
      link: "https://github.com/madavsharma/ResponsivePortfolioWebsite",
    },
    {
      title: "DIT Blog Website",
      description:
        "College blog platform developed with HTML, CSS, JS, SQL, PHP.",
      link: "https://github.com/madavsharma/DIT_BLOG_Website",
    },
    {
      title: "Quiz App",
      description:
        "Fully responsive quiz application with scoring and result tracking.",
      link: "https://upraised-quiz-app-fawn.vercel.app/",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-yellow-400">Projects</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-left transition-all duration-300"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 24px rgba(234,179,8,0.3)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-sm group"
              >
                <span className="group-hover:underline group-hover:scale-105 transition duration-300">
                  View Project
                </span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="transition-transform"
                >
                  →
                </motion.span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
