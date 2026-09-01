import {
  siAndroidstudio,
  siCss,
  siDart,
  siDotnet,
  siFlutter,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siLinux,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPostgresql,
  siPython,
  siTypescript,
} from "simple-icons";

export interface TechIconEntry {
  viewBox: string;
  path: string;
  hex: string;
}

// Single source of truth for tech brand icons/colors — reused by TechIcon.vue
// (renders the icon) and anywhere else that needs the same brand color
// (e.g. Experience.vue's stack badges) without duplicating the icon set.
export const TECH_ICONS: Record<string, TechIconEntry> = {
  dotnet: { viewBox: "0 0 24 24", path: siDotnet.path, hex: siDotnet.hex },
  postgresql: { viewBox: "0 0 24 24", path: siPostgresql.path, hex: siPostgresql.hex },
  javascript: { viewBox: "0 0 24 24", path: siJavascript.path, hex: siJavascript.hex },
  vuedotjs: {
    viewBox: "0 0 24 24",
    path: "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",
    hex: "4FC08D",
  },
  nodedotjs: { viewBox: "0 0 24 24", path: siNodedotjs.path, hex: siNodedotjs.hex },
  mongodb: { viewBox: "0 0 24 24", path: siMongodb.path, hex: siMongodb.hex },
  git: { viewBox: "0 0 24 24", path: siGit.path, hex: siGit.hex },
  github: { viewBox: "0 0 24 24", path: siGithub.path, hex: siGithub.hex },
  linux: { viewBox: "0 0 24 24", path: siLinux.path, hex: siLinux.hex },
  csharp: {
    viewBox: "0 0 128 128",
    path: "M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z",
    hex: "9B4F96",
  },
  sqlserver: {
    viewBox: "0 0 128 128",
    path: "M52.935 0v.002c-.426-.058-7.306 2.42-11.742 4.223-5.988 2.44-10.636 4.766-13.504 6.78-.926.657-2.054 1.75-2.475 2.37l-.007-.021a1.424 1.424 0 0 0-.069.148c-.022.04-.052.086-.066.12a1.812 1.812 0 0 0-.115.66l.064.06c.017.207.065.44.168.695.252.62.988 1.376 1.822 2.15 0 0 8.621 8.409 9.668 9.61 4.766 5.503 6.84 10.927 7.034 18.406.117 4.805-.796 9.03-3.063 13.932-4.03 8.796-12.535 18.504-25.652 29.276l.199-.067c-.09.072-.208.174-.295.242-1.57 1.24-3.896 3.565-5.078 5.038-1.764 2.209-3.157 4.553-3.758 6.355-1.066 3.255-.543 6.548 1.51 9.59 2.636 3.875 7.887 7.83 14.01 10.521 3.12 1.377 8.368 3.14 12.322 4.127 6.567 1.667 19.28 3.469 26.273 3.739 1.414.059 3.312.059 3.39 0 .155-.097 1.241-2.168 2.501-4.744 4.3-8.778 7.399-17.013 9.086-24.047 1.007-4.262 1.801-9.94 2.324-16.663.136-1.88.194-8.177.078-10.308-.175-3.487-.483-6.316-.968-9.086a4.17 4.17 0 0 1-.07-.573c15.578-4.628 32.768-8.821 44.187-10.568l1.764-.271-.272-.428c-1.55-2.403-2.615-3.894-3.894-5.483-3.72-4.61-8.233-8.349-13.756-11.449-7.595-4.244-17.419-7.557-29.858-10.018-2.344-.465-7.495-1.357-11.68-1.996z",
    hex: "ee352c",
  },
  python: { viewBox: "0 0 24 24", path: siPython.path, hex: siPython.hex },
  typescript: { viewBox: "0 0 24 24", path: siTypescript.path, hex: siTypescript.hex },
  flutter: { viewBox: "0 0 24 24", path: siFlutter.path, hex: siFlutter.hex },
  dart: { viewBox: "0 0 24 24", path: siDart.path, hex: siDart.hex },
  androidstudio: { viewBox: "0 0 24 24", path: siAndroidstudio.path, hex: siAndroidstudio.hex },
  gitlab: { viewBox: "0 0 24 24", path: siGitlab.path, hex: siGitlab.hex },
  html5: { viewBox: "0 0 24 24", path: siHtml5.path, hex: siHtml5.hex },
  css: { viewBox: "0 0 24 24", path: siCss.path, hex: siCss.hex },
  mysql: { viewBox: "0 0 24 24", path: siMysql.path, hex: siMysql.hex },
  jsonwebtokens: { viewBox: "0 0 24 24", path: siJsonwebtokens.path, hex: siJsonwebtokens.hex },
};
