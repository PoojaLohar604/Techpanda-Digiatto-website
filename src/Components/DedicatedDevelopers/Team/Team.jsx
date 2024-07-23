import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-page-container">
      <div className="team-main-content">
        <div className="team-text">
          <h5>CRAFT YOUR VISION. CODE THE FUTURE</h5>
          <h1>
            Dedicated <span>Developers</span>
            <br></br>
            Who Become an Extension of Your Team
          </h1>
          <p>
            Building groundbreaking things requires a team that clicks. We
            provide highly skilled developers who work seamlessly alongside your
            team, understanding your goals and exceeding expectations.
          </p>
          <button>
            Let's Build Something Real &nbsp;
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

export default Team;
