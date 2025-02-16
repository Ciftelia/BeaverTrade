import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Search } from "@mui/icons-material";
import { MySearchComponent } from "../components/Search/mySearch";
import { createBrowserRouter, Link, RouterProvider } from "react-router";

export default function SearchPage() {
  const [backendData, setBackendData] = useState([]); // Initialize as an array

  useEffect(() => {
    fetch("http://localhost:4500/name")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle fetch errors
      });
  }, []);

  return (
    <>
      <nav>
        <Link to="/about">About</Link>
        <MySearchComponent data={backendData} />
      </nav>
    </>
  );
}
