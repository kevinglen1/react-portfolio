import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCards/ProjectCard";
import warImage from "../../../assets/card_game.jpg";
import storyOutlinerImage from "../../../assets/book.jpg";
import nbaImage from "../../../assets/nba_2.jpg";
import signatureImage from "../../../assets/handwriting.jpg";
import inventoryImage from "../../../assets/inventory_2.jpg";
import "./Projects.css";

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h2 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h2>
        <Row className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyOutlinerImage}
              title="Story Outliner"
              description="A story outlining platform that uses digital index cards in the place of physical stationary in order to make the world a better place."
              link="https://github.com/kevinglen1/story-outliner"
              deployedLink="https://kevins-story-outliner.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nbaImage}
              title="NBA Talent Tracker"
              description="Track the ups and downs of NBA players to inform your fantasy basketball transcations."
              link="https://github.com/kevinglen1/nba-talent-tracker"
              deployedLink="https://nba-talent-tracker.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signatureImage}
              title="Email Signature"
              description="Email signature with contact info and development technologies used."
              link="https://github.com/kevinglen1/email-signature"
            />
          </Col>
        </Row>

        <Row className="project-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventoryImage}
              title="Inventory Tracker"
              description="Track inventory items and attach them to shipments."
              link="https://github.com/kevinglen1/inventory-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warImage}
              title="War!"
              description="A digital recreation of the classic card game."
              link="https://github.com/kevinglen1/War-Card-Game"
              deployedLink="https://kevinglen1.github.io/War-Card-Game/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
