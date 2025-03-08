import "./App.css";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { AppProvider } from "@toolpad/core/AppProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from "./components/Search/SearchResults";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
      main: "#E6AF2E",
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
