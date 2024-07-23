import React, { useState } from "react";
import "./Awards.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import awards from "../../../Assets/awards.png";
import Cardslider from "./TestinomialCard/Cardslider"


const Awards = () => {
 
  return (
    <div className="awards-page-container">
      <div className="awards-main-content">
        <div className="awards-text-content">
          <Row>
            <Col lg={6} md={6} sm={6}>
              <div className="awards-main-text">
                <h5>Awards</h5>
                <h1>Awards and Recognitions</h1>
                <p>
                  Making a difference by raising the benchmarks. Some of our
                  noteworthy and recent recognitions.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <Row className="award-image-manage">
                <Col lg={3} md={3} sm={3} xs={3}>
                  <div className="award-image">
                    <img src={awards} />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <div className="award-image">
                    <img src={awards} />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <div className="award-image">
                    <img src={awards} />
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <div className="award-image">
                    <img src={awards} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="awards-testinomial-cards">
          <div className="testinomial-text-content">
            <h5>TESTINOMIAL</h5>
            <h1>This Is What Others Have To Say</h1>
            <p>Discover what our clients are saying about their experiences.</p>
          </div>
           <div className="testinomial-cards">
           <Cardslider />
          </div>
          
    </div>
    </div>
    </div>
  );
};

export default Awards;
