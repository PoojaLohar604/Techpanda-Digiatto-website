import React from "react";
import "./Hire.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hirecard from '../../DedicatedDevelopers/HireCard/Hirecard';
import phpimg from '../../../Assets/phpimg.png';
import nodeimg from '../../../Assets/nodeimg.png';
import pythonimg from '../../../Assets/pythonimg.png';
import reactimg from '../../../Assets/reactimg.png';
import androidimg from '../../../Assets/androidimg.png';
import iosimg from '../../../Assets/iosimg.png';
import Imagecard from '../../DedicatedDevelopers/HireDevelopers/ImageCard/Imagecard';

const Hire = () => {
  return (
    <div className="hire-page-container">
      <div className="hire-main-content">
        <div className="hire-text-content">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="hire-heading-text">
                <h5>HIRE DEVELOPERS</h5>
                <h1>
                  Focus on what you do best,<br></br> let us handle the code
                </h1>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="hire-para-text">
                <p>
                  Hire developers who seamlessly integrate with your team,
                  ensuring a smooth and successful development journey.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="hire-developers-card">
            <div className="hire-developers-card-row-one">
                <Row>
                    
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire PHP Developer" image={phpimg}/>
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire NodeJS Developer" image={nodeimg}/>   
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire Python Developer" image={pythonimg}/> 
                    </div>
                    </Col>
             
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire iOS Developer" image={iosimg}/>
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire Android Developer" image={androidimg}/>   
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className="hire-card-center">
                    <Hirecard  heading="Hire React  Developer" image={reactimg}/> 
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
         <div className="image-plus-card">
             <Imagecard />
         </div>
      
      </div>
    </div>
  );
};

export default Hire;
