import React from "react";
import "./TechCards.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Techcards = ({ title, courseList,listIcons}) => {

  return (
    <div className="tech-card-manage flip-card">
    <div className="tech-cards">
      <div className="card-content-div">
         <Row>
         <Col lg={7} md={7} sm={7} xs={7}>
        <div className="course-name">
          <h5>{title}</h5>
        </div>
        </Col>
        <Col lg={5} md={5} sm={5} xs={5}>
        <div className="emty-div"></div>
        </Col>

        </Row>
      </div>
      <div className="course-item-lists">
          <Row>
         <Col lg={6} md={6} sm={6} xs={6}>
        <div className="list-items">
            <ul>
            {courseList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
        </Col>
        <Col  lg={6} md={6} sm={6} xs={6}>
        <div className="list-icons">
        <ul className="icons-img-ul">
            {listIcons.map((iconsRow, rowIndex) => (
              <li key={rowIndex}>
                {iconsRow.map((icon, iconIndex) => (
                  <img key={iconIndex} src={icon} alt={`icon-${iconIndex}`} />
                ))}
              </li>
            ))}
          </ul>
        </div>
        </Col>
        </Row>
      </div>


      <div className="card-button">
        <button>
          See More &nbsp;
          <svg
            width="12"
            height="12"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.42308 1.5L12 1.5M12 1.5L12 12.5M12 1.5L1 12.5"
              stroke="#F6F6F6"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Techcards;
