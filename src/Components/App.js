import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import BoosterPage from "./BoosterPage/BoosterPage";
import Footer from "./Footer/Footer";
import FormModal from "./FormModal/FormModal";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
// import { boosterPacks } from "../utils/boosterPackData";

function App() {
  const [activeModal, setActiveModal] = useState("");
  // const [selectedBooster, setSelectedBooster] = useState({});

  const handleClickSigninSignup = () => {
    setActiveModal("signinSignup");
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
      <Header onClickSigninSignup={handleClickSigninSignup} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/booster-page/:id">
          <BoosterPage />
        </Route>
      </Switch>
      <Footer />
      {activeModal === "signinSignup" && (
        <FormModal onClose={handleModalClose} title="Sign Up" />
      )}
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
