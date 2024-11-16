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
              title="Crosstech.ke"
              description="Crosstech.ke is a robust and visually appealing platform designed to showcase the comperehensive services offered by Crosstech"
              //ghLink="https://github.com/victor-kiptoo-001/E-commerce-project"
              demoLink="https://crosstech.ke/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FarmIT"
              description="The FarmIT website is a digital platform designed to help farmers monitor and manage their fields more effectively through technology. It provides tools for analyzing crop health, tracking field conditions, and accessing insights using satellite imagery and geospatial data"
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://farmit.co.ke/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PatnanInvestment.co.ke"
              description="A website for Patnan Investment built on Next.js and React a fast and agile platform that showcases the company's profile the world"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://patnaninvestment.co.ke/"              
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
