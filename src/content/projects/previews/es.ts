import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Proyecto de aprendizaje open-source",
  },
] as const satisfies ProjectPreview[];
