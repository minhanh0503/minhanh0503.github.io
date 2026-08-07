import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, setDarkMode } = useTheme();

  const { t, language, setLanguage } = useLanguage();
  const navLinks = [
    {
      id: "about",
      name: t.nav.about,
      href: "#about",
    },
    {
      id: "education",
      name: t.nav.education,
      href: "#education",
    },
    {
      id: "skills",
      name: t.nav.skills,
      href: "#skills",
    },
    {
      id: "projects",
      name: t.nav.projects,
      href: "#projects",
    },
    {
      id: "experience",
      name: t.nav.experience,
      href: "#experience",
    },
    {
      id: "contact",
      name: t.nav.contact,
      href: "#contact",
    },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        bg-white/80
        dark:bg-gray-900/80
        backdrop-blur-md
        shadow-sm
        z-50
        "
    >
      {" "}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Minh Anh<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-600
                dark:text-gray-300
                hover:text-blue-600
                transition
                font-medium
            "
            >
              {link.name}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="
            text-sm
            font-medium
            text-gray-700
            dark:text-gray-300
            hover:text-blue-600
            transition
            "
          >
            {language === "en" ? "🇻🇳 VI" : "🇺🇸 EN"}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
                text-xl
                hover:scale-110
                transition
                "
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            md:hidden
            bg-white
            dark:bg-[#1C3322]
            border-t
            dark:border-gray-700
            px-6
            py-4
            "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                block 
                py-3
                text-gray-700
                dark:text-gray-300
                hover:text-blue-600
              "
            >
              {link.name}
            </a>
          ))}
          {/* Language Toggle */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setLanguage(language === "en" ? "vi" : "en")}
              className="text-gray-700 dark:text-gray-300"
            >
              {language === "en" ? "🇻🇳 VI" : "🇺🇸 EN"}
            </button>

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
