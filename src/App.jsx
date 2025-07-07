import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const getYOffset = () => {
    const width = window.innerWidth;
    return width < 768 ? -60 : -80;
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = getYOffset();
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      const sections = menuItems.map((item) => item.href.slice(1));
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 150 && bottom > 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-black text-white scroll-smooth">
      {/* Navbar */}
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isSticky ? "bg-black bg-opacity-90 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between md:justify-center items-center px-6 py-4">
          {/* Mobile Menu Button (Right side, slightly down) */}
          <motion.button
            className="text-white text-3xl md:hidden focus:outline-none absolute right-6 top-5"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 items-center">
            {menuItems.map((item) => (
              <motion.div
                key={item.label}
                onClick={() => handleScrollTo(item.href.slice(1))}
                className={`relative px-2 py-1 text-lg transition duration-300 cursor-pointer hover:text-yellow-400 ${
                  activeSection === item.href.slice(1)
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
                title={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-yellow-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.href.slice(1) ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.nav
            className="flex flex-col md:hidden bg-black px-4 pb-4 space-y-4 pt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item) => (
              <span
                key={item.label}
                onClick={() => {
                  handleScrollTo(item.href.slice(1));
                  setMenuOpen(false);
                }}
                className="text-white text-lg hover:text-yellow-400 transition cursor-pointer"
              >
                {item.label}
              </span>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Page Sections */}
      <main className="pt-20">
        <motion.section id="home"><Hero /></motion.section>
        <motion.section id="about"><About /></motion.section>
        <motion.section id="skills"><Skills /></motion.section>
        <motion.section id="projects"><Projects /></motion.section>
        <motion.section id="contact"><Contact /></motion.section>
      </main>
    </div>
  );
}
