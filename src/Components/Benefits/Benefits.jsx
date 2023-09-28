import React from 'react';

const Benefits = () => {
  return (
    <div className="w-full flex justify-between my-10">
      {/* Primera sección */}
      <div className="w-1/3 p-4">
        <img src="../../../public/Imgs/logo-regalo.png" alt="Logo 1" className="w-20 h-20 mx-auto" />
        <h2 className="font-Quicksand text-center text-lg font-semibold">Personalización</h2>
        <p className="font-Quicksand text-center">Personaliza tus regalos con nuestros productos y aprovecha nuestras ofertas especiales</p>
      </div>

      {/* Segunda sección */}
      <div className="w-1/3 p-4">
        <img src="../../../public/Imgs/logo-camion.png" alt="Logo 2" className="w-20 h-20 mx-auto" />
        <h2 className="font-Quicksand text-center text-lg font-semibold">Sin costo de envió nacional</h2>
        <p className="font-Quicksand text-center">Benefíciate con envío nacional sin costo en todos nuestros productos y con seguro incluido.</p>
      </div>

      {/* Tercera sección */}
      <div className="w-1/3 p-4">
        <img src="../../../public/Imgs/logo-hoja.png" alt="Logo 3" className="w-20 h-20 mx-auto" />
        <h2 className="font-Quicksand text-center text-lg font-semibold">Productos amigables</h2>
        <p className="font-Quicksand text-center">Tu elección consciente para lucir y sentirte bien, sin comprometer nuestro planeta.</p>
      </div>
    </div>
  );
};

export { Benefits };
