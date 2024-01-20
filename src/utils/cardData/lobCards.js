/* -------------------------------------------------------------------------- */
/*                               CARD IMAGES                               */
/* -------------------------------------------------------------------------- */

/* ------------------------------- LOB Images ------------------------------- */
import triHornedDragon from "../../images/LOB-cards/triHornedDragon-LOB.png";
import blueEyesWhiteDragon from "../../images/LOB-cards/blueEyesWhiteDragon-LOB.png";
import hitotsuMeGiant from "../../images/LOB-cards/hitotsuMeGiant-LOB.png";
import flameSwordsman from "../../images/LOB-cards/flameSwordsman-LOB.png";
import skullServant from "../../images/LOB-cards/skullServant-LOB.png";
import darkMagician from "../../images/LOB-cards/darkMagician-LOB.png";
import gaiaTheFierceKnight from "../../images/LOB-cards/gaiaTheFierceKnight-LOB.png";
import celticGuardian from "../../images/LOB-cards/celticGuardian-LOB.png";
import basicInsect from "../../images/LOB-cards/basicInsect-LOB.png";
import mammothGraveyard from "../../images/LOB-cards/mammothGraveyard-LOB.png";
import silverFang from "../../images/LOB-cards/silverFang-LOB.png";
import darkGray from "../../images/LOB-cards/darkGray-LOB.png";
import trialOfNightmare from "../../images/LOB-cards/trialOfNightmare-LOB.png";
import nemuriko from "../../images/LOB-cards/nemuriko-LOB.png";
import the13thGrave from "../../images/LOB-cards/the13thGrave-LOB.png";
import charubinTheFireKnight from "../../images/LOB-cards/charubinTheFireKnight-LOB.png";
import flameManipulator from "../../images/LOB-cards/flameManipulator-LOB.png";
import monsterEgg from "../../images/LOB-cards/monsterEgg-LOB.png";
import firegrass from "../../images/LOB-cards/fireGrass-LOB.png";
import darkfireDragon from "../../images/LOB-cards/darkfireDragon-LOB.png";
import darkKingOfTheAbyss from "../../images/LOB-cards/darkKingOfTheAbyss-LOB.png";
import fiendReflection2 from "../../images/LOB-cards/fiendReflection2-LOB.png";
import fusionist from "../../images/LOB-cards/fusionist-LOB.png";
import turtleTiger from "../../images/LOB-cards/turtleTiger-LOB.png";
import petitDragon from "../../images/LOB-cards/petitDragon-LOB.png";
import petitAngel from "../../images/LOB-cards/petitAngel-LOB.png";

/* -------------------------------------------------------------------------- */
/*                                CARDS                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------- LOB CARDS ------------------------------- */

