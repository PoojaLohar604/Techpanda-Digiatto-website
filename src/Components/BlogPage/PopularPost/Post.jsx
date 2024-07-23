import React from "react";
import "./Post.css";
import Newscards from "../../HomePage/NewsArticles/NewsCards/Newscards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import newsimg1 from "../../../Assets/newsimg1.jpg";
import newsimg2 from "../../../Assets/newsimg2.jpg";
import newsimg3 from "../../../Assets/newsimg3.jpg";
import fireicon from "../../../Assets/fireicon.png";
import like from '../../../Assets/like.png';
import share from '../../../Assets/share.png';
import comment from '../../../Assets/comment.png';
import postimg from '../../../Assets/postimg.png'

const Post = () => {
  const newsImages1 = [newsimg1];
  const newsImages2 = [newsimg2];
  const newsImages3 = [newsimg3];
  return (
    <div className="post-page-container">
      <div className="post-page-main-content">
        <div className="post-page-image-content">
          <Row>
            <Col lg={6} md={6} sm={6}>
              <div className="post-main-content">
                <div className="icon-heading">
                  <div className="post-icon"><img src={fireicon}/></div>
                  <div className="post-heading">
                    <p>HOT TOPIC</p>
                  </div>
                </div>
                <h1>
                  This Long-Awaited Technology <br></br>May Finally Change the
                  World
                </h1>
                <div className="technology-hours-icons">
                  <div className="para-of-hours-icons">
                  <p>Technology &nbsp; | &nbsp; 12 Hours Ago &nbsp;|</p>
                  </div>
                  <div className="thumb-text-share-icons">
                    <img src={like}/> <p>05</p> &nbsp;
                    <img src={comment}/> <p>13</p> &nbsp;
                    <img src={share}/> <p>15</p> &nbsp;
                  </div>
                </div>
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
            </Col>
            <Col lg={6} md={6} sm={6}>
            <div className="postimage-box">
              <img src={postimg}/>
            </div>
            </Col>
          </Row>
        </div>
        <div className="popular-page-cards">
          <h2>Popular Post</h2>
          <div className="news-cards">
            <Row>
              <Col lg={4} md={4} sm={4}>
                <div className="post-card-center">
                  <Newscards
                    image={newsImages1}
                    title="Elevate Your Online Presence:
                       Digital Agency Insights"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <div className="post-card-center">
                  <Newscards
                    image={newsImages2}
                    title="Code and Creativity: Crafting Digital
                        Excellence Together"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={4}>
                <div className="post-card-center">
                  <Newscards
                    image={newsImages3}
                    title="Pixels to Profits: Maximizing Returns with
                       Digital Expertise"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
