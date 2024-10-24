import ProfileStats from "../ProfileStats/ProfileStats";
import "./ProfileAccount.css";
import Armaill from "../../images/temp/Armaill.jpg";

const ProfileAccount = ({
  onClickChangeUsername,
  onClickChangeAvatar,
  onClickChangeEmail,
  onClickChangePassword,
  onClickCardInfo,
}) => {
  const username = "usernaNAMdfsdf34dsdfsdFF";
  const isLongUsername = username.length > 17;

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
                  src={Armaill}
                  alt="user profile"
                />
              </div>
              <div className="profile-account__username-container">
                <p className="profile-account__username">{username}</p>
                {isLongUsername && (
                  <span className="profile-account__username_tooltip">
                    {username}
                  </span>
                )}
              </div>
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
          <ProfileStats onClickCardInfo={onClickCardInfo} />
        </div>
      </div>
    </main>
  );
};

export default ProfileAccount;
