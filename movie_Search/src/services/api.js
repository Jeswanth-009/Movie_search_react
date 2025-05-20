// api.js
const API_KEY = '557fbaff22f720f70abc6c885b60b3c1';
const BASE_URL = 'https://api.themoviedb.org/3';

const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTdmYmFmZjIyZjcyMGY3MGFiYzZjODg1YjYwYjNjMSIsIm5iZiI6MTc0NzY2OTMyMy4zMDU5OTk4LCJzdWIiOiI2ODJiNTE0YmFkZjU3Y2E3MDlmNTVlMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VGJOU2i0DveDCLUZToudGSR5iYVmKKjek3zIAVpVBrM';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
  }
};

export const getPopularMovies = async () => {
  try {
    let allMovies = [];
    for (let page = 1; page <= 3; page++) { // Fetching up to 3 pages
      const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=${page}`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      allMovies = [...allMovies, ...data.results];
    }
    return allMovies;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};
