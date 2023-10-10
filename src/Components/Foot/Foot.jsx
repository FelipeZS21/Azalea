import React, { useState } from 'react';

const Foot = () => {
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
    <div className='flex flex-col mt-10 w-full bg-gradient-to-r from-blue-950 via-blue-500 to-indigo-900'>
        <div className="flex mx-auto w-full font-Quicksand">
            <div className="w-full md:w-3/5 md:m-6 text-white md:flex md:items-center md:border-r md:border-r-white md:pr-5">
                <img src="/Imgs/logo-azalea-white.png" alt="Imagen de la sección" className="rounded-full w-36 h-auto md:mb-5 md:mr-5"/>
                <p>
                    En Azalea Cosmetics, la belleza es nuestro compromiso. Nuestra filosofía 
                    se resume en una sola frase: 'La belleza realza tu confianza y tu confianza 
                    realza tu belleza'.<br></br><br></br>

                    Ofrecemos una gama de productos de maquillaje de alta calidad 
                    que te permiten expresar tu belleza única y resaltar tu estilo personal. Únete 
                    a nosotros y descubre cómo Azalea Cosmetics puede ayudarte a lograr tu mejor 
                    aspecto y sentirte segura en cada ocasión.
                </p>
            </div>
            <div className=" p-8 w-2/5 text-white">
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
                    <div className="mt-7 flex flex-col">
                        {/* Logos de redes sociales */}
                        <p>Nos puedes encontrar en:</p>
                        <div className='flex '>
                            <a href=""><img src="/Imgs/Facebook.png" alt="Facebook" className="w-8 h-8 mr-2 transition md:hover:scale-125" /></a>
                            <a href=""><img src="/Imgs/Pinterest.png" alt="Twitter" className="w-8 h-8 mr-2 transition md:hover:scale-125" /></a>
                            <a href=""><img src="/Imgs/Instagram-logo.png" alt="Instagram" className="w-8 h-8 transition md:hover:scale-125" /></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center text-white text-lg mb-7 mt-6'>
            <h2>© 2023 Azalea Cosmetics. Todos los derechos reservados.</h2>
        </div>
    </div>
  );
};

export { Foot };
