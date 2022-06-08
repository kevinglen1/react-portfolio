import React from "react";
import "./Skills.css";
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
          <h2 className="skills-heading">
            My <strong>Skills</strong>
          </h2>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col className="skills-item">
            <i className="devicon-html5-plain skills-icon"></i>
            <p>HTML5</p>
          </Col>
          <Col md className="skills-item">
            <i className="devicon-css3-plain skills-icon"></i>
            <p>CSS3</p>
          </Col>
          <Col className="skills-item">
            <i className="devicon-javascript-plain skills-icon"></i>
            <p>JavaScript</p>
          </Col>
          <Col md className="skills-item">
            <i className="devicon-react-original skills-icon"></i>
            <p>React</p>
          </Col>
          <Col md className="skills-item">
            <i className="devicon-jira-plain skills-icon"></i>
            <p>Jira</p>
          </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md className="skills-item">
            <i className="devicon-git-plain skills-icon"></i>
            <p>Git</p>
          </Col>
          <Col md className="skills-item">
            <i className="devicon-python-plain skills-icon"></i>
            <p>Python</p>
          </Col>
          <Col md className="skills-item">
            <i className="devicon-django-plain skills-icon"></i>
            <p>Django</p>
          </Col>
          <Col md className="skills-item">
            <i className="devicon-postgresql-plain skills-icon"></i>
            <p>Postgresql</p>
          </Col>

          <Col md className="skills-item">
            <i className="devicon-mongodb-plain skills-icon"></i>
            <p>Mongodb</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
