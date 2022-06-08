import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../style-components/NewsContainer.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ my: 2 }}>
              <h3 className="latest">All Bookmarks</h3>
            </Box>

            <Link to={"/"}>
              <button
                style={{
                  padding: "20px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                }}
                className="view-btn"
              >
                Go back home
              </button>
            </Link>
          </div>
        </Container>
        <div className="line"></div>
        <div>
          <div className="top-news">
            {favs.map((newsData, index) => {
              return (
                <div key={index}>
                  <div style={{ marginTop: "30px" }}>
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
