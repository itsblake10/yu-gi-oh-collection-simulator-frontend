const cardsBaseUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const cardSetsBaseUrl = "https://db.ygoprodeck.com/api/v7/cardsets.php";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getBoosterPackCardData = (name) => {
  return fetch(`${cardsBaseUrl}?cardset=${encodeURIComponent(name)}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getAllBoosterPacks = () => {
  return fetch(`${cardSetsBaseUrl}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getAllCards = () => {
  return fetch(`${cardsBaseUrl}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    return checkResponse(res);
  });
};
