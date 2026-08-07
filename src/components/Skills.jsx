import { useLanguage } from "../context/LanguageContext";
function Skills() {
  const { t } = useLanguage();
  const skillGroups = [
    {
      category: t.skills.categories.languages,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "SQL"],
    },

    {
      category: t.skills.categories.frontend,
      skills: [
        "React",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
      ],
    },

    {
      category: t.skills.categories.backend,
      skills: [
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Node.js",
        "Express.js",
        "FastAPI",
        "JUnit",
      ],
    },

    {
      category: t.skills.categories.database,
      skills: [
        "PostgreSQL",
        "Oracle SQL",
        "NoSQL",
        "Database Design",
        "Query Optimization",
      ],
    },

    {
      category: t.skills.categories.ai,
      skills: [
        "Machine Learning",
        "Google Gemini API",
        "Cybersecurity",
        "Phishing Detection",
        "API Integration",
      ],
    },

    {
      category: t.skills.categories.mobile,
      skills: [
        "Android Development",
        "Firebase",
        "Arduino",
        "Embedded Systems",
        "PWM",
        "IR Communication",
      ],
    },

    {
      category: t.skills.categories.cloud,
      skills: ["Docker", "LocalStack", "Git", "GitHub", "Postman"],
    },

    {
      category: t.skills.categories.tools,
      skills: [
        "Figma",
        "DBeaver",
        "IntelliJ IDEA",
        "VS Code",
        "Agile Development",
        "Accessibility Design",
        "Universal Design",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        py-24
        px-6
        bg-[#FBF8FF]
 dark:bg-[#121A15]

      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="                  text-[#9B7EDC]
 dark:text-[#A3C9A8] font-semibold"
          >
            {t.skills.label}
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
              dark:text-gray-300
              mt-2
            "
          >
            {t.skills.title}
          </h2>

          <p
            className="
              mt-4
              text-gray-600
                dark:text-gray-300
              max-w-2xl
              mx-auto
            "
          >
            {t.skills.description}
          </p>
        </div>

        {/* Skill Cards */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="
                bg-white
                dark:bg-[#1B2720]
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
                  text-xl
                  font-bold
                  text-[#9B7EDC]
 dark:text-[#E0E6E1]

                  mb-4
                "
              >
                {group.category}
              </h3>

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                     px-3
                    py-2
                    rounded-lg
                    bg-[#f6cde2]
                    text-gray-700
                    dark:bg-[#26362D]
                  dark:text-[#C6D8CC]
                    text-sm
                    font-medium
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
