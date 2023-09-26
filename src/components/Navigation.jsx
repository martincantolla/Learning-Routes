import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container fluid className="d-flex">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-white">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link to="/contacto" className="nav-link text-white">
              <i className="fa-solid fa-book"></i> Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          Happy Cake <i className="fa-solid fa-cake-candles"></i>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
