// src/api.ts
import axios from "axios";

const AxiosAPI = axios.create({
    baseURL: "http://localhost:5000/api", // Change this to your API base URL when we get it
});

// request interceptor to always add token if available
AxiosAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken") || sessionStorage.getItem("jwtToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default AxiosAPI;
