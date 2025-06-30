import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Galeria from "../Components/galeria.jsx";

function Home() {
  return (
    <>
      <div className="bg-[#e8ddd4] text-[#333] font-sans leading-relaxed min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-5 py-16 min-h-[calc(100vh-80px)]">
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-10 items-start max-w-[1200px] mx-auto">
            <aside className="order-2 p-8 text-center bg-white shadow-lg rounded-2xl md:sticky top-10 md:order-1">
              <div className="w-[120px] h-[120px] mx-auto mb-6 rounded-full border-4 border-gray-200 overflow-hidden">
                <img
                  src="/Uploads/Foto1-yudy.jpeg"
                  alt="Yuderka Almonte"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-3xl font-bold text-[#333] mb-4 leading-tight">
                Yudelka <br />
                Almonte
              </h2>
              <div className="w-10 h-1 bg-[#2563eb] mx-auto mb-4"></div>
              <p className="mb-6 font-medium tracking-wide text-gray-600">
                Asesora Inmobiliaria
              </p>

              <div className="flex justify-center gap-4 text-lg text-black">
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
            </aside>

            <section className="order-1 md:order-2">
              <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-extrabold text-[#333] mb-4 leading-none">
                Yudelka Almonte
              </h1>
              <p className="mb-8 text-xl font-normal text-gray-600 sm:text-2xl">
                Esto es lo que soy y lo que hago
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="/Uploads/Curriculum Vitae Yuderka (2).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block"
                >
                  <button
                    type="button"
                    className="bg-[#2563eb] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide uppercase transition-transform hover:bg-[#1d4ed8] hover:-translate-y-0.5"
                  >
                    CURRÍCULUM
                  </button>
                </a>

                <Link to="/curriculum" className="inline-block">
                  <button
                    type="button"
                    className="border-2 border-[#333] text-[#333] px-8 py-3 rounded-full font-semibold text-sm tracking-wide uppercase transition-transform hover:bg-[#333] hover:text-white hover:-translate-y-0.5"
                  >
                    PROYECTOS
                  </button>
                </Link>
              </div>

              <div className="max-w-[600px] text-gray-700 space-y-6 text-base leading-relaxed">
                <p>
                  Soy Licenciada en Contabilidad, egresada de la Universidad
                  Abierta para Adultos (UAPA), con formación complementaria a
                  través de diversos cursos alineados a mi carrera. Me destaco
                  por ser una profesional proactiva, orientada a resultados, con
                  habilidades sólidas en el área de ventas, desarrolladas a
                  través de mi experiencia como asesora inmobiliaria en Plusval.
                </p>
                <p>
                  Además de mi formación académica, soy una mujer de fe, esposa
                  y madre, comprometida con los valores que rigen mi vida.
                  Actualmente participo en una obra misionera en la Iglesia
                  Elim, donde mensualmente imparto enseñanzas bíblicas a niños y
                  jóvenes, lo cual refleja mi vocación de servicio, liderazgo y
                  empatía.
                </p>
                <p>
                  Me considero una persona disciplinada, con deseos de seguir
                  aprendiendo y de aportar valor en cada proyecto en el que me
                  involucro. Estoy enfocada en alcanzar los objetivos propuestos
                  y en poner en práctica mis conocimientos y habilidades,
                  alineándome siempre con la visión y misión de la empresa a la
                  que pertenezca.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Aquí va la Galería */}
      <Galeria />
    </>
  );
}

export default Home;
