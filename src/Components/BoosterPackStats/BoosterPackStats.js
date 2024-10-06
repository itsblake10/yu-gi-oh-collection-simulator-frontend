import "./BoosterPackStats.css";

const BoosterPackStats = ({ selectedBoosterPack }) => {
  return (
    <div className="booster__breakdown-container">
      <h2 className="booster__breakdown-title">Pack Breakdown</h2>
      <h3 className="booster__breakdown-pack-size">
        Pack Size:
        <span className="booster__breakdown-pack-size_color">
          {selectedBoosterPack.num_of_cards} Cards
        </span>
      </h3>
      <div className="booster__breakdown-list">
        <ul className="booster__breakdown-list_total">
          <p className="booster__list-container-title">
            Total: {selectedBoosterPack.num_of_cards}
          </p>
          <li className="booster__breakdown-list-item">
            Common:
            <p
              className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_bold"
              id="total-common"
            >
              {selectedBoosterPack.common}
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Rare:
            <p
              className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_bold"
              id="total-rare"
            >
              {selectedBoosterPack.rare}
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Super Rare:
            <p
              className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_bold"
              id="total-super-rare"
            >
              {selectedBoosterPack.superRare}
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Ultra Rare:
            <p
              className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_bold"
              id="total-ultra-rare"
            >
              {selectedBoosterPack.ultraRare}
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Secret Rare:
            <p
              className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_bold"
              id="total-secret-rare"
            >
              {selectedBoosterPack.secretRare}
            </p>
          </li>
        </ul>

        <ul className="booster__breakdown-list_opened">
          <p className="booster__list-container-title">
            Opened:
            <span className="booster__list-container-title_color">N/A</span>
          </p>
          <li className="booster__breakdown-list-item">
            Common:
            <p className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_color">
              N/A
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Rare:
            <p className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_color">
              N/A
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Super Rare:
            <p className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_color">
              N/A
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Ultra Rare:
            <p className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_color">
              N/A
            </p>
          </li>
          <li className="booster__breakdown-list-item">
            Secret Rare:
            <p className="booster__breakdown-list-qauntity booster__breakdown-list-qauntity_color">
              N/A
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BoosterPackStats;
