import { motion } from "framer-motion";
import profileImage from "../assets/images/me.jpg";
import { useLanguage } from "../context/LanguageContext";
import resumeEN from "../assets/resume/MinhAnh_Nguyen_EN.pdf";
import resumeENVN from "../assets/resume/MinhAnh_Nguyen_EN(VN).pdf";
import resumeVI from "../assets/resume/NguyenMinhAnh_VI.pdf";
import { useState } from "react";

function Hero() {
  const { t } = useLanguage();

  const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        bg-gradient-to-br
        from-[#FBF8FF]
        via-[#FFF6FA]
        to-[#F3F8FF]

        dark:from-[#121A15]
        dark:via-[#17231C]
        dark:to-[#121A15]
        px-6
        pt-20
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {" "}
          <p className="text-[#9B7EDC] dark:text-[#E0E6E1] font-semibold mb-3">
            {t.hero.greeting}
          </p>
          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              text-[#222222]
dark:text-[#E0E6E1]
           
            "
          >
            {t.hero.name}
          </h1>
          <h2
            className="
              mt-4
              text-2xl
              md:text-3xl
              font-semibold
              text-[#5B5566]
dark:text-[#C6D8CC]
            "
          >
            {t.hero.role}
          </h2>
          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              max-w-xl
              text-[#6B6575]
dark:text-[#B6C4B8]
            "
          >
            {t.hero.description}
          </p>
          {/* Tech badges */}
          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {" "}
            {[
              "React",
              "Spring Boot",
              "Java",
              "PostgreSQL",
              "Docker",
              "AWS",
            ].map((tech) => (
              <motion.span
                key={tech}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              ></motion.span>
            ))}
          </motion.div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 relative">
            {/* Resume Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResumeOpen(!resumeOpen)}
                className="
                  px-6
                  py-3
                  rounded-lg
                  font-medium
                  bg-[#9B7EDC]
                  text-white
                  transition
                  hover:bg-[#8765D3]
                  dark:bg-[#A3C9A8]
                  dark:text-[#132615]
                  dark:hover:bg-[#8FB895]
                "
              >
                {t.hero.resume.download} ▼
              </button>

              {resumeOpen && (
                <div
                  className="
                  absolute
                  mt-2
                  w-56
                  rounded-lg
                  shadow-lg
                  border
                  bg-white
                  border-[#D8CCE8]
                  overflow-hidden
                  z-20

                  dark:bg-[#1B2720]
                  dark:border-[#35483B]
                "
                >
                  <a
                    href={resumeEN}
                    download="MinhAnhNguyen_EN.pdf"
                    className="
                      block
                      px-4
                      py-3
                      text-sm
                      transition
                      hover:bg-[#F3ECFA]
                      dark:text-[#E0E6E1]
                      dark:hover:bg-[#26382D]
                    "
                  >
                    {t.hero.resume.english}
                  </a>

                  <a
                    href={resumeENVN}
                    download="MinhAnhNguyen_EN(VN).pdf"
                    className="
                      block
                      px-4
                      py-3
                      text-sm
                      transition
                      hover:bg-[#F3ECFA]
                      dark:text-[#E0E6E1]
                      dark:hover:bg-[#26382D]
                    "
                  >
                    {t.hero.resume.englishVietnamese}
                  </a>

                  <a
                    href={resumeVI}
                    download="MinhAnhNguyen_VI.pdf"
                    className="
                      block
                      px-4
                      py-3
                      text-sm
                      transition
                      hover:bg-[#F3ECFA]
                      dark:text-[#E0E6E1]
                      dark:hover:bg-[#26382D]
                    "
                  >
                    {t.hero.resume.vietnamese}
                  </a>
                </div>
              )}
            </div>

            {/* Github */}
            <a
              href="https://github.com/minhanh0503"
              target="_blank"
              rel="noopener noreferrer"
              className="
              px-6
              py-3
              border
              rounded-lg
              font-medium
              transition
              dark:text-gray-300
              hover:bg-[#F3ECFA]
              dark:hover:bg-[#1B2720]
              border-[#D8CCE8]
              dark:border-[#35483B]
            "
            >
              {t.hero.button}
            </a>
          </div>
        </motion.div>
        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {" "}
          <div
            className="
              w-72
              h-72
              rounded-full
              flex
              items-center
              justify-center
              text-lg
              bg-[#EEE8FA]
            dark:bg-[#1B2720]
            text-[#9B7EDC]
            dark:text-[#A3C9A8]
              overflow-hidden
            "
          >
            <img
              src={profileImage}
              alt="Minh Anh Nguyen"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
