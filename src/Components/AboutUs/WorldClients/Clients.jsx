import React from "react";
import "./Clients.css";
import mapImg from "../../../Assets/mapImg.jpg";
import clutchlogo from "../../../Assets/clutchlogo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaStar } from "react-icons/fa";
import membersImg from "../../../Assets/membersImg.png";
import messageone from "../../../Assets/messageone.png";
import graph from "../../../Assets/graph.png";

const Clients = () => {
  return (
    <div className="clients-page-container">
      <div className="clients-main-content">
        <div className="clients-image-text">
          <div className="clients-text">
            <h1>Our Clients Around The World</h1>
            <p>
              We understand the value of work, but we also appreciate the
              importance of play! We hold all our partnerships in high regard,
              and we actively seek enjoyable ways to tackle crucial challenges,
              leaving you with a solution and a smile. We are passionate about
              our work, dedicated to aiding our clients, and we firmly believe
              in savoring every moment because life is too short not to enjoy
              every minute!
            </p>
          </div>
          <div className="clients-image">
            <div className="clients-main-image">
              <img src={mapImg} />
            </div>
          </div>
        </div>

        <div className="innovators-content">
          <Row>
            <Col lg={7} md={6} sm={12}>
              <div className="innovators-text-containt">
                <h5>INNOVATERS</h5>
                <h1>
                  Company built by a global<br></br>
                  team of innovators
                </h1>
                <p>
                  In blandit luctus proin mauris a commodo, dolor diam tempus,
                  aenean magna fusce eu. Id porttitor aliquam eget aliquet
                  sagittis eu aut diam utphasellus sed convallis iaculis neque
                  ultricies convallis sed enim
                </p>
              </div>
            </Col>
            <Col lg={5} md={6} sm={12}>
              <div className="Innovators-cards-col">
                <Row>
                  <Col lg={6} md={6} sm={6}>
                     <div className="innovators-card-arrange">
                    <div className="innovators-one-card card-border">
                      <img src={clutchlogo}  className="clutch-logo"/>
                      <h2>100%</h2>
                      <h5>Positive Feedback</h5>
                      <div className="stars-icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src={membersImg} />
                    </div>
                    </div>

                  </Col>
                  <Col lg={6} md={6} sm={6}>
                  <div className="innovators-card-arrange">
                        <div className="first-card   card-border">
                        <img src={messageone} />
                        <h2>24/7</h2>
                        <h5>Chat Support</h5>
                      </div>
                  </div>  
                  <div className="innovators-card-arrange">
                      <div className="second-card  card-border">
                         <Row>
                        <Col></Col>    
                        <Col>
                        <img src={graph} />
                        </Col>
                        </Row>
                        <div className="text-second-card">
                        <h2>+12K</h2>
                        <h5>New leads for clients</h5>
                        </div>
                      </div>
                   </div>   
                    </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Clients;
