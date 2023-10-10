import React from 'react';

const PhotoFrame = ({ imageUrl, caption, title}) => {
  return (
    <div className="font-Quicksand md:w-72 h-72 border shadow-md relative m-2 overflow-hidden ">
      <img
        src={imageUrl}
        alt="Foto"
        className="w-full h-full transition-opacity duration-300 object-cover"
      />
      <div className="md:flex md:flex-col md:justify-center md:text-center absolute inset-0 flex items-center justify-center opacity-100 bg-black bg-opacity-50 transition-transform hover:scale-105" style={{ zIndex: 1 }}>
        <h1 className="text-white text-lg font-semibold">{title}</h1>
        <p className="text-white text-lg mt-3">{caption}</p>
      </div>

    </div>
  );
};

export default PhotoFrame;

