import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/Home";
/* import LoginPage from "./pages/Login"; */
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import LoginTestPage from "./pages/LoginTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      /* { path: "/login", element: <LoginPage /> }, */
      { path: "/login", element: <LoginTestPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
