import React from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useDrinksData from "../../Hooks/useDrinksData";
import separator from "../../Images/separator.jpg";
import DynamicDrink from "../DynamicDrink/DynamicDrink";
import Loading from "../Loading/Loading";
const HomeDrinks = () => {
  const { drinks, loading, isError } = useDrinksData("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
  //randomize
  const shuffledDrinks = drinks.sort(() => 0.5 - Math.random());

  return (
    <section className="container my-4">
      <img src={separator} alt="separator" className="w-100" />
      <p className="fs-5 me-3 my-auto text-center">Total Drinks: {drinks.length} </p>
      <img src={separator} alt="separator" className="w-100" />
      <div className="mt-3 text-center">
        <h3>Random Drinks</h3>
        <Row xs={1} md={3} lg={4} className="g-4 mb-2">
          {
            // loading
            loading && <Loading></Loading>
          }
          {
            // Api Error
            isError && <p className="text-center text-danger">Can not load data: Api Load Failed</p>
          }
          {
            //Dynamic data
            shuffledDrinks.slice(0, 8).map((drink) => (
              <DynamicDrink key={drink.idDrink} drinkData={drink}></DynamicDrink>
            ))
          }
        </Row>
        <NavLink to="/cocktails">
          <button className="btn btn-outline-light my-2">More Drinks</button>
        </NavLink>
      </div>
      <img src={separator} alt="separator" className="w-100" />
    </section>
  );
};

export default HomeDrinks;
