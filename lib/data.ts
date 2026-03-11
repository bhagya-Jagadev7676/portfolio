import { AboutDto, ExperienceDto, EducationDto, ToolDto, ProjectDto, CertificationDto } from "./types";

export const about: AboutDto = {
  name: "Bhagyashree Jagadev",
  title: "BCA Graduate",
  tagline: "Python | Java | C | Web Development",
  description: [
    "Highly motivated and dedicated BCA graduate seeking an entry-level position to apply my technical knowledge and skills in a professional work environment.",
    "Eager to contribute to the success of an organization by leveraging my programming abilities, problem-solving skills, and passion for technology. Strong foundation in web technologies, database management, and software development.",
  ],
  status: "Available for opportunities",
  images: {
    bannerWebp: "/banner.webp",
    profilePng: "/profile.webp",
    profileWebp: "/profile.webp",
  },
  links: {
    website: "",
    email: "bhagyajagadev06@gmail.com",
    github: "https://github.com/bhagya-Jagadev7676",
    linkedin: "https://linkedin.com/in/bhagyashree-jagadev-622710374/",
    xtwitter: "",
    instagram: "",
    youtube: "",
  },
  connect: [
    "Open to entry-level opportunities in software development",
    "Available for learning and collaboration",
    "Let's build something amazing together!",
  ],
};

export const experiences: ExperienceDto[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Nighan2 Labs Pvt. Ltd.",
    url: "https://nighan2.com/",
    period: "March 2025",
    description:
      "Gained hands-on experience building full-stack web applications using React.js, Node.js, Express.js, MongoDB and Firebase. Deployed applications using Vercel, ensuring fast, reliable, and scalable cloud hosting. Collaborated with cross-functional team members using GitHub, creating feature branches, pushing code, and performing pull request reviews and merges. Assisted in cloud deployment and CI/CD workflows to automate build and release pipelines. Implementing RESTful APIs, backend services for data management and user authentication. Contributed to UI/UX improvements and responsive, mobile-first designs using modern frontend best practices.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Vercel", "Git", "CI/CD"],
    logo: {
      light: "https://nighan2.com/images/Logo.png",
      dark: "https://nighan2.com/images/Logo.png",
    },
  },
];

export const educations: EducationDto[] = [
  {
    course: "Bachelor of Computer Applications (BCA)",
    institution: "SSMS BCA College, Athani",
    period: "2026",
    description: "Completed BCA with 89% focusing on programming, web technologies, and database management",
    url: "#",
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaUniversity",
  },
  {
    course: "PUC (Science)",
    institution: "J A COMP PU College, Athani",
    period: "2023",
    description: "Completed Pre-University Course in Science stream with 84%",
    url: "#",
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaGraduationCap",
  },
  {
    course: "SSLC",
    institution: "Govt High School, Radderahatti",
    period: "2021",
    description: "Completed Secondary School Leaving Certificate with 91.04%",
    url: "#",
    logo: {
      light: "/placeholder.webp",
      dark: "/placeholder.webp",
    },
    iconName: "FaSchool",
  },
];

export const tools: ToolDto[] = [
  {
    name: "Python",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
  },
  {
    name: "Java",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  },
  {
    name: "C",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
  },
  {
    name: "HTML5",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
  },
  {
    name: "CSS3",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  },
  {
    name: "JavaScript",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  },
  {
    name: "MySQL",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  },
  {
    name: "MongoDB",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  },
  {
    name: "Git",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  },
  {
    name: "GitHub",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  },
  {
    name: "VS Code",
    logo: {
      light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  },
];

export const projects: ProjectDto[] = [
  {
    title: "Job Portal",
    description: "Automates the recruitment process by bridging the gap between job seekers and recruiters.",
    technologies: ["HTML", "CSS", "JavaScript", "Database"],
    highlights: [
      "Developed a platform to connect job seekers with recruiters",
      "Implemented user authentication and profile management",
      "Created job posting and application tracking features",
      "Designed responsive interface for seamless user experience",
    ],
    url: "#",
  },
  {
    title: "Data Analysis - EDA",
    description: "Performed data cleaning, manipulation, and exploratory data analysis (EDA) using pandas, matplotlib, and seaborn.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    highlights: [
      "Conducted comprehensive data cleaning and preprocessing",
      "Performed exploratory data analysis to identify patterns and insights",
      "Created visualizations using matplotlib and seaborn",
      "Applied statistical methods for data interpretation",
    ],
    url: "#",
  },
];

export const certifications: CertificationDto[] = [
  {
    title: "Front End Development",
    issuer: "Certificate Course",
    date: "2024",
    description: "Comprehensive certification in front-end development covering HTML, CSS, JavaScript, and modern web technologies.",
    credentialUrl: "#",
    image: "/placeholder.webp",
  },
  {
    title: "Back End Development",
    issuer: "Certificate Course",
    date: "2025",
    description: "Professional certification in back-end development technologies and server-side programming.",
    credentialUrl: "#",
    image: "/placeholder.webp",
  },
  {
    title: "GitHub Co-pilot",
    issuer: "Certificate Course",
    date: "2025",
    description: "Certification in using GitHub Co-pilot for AI-assisted coding and development workflows.",
    credentialUrl: "#",
    image: "/placeholder.webp",
  },
];
