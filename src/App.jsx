import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchResults from "./components/Search/SearchResults";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
