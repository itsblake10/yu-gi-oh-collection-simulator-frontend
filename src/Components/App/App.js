import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import BoosterPage from "../BoosterPage/BoosterPage";
import ProfileAccount from "../ProfileAccount/ProfileAccount";
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

  const handleClickTOS = () => {
    setActiveModal("TOS");
  };

  const handleClickCopyright = () => {
    setActiveModal("copyright");
  };

  const handleClickCardInfo = () => {
    setActiveModal("card-info");
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
        <Route
          path="/booster-page/:id"
          render={(props) => (
            <BoosterPage {...props} onClickCardInfo={handleClickCardInfo} />
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
            />
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
        <CardInfoModal onClose={handleModalClose} />
      )}
      {activeModal === "change-username" && (
        <ChangeUsernameModal onClose={handleModalClose} buttonText={"Submit"} />
      )}
      {activeModal === "change-avatar" && (
        <ChangeAvatarModal onClose={handleModalClose} buttonText={"Submit"} />
      )}
      {activeModal === "change-email" && (
        <ChangeEmailModal onClose={handleModalClose} buttonText={"Submit"} />
      )}
      {activeModal === "change-password" && (
        <ChangePasswordModal onClose={handleModalClose} buttonText={"Submit"} />
      )}
    </div>
  );
}

export default App;

/* ------------------------------------ x ----------------------------------- */
