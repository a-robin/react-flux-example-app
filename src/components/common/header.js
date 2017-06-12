import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import favicon from "../../../src/logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand href="/">
        <img src={favicon} alt="ReactLogo" />
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem><Link to="Home">Home</Link></NavItem>
      <NavItem><Link to="Authors">Authors</Link></NavItem>
      <NavItem><Link to="About">About</Link></NavItem>
    </Nav>
  </Navbar>
);

export default Header;
