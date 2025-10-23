import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import "./App.css";

function App() {
  const API_KEY = "19a99a6839e30d8b377a8985d1e32a53";

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Popular on Netflix"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`}
      />
      <Row
        title="Trending Now"
        fetchUrl={`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`}
      />
      <Row
        title="Top Rated"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`}
      />
    </div>
  );
}

export default App;
