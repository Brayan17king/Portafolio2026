import footballCardImage from "../assets/images/football-card.webp";

export type HobbyCategory = "books" | "sports" | "shows" | "music";

export interface LocalizedText {
  en: string;
  es: string;
}

export interface BookEntry {
  title: LocalizedText;
  author: string;
  year: number;
  genre: LocalizedText;
  rating: number;
  status: "finished" | "reading";
  synopsis: LocalizedText;
  review: LocalizedText;
  coverUrl: string;
}

export interface ShowEntry {
  title: LocalizedText;
  type: "movie" | "series";
  year: string;
  genre: LocalizedText;
  rating: number;
  synopsis: LocalizedText;
  posterUrl: string;
}

export interface MusicEntry {
  artist: string;
  genre: LocalizedText;
  albumTitle: string;
  songTitle: string;
  previewUrl: string;
  coverUrl: string;
}

export interface FootballProfile {
  cardImageUrl: string;
  note: LocalizedText;
}

// TODO: rating (1-5) and review are placeholders — replace with your real rating and a short first-person
// note per book. Confirm/correct the publication years marked with a comment.
export const books: BookEntry[] = [
  {
    title: { es: "Crimen y castigo", en: "Crime and Punishment" },
    author: "Fiódor Dostoyevski",
    year: 1866,
    genre: { es: "Psicológica", en: "Psychological" },
    rating: 4.8,
    status: "finished",
    synopsis: {
      es: "Rodión Raskólnikov, un ex estudiante empobrecido en San Petersburgo, planea y ejecuta el asesinato de una prestamista para poner a prueba su propia teoría sobre quiénes tienen derecho a transgredir la ley moral.",
      en: "Rodion Raskolnikov, an impoverished former student in St. Petersburg, plans and carries out the murder of a pawnbroker to test his own theory about who has the right to transgress moral law.",
    },
    review: { es: "Pendiente: agrega tu reseña.", en: "Pending: add your own review." },
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/f0/c9/fc/f0c9fc70-8d58-e81d-b433-2c8d75c925b6/9788491054870.jpg/1200x1200bb.jpg",
  },
  {
    title: { es: "Satanás", en: "Satanás" },
    author: "Mario Mendoza",
    year: 2002,
    genre: { es: "Ficción", en: "Fiction" },
    rating: 4.5,
    status: "finished",
    synopsis: {
      es: "En La Candelaria, el barrio colonial de Bogotá, se entrelazan las historias de una ladrona, un pintor atormentado, un sacerdote que enfrenta un caso de posesión y Campo Elías, veterano de Vietnam que inicia su propio descenso a los infiernos.",
      en: "In La Candelaria, Bogotá's colonial district, the stories of a thief, a tormented painter, a priest facing a case of possession, and Campo Elías, a Vietnam veteran on his own descent into hell, become intertwined.",
    },
    review: { es: "Pendiente: agrega tu reseña.", en: "Pending: add your own review." },
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Publication126/v4/81/dc/ec/81dcecfd-8734-82bc-c4e8-75edfcbbb2fc/9786287650527.jpg/1200x1200bb.jpg",
  },
  {
    title: { es: "Bitácora del naufragio", en: "Bitácora del naufragio" },
    author: "Mario Mendoza",
    year: 2014, // TODO: confirm year
    genre: { es: "Ficción", en: "Fiction" },
    rating: 4.2,
    status: "finished",
    synopsis: { es: "", en: "" }, // No synopsis found in Open Library for this edition — add your own if you'd like one shown.
    review: { es: "Pendiente: agrega tu reseña.", en: "Pending: add your own review." },
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Publication122/v4/0a/e4/65/0ae46556-c19c-3946-eca3-2e8514093c47/9789584294135.jpg/1200x1200bb.jpg",
  },
  {
    title: { es: "Cien años de soledad", en: "One Hundred Years of Solitude" },
    author: "Gabriel García Márquez",
    year: 1967,
    genre: { es: "Realismo mágico", en: "Magical realism" },
    rating: 5,
    status: "finished",
    synopsis: {
      es: "Narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, obra cumbre del realismo mágico y de la literatura hispanoamericana.",
      en: "Tells the story of the Buendía family across seven generations in the fictional town of Macondo, a landmark work of magical realism and Latin American literature.",
    },
    review: { es: "Pendiente: agrega tu reseña.", en: "Pending: add your own review." },
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/98/9d/25/989d2556-68fc-03d4-d686-c97df9f70648/9788439731764.jpg/1200x1200bb.jpg",
  },
  {
    title: { es: "Decamerón", en: "The Decameron" },
    author: "Giovanni Boccaccio",
    year: 1353,
    genre: { es: "Clásico", en: "Classic" },
    rating: 4,
    status: "finished",
    synopsis: {
      es: "Diez jóvenes huyen de la Florencia asolada por la peste a una villa en Fiesole, donde cada uno narra una historia por día durante diez días, dando forma a cien relatos sobre el ingenio y la fortuna humana.",
      en: "Ten young people flee plague-stricken Florence to a villa in Fiesole, where each tells one story a day over ten days, forming a hundred tales about human wit and fortune.",
    },
    review: { es: "Pendiente: agrega tu reseña.", en: "Pending: add your own review." },
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/9f/49/89/9f4989ce-d573-f81b-a295-f441c4b27488/1063261380.jpg/1200x1200bb.jpg",
  },
  {
    title: { es: "Necronomicón", en: "Necronomicon" },
    author: "H. P. Lovecraft",
    year: 1927, // TODO: confirm edition/year
    genre: { es: "Terror", en: "Horror" },
    rating: 4,
    status: "finished",
    synopsis: {
      es: "Antología de relatos cortos de H.P. Lovecraft, maestro del horror cósmico, que exploran visiones oscuras del universo y el peligro de lo desconocido.",
      en: "An anthology of short stories by H.P. Lovecraft, master of cosmic horror, exploring dark visions of the universe and the danger of the unknown.",
    },
    review: { es: "Pendiente: agrega tu reseña.", en: "Pending: add your own review." },
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Publication114/v4/fb/70/85/fb7085f5-ba25-1975-99f6-516681ecd6fb/812fea14-fc82-4aae-9e43-e4a4523feb82_cover_image.jpg/1200x1200bb.jpg",
  },
  {
    title: { es: "El amor en los tiempos del cólera", en: "Love in the Time of Cholera" },
    author: "Gabriel García Márquez",
    year: 1985,
    genre: { es: "Romántica", en: "Romance" },
    rating: 4.5,
    status: "reading",
    synopsis: {
      es: "Florentino Ariza y Fermina Daza se enamoran de jóvenes, pero ella se casa con otro hombre. Cincuenta años después, tras la muerte del esposo, Florentino vuelve a declararle su amor.",
      en: "Florentino Ariza and Fermina Daza fall in love as young people, but she marries another man. Fifty years later, after her husband's death, Florentino declares his love for her once again.",
    },
    review: { es: "Pendiente: agrega tu reseña.", en: "Pending: add your own review." },
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/81/ae/91/81ae91ce-b57a-546d-355d-d9fbba38acb5/9788439729983.jpg/1200x1200bb.jpg",
  },
];

