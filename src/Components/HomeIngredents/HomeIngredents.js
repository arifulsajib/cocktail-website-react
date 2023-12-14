import React from "react";
import { Row, Spinner } from "react-bootstrap";
import useIngredents from "../../Hooks/useIngredents";
import DynamicIngredent from "../DynamicIngredent/DynamicIngredent";
import separator from "../../Images/separator.jpg";
import Loading from "../Loading/Loading";

const HomeIngredents = () => {
  const { ingredents, loading, isError } = useIngredents();
  const shuffledIngredents = ingredents.sort(() => 0.5 - Math.random());
  let key = 0;

  return (
    <section className="container">
      <h3 className="text-center">Popular Ingredents</h3>
      <Row xs={1} md={3} lg={4} className="g-3">
        {
          // loading
          loading && <Loading></Loading>
        }
        {
          // Api Error
          isError && <p className="text-center text-danger">Can not load data: Api Load Failed</p>
        }
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
