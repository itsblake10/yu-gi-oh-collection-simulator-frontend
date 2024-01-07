import "./Footer.css";
import yugiohLogo from "../../images/yu-gi-oh-booster-sim-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <img
          className="footer__logo"
          src={yugiohLogo}
          alt="Yu-Gi-Oh Booster Pack Simulator Logo"
        />
        <ul className="footer__nav">
          <li className="footer__nav-item">Terms of Service</li>
          <li className="footer__nav-item">Copyright</li>
        </ul>
      </div>
      <p className="footer__copyright">© All Rights Reserved {currentYear}</p>
    </footer>
  );
};

export default Footer;
