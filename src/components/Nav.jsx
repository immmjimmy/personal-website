import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Nav = () => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
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
      // display: "inline-block",
      outline: "none",
      textDecoration: "none",
      marginBottom: "10px",
      // color: "#d1d1d1",
      // transition: "color 0.2s",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu styles={styles}>
      <LinkContainer to="/">
        <Button variant="outline-secondary" style={{ outline: "none" }}>Home</Button>
      </LinkContainer>
    </Menu>
  );
};

export default Nav;
