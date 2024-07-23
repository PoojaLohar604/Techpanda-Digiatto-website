import React from "react";
import "./Partner.css";
import Container from "react-bootstrap/esm/Container";
import aboutImage from '../../../Assets/aboutImage.jpg'

const Partner = () => {
  return (
    <div className="partner-page-container">
       <Container>
      <div className="partner-main-content">
        <div className="partner-text-content">
          <h5>DIGIATTO IT SERVICES</h5>
          <h1>Your Trusted Technology Partner</h1>
          <p>
            In today's rapidly evolving digital landscape, having a reliable and
            innovative IT partner is crucial for success. At Digiatto IT
            Services, we understand the challenges businesses face and are
            dedicated to providing comprehensive IT solutions that empower you
            to achieve your goals.
          </p>
        </div>
        <div className="partner-image-content">
            <div className="about-image-box">
            <img src={aboutImage} alt="about-image" className="about-iamge"/>
            </div>
        </div>
      </div>
      </Container>

    </div>
  );
};

export default Partner;
