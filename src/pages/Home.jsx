import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="bg-[#e8ddd4] text-[#333] font-sans leading-relaxed min-h-screen flex flex-col">
      {/* Main */}
      <main className="flex-grow container mx-auto px-5 py-16 min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-[350px_1fr] gap-20 items-start max-w-[1200px] mx-auto">
          <aside className="bg-white p-10 rounded-lg shadow-lg sticky top-10 text-center">
            <div className="w-[120px] h-[120px] mx-auto mb-8 rounded-full border-4 border-gray-200 overflow-hidden">
              <img
                src="../public/Foto1-yudy.jpeg"
                alt="Yudelka Almonte"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-[#333] mb-5 leading-tight">
              Yudelka <br />
              Almonte
            </h2>
            <div className="w-10 h-1 bg-[#2563eb] mx-auto mb-5"></div>
            <p className="text-gray-600 font-medium tracking-wide mb-8">
              Asesora Inmobiliaria
            </p>

            <div className="flex gap-3 mt-1 text-black text-lg justify-center">
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
          </aside>

          {/* Hero Content */}
          <section>
            <h1 className="text-[7.5rem] font-extrabold text-[#333] mb-5 leading-none max-md:text-[5rem] max-sm:text-[3.75rem]">
              Yudelka Almonte
            </h1>
            <p className="text-2xl text-gray-600 mb-10 font-normal max-sm:text-xl">
              Esto es lo que soy y lo que hago
            </p>

            <div className="flex gap-5 mb-12 flex-wrap max-sm:flex-col max-sm:items-start">
              <a
                href="../public/Curriculum Vitae Yuderka (2).pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#2563eb] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide uppercase transition-transform hover:bg-[#1d4ed8] hover:-translate-y-0.5">
                  CURRÍCULUM
                </button>
              </a>

              <button className="border-2 border-[#333] text-[#333] px-8 py-3 rounded-full font-semibold text-sm tracking-wide uppercase transition-transform hover:bg-[#333] hover:text-white hover:-translate-y-0.5">
                PROYECTOS
              </button>
            </div>

            <div className="max-w-[500px] text-gray-600 space-y-6 text-base leading-relaxed">
              <p>
                Soy Licenciada en Contabilidad, egresada de la Universidad
                Abierta para Adultos (UAPA), con formación complementaria a
                través de diversos cursos alineados a mi carrera. Me destaco por
                ser una profesional proactiva, orientada a resultados, con
                habilidades sólidas en el área de ventas, desarrolladas a través
                de mi experiencia como asesora inmobiliaria en Plusval.
              </p>
              <p>
                Además de mi formación académica, soy una mujer de fe, esposa y
                madre, comprometida con los valores que rigen mi vida.
                Actualmente participo en una obra misionera en la Iglesia Elim,
                donde mensualmente imparto enseñanzas bíblicas a niños y
                jóvenes, lo cual refleja mi vocación de servicio, liderazgo y
                empatía.
              </p>
              <p>
                Me considero una persona disciplinada, con deseos de seguir
                aprendiendo y de aportar valor en cada proyecto en el que me
                involucro. Estoy enfocada en alcanzar los objetivos propuestos y
                en poner en práctica mis conocimientos y habilidades,
                alineándome siempre con la visión y misión de la empresa a la
                que pertenezca.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
