import { createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
