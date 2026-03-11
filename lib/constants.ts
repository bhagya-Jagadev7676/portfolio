// ============================================
// Constants and Site Data - dileepa.dev
// ============================================

import type { NavLink, AboutWhatIDoItem } from "./types";

// Site Configuration
export const SITE_CONFIG = {
  name: "Bhagyashree Jagadev",
  title: "Bhagyashree Jagadev | BCA Graduate",
  description:
    "Highly motivated and dedicated BCA graduate seeking an entry-level position to apply my technical knowledge and skills. Strong foundation in Python, Java, C, web technologies (HTML, CSS, JavaScript), and database management (MySQL, MongoDB). Eager to contribute to the success of an organization by leveraging my programming abilities, problem-solving skills, and passion for technology.",
  url: "",
  email: "bhagyajagadev06@gmail.com",
  author: "Bhagyashree Jagadev",
  locale: "en_US",
  twitterHandle: "",
} as const;

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Connect", href: "/#connect" },
];

export const ABOUT_WHAT_I_DO: AboutWhatIDoItem[] = [
  {
    icon: "FaCode",
    title: "Programming",
    desc: "Proficient in Python, Java, and C programming languages",
  },
  {
    icon: "FaLaptopCode",
    title: "Web Development",
    desc: "Build responsive websites using HTML, CSS, and JavaScript",
  },
  {
    icon: "FaDatabase",
    title: "Database Management",
    desc: "Work with MySQL and MongoDB for data solutions",
  },
  {
    icon: "FaChartLine",
    title: "Data Analysis",
    desc: "Perform data analysis and visualization using Python libraries",
  },
];
