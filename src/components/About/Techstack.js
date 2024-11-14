import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiBootstrap, DiPython, DiGit } from "react-icons/di";
import { SiTypescript, SiFlask, SiFlutter, SiDjango, SiMysql, SiPostgresql, SiJquery, SiVisualstudio, SiGithub } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiHtml5 size={40} />
        <div>HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiCss3 size={40} />
        <div>CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiTypescript size={40} />
        <div>TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiBootstrap size={40} />
        <div>Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiJavascript1 size={40} />
        <div>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiReact size={40} />
        <div>React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiJquery size={40} />
        <div>jQuery</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiFlask size={40} />
        <div>Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiFlutter size={40} />
        <div>Flutter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiPython size={40} />
        <div>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiDjango size={40} />
        <div>Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiVisualstudio size={40} />
        <div>Visual Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiMysql size={40} />
        <div>MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiPostgresql size={40} />
        <div>PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <DiGit size={40} />
        <div>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: 'center' }}>
        <SiGithub size={40} />
        <div>GitHub</div>
      </Col>
    </Row>
  );
}

export default Techstack;
