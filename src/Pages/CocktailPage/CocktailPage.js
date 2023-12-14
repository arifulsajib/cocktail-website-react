import React, { useState } from "react";
import { Row } from "react-bootstrap";
import DynamicDrink from "../../Components/DynamicDrink/DynamicDrink";
import separator from "../../Images/separator.jpg";
import useSearchedData from "../../Hooks/useSearchedData";
import Loading from "../../Components/Loading/Loading";

const CocktailPage = () => {
  const [searchValue, setSearchValue] = useState("m");
  const { drinks, loading, isError } = useSearchedData(searchValue);

  return (
    <section className="container my-4" style={{ minHeight: "90vh" }}>
      <div className="text-center">
        <input id="" type="text" className="mx-2 border-0 px-2 py-1 rounded" placeholder="Search Drink" onBlur={(e) => setSearchValue(e.target.value)} />
        <button className="btn btn-sm btn-light">Search</button>
      </div>
      <h4 className="text-center mt-3"> Total Drinks Found: {drinks != null ? drinks.length : 0} </h4>
      <img src={separator} alt="separator" className="w-100" />

      <Row xs={1} md={3} lg={4} className="g-4">
        {
          // loading
          loading && <Loading></Loading>
        }
        {
          // Api Error
          isError && <p className="text-center text-danger">Can not load data: Api Load Failed</p>
        }
        {
          //Dynamic Data
          drinks != null && drinks.map((drink) => <DynamicDrink key={drink.idDrink} drinkData={drink}></DynamicDrink>)
        }
      </Row>
    </section>
  );
};

export default CocktailPage;
