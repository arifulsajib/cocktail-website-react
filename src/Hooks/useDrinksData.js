import { useEffect, useState } from "react";

const useDrinksData = (url) => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
        setLoading(false);
      });
  }, []);

  return { drinks, setDrinks, loading };
};

export default useDrinksData;
