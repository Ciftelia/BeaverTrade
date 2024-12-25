import React from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import { Search } from "@mui/icons-material";
import { MySearchComponent } from "./components/Search/mySearch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";

const routes = [
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
