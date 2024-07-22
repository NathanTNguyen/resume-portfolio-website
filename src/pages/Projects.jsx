import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import projectIMG from "../assets/projects/project.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've made and worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/NathanTNguyen/DefoldGameProject/main/screenshots/1.PNG"
              isBlog={false}
              title="Defold Game Project"
              description="This project is a game built utilising the Defold game engine using Lua. The game is a simple 'The Binding of Isaac' inspired game where the player must navigate through the level, defeating enemies and collecting coins."
              ghLink="https://github.com/NathanTNguyen/DefoldGameProject"
              demoLink="https://www.youtube.com/watch?v=CKmX_XqqAU4/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/NathanTNguyen/DefoldGameProject/main/screenshots/1.PNG"
              isBlog={false}
              title="Resume Website"
              description="The website you are currently on! This site is made using React.js to provide a comprehensive showcase of my skills, projects, and a bit about my personal background."
              ghLink="https://github.com/NathanTNguyen/DefoldGameProject"
              demoLink="https://www.youtube.com/watch?v=CKmX_XqqAU4/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectIMG}
              isBlog={false}
              title="Friend Goal Tracker"
              description="A simple web application that allows users to create and track goals with friends. This project was worked on together with another developer."
              ghLink="https://github.com/domdomm42/Friend-Accountability-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
