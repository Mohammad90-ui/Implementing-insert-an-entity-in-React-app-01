import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/AddBook";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
