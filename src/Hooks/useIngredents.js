import { useEffect, useState } from "react";

const useIngredents = () => {
  const [ingredents, setIngredents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => {
        setIngredents(data.drinks);
        setLoading(false);
      });
  }, []);

  return { ingredents, setIngredents, loading };
};

export default useIngredents;
