import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCards/ProjectCard";
import warImage from "../../../assets/war_screenshot.png";
import storyOutlinerImage from "../../../assets/story_outliner_screenshot.png"
import nbaImage from "../../../assets/nba_screenshot.png"
import signatureImage from "../../../assets/email_signature_screenshot.png"
import inventoryImage from "../../../assets/inventoryImage.png"

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyOutlinerImage}
              title="Story Outliner"
              description="A story outlining platform that uses digital index cards in the place of physical stationary in order to make the world a better place."
              link="https://github.com/kevinglen1/story-outliner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nbaImage}
              title="NBA Talent Tracker"
              description="Track the ups and downs of NBA players to inform your fantasy basketball transcations."
              link="https://github.com/kevinglen1/nba-talent-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signatureImage}
              title="Email Signature"
              description="Email signature with contact info and development technologies used."
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

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
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}