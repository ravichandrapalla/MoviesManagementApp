/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../global/global.css";

const MovieDetailsModal = (props) => {
  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Language,
    Poster,
    imdbRating,
    Type,
  } = props.details;
  const { handleMovieBoxClose } = props;
  return (
    <div className="movie-details-modal">
      <section className="poster">
        <img
          src={Poster}
          className="opened-poster"
          height={430}
          alt="movie detailed"
        />
      </section>
      <section className="details">
        <article className="movie-info">
          <p className="movie-details-text">{`Title : ${Title}`}</p>
          <p className="movie-details-text">{`Year of Release : ${Year}`}</p>
          <p className="movie-details-text">{`Runtime : ${Runtime}`}</p>
          <p className="movie-details-text">{`Genre : ${Genre}`}</p>
          <p className="movie-details-text">{`Director : ${Director}`}</p>
          <p className="movie-details-text">{`Actors : ${Actors}`}</p>
          <p className="movie-details-text">{`Language : ${Language}`}</p>
          <p className="movie-details-text">{`Imdb Rating : ${imdbRating}`}</p>
        </article>
        <article className="movie-plot">
          <p className="movie-details-text">{Plot}</p>
        </article>
      </section>
      <button className="close-button" onClick={handleMovieBoxClose}>
        Close
      </button>
    </div>
  );
};

export default MovieDetailsModal;
