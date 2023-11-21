/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../global/global.css";
const MovieBox = (props) => {
  // console.log("props are", props);
  const { Poster, Title, Type, Year, imdbID } = props.data;
  const { handleMovieBoxClicked } = props;
  return (
    <div className="moviecard" onClick={() => handleMovieBoxClicked(imdbID)}>
      <img src={Poster} width="100" alt="movie poster" />
      <span className="movie-title">{`${Title} - ${Year}`}</span>
    </div>
  );
};

export default MovieBox;
