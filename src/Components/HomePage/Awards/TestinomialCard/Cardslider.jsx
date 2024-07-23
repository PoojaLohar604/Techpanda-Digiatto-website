import React, { useState } from "react";
import "./Cardslider.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Cardslider = () => {
  const [isHovered,setIsHovered]= useState(false);
  const settings = {
    className: `center ${isHovered ? "hovered" : ""}`,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        }
      }
    ]
  };
 
  return (
    <Slider {...settings}>
      <div onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <div className="testimonial-slider-card">
        <div className="star-icons">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
          <p className="details-of-cards">
            The service I received exceeded my expectations in every way, the
            level of customer care throughout the process was exceptional.
          </p>
          <div className="profile-content">
            <div className="profile-circle"></div>
            <div className="text-of-profile">
              <h6> <span>Lorenz Ynez </span>- project manager</h6>
            </div>
          </div>
        </div>
 
      </div>
      <div onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <div className="testimonial-slider-card">
        <div className="star-icons">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
          <p className="details-of-cards">
            The service I received exceeded my expectations in every way, the
            level of customer care throughout the process was exceptional.
          </p>
          <div className="profile-content">
            <div className="profile-circle"></div>
            <div className="text-of-profile">
              <h6> <span>Lorenz Ynez </span>- project manager</h6>
            </div>
          </div>
        </div>
 
      </div>
      <div onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <div className="testimonial-slider-card">
        <div className="star-icons">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
          <p className="details-of-cards">
            The service I received exceeded my expectations in every way, the
            level of customer care throughout the process was exceptional.
          </p>
          <div className="profile-content">
            <div className="profile-circle"></div>
            <div className="text-of-profile">
              <h6> <span>Lorenz Ynez </span>- project manager</h6>
            </div>
          </div>
        </div>
 
      </div>
    </Slider>
  );
};

export default Cardslider;
