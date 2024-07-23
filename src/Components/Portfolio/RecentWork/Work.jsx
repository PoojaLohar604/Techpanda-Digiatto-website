import React from 'react';
import './Work.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import goodvibe from '../../../Assets/goodvibe.png';
import projectfive from '../../../Assets/projectfive.png';
import workimg3 from '../../../Assets/workimg3.png'
import workimg4 from '../../../Assets/workimg4.png'
import Workcard from '../WorkCard/Workcard';

const Work = () => {
  return (
    <div className='work-page-container'>
        <div className='work-main-content'>
        <div className='image-card-of-work'>
            <Row>
                <Col lg={6} md={6} sm={6} className='center-image-of-work'>
                <div className='image-of-work'>
                    <img  src={goodvibe}/>
                </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                <div className='manage-work-card'>
                    <Workcard title="BEAUTY INDUSTRIES"
                    heading="Good Vibes: A Luxurious App for the Beauty Experience"/>
                </div>
                </Col>
            </Row>
        </div>
        <div className='image-card-of-work-two'>
            <Row>
            <Col lg={6} md={6} sm={6}>
                <div className='manage-work-card'>
                    <Workcard title="HEALTH & WELLNESS INDUSTRIES"
                    heading="Virtue Care:Home Care Application"/>
                </div>
            </Col>
                <Col lg={6} md={6} sm={6} className='center-image-of-work'>
                <div className='image-of-work'>
                    <img  src={projectfive}/>
                </div>
                </Col>
                
            </Row>
        </div>
        <div className='image-card-of-work-two'>
            <Row>
                <Col lg={6} md={6} sm={6} className='center-image-of-work'>
                <div className='image-of-work'>
                    <img  src={workimg3}/>
                </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                <div className='manage-work-card'>
                    <Workcard title="MEDIA & ENTERTAINMENTS INDUSTRIES"
                    heading="Real Rummy App:Deal Yourself into Exhilaration"/>
                </div>
                </Col>
            </Row>
        </div>
        <div className='image-card-of-work-two'>
            <Row>
            <Col lg={6} md={6} sm={6}>
                <div className='manage-work-card'>
                    <Workcard title="TRAVEL & TOURISM INDUSTRIES"
                    heading="Tourism of Turkiye"/>
                </div>
                </Col>
                <Col lg={6} md={6} sm={6} className='center-image-of-work'>
                <div className='image-of-work'>
                    <img  src={workimg4}/>
                </div>
                </Col>
            </Row>
        </div>
          <div  className='work-page-button'>
        <button>Lode More</button>
        </div>
        </div>

    </div>
  )
}

export default Work