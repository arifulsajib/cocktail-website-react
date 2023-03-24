import React from "react";
import { Col, Row } from "react-bootstrap";
import bannerLeft from "../../Images/banner-left.png";
import bannerRight from "../../Images/banner-right.png";

const HomeBanner = () => {
  return (
    <section className="container my-4">
      <Row>
        <Col xs="3" className="d-flex align-items-center">
          <img src={bannerLeft} alt="Banner left" className="img-fluid" />
        </Col>
        <Col xs="6" className="d-flex align-items-center">
          <div className="text-center">
            <h1>Welcome to CockTail Lover</h1>
            <p>An open, crowd-sourced database of drinks and cocktails from around the world.</p>
            <p className="d-none d-md-block">If you like the site, please consider supporting us on Patreon by clicking the link below...</p>
          </div>
        </Col>
        <Col xs="3" className="d-flex align-items-center">
          <img src={bannerRight} alt="Banner Right" className="img-fluid" />
        </Col>
      </Row>
    </section>
  );
};

export default HomeBanner;
