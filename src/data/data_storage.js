const MOVIES_STORAGE_KEY = "MOVIES_STORAGE_KEY";

const getMyListMovies = () => {
  const data = localStorage.getItem(MOVIES_STORAGE_KEY);
  if (data) return JSON.parse(data);
  else return [];
};

export { MOVIES_STORAGE_KEY, getMyListMovies };
