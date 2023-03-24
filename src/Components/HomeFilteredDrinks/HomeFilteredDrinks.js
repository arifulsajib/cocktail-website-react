import React from "react";
import { Row } from "react-bootstrap";
import useFilteredData from "../../Hooks/useFilteredData";
import DynamicFilteredDrink from "../DynamicFilteredDrink/DynamicFilteredDrink";

const HomeFilteredDrinks = () => {
  const { filteredDrinks } = useFilteredData();
  const shuffledFilterdDrinks = filteredDrinks.sort(() => 0.5 - Math.random());
  return (
    <section className="container">
      <h3 className="text-center">Non-Alchoholic Drinks</h3>
      <Row xs={1} md={3} lg={4}>
        {
          // dynamic
          shuffledFilterdDrinks.slice(0, 8).map((filteredDrink) => (
            <DynamicFilteredDrink key={filteredDrink.idDrink} filteredDrinkData={filteredDrink}></DynamicFilteredDrink>
          ))
        }
      </Row>
    </section>
  );
};

export default HomeFilteredDrinks;
