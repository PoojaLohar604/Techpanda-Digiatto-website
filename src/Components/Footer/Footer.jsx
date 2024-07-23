import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import navbarlogo from "../../images/navbarlogo.png";
import facebookone from "../../Assets/facebookone.png";
import instagramone from "../../Assets/instagramone.png";
import twitterone from "../../Assets/twitterone.png";
import behanceone from "../../Assets/behanceone.png";
import linkedinone from "../../Assets/linkedinone.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-main-content">
        <div className="footer-logo-and-details-box">
          <Row>
            <Col lg={3} md={3} sm={3}>
              <div className="logo-details-icons">
                <img src={navbarlogo} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <div className="footer-icons">
                  <div className="icon-arrange-twitter">
                    <img src={twitterone} />
                  </div>
                  <div className="icon-arrange">
                    <img src={instagramone} />
                  </div>
                  <div className="icon-arrange">
                    <img src={facebookone} />
                  </div>
                  <div className="icon-arrange">
                    <img src={linkedinone} />
                  </div>
                  <div className="icon-arrange">
                    <img src={behanceone} />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={3} md={3} sm={3} xs={6}>
              <div className="services-conten-of-footer">
                <ul>
                  <li>
                    <h5>Services</h5>
                  </li>

                  <li>Mobile App Development </li>
                  <li>Web Development</li>
                  <li>Custom Software Development</li>
                  <li>UI/UX Development</li>
                  <li>E-Commerce Development</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={3} sm={3} xs={6}>
              <div className="services-conten-of-footer">
                <ul>
                  <li>
                    <h5>
                    <Link to="/industries" className="nav-link">Industries</Link>
                    </h5>
                  </li>

                  <li>Mobile App Development </li>
                  <li>Web Development</li>
                  <li>Custom Software Development</li>
                  <li>UI/UX Development</li>
                  <li>E-Commerce Development</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={3} sm={3} >
              <div className="newsletter">
                <h5>Digiatto Newsletter</h5>
                <p>
                  Don't worry your email is secure with us, We will use to share
                  latest updates straight to your inbox!
                </p>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Email Here"
                  />
                </InputGroup>

                <button className="animation-bu">Subscribe</button>
              </div>
            </Col>
          </Row>
        </div>

        <div className="copyright-content-box">
          <div className="copyright-h6">
            <h5>©2024 Digiatto IT Services All Right Reserved. </h5>
          </div>
          <div className="copyright-links">
            <div>
              <h6>Privacy Policy</h6>
            </div>
            <div>
              <h6>Terms Of Service</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
