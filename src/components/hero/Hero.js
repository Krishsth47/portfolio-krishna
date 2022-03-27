import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header } from "../Layout/Header";

import "./Hero.css";
import me from "../../assets/profile.png";

export const Hero = () => {
  return (
    <div className="hero">
      {/* <Header /> */}
      <Container>
        <Row className="mt-5 pb-3">
          <Col md="5" className="text-center order-md-2 mb-5">
            <img src={me} width="80%" alt="" />
          </Col>
          <Col md="7" className="col-md-7">
            <div class="mb-3">Hi, This is Krishna Shrestha</div>
            <h2>👨🏽‍💻 Full Stack MERN Developer</h2>
            <p className="mt-5 mb-2">
              I am very passionate about software development and keep learning
              new things every day.
            </p>
            <button className="btn btn-danger">
              Download Resume <i class="fas fa-download"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
