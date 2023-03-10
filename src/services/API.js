import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'd8f6c8593dac3d35659165785d083845';

const TRENDIND_PATH = '/trending/all/day';
const SEARCH_PATH = '/search/movie';
const SEARCH_ALL_INFO_PATH = '/movie';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${TRENDIND_PATH}?page=1&api_key=${API_KEY}`
  );
  return response.data;
};

export const searchMoviesByName = async search => {
  const response = await axios.get(
    `${SEARCH_PATH}?query=${search}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  return response.data;
};

export const searchMovieById = async Id => {
  const response = await axios.get(
    `${SEARCH_ALL_INFO_PATH}/${Id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const searchActorsById = async Id => {
  const response = await axios.get(
    `${SEARCH_ALL_INFO_PATH}/${Id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const searchReviewsById = async Id => {
  const response = await axios.get(
    `${SEARCH_ALL_INFO_PATH}/${Id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};
