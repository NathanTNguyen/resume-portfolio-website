import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiNodejs, DiMongodb, DiMysql} from "react-icons/di";

const Backstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiNodejs />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>Node.js</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiMongodb />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>MongoDB</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiMysql />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>MySQL</p>
      </div>
      </Col>
    </Row>
  );
}

export default Backstack;
