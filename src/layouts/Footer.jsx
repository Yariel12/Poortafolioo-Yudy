import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="py-10 text-sm text-black bg-white">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between gap-10 flex-wrap">
        {/* Parte izquierda */}
        <div className="flex-1 min-w-[250px]">
          <a
            href="#"
            className="block mb-2 text-black no-underline hover:text-[#2563eb]"
          >
            Política de Privacidad
          </a>
          <p>© 2025 Creado por Yudelka Almonte</p>
        </div>

        {/* Parte derecha */}
        <div className="flex flex-col flex-wrap gap-10 sm:flex-row">
          <div className="min-w-[150px]">
            <strong className="block mb-2 text-black">Llama</strong>
            <p>+1 (829) 663-2500</p>
          </div>

          <div className="min-w-[150px]">
            <strong className="block mb-2 text-black">Escribe</strong>
            <p>
              <a
                href="mailto:yalmonte@plusval.do"
                className="text-gray-600 hover:text-[#2563eb]"
              >
                yalmonte@plusval.do
              </a>
            </p>
          </div>

          <div className="min-w-[150px]">
            <strong className="block mb-2 text-black">Sigue</strong>
            <div className="flex gap-4 mt-1 text-lg text-black">
              <a
                href="https://www.linkedin.com/in/yudi-almonte-069358347/"
                className="hover:text-[#2563eb]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.instagram.com/yudi.almonte/?igsh=MW9rZ2NxbTB5cnlhNw%3D%3D#"
                className="hover:text-[#2563eb]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
