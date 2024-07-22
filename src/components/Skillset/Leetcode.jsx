import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="yellow">LeetCode</strong> Activty
      </h1>
      <ReactMarkdown>
      ![LeetCode Stats](https://leetcard.jacoblin.cool/nathantnguyen?theme=dark&font=Syne%20Mono&ext=heatmap)
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
