import React from "react";
import "./Technologies.css";
import Container from "react-bootstrap/esm/Container";
import Techcards from "../TechCards/Techcards";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import angular from '../../../Assets/angular.png';
import javascript from '../../../Assets/javascript.png';
import typescript from '../../../Assets/typescript.png';
import laravel from '../../../Assets/laravel.png';
import node from '../../../Assets/node.png';
import python from '../../../Assets/python.png';
import mongodb from '../../../Assets/mongodb.png';
import oracle from '../../../Assets/oracle.png';
import postgre from '../../../Assets/postgre.png';
import illustrator from '../../../Assets/illustrator.png';
import photoshop from '../../../Assets/photoshop.png';
import adobe from '../../../Assets/adobe.png';
import figma from '../../../Assets/figma.png';



const Technologies = () => {
    const courses = ["Language", "Databases", "Frameworks", "SDK"];
    const coursesSecond = ["Front-End", "Back-End", "Database", "Design Tools"];
    const icons = [
        [javascript, typescript, angular],
        [laravel, node, python],
        [mongodb, oracle, postgre],
        [illustrator, photoshop, adobe,figma],
      ];
    
  return (
    <div className="technologies-page-container">
     <Container>
      <div className="technologies-main-content">
        <div className="technologies-text-content">
          <h5>TECHNOLOGIES</h5>
          <h1>We're the Masters of 
            <br></br>Next Generation Technologies</h1>
          <p>
            Feel the disruption. As we accelerate the technological revolution
            with our smart and simplified solutions- powered by next-gen
            technologies. Get started and engineer the unexpected for your
            better tomorrow.
          </p>
        </div>
        <div className="technologies-cards">
            <Row>

              <Col lg={3} md={3} sm={6}>
              <Techcards title="Mobile App Development" courseList={courses} listIcons={icons}/>
              </Col>

              <Col lg={3} md={3} sm={6}>
              <Techcards title="Application Development" courseList={coursesSecond } listIcons={icons} />
              </Col>

              <Col lg={3} md={3} sm={6}>
              <Techcards title="UI/UX Services" courseList={courses} listIcons={icons}/>
              </Col>
              
              <Col lg={3} md={3} sm={6}>
              <Techcards title="IT Consulting" courseList={courses} listIcons={icons}/>
              </Col>
            </Row>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Technologies;
