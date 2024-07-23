import React from "react";
import "./Portfolio.css";
import NavbarTab from "../NavbarPage/NavbarTab";
import Contact from "../AboutUs/ContactExperts/Contact";
import Footer from "../Footer/Footer";
import Work from '../Portfolio/RecentWork/Work';

const Portfolio = () => {
  return (
    <div className="portfolio-page-container">
      <NavbarTab />
      <div className="portfolio-main-content">
        <div className="portfolio-text-heading">
          <h5>CASE STUDIES</h5>
          <h1>
            Explore Our Recent <span>Work</span>
          </h1>
          <p>
            People expect more experience than ever before. Digiatto intersects
            customer experiences and design to create immersive solutions that
            shouts details. Making it easy and everlastingly memorable. Scroll
            to feel.
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
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
