import ProfileStats from "../ProfileStats/ProfileStats";
import "./ProfileAccount.css";
import blueEyesWhiteDragon from "../../images/LOB-cards/blueEyesWhiteDragon-LOB.png";
// import ItemCard from "../ItemCard/ItemCard";

const ProfileAccount = ({
  onClickChangeUsername,
  onClickChangeAvatar,
  onClickChangeEmail,
  onClickChangePassword,
}) => {
  return (
    <main className="profile-account__page">
      <h1 className="profile-account__title">Profile/Account</h1>
      <div className="profile-account__page-background">
        <div className="profile-account__container">
          <div className="profile-account__settings">
            <div className="profile-account__user-profile">
              <div className="profile-account__user-image-container">
                <img
                  className="profile-account__user-image"
                  src={blueEyesWhiteDragon}
                />
              </div>
              <p className="profile-account__username">
                username123xdfdsfsdfsdfsdf
              </p>
            </div>
            <div className="profile-account__buttons">
              <button
                className="profile-account__button"
                onClick={onClickChangeUsername}
              >
                Change Username
              </button>
              <button
                className="profile-account__button"
                onClick={onClickChangeAvatar}
              >
                Change Avatar
              </button>
              <button
                className="profile-account__button"
                onClick={onClickChangeEmail}
              >
                Change Email
              </button>
              <button
                className="profile-account__button"
                onClick={onClickChangePassword}
              >
                Change Password
              </button>
            </div>
          </div>
          <ProfileStats />
        </div>
      </div>
    </main>
  );
};

export default ProfileAccount;
