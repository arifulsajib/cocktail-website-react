import React from "react";
import { Row } from "react-bootstrap";
import useIngredents from "../../Hooks/useIngredents";
import DynamicIngredent from "../DynamicIngredent/DynamicIngredent";
import separator from "../../Images/separator.jpg";

const HomeIngredents = () => {
  const { ingredents } = useIngredents();
  const shuffledIngredents = ingredents.sort(() => 0.5 - Math.random());
  let key = 0;

  return (
    <section className="container">
      <h3 className="text-center">Popular Ingredents</h3>
      <Row xs={1} md={3} lg={4} className="g-3">
        {
          //Dynamic
          shuffledIngredents.slice(0, 8).map((ingredent) => (
            <DynamicIngredent key={(key += 1)} ingredentData={ingredent}></DynamicIngredent>
          ))
        }
      </Row>

      <img src={separator} alt="separator" className="w-100 my-4" />
    </section>
  );
};

export default HomeIngredents;
