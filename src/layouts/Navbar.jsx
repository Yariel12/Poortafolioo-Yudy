import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#f5f5f5] border-b border-gray-300 py-5">
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo y título */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🔷</span>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-lg text-[#333]">
              Yudelka Almonte
            </span>
            <span className="text-sm text-gray-600 font-normal">
              / Asesora Inmobiliaria
            </span>
          </div>
        </div>

        {/* Menú grande */}
        <nav className="hidden md:flex gap-8 text-gray-600 text-sm font-medium tracking-wide">
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
            HABILIDADES
          </Link>
        </nav>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-[#333]"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú desplegable para móvil */}
      {isOpen && (
        <nav className="md:hidden mt-4 px-5 space-y-2 text-gray-600 text-sm font-medium tracking-wide">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-[#2563eb] transition-colors"
          >
            SOBRE MÍ
          </Link>
          <Link
            to="/curriculum"
            onClick={toggleMenu}
            className="block hover:text-[#2563eb] transition-colors"
          >
            CURRÍCULUM
          </Link>
          <Link
            to="/proyectos"
            onClick={toggleMenu}
            className="block hover:text-[#2563eb] transition-colors"
          >
            PROYECTOS
          </Link>
          <Link
            to="/contacto"
            onClick={toggleMenu}
            className="block hover:text-[#2563eb] transition-colors"
          >
            HABILIDADES
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
