import React from "react";

function Bibliografia() {
  return (
    <section className="bg-[#e8ddd4] py-16 px-5 text-[#333]">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
          Bibliografía Personal
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 items-start">
          {/* Texto */}
          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            <p>
              Mi nombre es <strong>Yuderka Almonte</strong>, nací en Puerto
              Plata el 12 de diciembre de 1986. Soy oriunda de{" "}
              <strong>El Naranjal</strong>, un campo humilde donde crecí rodeada
              del cariño de mis padres y una infancia tranquila, llena de juegos
              típicos de la época.
            </p>

            <p>
              A los 9 años, me trasladé a <strong>Santo Domingo</strong> para
              vivir con mi tía, en un entorno familiar lleno de principios y
              valores cristianos. Cursé mis estudios primarios en un colegio
              dirigido por monjas, lo que reforzó mi formación en valores.
              Posteriormente, completé la secundaria en el centro{" "}
              <strong>Prepara</strong>, donde culminé mis estudios en el año
              2013.
            </p>

            <p>
              Durante muchos años, trabajé en <strong>EDEESTE</strong>, donde
              desempeñé diversas funciones, destacándome en servicio al cliente
              y gestión de expedientes internos. Esta experiencia fortaleció mis
              habilidades administrativas y de trato con el público.
            </p>

            <p>
              Actualmente, me desempeño con pasión y compromiso como{" "}
              <strong>agente inmobiliaria</strong>, ayudando a otros a encontrar
              el hogar de sus sueños.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full max-w-[300px] mx-auto md:mx-0 rounded-xl overflow-hidden shadow-md">
            <img
              src="/Uploads/Foto1-yudy.jpeg" // Asegúrate de que esta ruta sea correcta
              alt="Yuderka Almonte"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bibliografia;
