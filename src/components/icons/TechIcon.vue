<script setup lang="ts">
import { computed } from "vue";
import {
  siAndroidstudio,
  siDart,
  siDotnet,
  siFlutter,
  siGit,
  siGithub,
  siGitlab,
  siJavascript,
  siLinux,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPython,
  siTypescript,
} from "simple-icons";

const props = defineProps<{
  name: string;
  size?: number;
}>();

const makeMarkup = (path: string, fill: string) => `<path fill="${fill}" d="${path}" />`;

const ICONS: Record<string, { viewBox: string; svg: string }> = {
  dotnet: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siDotnet.path, `#${siDotnet.hex}`),
  },
  postgresql: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siPostgresql.path, `#${siPostgresql.hex}`),
  },
  javascript: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siJavascript.path, `#${siJavascript.hex}`),
  },
  vuedotjs: {
    viewBox: "0 0 24 24",
    svg: `<path fill="#4FC08D" d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>`,
  },
  nodedotjs: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siNodedotjs.path, `#${siNodedotjs.hex}`),
  },
  mongodb: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siMongodb.path, `#${siMongodb.hex}`),
  },
  git: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siGit.path, `#${siGit.hex}`),
  },
  github: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siGithub.path, `#${siGithub.hex}`),
  },
  linux: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siLinux.path, `#${siLinux.hex}`),
  },
  csharp: {
    viewBox: "0 0 128 128",
    svg: `<path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>`,
  },
  sqlserver: {
    viewBox: "0 0 128 128",
    svg: `<path fill="#ee352c" d="M52.935 0v.002c-.426-.058-7.306 2.42-11.742 4.223-5.988 2.44-10.636 4.766-13.504 6.78-.926.657-2.054 1.75-2.475 2.37l-.007-.021a1.424 1.424 0 0 0-.069.148c-.022.04-.052.086-.066.12a1.812 1.812 0 0 0-.115.66l.064.06c.017.207.065.44.168.695.252.62.988 1.376 1.822 2.15 0 0 8.621 8.409 9.668 9.61 4.766 5.503 6.84 10.927 7.034 18.406.117 4.805-.796 9.03-3.063 13.932-4.03 8.796-12.535 18.504-25.652 29.276l.199-.067c-.09.072-.208.174-.295.242-1.57 1.24-3.896 3.565-5.078 5.038-1.764 2.209-3.157 4.553-3.758 6.355-1.066 3.255-.543 6.548 1.51 9.59 2.636 3.875 7.887 7.83 14.01 10.521 3.12 1.377 8.368 3.14 12.322 4.127 6.567 1.667 19.28 3.469 26.273 3.739 1.414.059 3.312.059 3.39 0 .155-.097 1.241-2.168 2.501-4.744 4.3-8.778 7.399-17.013 9.086-24.047 1.007-4.262 1.801-9.94 2.324-16.663.136-1.88.194-8.177.078-10.308-.175-3.487-.483-6.316-.968-9.086a4.17 4.17 0 0 1-.07-.573c15.578-4.628 32.768-8.821 44.187-10.568l1.764-.271-.272-.428c-1.55-2.403-2.615-3.894-3.894-5.483-3.72-4.61-8.233-8.349-13.756-11.449-7.595-4.244-17.419-7.557-29.858-10.018-2.344-.465-7.495-1.357-11.68-1.996z"/>`,
  },
  python: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siPython.path, `#${siPython.hex}`),
  },
  typescript: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siTypescript.path, `#${siTypescript.hex}`),
  },
  flutter: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siFlutter.path, `#${siFlutter.hex}`),
  },
  dart: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siDart.path, `#${siDart.hex}`),
  },
  androidstudio: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siAndroidstudio.path, `#${siAndroidstudio.hex}`),
  },
  gitlab: {
    viewBox: "0 0 24 24",
    svg: makeMarkup(siGitlab.path, `#${siGitlab.hex}`),
  },
};

const normalizedName = computed(() => props.name.toLowerCase().replace(/\s+/g, ""));
</script>

<template>
  <svg
    :viewBox="ICONS[normalizedName]?.viewBox ?? '0 0 24 24'"
    :width="props.size ?? 16"
    :height="props.size ?? 16"
    xmlns="http://www.w3.org/2000/svg"
    v-html="ICONS[normalizedName]?.svg ?? ''"
    aria-hidden="true"
  />
</template>