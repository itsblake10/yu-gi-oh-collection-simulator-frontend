import "./Main.css";
import ItemBooster from "../ItemBooster/ItemBooster";
import { boosterPacks } from "../../utils/boosterPackData";

const Main = () => {
  return (
    <main className="home__page">
      <h1 className="home__title">Booster Packs</h1>
      <div className="home__container">
        <select className="home__grid-filter">
          <option className="home__grid-option">Newest Release</option>
          <option className="home__grid-option">Oldest Release</option>
        </select>
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
