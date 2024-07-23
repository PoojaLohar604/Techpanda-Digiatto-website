import React from 'react';
import './Digital.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Digitalcard from '../DigitalAutomation/DigitalCard/Digitalcard'
import Container from 'react-bootstrap/esm/Container';

const Digital = () => {
  return (
    <div className='digital-page-container'>
        <div className='digital-main-content'>
            <div className='digital-automation-text'>
                <h5>FROM MANUAL TO MAGIC</h5>
                <h1>Unleash the Power of Digital Automation</h1>
                <p>Automate Your Way to Success</p>
            </div>
            <div className='digital-automation-card-section-one'>
                <Row>
                 <Col lg={5} md={5} sm={5}>
                   <div className='digital-card'>
                    <Digitalcard title="Digital Transformation"/>
                   </div>
                 </Col>
                 <Col lg={2} md={2} sm={2}></Col>

                 <Col lg={5} md={5} sm={5}>
                   <div className='digital-card'>
                    <Digitalcard title="E-Commerce Development"/>
                   </div>
                 </Col>
                </Row>
            </div>
            <div className='digital-automation-card-section-two'>
            <Row>

                 <Col lg={6} md={6} sm={6}>
                   <div className='digital-card'>
                    <Digitalcard title="Digital Transformation"/>
                   </div>
                 </Col>
                 {/* <Col lg={2} md={2} sm={2}></Col> */}
                 <Col lg={6} md={6} sm={6}>
                   <div className='digital-card'>
                    <Digitalcard title="E-Commerce Development"/>
                   </div>
                 </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default Digital