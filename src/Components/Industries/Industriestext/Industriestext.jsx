import React from "react";
import "./Industriestext.css";

const Industriestext = () => {
  return (
    <div className="industries-page-text-container">
      <div className="industries-text-content">
        <div className="main-text-heading-para">
          <h5>SAFER & SMARTER</h5>
          <h1>A Glance to <span>Industries</span></h1>
          <p>
            Explore our hands-on expertise in creating tailor-made digital
            solutions packed with strategy, operations and technologies.
          </p>
          <button>
            Let’s Talk &nbsp;
            <svg
              width="13"
              height="14"
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

export default Industriestext;
