import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import NavbarTab from "../../NavbarPage/NavbarTab";
import Button from "react-bootstrap/Button";
import Scroller from "../Scroller/Scroller";
import Course from "../Courses/Course";
import Ourproject from "../OurProject/Ourproject";
import Discuss from "../DiscussSection/Discuss";
import Experts from "../Experts/Experts";
import Technologies from "../Technologies/Technologies";
import News from "../NewsArticles/News";
import Awards from "../Awards/Awards";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";


const Home = () => {
  // const listItems = [
  //   "Mobile App Development",
  //   "Web Development",
  //   "Custom Software Development",
  //   "UI/UX Development",
  //   "E-Commerce Development",
  //   "Digital Marketing",
  // ];

  const text = "Creative..";
  const speed = 800;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Reset the text after a delay
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, displayedText, text, speed]);
  return (
    <>
      <div className="home-page-container">
        <NavbarTab />
        <Container>
          <div className="home-main-content ">
            <div className="test-test">
              <h4>we're the experts</h4>
              <h1>
                we develop <span>{displayedText}</span> <br /> website for your
                business
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor
                in.
              </p>
              <Button className="animation-bu">
                <span>
                  Discover &nbsp;&nbsp;
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.85313 1.5L12.4301 1.5M12.4301 1.5L12.4301 12.5M12.4301 1.5L1.43005 12.5"
                      stroke="#F6F6F6"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </Container>
        <Scroller />
        <Course />
        <Ourproject />
        <Discuss />
        <Experts />
        <Technologies />
        <News />
        <Awards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
