import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const WHITE = "#fffafa";
const BACKGROUND_COLOR = "#c366725e";

const Projects = () => {
  return (
    <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col>
          <h1 style={{ color: WHITE }}>Projects</h1>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: BACKGROUND_COLOR,
          borderRadius: "20px",
          marginTop: "10px",
          marginLeft: "0px",
          marginRight: "0px",
          height: "10000px",
        }}
      >
        <Col>
          <h1 style={{ color: WHITE }}>Projects</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
