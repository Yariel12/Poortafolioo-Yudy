import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layouts/Footer.jsx";
import Curriculum from "./pages/Curriculum.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
