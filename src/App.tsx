import { RouterProvider } from "react-router-dom";

import { routes } from "@/features/core/routes/routes";

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
