import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layouts/Footer.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import Habilidades from "./pages/Habilidades.jsx";
import Contactos from "./pages/Contactos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/Habilidades" element={<Habilidades />} />
        <Route path="/Contactos" element={<Contactos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
