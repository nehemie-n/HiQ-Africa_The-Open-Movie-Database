import Axios, {
  type AxiosRequestConfig,
  type RawAxiosRequestHeaders,
} from "axios";

export const API = Axios.create({
  baseURL: "http://www.omdbapi.com",
});

/**
 * Attach token on request
 */
API.interceptors.request.use((request) => {
  const authToken = import.meta.env.VITE_OMDB_API_KEY;
  request.url + `&apikey=${authToken}`;
  return request;
});
