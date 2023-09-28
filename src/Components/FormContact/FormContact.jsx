import React, { useState } from 'react';

const FormContact = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [autorizacion, setAutorizacion] = useState(false);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Celular:', celular);
    console.log('Correo:', correo);
    console.log('Autorización:', autorizacion);
  };

  return (
    <div className="flex mx-auto mt-10 bg-gradient-to-r from-blue-950 via-blue-500 to-indigo-900 w-full font-Quicksand">
      <form onSubmit={handleSubmit} className='w-1/2 p-10 bg-white m-10 rounded-md'>
      <h2 className="text-4xl font-semibold mb-4 my-5">Contacta con nosotros</h2>
        <div className="mb-4">
          <label className="block">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block ">Apellido</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block ">Número de Celular</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Número de Celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block ">Correo</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded text-black"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">
            Autorizo el tratamiento de mis datos para el envío de información de la página
          </label>
          <input
            type="checkbox"
            className="mr-2"
            checked={autorizacion}
            onChange={(e) => setAutorizacion(e.target.checked)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>

      <div className=" p-8 w-1/2 text-white">
      <div className="container mx-auto flex flex-wrap">
        {/* Primera columna */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Enlaces</h2>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className=" hover:underline">Política de privacidad</a>
            </li>
            <li className="mb-2">
              <a href="#" className=" hover:underline">Catálogo</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Términos y condiciones</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Quienes somos</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">(+57) 310-435-6282</a>
            </li>
          </ul>
          <div className="mt-7 flex">
            {/* Logos de redes sociales */}
            <a href=""><img src="/Imgs/Facebook.png" alt="Facebook" className="w-8 h-8 mr-2" /></a>
            <a href=""><img src="/Imgs/Pinterest.png" alt="Twitter" className="w-8 h-8 mr-2" /></a>
            <a href=""><img src="/Imgs/Instagram-logo.png" alt="Instagram" className="w-8 h-8" /></a>
          </div>
        </div>
        
        {/* Segunda columna */}
        <div className="w-full md:w-1/2">
          {/* Imagen */}
          <img src="/Imgs/logo-azalea-white.png" alt="Imagen de la sección" className=" rounded-full w-96 h-auto" />
        </div>
      </div>
    </div>
    </div>
  );
};

export { FormContact };
