import React from "react";
import "./Blogpage.css";
import NavbarTab from "../NavbarPage/NavbarTab";
import Contact from "../AboutUs/ContactExperts/Contact";
import Footer from "../Footer/Footer";
import Post from '../BlogPage/PopularPost/Post';

const Blogpage = () => {
  return (
    <div className="blogpage-container">
      <NavbarTab />
      <div className="blogpage-main-content">
        <div className="blogpage-text-content">
          <h5>STARTUPS, DESING, TECHNOLOGY</h5>
          <h1>
            Digiatto <span>Insights</span>
          </h1>
          <p>
            View the latest stories, insights and our development experiences
            focusing on Digital Technologies, Enterprise Mobility, and Web
            Development.
          </p>
        </div>
      </div>
      <Post />
      <Contact />
      <Footer />
    </div>
  );
};

export default Blogpage;
