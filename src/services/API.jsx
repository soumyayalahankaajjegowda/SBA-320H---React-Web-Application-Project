const API_KEY = "c09720d50160ea7d43ecc2ab28e96f05";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page ) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  console.log("data",data)
  return data;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`

  );
  const data = await response.json();
  console.log('d',data)
  return data;
};
