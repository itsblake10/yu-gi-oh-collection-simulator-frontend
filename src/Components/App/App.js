import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import BoosterPage from "../BoosterPage/BoosterPage";
import ProfileAccount from "../ProfileAccount/ProfileAccount";
import AllCards from "../AllCards/AllCards";
import SearchResults from "../SearchResults/SearchResults";
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
import { IsLoadingContext } from "../contexts/IsLoadingContext";
import { getAllBoosterPacks } from "../../utils/ygoProDeckApi";
import { getBoosterPackCardData } from "../../utils/ygoProDeckApi";
import { getAllCards } from "../../utils/ygoProDeckApi";
import { IsLoggedInContext } from "../contexts/isLoggedInContext";
// import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [boosterPacks, setBoosterPacks] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [selectedBooster, setSelectedBooster] = useState({});
  const [selectedBoosterCardList, setSelectedBoosterCardList] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [cardRarity, setCardRarity] = useState("");
  const [cardCode, setCardCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    getAllBoosterPacks()
      .then((data) => {
        setBoosterPacks(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getAllCards()
      .then(({ data }) => {
        setAllCards(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // CHANGE??
  useEffect(() => {
    if (!selectedBooster || !selectedBooster.set_name) {
      console.error("Selected booster is undefined or invalid.");
      return;
    }
    setIsLoading(true);
    getBoosterPackCardData(selectedBooster.set_name)
      .then(({ data }) => {
        setSelectedBoosterCardList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setIsLoading(false));
  }, [selectedBooster]);

  const handleSelectBooster = (item) => {
    setSelectedBooster(item);
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

  const handleClickCardInfo = (item, code, rarity) => {
    setActiveModal("card-info");
    setSelectedCard(item);
    setCardRarity(rarity);
    setCardCode(code);
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
      <IsLoadingContext.Provider value={{ isLoading }}>
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
            <Route
              path="/all-cards"
              render={(props) => (
                <AllCards
                  {...props}
                  onClickCard={handleClickCardInfo}
                  allCards={allCards}
                />
              )}
            />
            <Route
              path="/search-results"
              render={(props) => (
                <SearchResults {...props} onClickCard={handleClickCardInfo} />
              )}
            />
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
              cardCode={cardCode}
              cardRarity={cardRarity}
            />
          )}
          {activeModal === "change-username" && (
            <ChangeUsernameModal
              onClose={handleModalClose}
              buttonText={"Submit"}
            />
          )}
          {activeModal === "change-avatar" && (
            <ChangeAvatarModal
              onClose={handleModalClose}
              buttonText={"Submit"}
            />
          )}
          {activeModal === "change-email" && (
            <ChangeEmailModal
              onClose={handleModalClose}
              buttonText={"Submit"}
            />
          )}
          {activeModal === "change-password" && (
            <ChangePasswordModal
              onClose={handleModalClose}
              buttonText={"Submit"}
            />
          )}
        </IsLoggedInContext.Provider>
      </IsLoadingContext.Provider>
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
