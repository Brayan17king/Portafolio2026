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
      es: "Desarrollo Full Stack de aplicaciones web y móviles para una consultora de soluciones digitales, cubriendo diseño de interfaz y funcionalidades de principio a fin. Stack principal: Vue, TypeScript, .NET Core y Flutter.",
      en: "Full stack development of web and mobile applications for a digital solutions consultancy, covering interface design and functionality end to end. Primary stack: Vue, TypeScript, .NET Core, and Flutter.",
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
      es: "Desarrollo y mantenimiento de sistemas para una empresa especializada en software de facturación electrónica, incluyendo un ERP contable construido con ASP.NET WebForms. Trabajo diario en C#, .NET y SQL Server.",
      en: "Development and maintenance of systems for a company specialized in electronic invoicing software, including an accounting ERP built with ASP.NET WebForms. Day-to-day work in C#, .NET, and SQL Server.",
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
      es: "Dashboard administrativo para una empresa de jardinería, desarrollado como proyecto de formación en una fábrica de talento TI. Stack: .NET, HTML, CSS, JavaScript, MySQL y autenticación con JWT.",
      en: "Administrative dashboard for a gardening company, built as a training project at a tech talent bootcamp. Stack: .NET, HTML, CSS, JavaScript, MySQL, and JWT authentication.",
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
      es: "Soporte técnico para [24]7.ai, compañía global de gestión de experiencia de cliente (CXM): instalación, configuración y mantenimiento de software, redes y hardware empresarial para garantizar la continuidad operativa.",
      en: "Technical support for [24]7.ai, a global customer experience management (CXM) company: installation, configuration, and maintenance of enterprise software, networks, and hardware to keep operations running smoothly.",
    },
    type: "job",
    current: false,
  },
];
