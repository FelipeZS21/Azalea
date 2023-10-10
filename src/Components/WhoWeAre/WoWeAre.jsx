const WhoWeAre = () => {
    return (
        <div className="font-Quicksand flex flex-col md:flex-row items-center justify-center md:space-x-5 md:mb-16 md:mt-16 pl-16 pr-16">
            <div className='w-full md:w-1/4 flex justify-center transition md:hover:scale-110'>
                <img src="/Imgs/logo-azalea-white.png" alt="" className='w-56 h-56 rounded-full'/>
            </div>
            <div className="text-black flex flex-col justify-center text-left w-full md:items-start md:w-3/4 items-center">
                <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold mb-3">¿Quiénes somos?</h1>
                <p className="text-lg md:text-xl mt-2 text-stretch md:text-left ">
                    Nos enorgullece ser una empresa dedicada a brindar a nuestros clientes una experiencia 
                    excepcional en el mundo de la belleza. Somos apasionados por lo que hacemos y nos especializamos 
                    en la venta de maquillaje de alta calidad. Nuestra misión es ofrecer una amplia variedad de 
                    productos de maquillaje que permitan a nuestros clientes realzar su belleza única y expresar su 
                    estilo personal. {/*Desde los tonos más sutiles hasta los más vibrantes, nuestra selección 
    cuidadosamente curada de productos de maquillaje se adapta a todas las ocasiones y preferencias.*/}
                </p>
            </div>
</div>

    );
};

export { WhoWeAre }