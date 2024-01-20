import "./HeaderProfile.css";

const HeaderProfile = ({ onClickSigninSignup }) => {
  return (
    <div className="header__profile">
      <button className="header__sign-in" onClick={onClickSigninSignup}>
        Sign In / Sign up
      </button>
      {/*<p>PROFILE</p> */}
    </div>
  );
};

export default HeaderProfile;
