import React, { useState, useEffect } from "react";
import logo from "../assets/banner-logo.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <Link to="/">
          <NavbarBrand>
            <img src={logo} width="50" />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <Link to="/about">
            <NavbarText
              style={{
                padding: "8px",
                fontWeight: "500",
                color: "#000",
                display: "block",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              ABOUT
            </NavbarText>
          </Link>
        </Collapse>

        <Link to="/contact">
          <NavbarText
            style={{
              padding: "8px",
              fontWeight: "500",
              color: "#000",
              display: "block",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            CONTACT
          </NavbarText>
        </Link>
      </Navbar>
    </>
  );
};

export default Header;
