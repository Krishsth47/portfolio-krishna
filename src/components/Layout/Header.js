import React from "react";

import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";
export const Header = () => {
  return (
    <Navbar expand="md" collapseOnSelect id="navbar">
      <Container>
        <LinkContainer to="/">
          {/*<Navbar.Brand */}
          <Nav.Link>
            <img src={logo} alt="logo" width="80px" />
          </Nav.Link>
        </LinkContainer>
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bolder">
            <LinkContainer to="/skills">
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-me">
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
