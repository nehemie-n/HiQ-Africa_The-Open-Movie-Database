import Axios, {
  type AxiosRequestConfig,
  type RawAxiosRequestHeaders,
} from "axios";

export const API = Axios.create({
  baseURL: "https://www.omdbapi.com",
});

/**
 * Attach token on request
 */
API.interceptors.request.use((request) => {
  const authToken = import.meta.env.VITE_OMDB_API_KEY;
  request.url = request.url + `?apikey=${authToken}&`;
  return request;
});
