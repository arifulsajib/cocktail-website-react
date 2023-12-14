import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: "400px" }}>
      <Spinner animation="grow" variant="light" className="text-center" />
    </div>
  );
};

export default Loading;
