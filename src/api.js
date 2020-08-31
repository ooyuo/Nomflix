import axios from "axios";

/*
fetch api대신 axios instance 사용 (클린 코드, 가독성위해)
api_key를 가지고 baseURL을 불러온다.
inspect에서 network로 api를 잘 불러오는지 확인 (index.js에 이 파일을 import)
*/
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "7cc9f9d3ffbc414db380b40acb8b8150",
    language: "en-US",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
};
