import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import BoosterPage from "../BoosterPage/BoosterPage";
import Footer from "../Footer/Footer";
import FormModal from "../FormModal/FormModal";
import { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import { boosterPacks } from "../utils/boosterPackData";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function App() {
  const [activeModal, setActiveModal] = useState("");
  // const [selectedBooster, setSelectedBooster] = useState({});

  const handleClickSignin = () => {
    setActiveModal("signin");
  };

  const handleClickSignup = () => {
    setActiveModal("signup");
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
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/booster-page/:id" component={BoosterPage} />
        </Switch>
      </Router>
      <Footer />
      {activeModal === "signin" && (
        <FormModal onClose={handleModalClose} title="Sign In" />
      )}
      {activeModal === "signup" && (
        <FormModal onClose={handleModalClose} title="Sign Up" />
      )}
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
