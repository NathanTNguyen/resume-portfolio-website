import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Frontstack from "../components/Skillset/Frontstack";
import Backstack from "../components/Skillset/Backstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Programming <strong className="yellow">Languages </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Frontend</strong> Development
        </h1>
        <Frontstack />

        <h1 className="project-heading">
          Backend <strong className="yellow">Development </strong>
        </h1>
        <Backstack />

        <h1 className="project-heading">
          <strong className="yellow">Development Tools</strong> & Technologies
        </h1>
        <Toolstack />

        <Leetcode />
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset