import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#f5f5f5] border-b border-gray-300 py-5">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔷</span>
          <span className="font-semibold text-lg text-[#333]">
            Yudelka Almonte
          </span>
          <span className="text-sm text-gray-600 font-normal">
            / Asesora Inmobiliaria
          </span>
        </div>
        <nav className="flex gap-8 text-gray-600 text-sm font-medium tracking-wide">
          <Link
            to="/"
            className="nav-link active text-[#2563eb] hover:text-[#2563eb] transition-colors"
          >
            SOBRE MÍ
          </Link>
          <Link
            to="/curriculum"
            className="hover:text-[#2563eb] transition-colors"
          >
            CURRÍCULUM
          </Link>
          <Link
            to="/proyectos"
            className="hover:text-[#2563eb] transition-colors"
          >
            PROYECTOS
          </Link>
          <Link
            to="/contacto"
            className="hover:text-[#2563eb] transition-colors"
          >
            CONTACTO
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
