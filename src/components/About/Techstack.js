import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiBootstrap, DiPython, DiGit } from "react-icons/di";
import { SiTypescript, SiFlask, SiFlutter, SiDjango, SiMysql, SiPostgresql, SiJquery, SiVisualstudio, SiGithub } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> {/* Typescript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /> {/* Bootstrap */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery /> {/* jQuery */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask /> {/* Flask */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter /> {/* Flutter */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango /> {/* Django */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio /> {/* Visual Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* PostgreSQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
    </Row>
  );
}

export default Techstack;