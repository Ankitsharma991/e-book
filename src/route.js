import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import App from "./App";
import Login from "./components/Login";
import Store from "./components/Store";
import Contact from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
