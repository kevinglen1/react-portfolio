import React from "react";
// import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Skills() {
  return (
    <Container fluid className="skills-section container-fluid" id="skills">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      <Container className="wrapper">
        <div class="section-header">
          <h2 className="skills-heading">My <strong>Skills</strong></h2>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="skills-item">
            <i class="devicon-html5-plain"></i>
            <p>HTML5</p>
          </Col>
          <Col md={4} className="skills-item">
            <i class="devicon-css3-plain"></i>
            <p>CSS3</p>
          </Col>
          <Col md={4} className="skills-item">
            <i class="devicon-sass-original"></i>
            <p>Sass</p>
          </Col>
          <Col md={4} className="skills-item">
            <i class="devicon-javascript-plain"></i>
            <p>JavaScript</p>
          </Col>
          <Col md={4} className="skills-item">
            <i class="devicon-jquery-plain"></i>
            <p>jQuery</p>
          </Col>
          <Col md={4} className="skills-item">
            <i class="devicon-react-original"></i>
            <p>React</p>
          </Col>
          <Col md={4} className="skills-item">
            <i class="devicon-gulp-plain"></i>
            <p>Gulp</p>
            </Col>
          <Col md={4} className="skills-item">
            <i class="devicon-git-plain"></i>
            <p>Git</p>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}
