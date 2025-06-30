import React from "react";

function Habilidades() {
  return (
    <section className="bg-[#e8ddd4] py-16 px-5 text-[#333]">
      <div className="max-w-5xl p-8 mx-auto bg-white shadow-lg rounded-2xl">
        <h2 className="mb-10 text-5xl font-bold text-center ">Habilidades</h2>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Manejo de software contable
            </h3>
            <p className="text-sm text-gray-700">
              Experiencia con herramientas como Odoo, Excel avanzado, entre
              otros.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Pensamiento analítico
            </h3>
            <p className="text-sm text-gray-700">
              Capacidad para interpretar datos financieros, detectar errores y
              proponer soluciones efectivas.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Organización y atención al detalle
            </h3>
            <p className="text-sm text-gray-700">
              Precisión en el manejo de documentos, registros contables y
              cumplimiento de plazos fiscales.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">Ética profesional</h3>
            <p className="text-sm text-gray-700">
              Integridad y confidencialidad en el manejo de información
              financiera sensible.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Comunicación efectiva
            </h3>
            <p className="text-sm text-gray-700">
              Habilidad para explicar conceptos contables a personas no
              especializadas, como gerentes o clientes.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Resolución de problemas
            </h3>
            <p className="text-sm text-gray-700">
              Capacidad para enfrentar desafíos financieros y encontrar
              soluciones prácticas.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">Gestión del tiempo</h3>
            <p className="text-sm text-gray-700">
              Priorizar tareas y cumplir con entregas y declaraciones en los
              tiempos establecidos.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Adaptabilidad tecnológica
            </h3>
            <p className="text-sm text-gray-700">
              Disposición para aprender nuevas herramientas digitales y
              adaptarse a cambios en los procesos contables.
            </p>
          </div>

          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Capacidad de trabajo en equipo
            </h3>
            <p className="text-sm text-gray-700">
              Colaborar eficientemente con otros departamentos como finanzas,
              legal o recursos humanos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
