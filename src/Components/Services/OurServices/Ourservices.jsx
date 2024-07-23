import React, { useEffect } from "react";
import "./Ourservices.css";
import Button from "react-bootstrap/Button";
import reviewimgone from "../../../Assets/reviewimgone.jpg";
import reviewimgfour from "../../../Assets/reviewimgfour.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Ourservices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="ourservices-page-container">
      <div className="ourservices-main-content">
      <div className="circle-images">
               <div className="circle-images-content" data-aos="zoom-in" >
                <div className="main-circle-image" >
                 <img src={reviewimgone}  className="first-circle-image"/>
                </div>
               </div>
               <div className="second-image-circle"  data-aos="zoom-in">           
               </div>
            </div>
        <div className="ourservices-text-content">
          <h5>OUR SERVICES</h5>
          <h1>
            Craft. Refine. <span>Dominate</span>
          </h1>
          <p>
            Digiatto IT Services help you ideate, design, and develop the
            perfect solution to bring your digital vision to life. Digiatto can
            help in solving complex business challenges using custom solutions.
          </p>
          <Button>
            Let's Analyze Your Needs &nbsp;
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.92308 1.5L12.5 1.5M12.5 1.5L12.5 12.5M12.5 1.5L1.5 12.5"
                stroke="#F6F6F6"
                strokeWidth="1.5"
              />
            </svg>
          </Button>
        </div>
        <div className="ourservices-second-circle-image">
          <div></div>
        <div className="circle-images ">
               <div className="second-image-circle"  data-aos="zoom-in"></div>
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
      </div>
    </div>
  );
};

export default Ourservices;
