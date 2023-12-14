import React from "react";
import { Row, Spinner } from "react-bootstrap";
import useFilteredData from "../../Hooks/useFilteredData";
import DynamicDrink from "../DynamicDrink/DynamicDrink";
import Loading from "../Loading/Loading";

const HomeFilteredDrinks = () => {
  const { filteredDrinks, loading, isError } = useFilteredData();
  const shuffledFilterdDrinks = filteredDrinks.sort(() => 0.5 - Math.random());
  return (
    <section className="container">
      <h3 className="text-center">Non-Alchoholic Drinks</h3>
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
          // dynamic
          shuffledFilterdDrinks.slice(0, 8).map((drink) => (
            <DynamicDrink key={drink.idDrink} drinkData={drink}></DynamicDrink>
          ))
        }
      </Row>
    </section>
  );
};

export default HomeFilteredDrinks;
