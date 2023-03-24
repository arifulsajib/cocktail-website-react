import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DynamicDrink = (props) => {
  const drink = props.drinkData;
  const previewImg = drink.strDrinkThumb + "/preview";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/drinkdetails/${drink.idDrink}`);
  };

  return (
    <Col>
      <Card className="border-0 shadow-lg rounded text-center" onClick={handleClick}>
        <Card.Img variant="top" src={previewImg} />
        <Card.Body className="bg-deepviolet">
          <Card.Title>{drink.strDrink}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DynamicDrink;
