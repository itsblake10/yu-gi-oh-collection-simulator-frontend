import "./BoosterPackStats.css";

const BoosterPackStats = ({
  selectedBoosterCardList,
  packSize,
  totalCards,
}) => {
  const rarities = [
    { name: "Common", id: "common" },
    { name: "Short Print", id: "short-print" },
    { name: "Super Short Print", id: "super-short-print" },
    { name: "Rare", id: "rare" },
    { name: "Super Rare", id: "super-rare" },
    { name: "Ultra Rare", id: "ultra-rare" },
    { name: "Secret Rare", id: "secret-rare" },
    { name: "Ultimate Rare", id: "ultimate-rare" },
    { name: "Ghost Rare", id: "ghost-rare" },
    { name: "Ultra Rare Pharaoh's Rare", id: "ultra-rare-pharaoh's-rare" },
    { name: "Quarter Century Secret Rare", id: "quarter-century-secret-rare" },
    { name: "Premium Gold Rare", id: "premium-gold-rare" },
    { name: "Starfoil Rare", id: "starfoil-rare" },
    { name: "Starlight Rare", id: "starlight-rare" },
    { name: "Collectors Rare", id: "collectors-rare" },
    { name: "Platinum Secret Rare", id: "platinum-secret-rare" },
  ];

  const rarityCounts = rarities.map((rarity) => ({
    ...rarity,
    count: selectedBoosterCardList.filter(
      (card) => card.cardRarity.toLowerCase() === rarity.name.toLowerCase()
    ).length,
  }));

  const firstColumn = rarityCounts.slice(0, 8);
  const secondColumn = rarityCounts.slice(8);

  return (
    <div className="booster__progress-container">
      <p className="booster__breakdown-pack-size">
        Pack Size:
        <span className="booster__breakdown-pack-size_color">
          {packSize} Cards
        </span>
      </p>
      <p className="booster__breakdown-pack-size">
        Total Cards:
        <span className="booster__breakdown-pack-size_color">{totalCards}</span>
      </p>
      <p className="booster__breakdown-pack-size">
        Packs Opened:
        <span className="booster__breakdown-pack-size_color">---</span>
      </p>
      <h2 className="booster__progress-title">Pack Progress</h2>
      <h3 className="booster__list-container-title">
        Cards Obtained:
        <p className="booster__progress-pack-size_color">---</p>
        <span className="booster__progress-list-separator">/</span>
        <p className="booster__progress-list-qauntity" id="total-common">
          {totalCards}
        </p>
      </h3>

      <div className="booster__progress-list-container">
        <ul className="booster__progress-list">
          {firstColumn.map((rarity) => (
            <li key={rarity.id} className="booster__progress-list-item">
              {rarity.name}:
              <p className="booster__progress-list-qauntity booster__progress-list-qauntity_color">
                ---
              </p>
              <span className="booster__progress-list-separator">/</span>
              <p className="booster__progress-list-qauntity">{rarity.count}</p>
            </li>
          ))}
        </ul>
        <ul className="booster__progress-list">
          {secondColumn.map((rarity) => (
            <li key={rarity.id} className="booster__progress-list-item">
              {rarity.name}:
              <p className="booster__progress-list-qauntity booster__progress-list-qauntity_color">
                ---
              </p>
              <span className="booster__progress-list-separator">/</span>
              <p className="booster__progress-list-qauntity">{rarity.count}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BoosterPackStats;
