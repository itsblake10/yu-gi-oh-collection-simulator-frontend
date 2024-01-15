import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import BoosterModal from "./BoosterModal/BoosterModal";
import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedBooster, setSelectedBooster] = useState({});

  const handleSelectBooster = (item) => {
    setActiveModal("booster");
    setSelectedBooster(item);
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  return (
    <div className="App">
      <Header />
      <Main onSelectBooster={handleSelectBooster} />
      <Footer />
      {activeModal === "booster" && (
        <BoosterModal
          selectedBooster={selectedBooster}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
