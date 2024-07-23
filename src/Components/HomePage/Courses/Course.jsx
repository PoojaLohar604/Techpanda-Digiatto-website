import React from "react";
import "./Course.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCards from "../HomeCards/HomeCards";
const Course = () => {
  return (
    <div className="container-fluid course-page-content">
      <Container>
        <div className="course-content">
          <div className="course-page-main-content">
            <h4>what we do</h4>
            <h1  className="zoom-text">we provide the best service for you</h1>
            <p>We're helping clients to create with our talented expert.</p>
          </div>
          <div className="course-page-main-cards">
               <div className="card-row-first ">
                <Row>
                  <Col lg={4} md={4} sm={4}>
                  <div className="card-adjust">
                    <HomeCards
                      title="Mobile App Development"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                    />
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                  <div className="card-adjust">
                    <HomeCards
                      title="Web Development"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                    />
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                  <div className="card-adjust">
                    <HomeCards
                      title="Hire Dedicated Teams"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                    />
                  </div>  
                  </Col>
                </Row>
              </div>
              <div className="card-row-second ">
                <Row>
                  <Col lg={4} md={4} sm={4}>
                  <div className="card-adjust">
                    <HomeCards
                      title="MVP Development"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                    />
                  </div>  
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                  <div className="card-adjust">
                    <HomeCards
                      title="SaaS Development"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
                    />
                  </div>  
                  </Col>
                  <Col lg={4} md={4} sm={4}>
                  <div className="card-adjust">
                    <HomeCards
                      title="Digital Marketing"
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
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

export default Course;
