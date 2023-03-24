import { useEffect, useState } from "react";

const useDrinksData = (url) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks));
  }, []);

  return { drinks, setDrinks };
};

export default useDrinksData;
