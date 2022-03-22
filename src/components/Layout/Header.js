import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Navbar expand="md" collapseOnSelect id="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" width="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bolder">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
