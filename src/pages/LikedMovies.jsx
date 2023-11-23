/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../global/global.css";

const LikedMovies = () => {
  const [likedMovies, setLikedMovies] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );
  //   useEffect(() => {}, []);
  console.log(likedMovies);
  return (
    <section>
      <ul className="liked-movies-container">
        {likedMovies?.map((movie) => (
          <li key={movie.imdbID}>
            <article className="watch-list-movie">
              <img
                src={movie.Poster}
                alt="image"
                className="watch-list-image"
                width={80}
              ></img>
              <section className="watch-list-details">
                <span>{movie.Title}</span>
                <span>{movie.Year}</span>
              </section>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LikedMovies;
