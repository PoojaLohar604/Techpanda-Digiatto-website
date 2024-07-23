import React from 'react';
import './Techrowcard.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Techrowcard = ({title}) => {
  return (
    <div className="tech-stack-main-card">
      <Row>
        <Col lg={2} md={2} sm={2} xs={2}>
          <div className="mini-box-techstack"></div>
        </Col>
        <Col  lg={10} md={10} sm={10} xs={10}>
          <div className="minibox-title-text mantain-div">
            <h4>{title}</h4>
            <p className='minibox-para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button>
              Read More &nbsp;
              <svg
                width="12"
                height="13"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.42308 1.5L12 1.5M12 1.5L12 12.5M12 1.5L1 12.5"
                  stroke="#013DC4"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Techrowcard