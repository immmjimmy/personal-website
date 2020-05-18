import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import AuxiliumPreview from "../assets/auxilium.png";
import InYourViewPreview from "../assets/inyourview.png";
import YouSeeSDPreview from "../assets/youseesd.png";
import TreeablePreview from "../assets/Treeable/treeable.png";

import Popup from "./Popup";

const WHITE = "#fffafa";
const BACKGROUND_COLOR = "#c366725e";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [popupShow, setPopupShow] = useState(false);

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
    setPopupShow(true);
  };

  const COL_STYLE = {
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: "20px",
    marginTop: "10px",
    marginRight: "5px",
    paddingTop: "5px",
    paddingBottom: "15px",
  };

  const PREVIEW_STYLE = {
    maxWidth: "100%",
  };

  const WHITE_TEXT = {
    color: WHITE,
  };

  const CARD_TEXT_PADDING = {
    paddingTop: "5px",
  };

  return (
    <>
      <Container style={{ paddingTop: "100px" }}>
        <Row>
          <Col>
            <h1 style={WHITE_TEXT}>Projects</h1>
            <h6 style={WHITE_TEXT}>
              Click on a project to learn more about it!
            </h6>
          </Col>
        </Row>
        <Row
          style={{
            marginTop: "15px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
        >
          <Col
            sm
            style={COL_STYLE}
            onClick={() => handleProjectClick("Auxilium")}
          >
            <h3 style={{...WHITE_TEXT, ...CARD_TEXT_PADDING}}>Auxilium</h3>
            <img src={AuxiliumPreview} style={PREVIEW_STYLE} alt="Auxilium Preview" />
            <p style={WHITE_TEXT}>
              Our web-app connects homeless people with food, hygiene, and
              shelter resources that they may not have access to. By texting a
              number available on our website, they are prompted with a series
              of messages. These messages will ask them for the service that
              they are in need of and for their location. We then use this
              information to find the 3 nearest organizations (in our database)
              that provide the service they desire and send them markers on
              Google Maps that will allow them to get to said locations.
              Organizations that would like to assist in our effort can also add
              themselves to our database by accessing the add organizations tab
              on our website. They are then asked to provide basic information
              such as their phone number and address.
            </p>
          </Col>
          <Col
            sm
            style={COL_STYLE}
            onClick={() => handleProjectClick("YouSeeSD")}
          >
            <h3 style={{...WHITE_TEXT, ...CARD_TEXT_PADDING}}>YouSeeSD</h3>
            <img src={YouSeeSDPreview} style={PREVIEW_STYLE} alt="YouSeeSD Preview" />
            <p style={WHITE_TEXT}>
              YouSeeSD will become your tour guide, leading the way to locations
              that you are interested in. The application will personally
              recommend a tour based on what you are interested in, which you
              indicate by choosing themes you want the tour to focus on. These
              themes include the six colleges, categories of majors, and more.
              Whether you want to tour the specific college that you are
              admitted to or you want to have a tour that only visits the dining
              halls on campus, YouSeeSD is able to provide these tours whenever
              you desire.
            </p>
          </Col>
        </Row>
        <Row
          style={{
            marginLeft: "0px",
            marginRight: "0px",
          }}
        >
          <Col
            sm
            style={COL_STYLE}
            onClick={() => handleProjectClick("Treeable")}
          >
            <h3 style={{...WHITE_TEXT, ...CARD_TEXT_PADDING}}>Treeable</h3>
            <img src={TreeablePreview} style={PREVIEW_STYLE} alt="Treeable Preview" />
            <p style={WHITE_TEXT}>
              Treeable is a mobile app that seeks to promote and incentivize
              recycling through its users. Within our app, we have 3 core
              features: the ability to upload a picture, see your ranking, and
              to discuss various recycling topics. To upload a picture, simply
              press on the camera button. Press on ‘choose file’, and select the
              picture you would like to upload. You can then view this photo in
              the gallery. To see your ranking, simply navigate to the
              leaderboard. You will be greeted with your rank which you can then
              use to see your score. To participate in a discussion, navigate to
              the discussion board and select a post you’re interested in.
              You’ll be able to write a reply and submit it for others to see.
            </p>
          </Col>
          <Col
            sm
            style={COL_STYLE}
            onClick={() => handleProjectClick("In Your View")}
          >
            <h3 style={{...WHITE_TEXT, ...CARD_TEXT_PADDING}}>In Your View</h3>
            <img src={InYourViewPreview} style={PREVIEW_STYLE} alt="In Your View Preview" />
            <p style={WHITE_TEXT}>
              In Your View is a website application that allows a user to easily
              host rooms for interviews. The room will display the videos of all
              users inside the room alongside a text editor and room for notes.
              As one party writes code, the other is able to easily follow along
              on their screen. Our group also wanted to really emphasize
              continuous learning, and to do so, we implemented a feature that
              allows users to have access to their past interviews. Once inside
              a room, all videos are blurred so the interviewer is unable to
              judge the candidate based off of their appearance. With these
              features, we hoped to make it more difficult for there to be bias
              against the job candidate.
            </p>
          </Col>
        </Row>
      </Container>
      <Popup
        projectName={selectedProject}
        show={popupShow}
        onHide={() => setPopupShow(false)}
      />
    </>
  );
};

export default Projects;
