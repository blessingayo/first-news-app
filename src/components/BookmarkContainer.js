import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../style-components/NewsContainer.css";
import axios from "axios";
import Container from "@mui/material/Container";
import StarOutlined from "@mui/icons-material/StarOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BookmarkContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { favs } = location.state;
  console.log(favs);

  if (favs === undefined || favs === null) {
    navigate("/");
  }
  if (favs.length === 0) {
    return (
      <>
        <h1>No Bookmarks added yet</h1>
      </>
    );
  }

  return (
    <div>
      <Container>
        <div>
          <div className="top-news">
            {favs.map((newsData, index) => {
              return (
                <div key={index}>
                  <div>
                    <Link to={"/"}>
                      <button>Go back home</button>
                    </Link>
                    <div>
                      <Card className="cards ">
                        <CardContent>
                          <div>
                            <h5 className="news-description">
                              <h4 className="news-title">{newsData.title}</h4>
                              <div className="line card-line"></div>
                              <span className="description">
                                {newsData.description}
                              </span>
                            </h5>

                            <div className="texts">
                              <a
                                href={newsData.url}
                                target="blank"
                                rel="noreferer"
                                className="read-more"
                              >
                                Read Full Story
                              </a>

                              <div>
                                <p className="time">5 mins ago</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookmarkContainer;
