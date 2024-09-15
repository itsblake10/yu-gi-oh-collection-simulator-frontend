import "./Main.css";
import ItemBooster from "../ItemBooster/ItemBooster";
import { boosterPacks } from "../../utils/boosterPackData";
import SearchBar from "../SearchBar/SearchBar";

const Main = () => {
  return (
    <main className="home__page">
      <h1 className="home__title">Booster Packs</h1>
      <div className="home__container">
        <div className="home__grid-options">
          <SearchBar className="home__grid-searchbar" />
          <select className="home__grid-filter">
            <option className="home__grid-option" value="option1">
              Newest Release
            </option>
            <option className="home__grid-option" value="option2">
              Oldest Release
            </option>
          </select>
        </div>
        <ul className="home__grid">
          {boosterPacks.map((item) => (
            <ItemBooster item={item} key={item._id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
