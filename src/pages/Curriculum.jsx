import React from "react";

function Curriculum() {
  return (
    <div className=" mx-auto px-8 py-10 bg-[#e8ddd4]">
      <a
        href="../public/Curriculum Vitae Yuderka (2).pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-[#0047ff] text-white font-bold py-2 px-5 rounded-full mb-5 transition-colors hover:bg-[#0035c4]"
      >
        Visualizar mi CV
      </a>

      <section className="mb-10">
        <h2 className="text-2xl mb-5 text-black font-semibold">Experiencia</h2>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-wrap gap-8">
          <div className="flex-1 min-w-[250px]">
            <div className="text-[#0047ff] font-bold text-lg mb-2">
              2025 – A la fecha
            </div>
            <div className="font-bold mb-1">PUESTO</div>
            <p className="text-gray-800 mb-1">Nombre de la empresa</p>
            <p className="text-gray-800">Ubicación de la empresa</p>
          </div>
          <div className="flex-1 min-w-[350px]">
            <p className="text-gray-700 mb-3">
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
              fácil.
            </p>
            <p className="text-gray-700">
              Aquí puedes contar tu historia y permitir que tus usuarios sepan
              más sobre ti.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-5 text-black font-semibold">Educación</h2>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-wrap gap-8">
          <div className="flex-1 min-w-[250px]">
            <div className="text-[#0047ff] font-bold text-lg mb-2">
              2035 – A la fecha
            </div>
            <div className="font-bold mb-1">PUESTO</div>
            <p className="text-gray-800 mb-1">Nombre de la empresa</p>
            <p className="text-gray-800">Ubicación de la empresa</p>
          </div>
          <div className="flex-1 min-w-[350px]">
            <p className="text-gray-700 mb-3">
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
              fácil.
            </p>
            <p className="text-gray-700">
              Aquí puedes contar tu historia y permitir que tus usuarios sepan
              más sobre ti.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Curriculum;
