import axios from "axios";
import { useAuthStore } from "@/features/auth/stores";

const atheneaApi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,

  withCredentials: false,
});

atheneaApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { atheneaApi };
