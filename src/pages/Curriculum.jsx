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

      <div className="p-6 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-[#0047ff] border-b-2 border-[#0047ff] pb-2">
          2. Actividades Realizadas
        </h2>
        <div>
          <h3 className="text-xl font-bold mb-1 text-[#333]">
            Descripción de Proyectos
          </h3>
          <p className="text-base leading-relaxed">
            De entrada está es una oficina que se dedica a la auditoría y
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
          <ul className="space-y-1 list-disc list-inside">
            <li>Atención al detalle.</li>
            <li>Trabajo en equipo.</li>
            <li>Pensamiento crítico y lógico.</li>
            <li>Capacidad de adaptación.</li>
            <li>Dominio sobre sistemas contables y software.</li>
          </ul>
          <br />
        </div>
      </div>
      <br />
      <div className="p-6 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-[#0047ff] border-b-2 border-[#0047ff] pb-2">
          3. Proceso de Aprendizaje
        </h2>
        {/* PRIMERA */}
        <div>
          <div className="space-y-6">
            {/* Pregunta principal */}
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#333]">
                ¿Cuál ha sido la actividad más importante?
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Cuando se trabaja en una empresa dedicada a la contabilidad,
                cada actividad resulta interesante y valiosa, ya que están
                directamente relacionadas con mi formación profesional. Sin
                embargo, una de las actividades más importantes para mí ha sido
                realizar las declaraciones del ITBIS, las retenciones, y el
                registro de ventas y gastos mediante los formularios 606 y 607.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-1 text-[#333]">
                ¿Y Por qué fue importante?
              </h4>
              <p className="text-base leading-relaxed text-gray-700">
                Porque estas tareas me permitieron aplicar conocimientos
                teóricos en un entorno real, desarrollar mayor responsabilidad,
                y comprender la importancia del cumplimiento tributario en las
                operaciones contables de una empresa. Además, fortalecieron mis
                habilidades técnicas y me dieron confianza en el manejo de
                procesos fiscales.
              </p>
            </div>
          </div>
        </div>
        {/* SEGUNDA */}
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#333]">
                ¿Qué aprendizaje significativo has obtenido hasta ahora?
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                He obtenido mucho más conocimiento del que tenía. En la
                universidad aprendemos la teoría, pero en la pasantía se aprende
                la práctica, que es muy diferente. Aquí he aprendido a resolver
                problemas instantáneos e inesperados, lo cual ha sido un gran
                reto y una gran experiencia.
              </p>
            </div>
          </div>
        </div>
        {/* TERCERA */}
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#333]">
                ¿Qué importancia tienen las actividades realizadas para tu
                futuro profesional?
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Estas actividades me han permitido afianzar mis conocimientos
                teóricos. Todo lo que he aprendido a lo largo de mi carrera lo
                he podido poner en práctica. Además, he desarrollado habilidades
                que antes no tenía, especialmente la atención al detalle, ya que
                al trabajar con información delicada y variada, hay detalles que
                pueden pasar desapercibidos si no se está atento.
              </p>
            </div>
          </div>
        </div>
        {/* CUARTA */}
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#333]">
                ¿Cómo te sientes respecto a tu pasantía?
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Me siento muy bien. He trabajado con un equipo que me ha acogido
                con paciencia y amabilidad. El ambiente laboral ha sido
                excelente, mostrando empatía y profesionalismo en todo lo que se
                hace. Me han enseñado paso a paso cómo funciona el sistema que
                utilizan y cada uno de los procesos contables que manejan.
              </p>
            </div>
          </div>
        </div>
        {/* QUINTA */}
        <div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#333]">
                ¿El registro contable ?
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                El registro contable es el día a día de las empresas y la base
                de la contabilidad. Cada compañía es diferente, y aquí
                registramos tanto los gastos como las ventas de varias empresas
                en grandes cantidades. Sin embargo, con el uso del sistema
                contable que manejan, el proceso se vuelve mucho más fácil y
                eficaz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
