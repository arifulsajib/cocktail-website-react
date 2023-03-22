import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar className="bg-deepviolet" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Brand" width="220" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-semibold">
              <Nav.Link as={NavLink} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cocktails" className="text-white">
                Cocktails
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
