import "./App.css";
import { Search } from "./components/Search/mySearch";
import { Header } from "./components/Header/Header";
import React, { useEffect, useState } from "react";

function App() {
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
        const names = data.map((item) => item.name); // Extract names
        setBackendData(names);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle fetch errors
      });
  }, []);

  return (
    <>
      <Header />
      <div>
        {backendData.map((item, index) => (
          <p key={index}>{item}</p> // Use index as a key (better to have unique id if possible)
        ))}
      </div>
    </>
  );
}

export default App;
