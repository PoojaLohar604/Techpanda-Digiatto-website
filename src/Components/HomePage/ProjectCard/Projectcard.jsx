import React, { useState } from "react";
import "./Projectcard.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

const Projectcard = ({ image, text, para }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <div className="manage-cards flip-card">
     <Card onClick={handleClick} className={isClicked ? "clicked" : ""}>
      <Card.Img className="card-img" src={image} />
      <Card.Body className="card-body">
        <div className="text-content">
          <Card.Title className="card-text-h4">
           <h4>{text} </h4>
          </Card.Title>
          <Card.Text className="card-text-p">
            <p>{para}</p>
          </Card.Text>
          <button>
            <svg
              width="15"
              height="15"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6705 0.88687L19.8051 10.0215M19.8051 10.0215L10.3051 19.5215M19.8051 10.0215H0.80513"
                stroke="#8E54E9"
                stroke-width="2.5"
              />
            </svg>
          </button>
        </div>
      </Card.Body>
     </Card>
     </div>
    </Container>
  );
};

export default Projectcard;
