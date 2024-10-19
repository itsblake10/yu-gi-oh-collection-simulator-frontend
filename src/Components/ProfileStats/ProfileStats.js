import "./ProfileStats.css";
import Armaill from "../../images/temp/Armaill.jpg";

const ProfileStats = ({ onClickCardInfo }) => {
  return (
    <div className="profile-stats__container">
      <h2 className="profile-stats__title">Stats</h2>
      <div className="profile-stats__general-stats">
        <div className="profile-stats__card-pulled-most">
          <img
            className="profile-stats__card-image"
            src={Armaill}
            alt="card"
            onClick={onClickCardInfo}
          />
          <div className="profile-stats__card-pulled-most-container">
            <h3 className="profile-stats__sub-title">Card Pulled Most</h3>
            <ul className="profile-stats__list">
              <li className="profile-stats__list-label">
                Name:
                <span className="profile-stats__list-item">
                  Blue Eyes White Dragon
                </span>
              </li>
              <li className="profile-stats__list-label">
                Qauntity:
                <span className="profile-stats__list-item">13</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-stats__general">
          <h3 className="profile-stats__sub-title">General</h3>
          <ul className="profile-stats__list">
            <li className="profile-stats__list-label">
              Booster Packs Opened:
              <span className="profile-stats__list-item">54</span>
            </li>
            <li className="profile-stats__list-label">
              Unique Cards Pulled:
              <span className="profile-stats__list-item">264</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="profile-stats__all">
        <div className="profile-stats__rarity">
          <h3 className="profile-stats__sub-title">Rarity</h3>
          <ul className="profile-stats__list">
            <li className="profile-stats__list-label">
              Common Cards:
              <span className="profile-stats__list-item">85</span>
            </li>
            <li className="profile-stats__list-label">
              Rare Cards:
              <span className="profile-stats__list-item">64</span>
            </li>
            <li className="profile-stats__list-label">
              Super Rare Cards:
              <span className="profile-stats__list-item">42</span>
            </li>
            <li className="profile-stats__list-label">
              Ultra Rare Cards:
              <span className="profile-stats__list-item">24</span>
            </li>
            <li className="profile-stats__list-label">
              Secret Rare Cards:
              <span className="profile-stats__list-item">78</span>
            </li>
            <li className="profile-stats__list-label">
              Ghost Rare Cards:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              Quarter Century Rare Cards:
              <span className="profile-stats__list-item">7</span>
            </li>
          </ul>
        </div>

        <div className="profile-stats__card-types">
          <h3 className="profile-stats__sub-title">Card Types</h3>
          <ul className="profile-stats__list">
            <li className="profile-stats__list-label">
              Normal Monster Cards:
              <span className="profile-stats__list-item">122</span>
            </li>
            <li className="profile-stats__list-label">
              Effect Monster Cards:
              <span className="profile-stats__list-item">53</span>
            </li>
            <li className="profile-stats__list-label">
              Spell Cards:
              <span className="profile-stats__list-item">78</span>
            </li>
            <li className="profile-stats__list-label">
              Trap Cards:
              <span className="profile-stats__list-item">97</span>
            </li>
            <li className="profile-stats__list-label">
              Ritual Cards:
              <span className="profile-stats__list-item">14</span>
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
            <li className="profile-stats__list-label">
              LOB:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              MRD:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              MRL/SRL:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              PSV:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              LON:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              LOB:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              LOB:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              LOB:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              LOB:
              <span className="profile-stats__list-item">12</span>
            </li>
            <li className="profile-stats__list-label">
              LOB:
              <span className="profile-stats__list-item">12</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
