const API_KEY = "d9d8b819";
const API_URL = "http://www.omdbapi.com/";

const getMovies = async (search) => {
  const url = `${API_URL}?apikey=${API_KEY}&s=${search}`;
  const response = await fetch(url);
  const data = await response.json();
  const { Search } = data;

  if (Search) return Search;
  else return [];
};

const getMovie = async (id) => {
  const url = `${API_URL}?apikey=${API_KEY}&i=${id}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data) return data;
  else return [];
};

export { getMovies, getMovie };
