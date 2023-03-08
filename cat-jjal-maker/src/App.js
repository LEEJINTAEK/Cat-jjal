import React from "react";
import "./App.css";
import Title from "./components/Title";
import fetchCat from "./components/fetchCat";
import Favor from "./components/favor";
import MainCard from "./components/mainCard";
import Form from "./components/form";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const App = () => {
  const CAT = "https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react";

  const [catCounter, setCatCounter] = React.useState(() => {
    return jsonLocalStorage.getItem("catCounter") || 0;
  });
  const [catImage, setCatImage] = React.useState(CAT);
  const [favorites, setFavorites] = React.useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];
  });

  const alreadyFavor = favorites.includes(catImage);

  async function setInitialCat() {
    const newCat = await fetchCat("First cat");
    setCatImage(newCat);
  }

  React.useEffect(() => {
    setInitialCat();
  }, []);

  async function updateCat(value) {
    const newCat = await fetchCat(value);

    setCatImage(newCat);
    // setCatCounter(catCounter+1);
    setCatCounter((prev) => {
      jsonLocalStorage.setItem("catCounter", prev + 1);
      return prev + 1;
    });
  }
  function handleClick(props) {
    const nextFavorites = [...favorites, catImage];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }
  function titleText() {
    return catCounter === 0 ? "고영희 짤 생성기" : catCounter + "번째 고영희";
  }

  return (
    <div>
      <Title>{titleText()}</Title>
      <Form onUpdateCat={updateCat} />
      <MainCard
        img={catImage}
        onHandleClick={handleClick}
        alreadyFavor={alreadyFavor}
      />
      <Favor favorites={favorites} />
    </div>
  );
};

export default App;
