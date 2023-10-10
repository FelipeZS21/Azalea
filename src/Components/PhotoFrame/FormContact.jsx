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
    <div className="flex w-full font-Quicksand">
      <form onSubmit={handleSubmit} className='w-full md:px-16 md:pt-7 flex flex-col justify-center rounded-md'>
        <div className='mb-4'>
          <h2 className="text-4xl font-semibold mb-4 my-5">Contacta con nosotros</h2>
          <p>
            Obtén información adicional sobre nuestro primer catalogo, 
            descuentos, premios y mas.
          </p>
        </div>
        <div className="mb-4">
          <label className="block">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 md:rounded-3xl text-black"
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
            className="w-full p-2 border border-gray-300 md:rounded-3xl text-black"
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
            className="w-full p-2 border border-gray-300 md:rounded-3xl text-black"
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
            className="w-full p-2 border border-gray-300 md:rounded-3xl text-black"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex">
          <input
            type="checkbox"
            className="mr-2"
            checked={autorizacion}
            onChange={(e) => setAutorizacion(e.target.checked)}
            required
          />
          <label className="block">
            Autorizo el tratamiento de mis datos para el envío de información de la página
          </label>
        </div> 
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 transition hover:bg-blue-600 md:w-48 rounded-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export { FormContact };
