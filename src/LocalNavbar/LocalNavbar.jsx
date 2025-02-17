import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./localNavbar.module.css";
import { NavLink } from "react-router-dom";

export default function LocalNavbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scroll]);



  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${style.navbar} ${scroll ?   style.scrollTrue : style.scrollFalse }  sticky-top`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="" className="text-white">
            <p>Start Framework</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={`${style.resetgrow}`}
          >
            <Nav className="me-auto">
              <Nav.Link
                className={`${style.myNavLinks}`}
                as={NavLink}
                to="about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className={`${style.myNavLinks}`}
                as={NavLink}
                to="portofolio"
              >
                Portofolio
              </Nav.Link>
              <Nav.Link
                className={`${style.myNavLinks}`}
                as={NavLink}
                to="contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
