import React from "react";
import { Modal, Button } from "react-bootstrap";

import Treeable from "./popupAssets/Treeable";
import YouSeeSD from "./popupAssets/YouSeeSD";

// Display text based on projectName
const Popup = (props) => {
  const selectProject = () => {
    switch (props.projectName) {
      case "Treeable":
        return <Treeable />;
      case "YouSeeSD":
        return <YouSeeSD />;
      default:
        return <p>Lorem ipsum</p>;
    }
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="project-popup" centered>
      <Modal.Header closeButton>
        <Modal.Title id="project-popup">
          <h2>{props.projectName}</h2>
        </Modal.Title>
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
