import React from "react";
import "./Discuss.css";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import reviewimgone from '../../../Assets/reviewimgone.jpg';
import reviewimgtwo from '../../../Assets/reviewimgtwo.jpg';
import reviewimgthree from '../../../Assets/reviewimgthree.jpg';
import reviewimgfour from '../../../Assets/reviewimgfour.jpg'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Discuss = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, [])
  return (
    <div className="discuss-page-container">
      <Container>
        <div className="discuss-main-content">
            <div className="circle-images">
               <div className="circle-images-content" data-aos="zoom-in" >
                <div className="main-circle-image" >
                 <img src={reviewimgone} />
                </div>
                <div className="image-content">
                   <h6>Harold Rose</h6>
                   <p>AB-Sutra Welness</p>
                </div>
               </div>
               <div className="second-image-circle"  data-aos="zoom-in">
                  <img src={reviewimgtwo} className="second-image"/>
               </div>
            </div>
          <div className="text-content-discuss ">
            <h1>
              <span>Global 1k+ </span>
              Clients worked with us,
              <br></br> Have a Project, Let's Discuss
            </h1>
            <button className="animation-bu">
              Let's Discuss &nbsp;
              <svg
                width="11"
                height="10"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.92308 0.957031L12.5 0.957031M12.5 0.957031L12.5 11.957M12.5 0.957031L1.5 11.957"
                  stroke="#F6F6F6"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
          <div className="circle-images">
               <div className="second-image-circle"  data-aos="zoom-in">
                  <img src={reviewimgthree} className="third-image"/>
               </div>
               <div className="circle-images-content"  data-aos="zoom-in">
               <div className="image-content-text">
                   <h6>Michael Smith</h6>
                   <p>Virtue Care</p>
                </div>
                <div className="main-circle-image">
                 <img src={reviewimgfour} className="fourth-image"/>
                </div>
                
               </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Discuss;
