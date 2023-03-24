import React from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useDrinksData from "../../Hooks/useDrinksData";

const DynamicDrinkDetails = () => {
  const params = useParams();
  //   fetch product by productId
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`;
  const { drinks, loading } = useDrinksData(url);

  // make ingredents array
  const ingredientsArray = [];
  for (let i = 1; i <= 15; i++) {
    if (drinks.length !== 0) {
      const ingredient = drinks[0][`strIngredient${i}`];

      if (ingredient) {
        ingredientsArray.push(ingredient);
      } else {
        break;
      }
    }
  }

  //unique key
  let key = 0;

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
        <Spinner animation="grow" variant="light" className="text-center" />
      </div>
    );
  }

  return (
    <section className="container my-3" style={{ minHeight: "90vh" }}>
      <h3 className="text-center mb-4">Drink Name: {drinks[0]?.strDrink}</h3>

      <Row className="g-4">
        <Col xs="12" md="4" className="d-flex align-items-center">
          <img src={drinks[0]?.strDrinkThumb} alt="Drink pic" className="w-100 rounded" />
        </Col>
        <Col xs="12" md="8">
          <h4 className="text-center mb-3">Ingredents:</h4>
          <Row xs={3} md={4}>
            {
              // all ingredents
              ingredientsArray.map((ingredient) => (
                <Col key={(key += 1)}>
                  <Card className="text-center border-0">
                    <Card.Img variant="top" src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`} className="bg-violet" />
                    <Card.Body className="bg-violet">
                      <Card.Title>{ingredient}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>

      <div className="text-center mt-5">
        <h4>Instructions</h4>
        <p>{drinks[0]?.strInstructions}</p>
      </div>
    </section>
  );
};

export default DynamicDrinkDetails;
