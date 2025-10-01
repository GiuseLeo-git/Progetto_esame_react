import type { SearchItem } from "./SearchContext";

// Articoli dal sito
export const articles: SearchItem[] = [
  {
    id: 1,
    type: "articolo",
    title: "Consigli per la Pubblica Amministrazione",
    description: "Scopri come digitalizzare i servizi pubblici per una migliore fruizione da parte dei cittadini.",
  },
  {
    id: 2,
    type: "articolo",
    title: "Glossario dello Slang Italiano",
    description: "Una raccolta aggiornata dei termini gergali utilizzati nelle diverse regioni italiane.",
  },
  {
    id: 3,
    type: "articolo",
    title: "Attenzione alle Truffe Online",
    description: "Come riconoscere e difendersi dalle truffe più diffuse nel mondo digitale.",
  },
];

// Slang (da Article)
export const slangs: SearchItem[] = [
  { id: "s1", type: "slang", title: "omg", description: "oh my god" },
  { id: "s2", type: "slang", title: "tbh", description: "to be honest" },
  { id: "s3", type: "slang", title: "afk", description: "away from keyboard" },
  { id: "s4", type: "slang", title: "fomo", description: "fear of missing out" },
];

// Guide (da Section)
export const guides: SearchItem[] = [
  { id: "g1", type: "guida", title: "Guida SPID", description: "Sei interessato alla guida sugli slag? Clicca qui" },
  { id: "g2", type: "guida", title: "Guida PagoPA", description: "Sei interessato alla guida per pagare online? Clicca qui" },
  { id: "g3", type: "guida", title: "Guida Scam", description: "Vuoi sapere come difenderti dalle truffe online? Clicca qui" },
  { id: "g4", type: "guida", title: "Guida Poste Italiane", description: "Vuoi sapere come registrarti a poste italiane? Clicca qui" },
  { id: "g5", type: "guida", title: "Guida Phishing", description: "Vuoi sapere come difenderti dal phishing? Clicca qui" },
];

// Header PA
export const paHeader: SearchItem = {
  id: "pa-header",
  type: "pa",
  title: "Pubblica Amministrazione",
  description: "Scopri servizi, informazioni e guide utili per cittadini e imprese",
};

// Header Scam
export const scamHeader: SearchItem = {
  id: "scam-header",
  type: "scam",
  title: "Scam",
  description: "Scopri come difenderti dagli attacchi online",
};

// Header Slang
export const slangHeader: SearchItem = {
  id: "slang-header",
  type: "slang",
  title: "Slang",
  description: "Scopri il dizionario degli slang e termini colloquiali",
};

// Unisci tutto in un unico array
export const allSearchData: SearchItem[] = [
  ...articles,
  ...slangs,
  ...guides,
  paHeader,
  scamHeader,
  slangHeader,
];