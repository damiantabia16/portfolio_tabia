import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="proyecto/:id" element={<Project />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
