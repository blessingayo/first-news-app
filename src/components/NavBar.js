import React from "react";
import "../style-components/NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

const NavBar = () => {
  return (
    <div className="">
      <CssBaseline />

      <AppBar>
        <Toolbar className="nav-background">
          <div className="nav-header">NewsOnline</div>
        </Toolbar>
      </AppBar>

      <Toolbar className="news-container" />
    </div>
  );
};

export default NavBar;
