import React from "react";

const images = [
  {
    url: "/Uploads/Foto2.jpeg",
  },
  {
    url: "/Uploads/Foto3.jpeg",
  },
  {
    url: "/Uploads/FOTOOOO.jpeg",
  },
  {
    url: "/Uploads/foto5.jpeg",
  },
  {
    url: "/Uploads/Foto4.jpeg",
  },
];

function Galeria() {
  return (
    <div className="min-h-screen px-5 py-16 bg-[#e8ddd4] text-[#333] font-sans leading-relaxed">
      <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl ">
        Galería de Fotos
      </h2>

      {/* Fila de 3 pequeñas */}
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mb-12 sm:grid-cols-2 md:grid-cols-3">
        {images.slice(0, 3).map((img, index) => (
          <div
            key={index}
            className="p-3 transition duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl"
          >
            <img
              src={img.url}
              alt={`Foto ${index + 1}`}
              className="w-full h-[240px] object-cover rounded-xl"
            />
            <p className="mt-3 text-sm italic text-center text-gray-700">
              {img.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Fila de 2 medianas */}
      <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
        {images.slice(3).map((img, index) => (
          <div
            key={index + 3}
            className="p-4 transition duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl"
          >
            <img
              src={img.url}
              alt={`Foto ${index + 4}`}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <p className="mt-3 text-sm italic text-center text-gray-700">
              {img.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
