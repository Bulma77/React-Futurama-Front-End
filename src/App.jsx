// Import router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Fontawesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faX);

import "./App.css";

// Pages
import Home from "./pages/Home";
import Info from "./pages/Info";
import AllCharacters from "./pages/AllCharacters";
import Episodes from "./pages/Episodes";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/characters" element={<AllCharacters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
