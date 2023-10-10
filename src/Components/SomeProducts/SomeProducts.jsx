import React from 'react';

const SomeProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Paleta de colores Nzeal',
      price: '$19.99',
      imageUrl: '/Imgs/producto1.jpg', // Ruta de la imagen
    },
    {
      id: 2,
      name: 'Brochas skynergy',
      price: '$29.99',
      imageUrl: '/Imgs/producto2.jpg', // Ruta de la imagen
    },
    {
      id: 1,
      name: 'Skynergy ',
      price: '$10.99',
      imageUrl: '/Imgs/producto3.jpg', // Ruta de la imagen
    },
    {
      id: 2,
      name: 'Kit Nova bases y colores',
      price: '$39.99',
      imageUrl: '/Imgs/producto4.jpg', // Ruta de la imagen
    },
    {
      id: 1,
      name: 'Kit Nova labios y delineador',
      price: '$30.99',
      imageUrl: '/Imgs/producto5.jpg', // Ruta de la imagen
    },
    {
      id: 2,
      name: 'sin stock',
      price: '-- --',
      imageUrl: '/Imgs/logo-azalea.png', // Ruta de la imagen
    },
    // Agrega más productos aquí
  ];

    return (
      <div className="md:mt-28 md:mb-20 font-Quicksand container mx-auto px-4">
        <h1 className='md:text-4xl mb-8'>Algunos de nuestros productos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white overflow-hidden shadow-md md:w-48">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full object-cover h-48"
              />
            <div className="p-4 ">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export { SomeProducts }



