import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="Dojo Compute"
              description="Integrate Google Maps to visually display the locations of deployed containers across various regions. This integration will provide a real-time overview of container distribution and deployment status globally. Users can interact with the map to get detailed information about each container's location, status, and other relevant metrics."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Spaace"
              description="
Integrate Twitter APIs to retrieve the latest data on likes and reply counts for user tweets. Combine this with NFT collection checkers to verify ownership and engagement levels. Based on this information, implement a system to reward users with incentives or benefits, encouraging more interaction and participation."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ember Wallet"
              description="Develop a Web3 wallet leveraging account abstraction to enhance user experience and security. This wallet will simplify transaction management by abstracting complex processes and allowing flexible authentication methods. By utilizing account abstraction, users can benefit from features like gasless transactions, social recovery, and multi-factor authentication, making the wallet more versatile and user-friendly."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
