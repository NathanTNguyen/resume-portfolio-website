import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiJava, DiPython,} from "react-icons/di";

const Techstack = () => {
  const textStyle = { fontSize: '16px', textAlign: 'center' };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiJava/>
          <p style={textStyle}>Java</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiJavascript1 />
          <p style={textStyle}>JavaScript</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div>
          <DiPython />
          <p style={textStyle}>Python</p>
        </div>
      </Col>
    </Row>
  );
};

export default Techstack;