const lobCards = [
  //Tri-Horned Dragon
  {
    _id: 0,
    code: "LOB-000",
    name: "Tri-Horned Dragon",
    rarity: "Secret Rare (SE)",
    cardType: "Monster",
    types: "Dragon/Normal Monster",
    attribute: "DARK",
    level: 8,
    atk: 2850,
    def: 2350,
    description:
      "An unworthy dragon with three sharp horns sprouting from its head.",
    cardImage: triHornedDragon,
  },

  //Blue-Eyes White Dragon
  {
    _id: 1,
    code: "LOB-001",
    name: "Blue-Eyes White Dragon",
    rarity: "Ultra Rare (UR)",
    cardType: "Monster",
    types: "Dragon/Normal Monster",
    attribute: "LIGHT",
    level: 8,
    atk: 3000,
    def: 2500,
    description:
      "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
    cardImage: blueEyesWhiteDragon,
  },

  //Hitotsu-Me Giant
  {
    _id: 2,
    code: "LOB-002",
    name: "Hitotsu-Me Giant",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Beast-Warrior/Normal Monster",
    attribute: "EARTH",
    level: 4,
    atk: 1200,
    def: 1000,
    description:
      "A one-eyed behemoth with thick, powerful arms made for delivering punishing blows.",
    cardImage: hitotsuMeGiant,
  },

  //Flame Swordsman
  {
    _id: 3,
    code: "LOB-003",
    name: "Flame Swordsman",
    rarity: "Super Rare (SR)",
    cardType: "Monster",
    types: "Warrior/Fusion Monster",
    attribute: "FIRE",
    level: 5,
    atk: 1800,
    def: 1600,
    description: "Flame Manipulator + Masaki the Legendary Swordsman",
    cardImage: flameSwordsman,
  },

  //Skull Servant
  {
    _id: 4,
    code: "LOB-004",
    name: "Skull Servant",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Zombie/Normal Monster",
    attribute: "DARK",
    level: 1,
    atk: 300,
    def: 200,
    description:
      "A skeletal ghost that isn't strong but can mean trouble in large numbers.",
    cardImage: skullServant,
  },

  //Dark Magician
  {
    _id: 5,
    code: "LOB-005",
    name: "Dark Magician",
    rarity: "Ultra Rare (UR)",
    cardType: "Monster",
    types: "Spellcaster/Normal Monster",
    attribute: "DARK",
    level: 7,
    atk: 2500,
    def: 2100,
    description: "The ultimate wizard in terms of attack and defense.",
    cardImage: darkMagician,
  },

  //Gaia The Fierce Knight
  {
    _id: 6,
    code: "LOB-006",
    name: "Gaia The Fierce Knight",
    rarity: "Ultra Rare (UR)",
    cardType: "Monster",
    types: "Warrior/Normal Monster",
    attribute: "EARTH",
    level: 7,
    atk: 2300,
    def: 2100,
    description:
      "A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with.",
    cardImage: gaiaTheFierceKnight,
  },

  //Celtic Guardian
  {
    _id: 7,
    code: "LOB-007",
    name: "Celtic Guardian",
    rarity: "Super Rare (SR)",
    cardType: "Monster",
    types: "Warrior/Normal Monster",
    attribute: "EARTH",
    level: 4,
    atk: 1400,
    def: 1200,
    description:
      "An elf who learned to wield a sword, he baffles enemies with lightning-swift attacks.",
    cardImage: celticGuardian,
  },

  //Basic Insect
  {
    _id: 8,
    code: "LOB-008",
    name: "Basic Insect",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Insect/Normal Monster",
    attribute: "EARTH",
    level: 2,
    atk: 500,
    def: 700,
    description:
      "Usually found traveling in swarms, this creature's ideal environment is the forest.",
    cardImage: basicInsect,
  },

  //Mammoth Graveyard
  {
    _id: 9,
    code: "LOB-009",
    name: "Mammoth Graveyard",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Dinosaur/Normal Monster",
    attribute: "EARTH",
    level: 3,
    atk: 1200,
    def: 800,
    description:
      "A mammoth that protects the graves of its pack and is absolutely merciless when facing grave-robbers.",
    cardImage: mammothGraveyard,
  },

  //Silver Fang
  {
    _id: 10,
    code: "LOB-010",
    name: "Silver Fang",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Beast/Normal Monster",
    attribute: "EARTH",
    level: 3,
    atk: 1200,
    def: 800,
    description:
      "A snow wolf that's beautiful to the eye, but absolutely vicious in battle.",
    cardImage: silverFang,
  },

  //Dark Gray
  {
    _id: 11,
    code: "LOB-011",
    name: "Dark Gray",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Beast/Normal Monster",
    attribute: "EARTH",
    level: 3,
    atk: 800,
    def: 900,
    description:
      "Entirely gray, this beast has rarely been seen by mortal eyes.",
    cardImage: darkGray,
  },

  //Trial of Nightmare
  {
    _id: 12,
    code: "LOB-012",
    name: "Trial of Nightmare",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Fiend/Normal Monster",
    attribute: "DARK",
    level: 4,
    atk: 1300,
    def: 900,
    description:
      "This fiend passes judgment on enemies that are locked in coffins.",
    cardImage: trialOfNightmare,
  },

  //Nemuriko
  {
    _id: 13,
    code: "LOB-013",
    name: "Nemuriko",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Spellcaster/Normal Monster",
    attribute: "DARK",
    level: 3,
    atk: 800,
    def: 700,
    description:
      "A child-like creature that controls a sleep fiend to beckon enemies into eternal slumber.",
    cardImage: nemuriko,
  },

  //The 13th Grave
  {
    _id: 14,
    code: "LOB-014",
    name: "The 13th Grave",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Zombie/Normal Monster",
    attribute: "DARK",
    level: 3,
    atk: 1200,
    def: 900,
    description:
      "A zombie that suddenly appeared from plot #13 - an empty grave.",
    cardImage: the13thGrave,
  },

  //Charubin the Fire Knight
  {
    _id: 15,
    code: "LOB-015",
    name: "Charubin the Fire Knight",
    rarity: "Rare (R)",
    cardType: "Monster",
    types: "Pyro/Fusion Monster",
    attribute: "FIRE",
    level: 3,
    atk: 1100,
    def: 800,
    description: "Monster Egg + Hinotama Soul",
    cardImage: charubinTheFireKnight,
  },

  //Flame Manipulator
  {
    _id: 16,
    code: "LOB-016",
    name: "Flame Manipulator",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Spellcaster/Normal Monster",
    attribute: "FIRE",
    level: 3,
    atk: 900,
    def: 1000,
    description:
      "This Spellcaster attacks enemies with fire-related spells such as Sea of Flames and Wall of Fire.",
    cardImage: flameManipulator,
  },

  //Monster Egg
  {
    _id: 17,
    code: "LOB-017",
    name: "Monster Egg",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Warrior/Normal Monster",
    attribute: "EARTH",
    level: 3,
    atk: 600,
    def: 900,
    description:
      "A warrior hidden within an egg that attacks enemies by flinging eggshells.",
    cardImage: monsterEgg,
  },

  //Firegrass
  {
    _id: 18,
    code: "LOB-018",
    name: "Firegrass",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Plant/Normal Monster",
    attribute: "EARTH",
    level: 2,
    atk: 700,
    def: 600,
    description: "A fire-breathing plant found growing near volcanoes.",
    cardImage: firegrass,
  },

  //Darkfire Dragon
  {
    _id: 19,
    code: "LOB-019",
    name: "Darkfire Dragon",
    rarity: "Rare (R)",
    cardType: "Monster",
    types: "Dragon/Fusion Monster",
    attribute: "DARK",
    level: 4,
    atk: 1500,
    def: 1250,
    description: "Firegrass + Petit Dragon",
    cardImage: darkfireDragon,
  },

  //Dark King of the Abyss
  {
    _id: 20,
    code: "LOB-020",
    name: "Dark King of the Abyss",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Fiend/Normal Monster",
    attribute: "DARK",
    level: 3,
    atk: 1200,
    def: 800,
    description:
      "It's said that this King of the Netherworld once had the power to rule over the dark.",
    cardImage: darkKingOfTheAbyss,
  },

  //Fiend Reflection #2
  {
    _id: 21,
    code: "LOB-021",
    name: "Fiend Reflection #2",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Winged Beast/Normal Monster",
    attribute: "LIGHT",
    level: 4,
    atk: 1100,
    def: 1400,
    description: "A bird-beast that summons reinforcements with a hand mirror.",
    cardImage: fiendReflection2,
  },

  //Fusionist
  {
    _id: 22,
    code: "LOB-022",
    name: "Fusionist",
    rarity: "Rare (R)",
    cardType: "Monster",
    types: "Beast/Fusion Monster",
    attribute: "EARTH",
    level: 3,
    atk: 900,
    def: 700,
    description: "Petit Angel + Mystical Sheep #2",
    cardImage: fusionist,
  },

  //Turtle Tiger
  {
    _id: 23,
    code: "LOB-023",
    name: "Turtle Tiger",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Aqua/Normal Monster",
    attribute: "WATER",
    level: 4,
    atk: 1000,
    def: 1500,
    description:
      "A tiger encased in a protective shell that attacks with razor-sharp fangs.",
    cardImage: turtleTiger,
  },

  //Petit Dragon
  {
    _id: 24,
    code: "LOB-024",
    name: "Petit Dragon",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Dragon/Normal Monster",
    attribute: "WIND",
    level: 2,
    atk: 600,
    def: 700,
    description: "A very small dragon known for its vicious attacks.",
    cardImage: petitDragon,
  },

  //Petit Angel
  {
    _id: 25,
    code: "LOB-025",
    name: "Petit Angel",
    rarity: "Common (C)",
    cardType: "Monster",
    types: "Fairy/Normal Monster",
    attribute: "LIGHT",
    level: 3,
    atk: 600,
    def: 900,
    description: "A quick-moving and tiny fairy that's very difficult to hit.",
    cardImage: petitAngel,
  },
];

export default lobCards;
