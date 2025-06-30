import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path) =>
    `block md:inline hover:text-[#2563eb] transition-colors ${
      pathname === path ? "text-[#2563eb] font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="bg-[#f5f5f5] border-b border-gray-300 py-4">
      <div className="container flex items-center justify-between px-5 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🔷</span>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-lg text-[#333]">
              Yudelka Almonte
            </span>
            <span className="text-sm font-normal text-gray-600">
              / Asesora Inmobiliaria
            </span>
          </div>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden gap-6 text-sm font-medium tracking-wide md:flex">
          <Link to="/" className={getLinkClass("/")}>
            SOBRE MÍ
          </Link>
          <Link to="/curriculum" className={getLinkClass("/curriculum")}>
            ACTIVIDADES Y APRENDIZAJE
          </Link>
          <Link to="/Contactos" className={getLinkClass("/Contactos")}>
            CONTACTO
          </Link>
          <Link to="/Habilidades" className={getLinkClass("/Habilidades")}>
            HABILIDADES
          </Link>
        </nav>

        {/* Botón Móvil */}
        <button
          className="md:hidden text-[#333] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil desplegable */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-[#f5f5f5] px-5 pb-4`}
      >
        <nav className="flex flex-col gap-3 mt-4 text-sm font-medium tracking-wide">
          <Link to="/" onClick={toggleMenu} className={getLinkClass("/")}>
            SOBRE MÍ
          </Link>
          <Link
            to="/curriculum"
            onClick={toggleMenu}
            className={getLinkClass("/curriculum")}
          >
            ACTIVIDADES Y APRENDIZAJE
          </Link>
          <Link
            to="/Contactos"
            onClick={toggleMenu}
            className={getLinkClass("/Contactos")}
          >
            CONTACTO
          </Link>
          <Link
            to="/Habilidades"
            onClick={toggleMenu}
            className={getLinkClass("/Habilidades")}
          >
            HABILIDADES
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
