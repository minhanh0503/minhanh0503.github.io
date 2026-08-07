import { motion } from "framer-motion";
import yorkLogo from "../assets/images/YorkULogo.jpg";
import cornellLogo from "../assets/images/Cornell_Universitylogo.png";
import { useLanguage } from "../context/LanguageContext";

function Education() {
  const { t } = useLanguage();
  const logos = {
    york: yorkLogo,
    cornell: cornellLogo,
  };
  const education = t.education.map((item) => ({
    ...item,
    logo: logos[item.id] || null,
  }));

  return (
    <section
      id="education"
      className="
        py-20
        px-6
        bg-[#FFF8FC]
dark:bg-[#121A15]

      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#9B7EDC] dark:text-[#A3C9A8] font-semibold">
            {t.sections.eduncert}
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
              dark:text-white
              mt-2
            "
          >
            {t.sections.learndev}{" "}
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-gray-50
                  dark:bg-gray-800
                rounded-2xl
                p-8
                shadow-md
              "
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                {item.logo && (
                  <div
                    className="
                        w-16
                        h-16
                        mr-4
                        rounded-full
                        bg-white
                        dark:bg-gray-700
                        flex
                        items-center
                        justify-center
                        shadow-md
                        border
                        border-gray-200
                        dark:border-gray-600
                        flex-shrink-0
                        "
                  >
                    <img
                      src={item.logo}
                      alt={item.school}
                      className="
                            w-14
                            h-14
                            object-contain
                            rounded-full
                        "
                    />
                  </div>
                )}
                <div>
                  <p className="text-sm text-[#9B7EDC] dark:text-[#A3C9A8] font-semibold mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-[#9B7EDC] dark:text-[#A3C9A8] font-medium mt-2">
                    {item.school}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mt-4">{item.description}</p>
                </div>

                <p className="text-gray-500 dark:text-gray-400 mt-4 md:mt-0">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
