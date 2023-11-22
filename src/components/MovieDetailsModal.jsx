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
    imdbID,
  } = props.details;
  const { handleMovieBoxClose, addToWatchList } = props;
  return (
    <div className="movie-details-modal">
      <section className="poster">
        <img
          src={Poster}
          className="opened-poster"
          height="100%"
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
          <p className="movie-details-text">{`Plot : ${Plot}`}</p>
        </article>
        {/* <article className="movie-plot">
          
        </article> */}
        <section className="button-section">
          <button className="add" onClick={() => addToWatchList(props.details)}>
            Add to Watch List
          </button>
          <button className="watched">Already Watched ? Rate</button>
        </section>
      </section>
      <button className="close-button" onClick={handleMovieBoxClose}>
        Close
      </button>
    </div>
  );
};

export default MovieDetailsModal;
