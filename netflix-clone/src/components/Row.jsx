import React, { useState, useEffect } from "react";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setMovies(data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
