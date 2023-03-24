import React from "react";
import { Row, Spinner } from "react-bootstrap";
import useFilteredData from "../../Hooks/useFilteredData";
import DynamicDrink from "../DynamicDrink/DynamicDrink";

const HomeFilteredDrinks = () => {
  const { filteredDrinks, loading } = useFilteredData();
  const shuffledFilterdDrinks = filteredDrinks.sort(() => 0.5 - Math.random());
  return (
    <section className="container">
      <h3 className="text-center">Non-Alchoholic Drinks</h3>
      <Row xs={1} md={3} lg={4} className="g-4">
        {
          // loading
          loading ? (
            <div className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: "400px" }}>
              <Spinner animation="grow" variant="light" className="text-center" />
            </div>
          ) : (
            // dynamic
            shuffledFilterdDrinks.slice(0, 8).map((drink) => <DynamicDrink key={drink.idDrink} drinkData={drink}></DynamicDrink>)
          )
        }
      </Row>
    </section>
  );
};

export default HomeFilteredDrinks;
