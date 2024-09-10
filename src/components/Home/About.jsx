import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT ABOUT <span className="yellow"> ME </span>
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Nathan Nguyen </span>
              and I'm from <span className="yellow"> Sydney, Australia.</span>
              <br />
              <br />
              I've recently graduated with a{" "}
              <span className="yellow">
                Bachelor's degree in Computer Science (Honours)
              </span>{" "}
              from the{" "}
              <span className="yellow">University of Technology, Sydney</span>.
              <br />
              <br />
              As an
              <b className="yellow"> aspiring </b> software developer, I enjoy
              taking on new challenges and aim to continuously expand upon my
              knowledge and skills.
              <br />
              <br />I am proficient in
              <b className="yellow"> Java, Python, Lua </b>
              as well as having knowledge in programming languages such as
              JavaScript, TypeScript, C# and C++.
              <br />
              <br />I have a passion for exploring cutting-edge technologies, with a current focus on{" "}
              <b className="yellow">NLP and AI</b>, I'm also enhancing my skills in popular JavaScript libraries and frameworks, including
              <i>
                <b className="yellow">
                  {" "}
                  React
                </b>
              </i>
              &nbsp;, and continously seeking to expand my skill set.
              <br />
              <br />I'm also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Artificial Intelligence.</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NathanTNguyen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nathan-nguyen-b52798241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/NathanTNguyen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
