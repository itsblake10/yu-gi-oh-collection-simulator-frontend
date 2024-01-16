/* -------------------------------------------------------------------------- */
/*                               CARD IMAGES                               */
/* -------------------------------------------------------------------------- */

/* ------------------------------- MRD Images ------------------------------- */
import gateGuardian from "../../images/MRD-cards/gateGuardian-MRD.png";

/* -------------------------------------------------------------------------- */
/*                                CARDS                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------- MRD CARDS ------------------------------- */

const mrdCards = [
  //Gate Guardian
  {
    _id: 0,
    name: "Gate Guardian",
    code: "MRD-000",
    cardImage: gateGuardian,
    rarity: "Secret Rare (SE)",
    cardType: "Warrior/Effect Monster",
    attribute: "DARK",
    level: 11,
    atk: 3750,
    def: 3400,
    description:
      "Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by Tributing 1 Sanga of the Thunder, Kazejin, and Suijin. ",
  },
];

export default mrdCards;
