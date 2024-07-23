import React from "react";
import "./Techstack.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import techstackbulb from "../../../Assets/techstackbulb.png";
import techstackcode from "../../../Assets/techstackcode.png";
import Techstackcard from "../TechStack/TechStackCard/Techstackcard";
import Techrowcard from "../TechStack/TechRowCard/Techrowcard";

const Techstack = () => {
  return (
    <div className="techstack-page-container">
      <div className="techstack-main-content">
        <div className="techstack-image-text-content">
          <Row>
            <Col lg={6} md={6} sm={6}>
              <div className="techstack-card-and-text">
                <h5>SOFTWARE ENGINEERING</h5>
                <h1>
                  Level Up Your <br></br>Tech Stack
                </h1>
                <p>Expert Software Engineering Services</p>
                <div className="techstackcard-content">
                  <Techstackcard title="Mobile App Development" />
                </div>
                <div className="techstackcard-content">
                  <Techstackcard title="Web Development" />
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div className="techstack-image-div">
                <div className="techstack-image-first">
                  <img src={techstackcode} />
                </div>
                <div className="techstack-image-second">
                  <img src={techstackbulb} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="background-image-techstack">
          <Row>
            <Col lg={4} md={4} sm={6}>
              <div className="techstack-three-cards-first-col">
                <Techrowcard title="Hire Dedicated Teams" />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <div className="techstack-three-cards-first-col">
                <Techrowcard title="UI/UX Design & Development" />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <div className="techstack-three-cards-first-col">
                <Techrowcard title="SaaS Development" />
              </div>
            </Col>

            <Col lg={4} md={4} sm={6}>
              <div className="techstack-three-cards-first-col">
                <Techrowcard title="MVP Developement" />
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <div className="techstack-three-cards-first-col">
                <Techrowcard title="Technology Consulting " />
              </div>
            </Col>

            <Col lg={4} md={4} sm={6}>
              <div className="techstack-three-cards-first-col">
                <Techrowcard title="Software Development" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
