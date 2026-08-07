import accessibilityImage from "../assets/images/Mockup - 03.png";
import piggyBankImage from "../assets/images/piggybanks.png";
import pawsityImage from "../assets/images/pawsitysteps.png";
import evMarketplaceImage from "../assets/images/evmarketplace.png";
import phishingEmailImage from "../assets/images/phishingemail.png";
import moodLampImage from "../assets/images/moodlamp.png";
import { useLanguage } from "../context/LanguageContext";
function Projects() {
  const { t } = useLanguage();
  const projectAssets = {
    evMarketplace: {
      image: evMarketplaceImage,
      github: "https://github.com/minhanh0503/evmarketplace",
      demo: "https://evmarketplace.vercel.app/",
    },

    teddyBank: {
      image: piggyBankImage,
      github: "https://github.com/WendyShen-2005/PiggyKidsApp-ElleHacks2026",
      demo: "https://youtu.be/IrmgggVXfd8",
    },

    phishingDetector: {
      image: phishingEmailImage,
      github: "https://github.com/minhanh0503/phishingemail_detector",
      demo: "https://phishingemaildetectionsystem.streamlit.app/",
    },

    pawsity: {
      image: pawsityImage,
      github: "https://github.com/minhanh0503/pawsity-steps-mobile-app",
      demo: "https://www.youtube.com/watch?v=2to3n-sVJxM",
    },

    smartLamp: {
      image: moodLampImage,
      github: "https://github.com/minhanh0503/Mood_Lamp",
      demo: "https://www.youtube.com/watch?v=TwzFgdyrvng",
    },

    accessibilityGuideline: {
      image: accessibilityImage,
      demo: "https://sites.google.com/view/accessibility-guideline/home",
    },
  };
  const projects = t.projects.items.map((project) => ({
    ...project,
    ...projectAssets[project.id],
  }));

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#FFF8FC] dark:bg-[#121A15]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#9B7EDC] dark:text-[#A3C9A8] font-semibold">
            {t.projects.label}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
            {t.projects.title}
          </h2>
        </div>

        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-lg
                transition
                bg-white
                dark:bg-[#1B2720]
              "
            >
              {project.image && (
                <div
                  className="
                    h-48
                    mb-6
                    rounded-xl
                    overflow-hidden
                    bg-gray-100
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition
                      duration-300
                    "
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#9B7EDC] dark:text-[#A3C9A8] ">{project.title}</h3>

              <p className="mt-4 text-gray-600
                dark:text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-[#f6cde2]
                    text-gray-700
                    dark:bg-[#26362D]
                  dark:text-[#C6D8CC]
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-blue-600
                        font-medium
                        hover:underline
                    "
                  >
                    View Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-blue-600
                        font-medium
                        hover:underline
                    "
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
