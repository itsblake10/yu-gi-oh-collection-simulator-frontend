import "./LoadingAnimation.css";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.jpg";

const loadingAnimation = () => {
  return (
    <div className="loading__container">
      <img
        className="loading__image1"
        src={yugiohCardBack}
        alt="loading-card"
      />
      <img
        className="loading__image2"
        src={yugiohCardBack}
        alt="loading-card"
      />
      <img
        className="loading__image3"
        src={yugiohCardBack}
        alt="loading-card"
      />
      <img
        className="loading__image4"
        src={yugiohCardBack}
        alt="loading-card"
      />
    </div>
  );
};

export default loadingAnimation;
