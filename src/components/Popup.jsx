import React from "react";
import { Modal, Button } from "react-bootstrap";

import Treeable from "./popupAssets/Treeable";

// use a json file?? :")
// temporary fix ^ should make a get request to some database

// Display text based on projectName
const Popup = (props) => {
  const selectProject = () => {
    switch (props.projectName) {
      case "Treeable":
        return <Treeable />;
      default:
        return <p>Lorem ipsum</p>;
    }
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="project-popup" centered>
      <Modal.Header closeButton>
        <Modal.Title id="project-popup">{props.projectName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{selectProject()}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
