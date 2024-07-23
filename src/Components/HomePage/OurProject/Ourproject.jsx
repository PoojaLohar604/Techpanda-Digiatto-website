import React from "react";
import "./Ourproject.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projectcard from "../ProjectCard/Projectcard";
import projectone from "../../../Assets/projectone.jpg";
import projecttwo from "../../../Assets/projecttwo.jpg";
import projectthree from "../../../Assets/projectthree.jpg";
import projectfour from "../../../Assets/projectfour.jpg";
import projectfive from "../../../Assets/projectfive.png";

const Ourproject = () => {
  return (
    <div className="ourproject-page-container">
      <Container>
        <div className="ourproject-main-content">
          <div className="ourproject-text-content">
            <div className="main-text-content ">
              <h4>OUR PROJECT</h4>
              <h1>The Work We Have Done</h1>
              <p>
                Customer Experience is everything! We design & create solutions
                by spotting customers’ actions, emotions, and unmet needs. We
                make enterprises that impact lives.
              </p>
            </div>
            <div className="button-content">
              <button className="animation-bu">
                See&nbsp;More&nbsp;
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.42308 1.5L12 1.5M12 1.5L12 12.5M12 1.5L1 12.5"
                    stroke="#F6F6F6"
                    stroke-width="1.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="ourproject-cards ">
            <div className="card-first-row ">
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <div className="project-card">
                    <Projectcard
                      image={projectfour}
                      text="Nagar Sathi"
                      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <div className="project-card">
                    <Projectcard image={projectone} 
                     text="Nagar Sathi"
                      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <div className="project-card">
                    <Projectcard image={projectfive}
                     text="Nagar Sathi"
                      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="card-first-row slide-in-right">
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <div className="project-card">
                    <Projectcard image={projecttwo} 
                     text="Nagar Sathi"
                      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <div className="project-card">
                    <Projectcard image={projectthree} 
                     text="Nagar Sathi"
                      para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4}>
                  <div className="project-card">
                    <Projectcard image={projectfour} 
                    
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ourproject;
