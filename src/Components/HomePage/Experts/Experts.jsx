import React from "react";
import "./Experts.css";
import Expertslider from '../ExpertSlider/Expertslider';

const Experts = () => {
  return (
    <div className="experts-page-container">
      <div className="experts-main-content">
        <div className="experts-text-content">
          <h5>We are experts in</h5>
          <h1>Industries We Serve</h1>
          <div className="experts-paragraph">
            <p>
              Customer Experience is everything! We design & create solutions by
              spotting customers’ actions, emotions, and unmet needs. We make
              enterprises that impact lives.
            </p>
            <div className="paragraph-button">
              <div className="button-one">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1346 1.36539L2 10.5M2 10.5L11.5 20M2 10.5H21"
                    stroke="white"
                    stroke-width="2.5"
                  />
                </svg>
              </div>
              <div className="button-one">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.86538 1.36539L19 10.5M19 10.5L9.5 20M19 10.5H0"
                    stroke="white"
                    stroke-width="2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>        
      </div>
      <Expertslider />
    </div>
  );
};

export default Experts;
