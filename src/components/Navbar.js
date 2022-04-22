import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "../css/App.css";
import Brand from "../images/ondeck-brand.png";
const AppNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="header">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Image src={Brand} alt="On Deck Brand" />
            {/* On Deck Consulting, LLC */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">

              <Nav.Link as={Link} to="/about" className="navLink">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/aquatics" className="navLink">
                Aquatics
              </Nav.Link>

              <Nav.Link as={Link} to="/projects" className="navLink">
                Tech Projects
              </Nav.Link>

              <Nav.Link as={Link} to="/resume" className="navLink">
                Resume
              </Nav.Link>

              <Nav.Link as={Link} to="/contact" className="navLink">
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default AppNavbar;