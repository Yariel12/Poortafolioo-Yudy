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
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-10 items-start max-w-[1200px] mx-auto">
          {/* Aside */}
          <aside className="bg-white p-8 rounded-2xl shadow-lg md:sticky top-10 text-center order-2 md:order-1">
            <div className="w-[120px] h-[120px] mx-auto mb-6 rounded-full border-4 border-gray-200 overflow-hidden">
              <img
                src="/Uploads/Foto1-yudy.jpeg"
                alt="Yuderka Almonte"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-[#333] mb-4 leading-tight">
              Yudelka <br />
              Almonte
            </h2>
            <div className="w-10 h-1 bg-[#2563eb] mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium tracking-wide mb-6">
              Asesora Inmobiliaria
            </p>

            <div className="flex gap-4 justify-center text-black text-lg">
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
          <section className="order-1 md:order-2">
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-extrabold text-[#333] mb-4 leading-none">
              Yudelka Almonte
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-normal">
              Esto es lo que soy y lo que hago
            </p>

            <div className="flex gap-4 flex-wrap mb-10">
              <a
                href="/Uploads/Curriculum Vitae Yuderka (2).pdf"
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

            <div className="max-w-[600px] text-gray-700 space-y-6 text-base leading-relaxed">
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
