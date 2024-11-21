import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import BoosterPage from "../BoosterPage/BoosterPage";
import ProfileAccount from "../ProfileAccount/ProfileAccount";
// import MyCards from "../MyCards/MyCards";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SignupModal from "../SignupModal/SignupModal";
import SigninModal from "../SigninModal/SigninModal";
import TOSModal from "../TOSModal/TOSModal";
import CopyrightModal from "../CopyrightModal/CopyrightModal";
import CardInfoModal from "../CardInfoModal/CardInfoModal";
import ChangeUsernameModal from "../ChangeUsernameModal/ChangeUsernameModal";
import ChangeAvatarModal from "../ChangeAvatarModal/ChangeAvatarModal";
import ChangeEmailModal from "../ChangeEmailModal/ChangeEmailModal";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import { boosterPackData } from "../../utils/BoosterPacks";
// import { IsLoadingContext } from "../contexts/IsLoadingContext";
import { getAllBoosterPacks } from "../../utils/ygoProDeckApi";
import { getBoosterPackCardData } from "../../utils/ygoProDeckApi";
import { IsLoggedInContext } from "../contexts/isLoggedInContext";
// import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [boosterPacks, setBoosterPacks] = useState([]);
  const [selectedBooster, setSelectedBooster] = useState(
    JSON.parse(localStorage.getItem("selectedBooster")) || {}
  );
  const [selectedBoosterCardList, setSelectedBoosterCardList] = useState(() => {
    const booster = JSON.parse(localStorage.getItem("selectedBooster"));
    return booster?.boosterPackName ? booster : {};
  });
  const [selectedCard, setSelectedCard] = useState({});
  const [isBoosterPacksLoading, setIsBoosterPacksLoading] = useState(false);
  const [isCardListLoading, setIsCardListLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedBooster", JSON.stringify(selectedBooster));
  }, [selectedBooster]);

  useEffect(() => {
    if (!activeModal) return;

    const handleModalEscClose = (event) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    const handleModalClickOutside = (event) => {
      if (event.target.classList.contains("modal")) {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleModalEscClose);
    document.addEventListener("mousedown", handleModalClickOutside);

    return () => {
      document.removeEventListener("keydown", handleModalEscClose);
      document.removeEventListener("mousedown", handleModalClickOutside);
    };
  }, [activeModal]);

  // GET ALL BOOSTER PACKS
  useEffect(() => {
    setIsBoosterPacksLoading(true);
    getAllBoosterPacks()
      .then((data) => {
        const formattedData = data.map((booster) => ({
          boosterPackCode: booster.set_code,
          boosterPackName: booster.set_name,
          boosterPackSize: boosterPackData[booster.set_code]?.packSize || "???",
          boosterPackReleaseDate: booster.tcg_date,
          boosterPackTotalCards: booster.num_of_cards,
          imageUrl: `/images/booster-packs-1/${booster.set_name.replace(
            /[:/\\?%*|"<>]/g,
            ""
          )}.jpg`,
        }));

        setBoosterPacks(formattedData);
      })
      .catch((error) => console.error("Error fetching booster packs", error))
      .finally(() => setIsBoosterPacksLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedBooster || !selectedBooster.boosterPackName) {
      console.error("Selected booster is undefined or invalid.");
      return;
    }
    setIsCardListLoading(true);

    // GET BOOSTER PACK CARDLIST
    getBoosterPackCardData(selectedBooster.boosterPackName)
      .then(({ data }) => {
        const formattedData = data.map((card) => {
          const cardSet = card.card_sets.find(
            (set) => set.set_name === selectedBooster.boosterPackName
          );

          return {
            cardCode: cardSet ? cardSet.set_code : "",
            cardRarity: cardSet ? cardSet.set_rarity : "",
            cardRarityCode: cardSet ? cardSet.set_rarity_code : "",
            cardName: card.name,
            cardType: card.type,
            cardRace: card.race,
            cardArchetype: card.archetype,
            cardTypes: card.humanReadableCardType,
            cardAttribute: card.attribute,
            cardLevel: card.level,
            cardAtk: card.atk,
            cardDef: card.def,
            cardDescription: card.desc,
            cardSets: card.card_sets,
            imageUrl: `/images/cards-1/${card.name
              .replace(/[:/\\?%*"<>|]/g, "")
              .replace(/#/g, "%23")}_${cardSet.set_code.split("-")[0]}.jpg`,
          };
        });
        setSelectedBoosterCardList(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setIsCardListLoading(false);
      })
      .finally(() => setIsCardListLoading(false));
  }, [selectedBooster]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 80,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleSelectBooster = (item) => {
    setSelectedBooster(item);
  };

  const handleClickCardInfo = (item) => {
    setActiveModal("card-info");
    setSelectedCard(item);
  };

  const handleClickSignin = () => {
    setActiveModal("sign-in");
  };

  const handleClickSignup = () => {
    setActiveModal("sign-up");
  };

  const handleClickTOS = () => {
    setActiveModal("TOS");
  };

  const handleClickCopyright = () => {
    setActiveModal("copyright");
  };

  const handleClickChangeUsername = () => {
    setActiveModal("change-username");
  };

  const handleClickChangeAvatar = () => {
    setActiveModal("change-avatar");
  };

  const handleClickChangeEmail = () => {
    setActiveModal("change-email");
  };

  const handleClickChangePassword = () => {
    setActiveModal("change-password");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  return (
    <div className="App">
      {/* <IsLoadingContext.Provider value={{ isLoading }}> */}
      <IsLoggedInContext.Provider value={{ isLoggedIn }}>
        <Header
          onClickSignin={handleClickSignin}
          onClickSignup={handleClickSignup}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Main
                {...props}
                boosterPacks={boosterPacks}
                onClickBoosterPack={handleSelectBooster}
                onScrollToTop={scrollToTop}
                onScrollToBottom={scrollToBottom}
                isBoosterPacksLoading={isBoosterPacksLoading}
              />
            )}
          />
          <Route
            path="/booster-page/:id"
            render={(props) => (
              <BoosterPage
                {...props}
                onClickCard={handleClickCardInfo}
                selectedBooster={selectedBooster}
                selectedBoosterCardList={selectedBoosterCardList}
                isCardListLoading={isCardListLoading}
                setIsCardListLoading={setIsCardListLoading}
              />
            )}
          />
          <Route
            path="/profile-account"
            render={(props) => (
              <ProfileAccount
                {...props}
                onClickChangeUsername={handleClickChangeUsername}
                onClickChangeAvatar={handleClickChangeAvatar}
                onClickChangeEmail={handleClickChangeEmail}
                onClickChangePassword={handleClickChangePassword}
                onClickCardInfo={handleClickCardInfo}
              />
            )}
          />
          {/* <Route
            path="/my-cards"
            render={(props) => (
              <MyCards {...props} onClickCard={handleClickCardInfo} />
            )}
          /> */}
        </Switch>
        <Footer
          onClickTOS={handleClickTOS}
          onClickCopyright={handleClickCopyright}
        />
        {activeModal === "sign-in" && (
          <SigninModal onClose={handleModalClose} buttonText={"Sign In"} />
        )}
        {activeModal === "sign-up" && (
          <SignupModal onClose={handleModalClose} buttonText={"Sign Up"} />
        )}
        {activeModal === "TOS" && <TOSModal onClose={handleModalClose} />}
        {activeModal === "copyright" && (
          <CopyrightModal onClose={handleModalClose} />
        )}
        {activeModal === "card-info" && (
          <CardInfoModal
            onClose={handleModalClose}
            selectedCard={selectedCard}
            selectedBooster={selectedBooster}
          />
        )}
        {activeModal === "change-username" && (
          <ChangeUsernameModal
            onClose={handleModalClose}
            buttonText={"Submit"}
          />
        )}
        {activeModal === "change-avatar" && (
          <ChangeAvatarModal onClose={handleModalClose} buttonText={"Submit"} />
        )}
        {activeModal === "change-email" && (
          <ChangeEmailModal onClose={handleModalClose} buttonText={"Submit"} />
        )}
        {activeModal === "change-password" && (
          <ChangePasswordModal
            onClose={handleModalClose}
            buttonText={"Submit"}
          />
        )}
      </IsLoggedInContext.Provider>
      {/* </IsLoadingContext.Provider> */}
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
