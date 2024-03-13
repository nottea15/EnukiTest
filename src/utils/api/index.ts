import axios, {AxiosError} from 'axios';

import {API_URL, ACCESS_TOKEN} from '@env';

const api = axios.create({
  baseURL: API_URL, // your server url
  timeout: 20000, // in millliseconds - default is `0` (no timeout)
});

// Request interceptor for API calls
api.interceptors.request.use(
  async (config: any) => {
    const token = ACCESS_TOKEN
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  },
);
export default api;
