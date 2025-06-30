import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contactos() {
  return (
    <section className="bg-[#e8ddd4] py-16 px-5 text-[#333]">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-10 text-6xl font-bold text-center">Contáctame</h2>

        <div className="grid gap-10 p-8 bg-white shadow-md rounded-2xl md:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-[#2563eb]" />
              <div>
                <p className="text-sm text-gray-600">Teléfono</p>
                <p className="font-semibold">+1 (829) 663-2500</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#2563eb]" />
              <div>
                <p className="text-sm text-gray-600">Correo electrónico</p>
                <p className="font-semibold">yalmonte@plusval.do</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#2563eb]" />
              <div>
                <p className="text-sm text-gray-600">Ubicación</p>
                <p className="font-semibold">
                  Santo Domingo, República Dominicana
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Nombre</label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Correo</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Mensaje</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                placeholder="Escribe tu mensaje..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#2563eb] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#1d4ed8] transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactos;
