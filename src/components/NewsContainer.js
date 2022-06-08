import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../style-components/NewsContainer.css";
import axios from "axios";
import Container from "@mui/material/Container";
import StarOutlined from "@mui/icons-material/StarOutlined";
import { Typography } from "@mui/material";
const NewsUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=de14d65895ea493f8bcabcf84525fd84";

const NewsContainer = () => {
  const [newsData, setNewsData] = useState([]);
  const [addFav, setAddFav] = useState([]);

  const addToBookmark = (newsData) => {
    if (addFav.find((favs) => favs.author === newsData.author)) {
      return;
    }

    const addedFav = [...addFav, newsData];

    setAddFav(addedFav);
  };

  useEffect(() => {
    async function getTopNews() {
      const response = await axios.get(NewsUrl);
      setNewsData(response.data.articles);
      console.log(response.data.articles);
    }
    getTopNews();
  }, []);

  return (
    <div c>
      <Container>
        <div>
          <div className="top-news">
            {newsData.map((newsData) => {
              return (
                <div>
                  <div>
                    <div>
                      <Card className="cards">
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
                                target="_blank"
                                rel="noreferer"
                                className="read-more"
                              >
                                Read Full Story
                              </a>
                              <div className="add-container">
                                <StarOutlined className="star" />
                                <p
                                  className="add-to"
                                  onClick={() => {
                                    addToBookmark(newsData);
                                    console.log(addToBookmark(newsData));
                                  }}
                                >
                                  Add to bookmarks
                                </p>
                              </div>

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

export default NewsContainer;
