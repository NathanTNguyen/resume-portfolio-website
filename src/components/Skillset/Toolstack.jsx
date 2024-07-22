import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiGit, DiGithub,} from "react-icons/di";
import {
    SiVisualstudiocode,
    SiSublimetext,
  } from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiVisualstudiocode />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>VS Code</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiSublimetext />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>Sublime Text</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiGit />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>Git</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiGithub />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>Github</p>
      </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
