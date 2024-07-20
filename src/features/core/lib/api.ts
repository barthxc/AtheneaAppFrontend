import { useAuthStore } from "@/features/auth/stores/auth.store";
import axios from "axios";
const atheneaApi = axios.create({
	baseURL: "https://athenea-app-backend.vercel.app/api",

	withCredentials: false,
});

//TODO: interceptors
//Leer el store de Zustand
atheneaApi.interceptors.request.use((config) => {
	const token = useAuthStore.getState().token;
	console.log({ token });

	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
});

export { atheneaApi };
