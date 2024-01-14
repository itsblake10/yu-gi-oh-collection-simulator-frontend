import lobCards from "./cardData";

/* -------------------------------------------------------------------------- */
/*                               BOOSTER IMAGES                               */
/* -------------------------------------------------------------------------- */

/* ----------------------------- #0 LOB BOOSTER IMAGE ----------------------------- */
import boosterPackLob from "../images/Booster Packs/LOB-BoosterNA.png";

/* ----------------------------- #1 MRD BOOSTER IMAGE ----------------------------- */
import boosterPackMrd from "../images/Booster Packs/MRD-BoosterNA.png";

/* ----------------------------- #2 SRL BOOSTER IMAGE ----------------------------- */
import boosterPackSrl from "../images/Booster Packs/SRL-BoosterNA.png";

/* ----------------------------- #3 PSV BOOSTER IMAGE ----------------------------- */
import boosterPackPsv from "../images/Booster Packs/PSV-BoosterNA.png";

/* ----------------------------- #4 LON BOOSTER IMAGE ----------------------------- */
import boosterPackLon from "../images/Booster Packs/LON-BoosterNA.png";

/* -------------------------------------------------------------------------- */
/*                                BOOSTER PACKS                               */
/* -------------------------------------------------------------------------- */

export const boosterPacks = [
  /* -------------------- #0 LEGEND OF BLUE EYES WHITE DRAGON (LOB) -------------------- */
  {
    _id: 0,
    name: "Legend of Blue Eyes White Dragon",
    code: "LOB",
    releaseDate: "March 8th 2002",
    releaseYear: 2002,
    boosterImage: boosterPackLob,
    cardList: lobCards,
    packSize: 9,
    totalCards: 126,
    common: 82,
    rare: 22,
    superRare: 10,
    ultraRare: 10,
    secretRare: 2,
  },

  /* ------------------------------#1 METAL RAIDERS (MRD) ----------------------------- */
  {
    _id: 1,
    name: "Metal Raiders",
    code: "MRD",
    releaseDate: "June 26th 2002",
    boosterImage: boosterPackMrd,
    packSize: 9,
    totalCards: 144,
    common: 100,
    rare: 22,
    superRare: 10,
    ultraRare: 10,
    secretRare: 2,
  },

  /* ---------------------- #2 MAGIC RULER / SPELL RULER (MRL/SRL) ---------------------- */
  {
    _id: 2,
    name: "Magic Ruler/Spell Ruler",
    code: "MRL / SRL",
    releaseDate: "September 26th 2002",
    boosterImage: boosterPackSrl,
    packSize: 9,
    totalCards: 104,
    common: 65,
    rare: 17,
    superRare: 10,
    ultraRare: 10,
    secretRare: 2,
  },

  /* ----------------------- #3 PHARAOH'S SERVANT (PSV) ----------------------- */
  {
    _id: 3,
    name: "Pharaoh's Servant",
    code: "PSV",
    releaseDate: "October 20th 2002",
    boosterImage: boosterPackPsv,
    packSize: 9,
    totalCards: 105,
    common: 66,
    rare: 17,
    superRare: 10,
    ultraRare: 10,
    secretRare: 2,
  },

  /* --------------------- #4 LABYRINTH OF NIGHTMARE (LON) -------------------- */
  {
    _id: 4,
    name: "Labyrinth of Nightmare",
    code: "LON",
    releaseDate: "March 1st 2003",
    boosterImage: boosterPackLon,
    packSize: 9,
    totalCards: 105,
    common: 66,
    rare: 17,
    superRare: 10,
    ultraRare: 10,
    secretRare: 2,
  },
];
