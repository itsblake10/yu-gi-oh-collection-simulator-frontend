import "./ProfileStats.css";
import blueEyesWhiteDragon from "../../images/LOB-cards/blueEyesWhiteDragon-LOB.png";

const ProfileStats = () => {
  return (
    <div className="profile-stats__container">
      <h2 className="profile-stats__title">Stats</h2>
      <div className="profile-stats__general-stats">
        <div className="profile-stats__card-pulled-most">
          <img
            className="profile-stats__card-image"
            src={blueEyesWhiteDragon}
            alt="card"
          />
          <div className="profile-stats__card-pulled-most-container">
            <h3 className="profile-stats__sub-title">Card Pulled Most</h3>
            <ul className="profile-stats__list">
              <li className="profile-stats__list-item">
                Name:
                <span className="profile-stats__text_color">
                  Blue Eyes White Dragon
                </span>
              </li>
              <li className="profile-stats__list-item">
                Qauntity:
                <span className="profile-stats__text_color">13</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-stats__general">
          <h3 className="profile-stats__sub-title">General</h3>
          <ul className="profile-stats__list">
            <li className="profile-stats__list-item">
              Booster Packs Opened:
              <span className="profile-stats__text_color">54</span>
            </li>
            <li className="profile-stats__list-item">
              Unique Cards Pulled:
              <span className="profile-stats__text_color">264</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="profile-stats__all">
        <div className="profile-stats__rarity">
          <h3 className="profile-stats__sub-title">Rarity</h3>
          <ul className="profile-stats__list">
            <li className="profile-stats__list-item">
              Common Cards:
              <span className="profile-stats__text_color">85</span>
            </li>
            <li className="profile-stats__list-item">
              Rare Cards:
              <span className="profile-stats__text_color">64</span>
            </li>
            <li className="profile-stats__list-item">
              Super Rare Cards:
              <span className="profile-stats__text_color">42</span>
            </li>
            <li className="profile-stats__list-item">
              Ultra Rare Cards:
              <span className="profile-stats__text_color">24</span>
            </li>
            <li className="profile-stats__list-item">
              Secret Rare Cards:
              <span className="profile-stats__text_color">78</span>
            </li>
            <li className="profile-stats__list-item">
              Ghost Rare Cards:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              Quarter Century Rare Cards:
              <span className="profile-stats__text_color">7</span>
            </li>
          </ul>
        </div>

        <div className="profile-stats__card-types">
          <h3 className="profile-stats__sub-title">Card Types</h3>
          <ul className="profile-stats__list">
            <li className="profile-stats__list-item">
              Normal Monster Cards:
              <span className="profile-stats__text_color">122</span>
            </li>
            <li className="profile-stats__list-item">
              Effect Monster Cards:
              <span className="profile-stats__text_color">53</span>
            </li>
            <li className="profile-stats__list-item">
              Spell Cards:
              <span className="profile-stats__text_color">78</span>
            </li>
            <li className="profile-stats__list-item">
              Trap Cards:
              <span className="profile-stats__text_color">97</span>
            </li>
            <li className="profile-stats__list-item">
              Ritual Cards:
              <span className="profile-stats__text_color">14</span>
            </li>
          </ul>
        </div>

        <div className="profile-stats__booster">
          <h3 className="profile-stats__sub-title">Booster Packs Opened</h3>
          <select className="profile-stats__filter">
            <option className="profile-stats__filter-option" value="option1">
              Newest Release
            </option>
            <option className="profile-stats__filter-option" value="option2">
              Oldest Release
            </option>
          </select>
          <ul className="profile-stats__list">
            <li className="profile-stats__list-item">
              LOB:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              MRD:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              MRL/SRL:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              PSV:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              LON:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              LOB:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              LOB:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              LOB:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              LOB:
              <span className="profile-stats__text_color">12</span>
            </li>
            <li className="profile-stats__list-item">
              LOB:
              <span className="profile-stats__text_color">12</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
