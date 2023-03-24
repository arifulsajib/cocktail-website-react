import React from "react";
import { Card, Col } from "react-bootstrap";

const DynamicIngredent = (props) => {
  const ingredent = props.ingredentData;
  const ingredentImg = "https://www.thecocktaildb.com/images/ingredients/" + ingredent.strIngredient1 + "-medium.png";
  return (
    <Col className="shadow-lg">
      <Card className="border-0 rounded text-center">
        <Card.Img variant="top" src={ingredentImg} className="bg-deepviolet" />
        <Card.Body className="bg-deepviolet">
          <Card.Title>{ingredent.strIngredient1}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DynamicIngredent;
