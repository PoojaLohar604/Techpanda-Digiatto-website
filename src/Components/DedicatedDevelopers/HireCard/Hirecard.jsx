import React from "react";
import "./Hirecard.css";


const Hirecard = ({heading,image}) => {
  return (
    <div className="hirecard-main-content">
      <div className="hirecard-mini-box">
        <img src={image} alt="logo"/>
      </div>
      <div className="heading-details-of-hire-card">
        <h5>{heading}</h5>
        <p>Craft dynamic web experiences with our skilled PHP developers. Experts in building robust and scalable solutions.</p>
        <button>
          Read More &nbsp;
          <svg
            width="10"
            height="10"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.42308 1.5L12 1.5M12 1.5L12 12.5M12 1.5L1 12.5"
              stroke="#013DC4"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hirecard;
