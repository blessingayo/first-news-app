import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../style-components/NewsContainer.css";
import Box from "@mui/material/Box";
import axios from "axios";
import Container from "@mui/material/Container";
import StarOutlined from "@mui/icons-material/StarOutlined";
import { useNavigate } from "react-router-dom";

const NewsUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=de14d65895ea493f8bcabcf84525fd84";

const NewsContainer = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [addFav, setAddFav] = useState([]);
  const [favoriteIndexes, setFavoriteIndexes] = useState([]);

  const addToBookmark = (newsData, index) => {
    const foundNewsData = addFav.find(
      (favs) => favs.author === newsData.author
    );

    if (foundNewsData !== undefined) {
      return;
    }
    console.log("adding to fav");
    console.log(newsData);
    const addedFav = [...addFav, newsData];
    const updatedIndexes = [...favoriteIndexes, index];

    setAddFav(addedFav);
    setFavoriteIndexes(updatedIndexes);
  };

  const goToBookmarks = () => {
    navigate("/bookmarks", { state: { favs: addFav } });
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
        <Container>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="view-btn-container"
          >
            <Box sx={{ my: 2 }}>
              <h3 className="latest">Latest News</h3>
            </Box>

            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
              }}
              className="view-btn"
              onClick={goToBookmarks}
            >
              View All Bookmarks
            </button>
          </div>
        </Container>
        <div className="line"></div>
        <div>
          <div className="top-news">
            {newsData.map((newsData, index) => {
              return (
                <div key={index}>
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
                                <StarOutlined
                                  className={
                                    favoriteIndexes.includes(index)
                                      ? `star fav`
                                      : `star`
                                  }
                                />
                                <p
                                  className="add-to"
                                  onClick={() => {
                                    addToBookmark(newsData, index);
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
