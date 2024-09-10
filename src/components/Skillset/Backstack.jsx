import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiMongodb} from "react-icons/di";
import { SiFlask } from "react-icons/si";

const Backstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiFlask />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>Flask</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiMongodb />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>MongoDB</p>
      </div>
      </Col>
    </Row>
  );
}

export default Backstack;
