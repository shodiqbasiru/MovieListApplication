import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SearchMoviesPage from "./pages/SearchMoviesPage";
import MyListMoviesPage from "./pages/MyListMoviesPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<SearchMoviesPage />} />
          <Route path="/my-movies" element={<MyListMoviesPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
