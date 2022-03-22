import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SectionTitle } from "../title/Title";
import portfolio from "../../assets/portfolio.png";

export const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Projects" />
          </Col>
        </Row>

        {/* Project 1 */}

        <Row className="py-5">
          <Col md="6">
            <img
              src={portfolio}
              alt="project "
              className="img-thumbnail"
              width="100%"
            />
          </Col>
          <Col md="6">
            <h2>My Portfoliio Website</h2>
            <div className="links">
              <a href="#send to github">
                <i class="fab fa-github"></i>
              </a>{" "}
              <a href="#send to live project">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, JavaScript</p>
          </Col>
        </Row>

        {/* Project 2 */}

        <Row className="py-5">
          <Col md="6" className="order-md-2">
            <img
              src={portfolio}
              alt="project "
              className="img-thumbnail"
              width="100%"
            />
          </Col>
          <Col md="6" className="mt-2 mt-md-0">
            <h2>My Portfoliio Website</h2>
            <div className="links">
              <a href="#send to github">
                <i class="fab fa-github"></i>
              </a>{" "}
              <a href="#send to live project">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, JavaScript</p>
          </Col>
        </Row>

        {/* Project 3 */}

        <Row className="py-5">
          <Col md="6">
            <img
              src={portfolio}
              alt="project "
              className="img-thumbnail"
              width="100%"
            />
          </Col>
          <Col md="6">
            <h2>My Portfoliio Website</h2>
            <div className="links">
              <a href="#send to github">
                <i class="fab fa-github"></i>
              </a>{" "}
              <a href="#send to live project">
                <i class="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, JavaScript</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
              similique repudiandae quisquam fugit cumque, iusto aspernatur eius
              aliquid, ducimus possimus porro non nihil accusamus tempora error
              iure, quia facilis aliquam.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
