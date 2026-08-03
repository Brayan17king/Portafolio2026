import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
