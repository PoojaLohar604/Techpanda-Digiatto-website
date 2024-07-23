import React from "react";
import "./News.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Newscards from "./NewsCards/Newscards";
import newsimg1 from "../../../Assets/newsimg1.jpg";
import newsimg2 from "../../../Assets/newsimg2.jpg";
import newsimg3 from "../../../Assets/newsimg3.jpg";

const News = () => {
  const newsImages1 = [newsimg1];
  const newsImages2 = [newsimg2];
  const newsImages3 = [newsimg3];
  return (
    <div className="news-page-container">
      <div className="news-main-content">
        <div className="news-text-content">
          <h5>News & articles</h5>
          <h1>Unveiling Digital Excellence</h1>
          <p>
            View the latest blogs, press releases, and stories on our
            development experiences focusing on digital technologies and leading
            market trends.
          </p>
        </div>
        <div className="news-cards">
          <Row>
            <Col lg={4} md={4} sm={4}>
              <Newscards
                image={newsImages1}
                title="Elevate Your Online Presence:
                       Digital Agency Insights"
              />
            </Col>
            <Col lg={4} md={4} sm={4}>
              <Newscards
                image={newsImages2}
                title="Code and Creativity: Crafting Digital
                        Excellence Together"
              />
            </Col>
            <Col lg={4} md={4} sm={4}>
              <Newscards
                image={newsImages3}
                title="Pixels to Profits: Maximizing Returns with
                       Digital Expertise"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default News;
