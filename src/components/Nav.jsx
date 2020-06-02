import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ORANGE = "#ea962c";
const WHITE = "#fffafa";

const Nav = (props) => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "18px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#fffafa",
    },
    bmBurgerBarsHover: {
      background: WHITE,
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: WHITE,
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#4d4e4f",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      outline: "none",
      textDecoration: "none",
      marginBottom: "10px",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <>
      <style type="text/css">
        {`.btn-nav-custom {
            border: 2px solid;
            background-color: transparent;
            border-color: ${ORANGE};
            color: ${ORANGE};
            font-size: 15pt;
            font-weight: 500;
            width: 10.5em;
            margin: 0 0;
          }
          
          .btn-nav-custom:hover {
            background-color: ${ORANGE};
            color: white;
          }
          `}
      </style>
      <Menu styles={styles} isOpen={props.menuOpen} onStateChange={(state) => props.stateHandler(state)}>
        <LinkContainer to="/">
          <Button variant="nav-custom" style={{ outline: "none" }} onClick={() => props.closeMenu()}>
            Home
          </Button>
        </LinkContainer>
        <LinkContainer to="/projects">
          <Button variant="nav-custom" style={{ outline: "none" }} onClick={() => props.closeMenu()}>
            Personal Projects
          </Button>
        </LinkContainer>
        <LinkContainer to="/work">
          <Button variant="nav-custom" style={{ outline: "none" }} onClick={() => props.closeMenu()}>
            Work Experience
          </Button>
        </LinkContainer>
      </Menu>
    </>
  );
};

export default Nav;
