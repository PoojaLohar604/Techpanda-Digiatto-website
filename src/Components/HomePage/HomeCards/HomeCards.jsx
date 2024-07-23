import React from "react";
import "./HomeCards.css";

const HomeCards = ({title,content}) => {
  return (
    <div className="my-home-cards">
      <div className="mini-box"></div>
      <div className="content-of-cards">
        <h5>{title}</h5>
        <p>
          {content}
        </p>
        <button >
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

export default HomeCards;
