const en = {
  nav: {
    about: "About",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },

  hero: {
    greeting: "Hello, I'm",
    name: "Minh Anh Nguyen",
    role: "Computer Science Student & Full Stack Developer",
    description:
      "Computer Science student passionate about building scalable full-stack applications with React, Spring Boot, and modern cloud technologies. Experienced in developing backend services, database systems, and user-focused web applications through academic projects and industry experience.",
    button: "View Projects",
    resume: {
      download: "Download Resume",
      english: "Resume",
      englishVietnamese: "English (Vietnam Location)",
      vietnamese: "Vietnamese Resume",
    },
  },

  sections: {
    skills: "Skills",
    about: "About me",
    aboutsmall: "Building software that solves real problems",
    aboutdes:
      "I am a Computer Science graduate passionate about designing and developing reliable software solutions. My experience spans full-stack development, backend engineering, database optimization, and cloud-based applications. During my internship as a Full-Stack Developer, I worked with Java Spring Boot microservices, Oracle SQL, and REST APIs to improve enterprise systems. I also enjoy building complete applications from frontend interfaces to backend architecture using modern technologies. I am currently seeking opportunities where I can contribute to impactful software projects while continuing to grow as a developer.",
    aboutdes2:
      "During my internship as a Full-Stack Developer, I worked with Java Spring Boot microservices, Oracle SQL, and REST APIs to improve enterprise systems. I also enjoy building complete applications from frontend interfaces to backend architecture using modern technologies.",
    aboutdes3:
      "I am currently seeking opportunities where I can contribute to impactful software projects while continuing to grow as a developer.",
    projects: "Featured Projects",
    experience: "Experience",
    focus: "Focus",
    education: "Education",
    procert: "Professional Certificate",
    langcert: "Language Certifications",
    eduncert: "Education & Certifications",
    learndev: "Learning & Development",
    contact: "Contact",
  },
  education: [
    {
      id: "york",
      category: "Education",
      title: "Bachelor of Computer Science (Honours)",
      school: "York University - Toronto, Canada",
      date: "Expected Graduation: October 2026",
      description:
        "Relevant coursework: Data Structures, Database Systems, Software Design, Artificial Intelligence, Operating Systems, Network Protocols, Object-Oriented Programming, and Applied Cryptography.",
    },

    {
      id: "cornell",
      category: "Professional Certificate",
      title: "Certificate in Cybersecurity",
      school: "Cornell University (Online)",
      date: "2024 - 2025",
      description:
        "Studied cybersecurity fundamentals including security principles, network security, cryptography, risk management, and secure system design.",
    },

    {
      id: "langcert",
      category: "Language Certifications",
      title: "English & French Proficiency",
      school: "IELTS & DELF B2",
      date: "2026",
      description:
        "IELTS: Overall Band Score 7.5. DELF B2: French language certification demonstrating upper-intermediate proficiency.",
    },
  ],
  skills: {
    label: "Skills",
    title: "Technologies I work with",
    description:
      "A collection of technologies I have used for building full-stack applications, backend services, AI-powered solutions, mobile applications, and embedded systems.",

    categories: {
      languages: "Languages",
      frontend: "Frontend Development",
      backend: "Backend Development",
      database: "Database",
      ai: "AI & Cybersecurity",
      mobile: "Mobile & Embedded Systems",
      cloud: "Cloud & DevOps",
      tools: "Tools & Design",
    },
  },
  experience: {
    label: "Experience",
    title: "Professional Experience",
    position: "Full-Stack Developer Intern",
    company: "NGSC Vietnam",
    date: "March 2025 - September 2025",
    description:
      "Developed enterprise backend services using Java Spring Boot microservices and Oracle SQL. Worked on REST APIs, database optimization, automated testing, and software quality improvements.",
    achievements: [
      "Developed 10+ REST API endpoints using Spring Boot microservices architecture.",
      "Optimized database queries involving 100M+ banking records through indexing and query improvements.",
      "Created Postman API tests and documented 20+ software defects.",
      "Improved code reliability with JUnit testing achieving 80%+ coverage.",
    ],
  },

  projects: {
    label: "Projects",
    title: "Featured Projects",

    items: [
      {
        id: "evMarketplace",
        title: "EV Marketplace",
        description:
          "A full-stack electric vehicle marketplace platform with vehicle browsing, reviews, test-drive booking, and interactive vehicle visualization.",
        technologies: [
          "React",
          "Spring Boot",
          "Java",
          "PostgreSQL",
          "Tailwind CSS",
          "Docker",
        ],
      },

      {
        id: "teddyBank",
        title: "TeddyBank",
        description:
          "An accessible, kid-friendly financial literacy app designed to make learning about saving, spending, and money management fun. Built during ElleHacks 2026 under the Accessibility challenge, TeddyBank uses interactive visuals, simple language, and gamified tasks to help children understand financial concepts in a safe and engaging way.",
        technologies: [
          "React",
          "Node.js",
          "Python",
          "Google Gemini API",
          "Arduino Uno",
          "ElevenLabs",
          "NoSQL Database",
          "Express.js",
        ],
      },

      {
        id: "phishingDetector",
        title: "Phishing Email Detector",
        description:
          "A cybersecurity project that detects suspicious emails and identifies potential phishing attempts.",
        technologies: [
          "Python",
          "FastAPI",
          "Docker",
          "Machine Learning",
          "Cybersecurity",
        ],
      },

      {
        id: "pawsity",
        title: "Pawsity Steps Mobile App",
        description:
          "A mobile application designed to encourage pet activity tracking and healthier routines.",
        technologies: [
          "Mobile Development",
          "XML",
          "Java",
          "Firebase",
          "Android Studio",
        ],
      },

      {
        id: "smartLamp",
        title: "Smart RGB Lamp with IR Remote Control",
        description:
          "An Arduino-based smart lighting system featuring RGB LED control, multiple lighting modes, synchronized animations, and IR remote interaction. Implemented non-blocking animations using millis() for smooth transitions and responsive mode switching.",
        technologies: [
          "Arduino",
          "C++",
          "IR Communication",
          "PWM",
          "LCD Display",
          "Embedded Systems",
        ],
      },

      {
        id: "accessibilityGuideline",
        title: "Event Accessibility Guideline for Large Outdoor Events",
        description:
          "A collaborative capstone project developed for Bruce's Mill Conservation Authority to create an inclusive event accessibility framework based on universal design principles. Worked with a team to analyze accessibility challenges and develop practical recommendations for large outdoor events.",
        technologies: [
          "Team Collaboration",
          "Agile",
          "Canva",
          "Capstone",
          "Universal Design",
        ],
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's Connect",
    description:
      "I'm currently looking for software development opportunities. Feel free to reach out if you would like to discuss projects, opportunities, or collaboration.",

    contacts: [
      {
        name: "Email",
        value: "nguyenminhanh290503@gmail.com",
      },
      {
        name: "LinkedIn",
        value: "linkedin.com/in/minh-anh-0503-nguyen",
      },
      {
        name: "GitHub",
        value: "github.com/minhanh0503",
      },
    ],
  },
  buttons: {
    viewCode: "View Code",
    viewProject: "View Project",
  },
};

export default en;
