import { useEffect, useState } from "react";

const useIngredents = () => {
  const [ingredents, setIngredents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => {
        setIngredents(data.drinks);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { ingredents, setIngredents, loading, isError };
};

export default useIngredents;
