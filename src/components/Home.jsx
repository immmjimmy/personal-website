import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaDev, FaLinkedin } from "react-icons/fa";

import resume from "../assets/resume.pdf";

const ORANGE = "#ea962c";
const YELLOW = "#ead32c";

const Home = (props) => {
  return (
    <>
      <style type="text/css">
        {`.btn-custom {
            border: 2px solid;
            background-color: transparent;
            border-color: ${ORANGE};
            color: ${ORANGE};
            font-size: 20pt;
            font-weight: 500;
            width: 10.5em;
            margin-right: 5px;
            margin-top: 10px;
          }
          
          .btn-custom:hover {
            background-color: ${ORANGE};
            color: white;
          }
          `}
      </style>
      <Container
        style={{
          height: "100%",
          maxHeight: "100%",
        }}
        {...props}
      >
        <Row
          style={{
            height: "45%",
            alignItems: "flex-end",
            justifyContent: "center",
            maxHeight: "100%",
          }}
        >
          <Col sm={12} style={{ textAlign: "center", maxHeight: "100%" }}>
            <h1 style={{ color: ORANGE }}>hi! i'm jimmy</h1>
            <Row style={{ marginTop: "10px", maxHeight: "100%" }}>
              <Col xs={3} />
              <Col sm>
                <p
                  style={{
                    color: YELLOW,
                    textAlign: "left",
                    fontWeight: "400",
                  }}
                >
                  I am a third year majoring in Computer Science at UC San
                  Diego. At heart, I am a software engineer looking to develop
                  projects that will empower the community. I am an incoming
                  software engineer intern at Google for Summer 2020.
                </p>
              </Col>
              <Col xs={3} />
            </Row>
          </Col>
        </Row>
        <Row style={{ height: "50%", marginTop: "10px" }}>
          <Col sm={12} style={{ textAlign: "center" }}>
            <LinkContainer to="/projects">
              <Button variant="custom">View my projects</Button>
            </LinkContainer>
            <a href={resume}>
              <Button variant="custom">View my resume</Button>
            </a>
            <div style={{ paddingTop: "30px" }}>
              <a
                href="https://www.github.com/immmjimmy"
                style={{ color: "inherit", textDecoration: "inherit" }}
                target="_blank"
              >
                <FaGithub size="3em" style={{ marginRight: "20px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/jimmydang1"
                style={{ color: "inherit", textDecoration: "inherit" }}
                target="_blank"
              >
                <FaLinkedin size="3em" style={{ marginRight: "20px" }} />
              </a>
              <a
                href="https://devpost.com/sleepyjimmy"
                style={{ color: "inherit", textDecoration: "inherit" }}
                target="_blank"
              >
                <FaDev size="3em" style={{ marginRight: "20px" }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
