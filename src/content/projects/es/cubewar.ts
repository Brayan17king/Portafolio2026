import videoCubeWar from "../../../assets/videos/cubewar.mp4";
import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "CubeWar",
  theme: "dark",
  tags: ["three", "node", "websockets", "redis"],
  videoBorder: false,
  live: "https://cubewar.io",
  description:
    "CubeWar es un juego multijugador en el navegador donde los jugadores controlan avatares cúbicos en batallas estratégicas de ritmo rápido.<br/><br/>Construí todo el stack desde cero, incluyendo el motor del juego, el sistema de línea de tiempo del lado del cliente, y la red en tiempo real con matchmaking basado en Redis para un gameplay fluido y de alta concurrencia.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "Gameplay",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Tutorial",
        caption: "Tutorial",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Temáticas de mapas",
        caption: "Temáticas de mapas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Autenticación",
        caption: "Autenticación",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "Diseño responsivo",
        caption: "Diseño responsivo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "Múltiples modos de juego",
        caption: "Múltiples modos de juego",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar5,
        alt: "Sistema de grupos",
        caption: "Sistema de grupos",
      },
    },
  ],
} as const satisfies ProjectContent;