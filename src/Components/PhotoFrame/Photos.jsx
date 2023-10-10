import React from 'react';
import PhotoFrame from './PhotoFrame';
import { FormContact } from './FormContact';

const Photos = () => {
  return (
    <div className='md:mt-16 flex w-full'>
      <div className="md:w-3/5 md:flex md:mt-10 md:mb-10 md:ml-20 md:flex-wrap">
        <PhotoFrame 
          imageUrl="/Imgs/pexels1.jpg" 
          caption="Descubre un catálogo de maquillaje que ofrece una variedad excepcional, 
          con productos de clase, estilo y belleza incomparables."
          title='Catalogo'/>
        <PhotoFrame 
          imageUrl="/Imgs/pexels2.jpg" 
          caption="Con su versatilidad y conveniencia, este pequeño pero poderoso 
          aliado permite crear looks deslumbrantes con facilidad."
          title='Blog'/>
        <PhotoFrame 
          imageUrl="/Imgs/pexels3.jpg" 
          caption=""
          title=''/>
        <PhotoFrame 
          imageUrl="/Imgs/pexels4.jpg" 
          caption=""
          title=''/>
      </div>
      <div>
        <FormContact/>
      </div>
    </div>
  );
};

export { Photos };
