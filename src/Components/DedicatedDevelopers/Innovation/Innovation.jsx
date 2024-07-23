import React from "react";
import "./Innovation.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import visionone from "../../../Assets/visionone.png";
import visiontwo from "../../../Assets/visiontwo.png";
import Card from "../../DedicatedDevelopers/Innovation/innovationCard/Card";

const Innovation = () => {
  return (
    <div className="innovation-page-container">
      <div className="innovation-main-content">
        <div className="innovation-text-content">
          <h5>BEYOND THE BINARY</h5>
          <h1>Where Vision Meets Innovation.</h1>
          <p>
            Shape the digital landscape with our team of pioneering tech
            experts. We craft cutting-edge solutions designed to propel your
            business forward.  Embrace a future brimming with possibilities – a
            future built on innovation and fueled by our expertise.
          </p>
        </div>
        <div className="innovation-image-card-details-content">
          <Row>
            <Col lg={6} md={6} sm={6}>
              <div className="vision-image">
                <div className="vision-image-one">
                  <img src={visionone} alt="image-vision" />
                </div>
                <div className="vision-image-two">
                  <img src={visiontwo} alt="image-vision" />
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div className="innovation-cards-content">
              <div className="center-innovation-card">
                <Row>                  
                  <Col>
                    <Card
                      title="Visionary Minds"
                      details="Our team thrives on pushing boundaries, translating your vision into reality."
                    />
                  </Col>
                </Row>
              </div>
                <div className="center-innovation-card">
                <div className="center-div">
                  <div className="emty-div-center"></div>
                  <div className="innovation-main-card">
                    <h5>Tech Powerhouse</h5>
                    <p className="center-div-para">We harness the latest advancements, delivering solutions that empower your growth.</p>
                  </div>
                </div>
                </div>
                <div className="center-innovation-card">
                <Row>
                  <Col>
                    <Card
                      title="Future-Proofed Results"
                      details="We build for the long haul, ensuring your success in the ever-evolving digital world."
                    />
                  </Col>
                </Row>
                </div>

              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
