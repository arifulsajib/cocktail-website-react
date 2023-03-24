import React from "react";
import { Card, Col } from "react-bootstrap";

const DynamicDrink = (props) => {
  const drink = props.drinkData;
  const previewImg = drink.strDrinkThumb + "/preview";
  return (
    <Col>
      <Card className="border-0 shadow-lg rounded">
        <Card.Img variant="top" src={previewImg} />
        <Card.Body className="bg-deepviolet">
          <Card.Title>{drink.strDrink}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DynamicDrink;
