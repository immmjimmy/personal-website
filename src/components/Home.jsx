import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import Background from "../assets/wallpaper.png";

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
          }
          
          .btn-custom:hover {
            background-color: ${ORANGE};
            color: white;
          }
          `}
      </style>
      <Container
        fluid
        style={{
          height: "100%",
          maxHeight: "100%",
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
            <Button
              variant="custom"
              style={{ marginRight: "5px", marginTop: "5px" }}
            >
              View my projects
            </Button>
            <Button variant="custom" style={{ marginTop: "5px" }}>
              View my resume
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
