import React from "react";
import "./Workcard.css";

const Workcard = ({title,heading}) => {
  return (
    <div className="workcard-content">
      <h5>{title}</h5>
      <h1>{heading}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
      <button>
        View Casestudy &nbsp;
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
            stroke-width="1.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Workcard;
