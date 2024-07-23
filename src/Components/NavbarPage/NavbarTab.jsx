import React from "react";
import "./NavbarTab.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import navbarlogo from "../../images/navbarlogo.png";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const NavbarTab = () => {
  return (
   
    <Navbar expand="lg" className="navbar-tab-content">
      <Container>
        <Navbar.Brand href="#home">
          <img src={navbarlogo} alt="logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
             <Link to="/dedicateddevelopers" className="nav-link">
            Dedicated Developers
            </Link>
            </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
              <Link to="/portfolio" className="nav-link">
              Portfolio
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/portfolio-inner" className="nav-link">
              Portfolio Inner Page
              </Link>
              </NavDropdown.Item>              
              <NavDropdown.Item href="#action/3.3">
              <Link to="/blog-details" className="nav-link">
              Blog Details Page </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Link to="/blogpage" className="nav-link">
              Blog Page </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="" className="nav-link">Contact Us</Link>
          </Nav>
          <Button className="animation-bu">Get Quote</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTab;
