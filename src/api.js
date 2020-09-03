import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "80de6028174bbf70950277d9f699a288",
    language: "en-US",
  },
});

api.get("tv/popular");

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  pupular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
};