export const football: FootballProfile = {
  cardImageUrl: footballCardImage,
  // Draft — rewrite this in your own words, it's just a starting point.
  // NOTE: the card image itself has Spanish labels baked into the pixels (OVR, DELANTERO, stats, etc.) —
  // it will not switch to English. Only this note (the flip side) is localized. A separate English-labeled
  // card image would be needed for full localization of the front.
  note: {
    es: "Delantero de fin de semana: prefiero la pausa antes del remate a cualquier plan tranquilo. Juego con el mismo grupo de amigos desde hace años — ahí se resuelven más problemas que en cualquier retro de equipo.",
    en: "Weekend striker: I'll take the pause before the shot over any quiet plan. I've played with the same group of friends for years — more gets resolved there than in any team retro.",
  },
};

// TODO: rating is pending — add your personal 1-5 rating for each title, same as the books.
export const shows: ShowEntry[] = [
  {
    title: { es: "Interstellar", en: "Interstellar" },
    type: "movie",
    year: "2014",
    genre: { es: "Ciencia ficción", en: "Science fiction" },
    rating: 0,
    synopsis: {
      es: "Un grupo de exploradores hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.",
      en: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/d1QKiYtceF3GDtxvTFXFAqwwah9.jpg",
  },
  {
    title: { es: "Matrix", en: "The Matrix" },
    type: "movie",
    year: "1999",
    genre: { es: "Ciencia ficción", en: "Science fiction" },
    rating: 0,
    synopsis: {
      es: "Thomas Anderson lleva una doble vida: por el día es programador en una importante empresa de software, y por la noche un hacker informático llamado Neo, hasta que unos misteriosos personajes le invitan a descubrir qué es Matrix.",
      en: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/tpW2X2DvxtTHJ61iJ7zNYYrJihs.jpg",
  },
  {
    title: { es: "El increíble castillo vagabundo", en: "Howl's Moving Castle" },
    type: "movie",
    year: "2004",
    genre: { es: "Studio Ghibli", en: "Studio Ghibli" },
    rating: 0,
    synopsis: {
      es: "Sophie, una joven sobre la que pesa una horrible maldición que le confiere el aspecto de una anciana, decide pedir ayuda al mago Howl, que vive en un castillo ambulante, pero tal vez sea Howl quien necesite la ayuda de Sophie.",
      en: "Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/p8EARnEw8KPZzlZg3vkseYVMczu.jpg",
  },
  {
    title: { es: "Harry Potter y la piedra filosofal", en: "Harry Potter and the Philosopher's Stone" },
    type: "movie",
    year: "2001",
    genre: { es: "Fantasía", en: "Fantasy" },
    rating: 0,
    synopsis: {
      es: "Harry Potter es un huérfano que vive con sus desagradables tíos. Días antes de su undécimo cumpleaños, unas misteriosas cartas revelan que Harry es un mago y sus padres también lo eran.",
      en: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard, with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/roKMM6S9DRGFNujmvqlk8l5YbN3.jpg",
  },
  {
    title: { es: "Vengadores: Endgame", en: "Avengers: Endgame" },
    type: "movie",
    year: "2019",
    genre: { es: "Superhéroes", en: "Superheroes" },
    rating: 0,
    synopsis: {
      es: "Tras el chasquido de Thanos que eliminó a la mitad de la vida en el universo, los Vengadores supervivientes se reúnen para intentar revertir la catástrofe, viajando al pasado y haciendo sacrificios definitivos para restaurar el equilibrio.",
      en: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers must assemble once more to undo Thanos' actions and restore order to the universe.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/br6krBFpaYmCSglLBWRuhui7tPc.jpg",
  },
  {
    title: { es: "Rick and Morty", en: "Rick and Morty" },
    type: "series",
    year: "2013–",
    genre: { es: "Animación / Sci-Fi", en: "Animation / Sci-Fi" },
    rating: 0,
    synopsis: {
      es: "Comedia animada que narra las aventuras de un científico loco, Rick Sánchez, que regresa después de 20 años para vivir con su hija, su marido y sus hijos Morty y Summer.",
      en: "Follows a sociopathic genius scientist who drags his inherently timid grandson on adventures across the universe.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/arSWOHGl9uQvhDrWjgyl3aaypca.jpg",
  },
  {
    title: { es: "Breaking Bad", en: "Breaking Bad" },
    type: "series",
    year: "2008–2013",
    genre: { es: "Drama criminal", en: "Crime drama" },
    rating: 0,
    synopsis: {
      es: "Un profesor de química con cáncer terminal se asocia con un exalumno suyo para fabricar y vender metanfetamina a fin de que su familia no pase apuros económicos.",
      en: "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer. He becomes filled with a desire to secure his family's financial future as he enters the dangerous world of drugs and crime.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
  },
  {
    title: { es: "Game of Thrones", en: "Game of Thrones" },
    type: "series",
    year: "2011–2019",
    genre: { es: "Fantasía", en: "Fantasy" },
    rating: 0,
    synopsis: {
      es: "En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente mientras el invierno se acerca.",
      en: "Seven noble families fight for control of the mythical land of Westeros, while a very ancient evil awakens in the farthest north, in this adaptation of George R.R. Martin's fantasy novels.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/3hDtRuwTfQQYRst3kjhvp4Cogjw.jpg",
  },
  {
    title: { es: "Primal", en: "Primal" },
    type: "series",
    year: "2019–",
    genre: { es: "Animación", en: "Animation" },
    rating: 0,
    synopsis: {
      es: "Un hombre de las cavernas forma un vínculo con un dinosaurio mientras luchan por sobrevivir en un mundo hostil.",
      en: "A caveman forms a bond with a dinosaur as they struggle to survive in a hostile world.",
    },
    posterUrl: "https://image.tmdb.org/t/p/w780/evxTYlsABHvKkLBtwYqlW3HYnHw.jpg",
  },
];

export const music: MusicEntry[] = [
  {
    artist: "R.E.M.",
    genre: { es: "Rock", en: "Rock" },
    albumTitle: "Out of Time",
    songTitle: "Losing My Religion",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/af/be/f5/afbef592-8f00-fe28-8ab4-5c070827b2f8/mzaf_4959761764791628207.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/05/ae/86/05ae8650-7bce-2377-8959-78ea033a99d9/00888072013711.rgb.jpg/1200x1200bb.jpg",
  },
  {
    artist: "Maná",
    genre: { es: "Rock en español", en: "Spanish rock" },
    albumTitle: "Sueños Líquidos",
    songTitle: "Rayando el Sol",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3f/01/86/3f0186bb-c33c-2d9e-0438-0eebdb8ed03d/mzaf_13744697863124499124.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a3/39/fd/a339fdf6-e8f6-0a88-8799-b1db02c3aee9/mzi.nvqsivqv.jpg/1200x1200bb.jpg",
  },
  {
    artist: "Guns N' Roses",
    genre: { es: "Hard Rock", en: "Hard Rock" },
    albumTitle: "Appetite for Destruction",
    songTitle: "Sweet Child O' Mine",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0d/cb/f3/0dcbf381-7cbf-78b8-7f74-d5789adf65a1/mzaf_17081805577020235844.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/1200x1200bb.jpg",
  },
  {
    artist: "Nirvana",
    genre: { es: "Grunge", en: "Grunge" },
    albumTitle: "Nirvana",
    songTitle: "Smells Like Teen Spirit",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/53/1e/a6531efa-397c-eb73-ecab-9b2790c1471e/mzaf_16440344883389407474.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7b/58/c2/7b58c21a-2b51-2bb2-e59a-9bb9b96ad8c3/00602567924166.rgb.jpg/1200x1200bb.jpg",
  },
  {
    artist: "Coldplay",
    genre: { es: "Alternativo", en: "Alternative" },
    albumTitle: "Viva la Vida",
    songTitle: "Viva La Vida",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2b/04/65/2b0465c3-2db1-e461-2362-14b528456b8f/mzaf_1805426141027060154.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/fa/41/1c/fa411c37-7a65-8a3e-71c9-4b566c49617c/5099967983858_1562x1562_300dpi.jpg/1200x1200bb.jpg",
  },
  {
    artist: "Bad Bunny",
    genre: { es: "Urbano latino", en: "Latin urban" },
    albumTitle: "Un Verano Sin Ti",
    songTitle: "Tití Me Preguntó",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/61/8e/2d/618e2d09-d6e5-1864-92b3-b5ea326bc1a9/mzaf_18353592973487747406.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/1200x1200bb.jpg",
  },
  {
    artist: "Mora",
    genre: { es: "Urbano latino", en: "Latin urban" },
    albumTitle: "MICRODOSIS",
    songTitle: "Ansiedades",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/63/ca/49/63ca49dc-ee5d-e21b-2060-ce206030b15c/mzaf_15868602792766205870.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/5b/4f/71/5b4f715a-5323-cc45-382a-7d0b4b69f418/196626706898.jpg/1200x1200bb.jpg",
  },
  {
    artist: "Rauw Alejandro",
    genre: { es: "Urbano latino", en: "Latin urban" },
    albumTitle: "Afrodisíaco",
    songTitle: "Todo De Ti",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/2a/9c/b82a9cb8-d924-a82d-d3a8-94620ae18a5e/mzaf_1632029121505329438.plus.aac.p.m4a",
    coverUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/35/85/36/3585365d-4678-0648-1bfd-76ea49ba8c9c/886448841388.jpg/1200x1200bb.jpg",
  },
  // TODO: add the reggaeton artist previously written as "ladio carrion" once the correct name is confirmed.
];
