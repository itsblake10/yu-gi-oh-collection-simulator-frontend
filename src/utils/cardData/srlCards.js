/* -------------------------------------------------------------------------- */
/*                               CARD IMAGES                               */
/* -------------------------------------------------------------------------- */

/* ------------------------------- SRL Images ------------------------------- */
import blueEyesToonDragon from "../../images/SRL-cards/blueEyesToonDragon-SRL.png";

/* -------------------------------------------------------------------------- */
/*                                CARDS                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------- SRL CARDS ------------------------------- */

const srlCards = [
  //Blue-Eyes Toon Dragon
  {
    _id: 0,
    code: "SRL-000",
    name: "Blue-Eyes Toon Dragon",
    rarity: "Secret Rare (SE)",
    cardType: "Monster",
    types: "Dragon/Toon/Effect Monster",
    attribute: "LIGHT",
    level: 8,
    atk: 3000,
    def: 2500,
    description:
      "Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by Tributing 2 monsters, while you control Toon World. Cannot attack the turn it is Special Summoned. You must pay 500 LP to declare an attack with this monster. If Toon World on the field is destroyed, destroy this card. Can attack your opponent directly, unless they control a Toon monster, in which case this card must target a Toon monster for its attacks.",
    cardImage: blueEyesToonDragon,
  },
];

export default srlCards;
