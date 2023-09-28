import React from 'react';

const SomeProducts = () => {
  return (
    <div className="font-Quicksand flex flex-col items-center justify-center">
        <div className="text-black p-8 flex flex-col justify-center text-center">
            <h2 className="text-2xl font-semibold">Catalogo</h2>
            <p className="text-xl mt-2 w-full px-64">
                Descubre un catálogo de maquillaje que ofrece una variedad 
                excepcional, con productos de clase, estilo y belleza incomparables, 
                todo respaldado por una gran calidad.
            </p>
        </div>
        <div className='w-full flex justify-center'>
            <img src="../../../Public/Imgs/labial-logo.png" alt="" className='w-56 h-56'/>
            <img src="../../../Public/Imgs/brocha-logo.png" alt="" className='w-56 h-56'/>
            <img src="../../../Public/Imgs/pinturas-logo.png" alt="" className='w-56 h-56'/>
            <img src="../../../Public/Imgs/base-logo.png" alt="" className='w-56 h-56'/>
        </div>
    </div>
  );
};

export { SomeProducts };
