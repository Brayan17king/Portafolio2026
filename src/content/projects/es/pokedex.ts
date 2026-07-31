import videoPokedex from "../../../assets/videos/pokedex.mp4";
import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "https://brayan17king.github.io/Pokedex/",
  source: "https://github.com/Brayan17king/Pokedex",
  videoBorder: true,
  description:
    "Uno de mis primeros proyectos web para practicar conceptos básicos de desarrollo web. La Pokédex es de código abierto para que otros desarrolladores puedan aprender de la misma manera en que yo lo hice.<br/><br/>También interactúa con una API pública, para ganar más experiencia con la obtención asíncrona de datos.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "Aplicación Pokédex",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Vista predeterminada",
        caption: "Vista predeterminada",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Función de búsqueda",
        caption: "Función de búsqueda",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Diseño responsivo",
        caption: "Diseño responsivo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Carga diferida",
        caption: "Carga diferida",
      },
    },
  ],
} as const satisfies ProjectContent;