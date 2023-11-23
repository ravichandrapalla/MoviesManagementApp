/* eslint-disable no-unused-vars */
import React from "react";
import "../global/global.css";
import MovieBox from "../components/MovieBox";
import MovieDetailsModal from "../components/MovieDetailsModal";
const Home = (props) => {
  const {
    totalMovies,
    searchTitle,
    movies,
    handleMovieBoxClicked,
    movieDetailsModalVisible,
    currentMovieDetails,
    handleMovieBoxClick,
    addToWatchList,
  } = props;
  return (
    <>
      <article className="total-tag">
        {totalMovies ? (
          <span className="results-success-text">{`Found ${totalMovies} Results for "${searchTitle}"`}</span>
        ) : (
          searchTitle && (
            <span className="results-failure-text">{`No Movies Found with "${searchTitle}" Title`}</span>
          )
        )}
      </article>
      <main className="main">
        <div className="trail">
          {movies.map((movie) => (
            <MovieBox
              data={movie}
              key={movie.imdbID}
              handleMovieBoxClicked={handleMovieBoxClicked}
            />
          ))}
        </div>
        {movieDetailsModalVisible && (
          <MovieDetailsModal
            details={currentMovieDetails}
            handleMovieBoxClose={handleMovieBoxClick}
            addToWatchList={(movieDetails) => addToWatchList(movieDetails)}
          />
        )}
      </main>
    </>
  );
};

export default Home;
