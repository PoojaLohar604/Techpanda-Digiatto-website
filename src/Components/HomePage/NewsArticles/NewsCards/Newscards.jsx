import React from "react";
import "./Newcard.css";
import newsimg1 from "../../../../Assets/newsimg1.jpg";

const Newscards = ({ image, title, info}) => {
  return (
    <div className="news-articles-card">
      <div className="news-card-content">
        {image.map((item, index) => (
          <img key={index} src={item} alt="image" />
        ))}
        <h4>{title}</h4>
        <h6>August 22, 2023 - No Comments</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam
          ligula, sagittis a vulputate iaculis, consectetur in tortor. Proin
          congue commodo enim. Vestibulum malesuada auctor turpis, nec
          consectetur ex maximus et. Praesent eget sem vel
        </p>
        <button>
          Read More &nbsp;
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
  );
};

export default Newscards;
