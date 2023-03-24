import { useEffect, useState } from "react";

const useFilteredData = () => {
  const [filteredDrinks, setFilteredDrink] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
      .then((res) => res.json())
      .then((data) => {
        setFilteredDrink(data.drinks);
        setLoading(false);
      });
  }, []);

  return { filteredDrinks, setFilteredDrink, loading };
};

export default useFilteredData;
