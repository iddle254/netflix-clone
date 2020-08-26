import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Poster from "../Poster/Poster.component";
import "./row.styles.css";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  //   console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* {row posters} */}
        {movies.map((movie) => (
          <Poster key={movie.id} isLargeRow={isLargeRow} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;
