import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SectionTitle } from "../title/Title";

export const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <Row>
          <Col className="d-flex justify-content-around fs-1">
            <a target="_blank" href="mailto:krish_sth2005@yahoo.com">
              <i class="fas fa-paper-plane"></i>
            </a>
            <a target="_blank" href="">
              <i class="fab fa-linkedin"></i>
            </a>
            <a target="_blank" href="">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a target="_blank" href="">
              <i class="fab fa-youtube"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
