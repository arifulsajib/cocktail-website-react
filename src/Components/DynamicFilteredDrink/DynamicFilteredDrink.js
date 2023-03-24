import React from "react";
import { Card, Col } from "react-bootstrap";

const DynamicFilteredDrink = (props) => {
  const filteredDrink = props.filteredDrinkData;
  const thumbImg = filteredDrink.strDrinkThumb + "/preview";
  return (
    <Col>
      <Card className="border-0 shadow-lg rounded text-center">
        <Card.Img variant="top" src={thumbImg} />
        <Card.Body className="bg-deepviolet">
          <Card.Title>{filteredDrink.strDrink}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DynamicFilteredDrink;
