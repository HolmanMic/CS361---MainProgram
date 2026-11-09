import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Activities from "./pages/Activities";
import Basics from "./pages/Basics";
import NavBar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/basics" element={<Basics />} />
      </Routes>
    </HashRouter>
  );
}

export default App;