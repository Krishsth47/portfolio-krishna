import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../title/Title";
import imgProfile from "../../assets/profile.png";

export const About = () => {
  return (
    <section id="about-me">
      <SectionTitle title="About Me" />

      <Container>
        <Row>
          <Col className="about-me-img">
            <img src={imgProfile} alt="" className="text-center" width="80%" />
          </Col>
          <Col>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              repellat commodi nostrum earum doloribus{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              modi, quos dignissimos repellat quod numquam magni ex vel mollitia
              veritatis.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
