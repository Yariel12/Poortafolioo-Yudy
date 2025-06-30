import React from "react";

function Curriculum() {
  return (
    <div className="mx-auto px-8 py-10 bg-[#e8ddd4] text-[#2c2c2c]">
      <a
        href="/Uploads/Curriculum Vitae Yuderka (2).pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-[#0047ff] text-white font-bold py-2 px-5 rounded-full mb-8 transition-colors hover:bg-[#0035c4]"
      >
        Visualizar mi CV
      </a>

      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-[#0047ff] border-b-2 border-[#0047ff] pb-2">
          2. Actividades Realizadas
        </h2>

        <div>
          <h3 className="text-xl font-bold mb-1 text-[#333]">
            Descripción de Proyectos
          </h3>
          <p className="text-base leading-relaxed">
            De entrada está esta es una oficina que se dedica a la auditoría y
            asesoría de impuestos. La empresa maneja la contabilidad de varias
            compañías, principalmente de constructoras en lo que amo se refiere
            yo he trabajado con varias haciendo declaraciones en el 606. Y en el
            sistema odoo que es el que la oficina tiene contratado. En el
            sistema odoo es muy amigable trabajar ya que todos los procesos y
            cuentas se maneja en unión.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-1 text-[#333]">
            Habilidades Aplicadas
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Atención al detalle.</li>
            <li>Trabajo en equipo.</li>
            <li>Pensamiento crítico y lógico.</li>
            <li>Capacidad de adaptación.</li>
            <li>Dominio sobre sistemas contables y software.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
