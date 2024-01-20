/* -------------------------------------------------------------------------- */
/*                               CARD IMAGES                               */
/* -------------------------------------------------------------------------- */

/* ------------------------------- PSV Images ------------------------------- */
import jinzo from "../../images/PSV-cards/jinzo-PSV.png";

/* -------------------------------------------------------------------------- */
/*                                CARDS                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------- PSV CARDS ------------------------------- */

const psvCards = [
  //Jinzo
  {
    _id: 0,
    code: "PSV-000",
    name: "Jinzo",
    rarity: "Secret Rare (SE)",
    cardType: "Monster",
    types: "Machine/Effect Monster",
    attribute: "DARK",
    level: 6,
    atk: 2400,
    def: 1500,
    description:
      "Trap Cards, and their effects on the field, cannot be activated. Negate all Trap effects on the field.",
    cardImage: jinzo,
  },
];

export default psvCards;
