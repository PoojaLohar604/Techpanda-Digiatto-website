import React from "react";
import "./Contact.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import facebookone from "../../../Assets/facebookone.png";
import instagramone from "../../../Assets/instagramone.png";
import twitterone from "../../../Assets/twitterone.png";
import behanceone from "../../../Assets/behanceone.png";
import linkedinone from "../../../Assets/linkedinone.png";

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-main-content">
        <div className="contact-from-text">
          <Row>
            <Col lg={5} md={5} sm={5}>
              <div className="contact-information">
                <h5>DROP US A LINE</h5>
                <h1>
                  Connect with <br></br> Digiatto’s Expert
                </h1>
                <p>
                  Ready to take the first step towards unlocking opportunities,
                  realizing goals, and embracing innovation? We're here and
                  eager to connect.
                </p>
                <div className="mini-div-information">
                  <div className="mini-div"></div>
                  <div className="div-information">
                    <p className="text-mini-div">To More Inquiry</p>
                    <h6>+91 81096 07075</h6>
                  </div>
                </div>
                <div className="mini-div-information">
                  <div className="mini-div"></div>
                  <div className="div-information">
                    <p className="text-mini-div">To Send Mail</p>
                    <h6>info@digiatto.com</h6>
                  </div>
                </div>
                <h4>Social Just You Connected Us!</h4>
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
            <Col lg={7} md={7} sm={7}>
              <div className="contact-from-details">
                <div className="contact-from-inputs-content">
                  <div className="form-title">
                    <p>Your Success Starts Here!</p>
                  </div>
                <div className="row-form">  
                  <Row>
                  
                    <Col>
                      <InputGroup>
                        <Form.Control type="text" placeholder="Digia..." />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <Form.Control type="text" placeholder="Email" />
                      </InputGroup>
                    </Col>

                  </Row>
                  <Row>
                    <Col>
                      <InputGroup>
                        <Form.Control type="text" placeholder="Mobile Numbar" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <Form.Control type="text" placeholder="Your Subject" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InputGroup>
                        <Form.Control type="text" placeholder="Mobile Number" />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Company / Organization"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <InputGroup>
                  <textarea  rows="5" className="text-area" placeholder="Message"></textarea>
                  </InputGroup>
                 </div>
                 <button type="submit" className="submit-button">Submit Now</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
