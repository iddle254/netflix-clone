import React from "react";
import "./poster.styles.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Poster({ backdrop_path, poster_path, name, isLargeRow }) {
  return (
    <div>
      <img
        className={`row_poster ${isLargeRow && "row_poster_large"}`}
        src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
        alt={name}
      />
    </div>
  );
}

export default Poster;
