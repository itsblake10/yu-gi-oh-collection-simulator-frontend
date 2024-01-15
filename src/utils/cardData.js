/* -------------------------------------------------------------------------- */
/*                               CARD IMAGES                               */
/* -------------------------------------------------------------------------- */

/* ----------------------------------- LOB ---------------------------------- */
import triHornedDragon from "../images/LOB-cards/triHornedDragon-LOB.png";
import blueEyesWhiteDragon from "../images/LOB-cards/blueEyesWhiteDragon-LOB.png";
import hitotsuMeGiant from "../images/LOB-cards/hitotsuMeGiant-LOB.png";
import flameSwordsman from "../images/LOB-cards/flameSwordsman-LOB.png";
import skullServant from "../images/LOB-cards/skullServant-LOB.png";
import darkMagician from "../images/LOB-cards/darkMagician-LOB.png";
import gaiaTheFierceKnight from "../images/LOB-cards/gaiaTheFierceKnight-LOB.png";

/* -------------------------------------------------------------------------- */
/*                                CARDS                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------- LOB CARDS ------------------------------- */

const lobCards = [
  //Tri-Horned Dragon
  {
    _id: 0,
    name: "Tri-Horned Dragon",
    code: "LOB-000",
    cardImage: triHornedDragon,
    rarity: "Secret Rare (SE)",
    cardType: "Dragon/Normal Monster",
    attribute: "DARK",
    level: 8,
    atk: 2850,
    def: 2350,
    description:
      "An unworthy dragon with three sharp horns sprouting from its head.",
  },

  //Blue-Eyes White Dragon
  {
    _id: 1,
    name: "Blue-Eyes White Dragon",
    code: "LOB-001",
    cardImage: blueEyesWhiteDragon,
    rarity: "Ultra Rare (UR)",
    cardType: "Dragon/Normal Monster",
    attribute: "LIGHT",
    level: 8,
    atk: 3000,
    def: 2500,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
  },

  //Hitotsu-Me Giant
  {
    _id: 2,
    name: "Hitotsu-Me Giant",
    code: "LOB-002",
    cardImage: hitotsuMeGiant,
    rarity: "Common (C)",
    cardType: "Beast-Warrior/Normal Monster",
    attribute: "EARTH",
    level: 4,
    atk: 1200,
    def: 1000,
    description:
      "A one-eyed behemoth with thick, powerful arms made for delivering punishing blows.",
  },

  //Flame Swordsman
  {
    _id: 3,
    name: "Flame Swordsman",
    code: "LOB-003",
    cardImage: flameSwordsman,
    rarity: "Super Rare (SR)",
    cardType: "Warrior/Fusion Monster",
    attribute: "FIRE",
    level: 5,
    atk: 1800,
    def: 1600,
    description: "Flame Manipulator + Masaki the Legendary Swordsman",
  },

  //Skull Servant
  {
    _id: 4,
    name: "Skull Servant",
    code: "LOB-004",
    cardImage: skullServant,
    rarity: "Common (C)",
    cardType: "Zombie/Normal Monster",
    attribute: "DARK",
    level: 1,
    atk: 300,
    def: 200,
    description:
      "A skeletal ghost that isn't strong but can mean trouble in large numbers.",
  },

  //Dark Magician
  {
    _id: 5,
    name: "Dark Magician",
    code: "LOB-005",
    cardImage: darkMagician,
    rarity: "Ultra Rare (UR)",
    cardType: "Spellcaster/Normal Monster",
    attribute: "DARK",
    level: 7,
    atk: 2500,
    def: 2100,
    description: "The ultimate wizard in terms of attack and defense.",
  },

  //Gaia The Fierce Knight
  {
    _id: 6,
    name: "Gaia The Fierce Knight",
    code: "LOB-006",
    cardImage: gaiaTheFierceKnight,
    rarity: "Ultra Rare (UR)",
    cardType: "Warrior/Normal Monster",
    attribute: "EARTH",
    level: 7,
    atk: 2300,
    def: 2100,
    description:
      "A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with.",
  },
];

export default lobCards;
