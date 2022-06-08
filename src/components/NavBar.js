import React from "react";
import "../style-components/NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NewsContainer from "./NewsContainer.js";

const NavBar = () => {
  return (
    <div>
      <div className="">
        <CssBaseline />

        <AppBar>
          <Toolbar className="nav-background">
            <div className="nav-header">NewsOnline</div>
          </Toolbar>
        </AppBar>

        <Toolbar className="news-container" />
        <Container>
          <Box sx={{ my: 2 }}>
            <h3 className="latest">Latest News</h3>
          </Box>
        </Container>

        <div className="line"></div>
      </div>
      <NewsContainer />
    </div>
  );
};

export default NavBar;
