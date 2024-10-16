import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My Github <strong className="yellow">Activity</strong>
      </h1>
      <GitHubCalendar
        username="NathanTNguyen"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
