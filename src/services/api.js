import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export function defaultSearch(year) {
  return axios
    .get(`${apiUrl}/?apikey=${apiKey}&s=${"mission"}&y=${year}`)
    .then((resp) => {
      if (resp && resp.status === 200) {
        return resp;
      } else {
        throw new Error("api response is not 200");
      }
    })
    .catch((err) => err);
}

export function searchMovie(searchText) {
  return axios
    .get(`${apiUrl}/?apikey=${apiKey}&s=${searchText}`)
    .then((resp) => {
      if (resp && resp.status === 200) {
        return resp;
      } else {
        throw new Error("api response is not 200");
      }
    })
    .catch((err) => err);
}

export function getMovieDetails(imdbID) {
  return axios
    .get(`${apiUrl}/?apikey=${apiKey}&i=${imdbID}`)
    .then((resp) => {
      if (resp && resp.status === 200) {
        return resp;
      } else {
        throw new Error("api response is not 200");
      }
    })
    .catch((err) => err);
}
