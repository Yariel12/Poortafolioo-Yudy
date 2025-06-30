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
      <div className="footer-container max-w-[1200px] mx-auto px-5 flex justify-between flex-wrap gap-10">
        <div className="footer-left flex-1 min-w-[250px]">
          <a href="#" className="block mb-1 text-black no-underline">
            Política de Privacidad
          </a>
          <p>© 2025 Creado por Yudelka Almonte</p>
        </div>

        <div className="footer-right flex flex-wrap gap-10">
          <div className="footer-section min-w-[150px]">
            <strong className="block mb-2 text-black">Llama</strong>
            <p>+1 (829) 663-2500</p>
          </div>
          <div className="footer-section min-w-[150px]">
            <strong className="block mb-2 text-black">Escribe</strong>
            <p>
              <a
                href="mailto:info@misitio.com"
                className="text-gray-600 no-underline hover:text-[#2563eb]"
              >
                info@misitio.com
              </a>
            </p>
          </div>
          <div className="footer-section min-w-[150px]">
            <strong className="block mb-2 text-black">Sigue</strong>
            <div className="flex gap-3 mt-1 text-black text-lg ">
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
