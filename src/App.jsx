// Import router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

// Pages
import Home from "./pages/Home";
import AllCharacters from "./pages/AllCharacters";
import Episodes from "./pages/Episodes";

// Components
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/info" element={<Home />} />
          <Route path="/characters" element={<AllCharacters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
