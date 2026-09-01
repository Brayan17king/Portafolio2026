import dataglobalLogo from "../assets/images/companies/dataglobal.avif";
import quiborwebLogo from "../assets/images/companies/quiborweb.png";
import campuslandsLogo from "../assets/images/companies/campuslands.svg";
import twentyFourSevenLogo from "../assets/images/companies/247ai.svg";

export interface LocalizedText {
  en: string;
  es: string;
}

export interface ExperienceEntry {
  role: LocalizedText;
  company: string;
  companyUrl: string;
  companyLogo: string;
  // The logo's own color — picks a chip background with real contrast
  // instead of guessing. "light" logos (white marks) sit on a dark chip,
  // "dark" logos sit on a white chip.
  logoTone: "light" | "dark";
  period: LocalizedText;
  description: LocalizedText;
  // "project" marks training/academic work (e.g. a bootcamp project) rather
  // than a paid role, so it can be tagged differently in the UI.
  type: "job" | "project";
  // Marks the role Brayan is in right now — highlighted differently in the UI.
  current: boolean;
}

// Sourced directly from Brayan's CV — keep in sync with it, do not embellish.
export const experience: ExperienceEntry[] = [
  {
    role: { es: "Desarrollador Senior", en: "Senior Developer" },
    company: "DataGlobal SAS",
    companyUrl: "https://dataglobal.com.co/",
    companyLogo: dataglobalLogo,
    logoTone: "light",
    period: { es: "Actualidad", en: "Present" },
    description: {
      es: "Desarrollo Full Stack de aplicaciones web y móviles, incluyendo diseño y funcionalidades.",
      en: "Full stack development of web and mobile applications, including design and functionality.",
    },
    type: "job",
    current: true,
  },
  {
    role: { es: "Desarrollador Junior .NET", en: "Junior .NET Developer" },
    company: "Quibor Web SAS",
    companyUrl: "https://www.quiborweb.com/",
    companyLogo: quiborwebLogo,
    logoTone: "dark",
    period: { es: "Enero 2024 – Julio 2025", en: "January 2024 – July 2025" },
    description: {
      es: "Desarrollo y mantenimiento de sistemas, ERP contable con WebForms.",
      en: "Development and maintenance of systems, including an accounting ERP built with WebForms.",
    },
    type: "job",
    current: false,
  },
  {
    role: { es: "Proyecto Full Stack", en: "Full Stack Project" },
    company: "CampusLands",
    companyUrl: "https://campuslands.com/",
    companyLogo: campuslandsLogo,
    logoTone: "light",
    period: { es: "Noviembre 2023", en: "November 2023" },
    description: {
      es: "Dashboard para una empresa de jardinería. Stack: .NET, HTML, CSS, JavaScript, MySQL, JWT.",
      en: "Dashboard for a gardening company. Stack: .NET, HTML, CSS, JavaScript, MySQL, JWT.",
    },
    type: "project",
    current: false,
  },
  {
    // The CV lists "Accedo Colombia" — the local operator — but the actual
    // client/brand the help desk work was performed for is [24]7.ai, which
    // is what Brayan asked to display here.
    role: { es: "Analista Help Desk", en: "Help Desk Analyst" },
    company: "[24]7.ai",
    companyUrl: "https://www.247.ai/",
    companyLogo: twentyFourSevenLogo,
    logoTone: "dark",
    period: { es: "Septiembre 2022 – Febrero 2023", en: "September 2022 – February 2023" },
    description: {
      es: "Instalación y mantenimiento de software, redes y hardware empresarial.",
      en: "Installation and maintenance of enterprise software, networks, and hardware.",
    },
    type: "job",
    current: false,
  },
];
