import React from "react";
import "./Excellence.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";

const steps = [" ", " ", " ", " "];

const Excellence = () => {
  return (
    <div className="excellence-page-container">
      <div className="excellence-main-content">
        <div className="excellence-text-content">
          <h1>Dedicated To Delivering Excellence</h1>
          <p>
            We recognize the chaotic nature of business, and that’s precisely
            where our expertise shines. Our focus is on restoring balance amidst
            the chaos by establishing genuine partnerships with our clients.
            When you collaborate with us, you’re engaging with a team that
            comprehends your challenges and aspirations. Together, we navigate
            the chaos, bringing order to your business landscape.
          </p>
        </div>
        <div className="excellence-card-div">
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Row>
            <Col lg={3} md={3} sm={3}>
               <div className="excellence-manage-card">
              <div className="excellence-card-content">
                <h5>2010</h5>
                <p>
                  We identified a problem or niche in the tech industry to
                  develop a unique solution or product to address this problem.
                  We build a strong founding team with technical expertise and
                  business acumen.
                </p>
              </div>
              </div>

            </Col>
            <Col lg={3} md={3} sm={3}>
            <div className="excellence-manage-card">
              <div className="excellence-card-content">
                <h5>2014</h5>
                <p>
                  We established a brand identity and target market while
                  focusing on beginning marketing and sales efforts to generate
                  initial customer traction.
                </p>
              </div>
            </div>  
            </Col>
            <Col lg={3} md={3} sm={3}>
            <div className="excellence-manage-card">
              <div className="excellence-card-content">
                <h5>2018</h5>
                <p>
                  Our focus is to scale the business to meet growing customer
                  demand and expand product offerings or enter new markets.
                </p>
              </div>
            </div>  
            </Col>
            <Col lg={3} md={3} sm={3}>
            <div className="excellence-manage-card">
              <div className="excellence-card-content">
                <h5>2024</h5>
                <p>
                  Now we are a recognized leader in the tech industry that
                  Continuously innovate and develop cutting-edge solutions.
                </p>
              </div>
            </div>  
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Excellence;
