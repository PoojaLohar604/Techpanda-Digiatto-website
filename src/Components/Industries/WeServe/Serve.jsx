import React from "react";
import "./Serve.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Servecard from '../ServeCard/Servecard';
import industryImg1 from '../../../Assets/industryImg1.jpg'
import industryImg3 from '../../../Assets/IndustryImg3.jpg'
import industryImg4 from '../../../Assets/IndustryImg4.jpg'
import industryImg5 from '../../../Assets/IndustryImg5.jpg'
import industryImg6 from '../../../Assets/IndustryImg6.jpg'
import industryImg7 from '../../../Assets/IndustryImg7.jpg'
import industryImg8 from '../../../Assets/IndustryImg8.jpg'
import industryImg9 from '../../../Assets/IndustryImg9.jpg'
import industryImg10 from '../../../Assets/IndustryImg10.jpg'
import industryImg11 from '../../../Assets/IndustryImg11.jpg'
import industryImg12 from '../../../Assets/IndustryImg12.jpg'


const Serve = () => {
  return (
    <div className="serve-page-container">
      <div className="serve-main-content">
        <div className="serve-heading-text">
          <h5>WE ARE EXPERTS IN</h5>
          <h1>Industries We Serve</h1>
          <p>
            Customer Experience is everything! We design & create solutions by
            spotting customers’ actions, emotions, and unmet needs. We make
            enterprises that impact lives.
          </p>
        </div>
        <div className="serve-card-content">
            <Row>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Healthcare & Lifes" image={industryImg1}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="E-Commerce Solutions" image={industryImg3}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Transport & Logistics" image={industryImg4}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Real Estate" image={industryImg5}/>
                </div>
                </Col>

                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Education & Learning" image={industryImg6}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Banking & Insurance" image={industryImg7}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Travel & Hospitality" image={industryImg8}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Social Networking" image={industryImg9}/>
                </div>
                </Col>
 
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="On Demand Delivery" image={industryImg10}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Media  Entertainment" image={industryImg11}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Enterprise Solutions" image={industryImg9}/>
                </div>
                </Col>
                <Col lg={3} md={3} sm={4}>
                <div className="center-serve-card">
                <Servecard title="Oil & Gas" image={industryImg12}/>
                </div>
                </Col>
                
               
            </Row>
        </div>
      </div>
    </div>
  );
};

export default Serve;
