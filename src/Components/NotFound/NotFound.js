import React from "react";
import picNot from "../../Images/404.png";

const NotFound = () => {
  return (
    <section className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <img src={picNot} alt="404 not fount" className="w-100 object-fit-cover " style={{ maxHeight: "600px", maxWidth: "600px" }} />
    </section>
  );
};

export default NotFound;
