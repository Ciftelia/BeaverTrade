import "./App.css";
import { AppProvider } from "@toolpad/core/AppProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from "./components/Search/SearchResults";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import { createTheme } from "@mui/material/styles";

// integrate DashBoardLayout in the router
// i'll need to add pagination at some point
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Acts as the parent layout
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/about", element: <AboutPage /> },
      { path: "*", element: <h1>Not Found</h1> },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFDE2C",
    },
    secondary: {
      main: "#632B30",
    },
  },
});

function App() {
  return (
    <AppProvider router={router} theme={theme}>
      <RouterProvider router={router} theme={theme} />
    </AppProvider>
  );
}

export default App;
