import axios from "axios";
const atheneaApi = axios.create({
  baseURL: "https://athenea-app-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

//TODO: interceptors
//Leer el store de Zustand

export { atheneaApi };
