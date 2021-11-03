// const API_KEY = "dae00b55c2f84ea3e6b7a5269e204c45";
const API_KEY = "6e6c92460cd54ac3e85cf0087d7a5c9c";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key${API_KEY}&with_networks=213`,
  //   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
};

export default requests;
