import axios from 'axios';

const apiToken = import.meta.env.VITE_API_TOKEN;

console.log("Token carregado do .env:", apiToken);

const api = axios.create({
  baseURL: 'https://abitus-api.geia.vip',
  headers: {
    'Authorization': `Bearer ${apiToken}`
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    if (error.response && error.response.status === 403) {
      console.error("Authentication failed. Check your API Token.");
    }
    return Promise.reject(error);
  }
);

export default api;