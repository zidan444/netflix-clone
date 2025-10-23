import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  async function fetchData() {
    const API_KEY = "19a99a6839e30d8b377a8985d1e32a53";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();

    // Select the first movie
    const selectedMovie = data.results[0];
    setMovie(selectedMovie);
  }

  fetchData();
}, []);


  if (!movie) return <div>Loading...</div>;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.title}</h1>
        <p className="banner_description">{movie.overview}</p>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
