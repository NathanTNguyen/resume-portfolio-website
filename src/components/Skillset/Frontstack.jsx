import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiReact, DiHtml5, DiCss3} from "react-icons/di";
import {
  SiMaterialui,
} from "react-icons/si";

const Frontstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiReact />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>React</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <SiMaterialui />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>Material-UI</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiHtml5 />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>HTML5</p>
      </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div>
        <DiCss3 />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>CSS3</p>
      </div>
      </Col>
    </Row>
  );
}

export default Frontstack;
