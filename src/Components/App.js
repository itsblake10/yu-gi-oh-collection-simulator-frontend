import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import BoosterModal from "./BoosterModal/BoosterModal";
import FormModal from "./FormModal/FormModal";
import { useEffect, useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedBooster, setSelectedBooster] = useState({});

  const handleClickSigninSignup = () => {
    setActiveModal("signinSignup");
  };

  const handleSelectBooster = (item) => {
    setActiveModal("booster");
    setSelectedBooster(item);
  };

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
      <Main onSelectBooster={handleSelectBooster} />
      <Footer />
      {activeModal === "booster" && (
        <BoosterModal
          selectedBooster={selectedBooster}
          onClose={handleModalClose}
        />
      )}
      {activeModal === "signinSignup" && (
        <FormModal onClose={handleModalClose} title="Sign Up" />
      )}
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
