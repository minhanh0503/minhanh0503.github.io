import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      title: t.sections.education,
      value: "Bachelor of Science in Computer Science",
      description: "Honours Computer Science",
    },
    {
      title: t.sections.experience,
      value: "Full-Stack Developer Intern",
      description: "Spring Boot • React • Oracle SQL",
    },
    {
      title: t.sections.focus,
      value: "Software Development",
      description: "Backend systems & scalable applications",
    },
    {
      title: t.sections.projects,
      value: "Full-Stack Applications",
      description: "React • Microservices • Cloud",
    },
  ];

  return (
    <section
      id="about"
      className="
        py-24
        px-6
        bg-[#FFF8FC]
dark:bg-[#121A15]
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-[#9B7EDC] font-semibold dark:text-[#A3C9A8]">
            {t.sections.about}
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
              dark:text-[#E0E6E1]
              mt-2
            "
          >
            {t.sections.aboutsmall}
          </h2>
        </div>


        <div
          className="
            grid
            md:grid-cols-2
            gap-12
            items-center
          "
        >

          {/* Description */}
          <div>
            <p
              className="
                text-[#6B6575]
                dark:text-[#E0E6E1]
                text-lg
                leading-relaxed
              "
            >
              {t.sections.aboutdes}
            </p>

            <p
              className="
                mt-5
                text-[#6B6575]
                dark:text-[#E0E6E1]
                text-lg
                leading-relaxed
              "
            >
              {t.sections.aboutdes2}
            </p>

            <p
              className="
                mt-5
                text-[#6B6575]
                dark:text-[#E0E6E1]
                text-lg
                leading-relaxed
              "
            >
              {t.sections.aboutdes3}
            </p>
          </div>


          {/* Cards */}
          <div
            className="
              grid
              sm:grid-cols-2
              gap-5
            "
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  bg-gray-50
                  dark:bg-gray-800

                  rounded-2xl
                  p-6

                  shadow-sm
                  dark:shadow-gray-950/50

                  hover:shadow-md
                  transition
                "
              >

                <h3
                  className="
                    text-sm
                    text-[#9B7EDC]
                    dark:text-[#A3C9A8]
                    font-semibold
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-2
                    text-xl
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {item.value}
                </p>


                <p
                  className="
                    mt-2
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;