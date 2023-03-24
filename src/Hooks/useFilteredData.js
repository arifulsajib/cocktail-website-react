import { useEffect, useState } from "react";

const useFilteredData = () => {
  const [filteredDrinks, setFilteredDrink] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
      .then((res) => res.json())
      .then((data) => setFilteredDrink(data.drinks));
  }, []);

  return { filteredDrinks, setFilteredDrink };
};

export default useFilteredData;
