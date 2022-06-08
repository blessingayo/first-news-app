import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsContainer from "./components/NewsContainer";
import BookmarkContainer from "./components/BookmarkContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={<NewsContainer />} />
          <Route exact path="/bookmarks" element={<BookmarkContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
