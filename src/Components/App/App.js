import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import BoosterPage from "../BoosterPage/BoosterPage";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SignupModal from "../SignupModal/SignupModal";
// import { boosterPacks } from "../utils/boosterPackData";
// import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function App() {
  const [activeModal, setActiveModal] = useState("");
  // const [selectedBooster, setSelectedBooster] = useState({});

  const handleClickSignin = () => {
    setActiveModal("sign-in");
  };

  const handleClickSignup = () => {
    setActiveModal("sign-up");
  };

  // const handleSelectBooster = (item) => {
  //   setSelectedBooster(item);
  // };

  const handleModalClose = () => {
    setActiveModal("");
  };

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

  return (
    <div className="App">
      <Header
        onClickSignin={handleClickSignin}
        onClickSignup={handleClickSignup}
      />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/booster-page/:id" component={BoosterPage} />
      </Switch>
      <Footer />
      {/* {activeModal === "sign-in" && (
        <SigninModal onClose={handleModalClose} title="Sign-In" />
      )} */}
      {activeModal === "sign-up" && (
        <SignupModal onClose={handleModalClose} buttonText={"Sign Up"} />
      )}
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
