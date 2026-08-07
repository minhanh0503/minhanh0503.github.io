import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#FFF8FC] dark:bg-[#121A15]
"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B7EDC] dark:text-[#A3C9A8] font-semibold">
            {t.experience.label}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E0E6E1] mt-2">
            {t.experience.title}
          </h2>
        </div>

        {/* Experience Card */}
        <div
          className="
            bg-white
            dark:bg-gray-800
            rounded-2xl
            p-8
            shadow-sm
            border
            border-gray-100
            dark:border-gray-800

          "
        >
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.experience.position}
              </h3>

              <p className="text-[#9B7EDC] dark:text-[#A3C9A8] font-medium mt-1">
                {t.experience.company}
              </p>
            </div>

            <p className=" text-gray-600 dark:text-gray-300 mt-3 md:mt-0">
              {t.experience.date}
            </p>
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.experience.description}
          </p>

          <ul className="mt-6 list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-300 ">
            {t.experience.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Java",
              "Spring Boot",
              "Oracle SQL",
              "REST API",
              "Microservices",
              "JUnit",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-[#f6cde2]
                    text-gray-700
                    dark:bg-[#26362D]
                dark:text-[#C6D8CC]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
