import axios from "axios";

const atheneaApi = axios.create({
  baseURL: "https://athenea-app-backend.vercel.app",
});

//TODO: interceptors
//Leer el store de Zustand

export { atheneaApi };
