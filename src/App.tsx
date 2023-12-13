/* Import Dependancies, React Router, Redux */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
/* Import the stores for Redux */
import { store } from "./store/index";

/* Import default Css Styles, rest of css is handled with Tailwind */
import "./index.css";

/* Import Pages and layouts for React Router */
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";

/* Set up the routes for the webPage*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

/* We wrap all the app in the Router Component, and then wrap it with the Redux provider, for the whole app to have access to the store */
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
