/* -------------------------------------------------------------------------- */
/*                               CARD IMAGES                               */
/* -------------------------------------------------------------------------- */

/* ----------------------------------- LOB ---------------------------------- */
import BlueEyesWhiteDragon from "../images/LOB-cards/BlueEyesWhiteDragon-LOB.png";

/* -------------------------------------------------------------------------- */
/*                                CARDS                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------- LOB CARDS ------------------------------- */

const lobCards = [
  //Hitotsu-Me Giant
  {
    name: "Hitotsu-Me Giant",
    code: "LOB-002",
    cardImage: BlueEyesWhiteDragon,
    rarity: "Common (C)",
    cardType: "Beast-Warrior/Normal Monster",
    attribute: "EARTH",
    level: 4,
    atk: 1200,
    def: 1000,
    description:
      "A one-eyed behemoth with thick, powerful arms made for delivering punishing blows.",
  },

  //Skull Servant
  {
    name: "Skull Servant",
    code: "LOB-004",
    cardImage: "",
    rarity: "Common (C)",
    cardType: "Zombie/Normal Monster",
    attribute: "DARK",
    level: 1,
    atk: 300,
    def: 200,
    description:
      "A skeletal ghost that isn't strong but can mean trouble in large numbers.",
  },
];

export default lobCards;
