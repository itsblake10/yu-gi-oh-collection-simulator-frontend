import "./LoadingAnimation.css";
import yugiohCardBack from "../../images/yu-gi-oh-card-back.png";

const loadingAnimation = () => {
  return (
    <main className="booster__page">
      <div className="booster__container">
        <img className="loadingImg1" src={yugiohCardBack} />
        <img className="loadingImg2" src={yugiohCardBack} />
        <img className="loadingImg3" src={yugiohCardBack} />
        <img className="loadingImg4" src={yugiohCardBack} />
      </div>
    </main>
  );
};

export default loadingAnimation;
