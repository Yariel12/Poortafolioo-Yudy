import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white text-black py-10 text-sm">
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
        <div className="flex flex-col sm:flex-row gap-10 flex-wrap">
          <div className="min-w-[150px]">
            <strong className="block mb-2 text-black">Llama</strong>
            <p>+1 (829) 663-2500</p>
          </div>

          <div className="min-w-[150px]">
            <strong className="block mb-2 text-black">Escribe</strong>
            <p>
              <a
                href="mailto:info@misitio.com"
                className="text-gray-600 hover:text-[#2563eb]"
              >
                info@misitio.com
              </a>
            </p>
          </div>

          <div className="min-w-[150px]">
            <strong className="block mb-2 text-black">Sigue</strong>
            <div className="flex gap-4 mt-1 text-black text-lg">
              <a href="#" className="hover:text-[#2563eb]">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-[#2563eb]">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-[#2563eb]">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="hover:text-[#2563eb]">
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
