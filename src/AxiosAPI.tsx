import axios from 'axios';

const AxiosAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default AxiosAPI;
