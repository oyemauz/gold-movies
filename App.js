import "./App.css";
import "./index.css";
import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import Login from "./Login-signup/Login";
import SignUp from "./Login-signup/Signup";
import Blog from "./Blog/Blog";
import Contact from "./ui/Contact";
import AboutUs from "./ui/AboutUs";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/Trailer/:ytTrailerId",
        element: <Trailer />,
      },
      {
        path: "/Reviews/:movieId",
        element: <Reviews />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
