import axios from 'axios';

const KEY = '3e0adcf7517a0f187185de79b0c950b8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async page => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${KEY}&page=${page}`
  );
  return response.data;
};

export const getInfo = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response;
};

export const getReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const getCredits = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getSearchQuery = async (page, query) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&page=${page}`
  );
  return response.data;
};