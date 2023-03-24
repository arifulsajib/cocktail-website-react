import { useEffect, useState } from "react";

const useIngredents = () => {
  const [ingredents, setIngredents] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => setIngredents(data.drinks));
  }, []);

  return { ingredents, setIngredents };
};

export default useIngredents;
