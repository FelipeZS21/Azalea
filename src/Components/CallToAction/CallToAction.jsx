const CallToAction = ({ children }) =>{
    return(
        <div className="flex flex-col items-center ">
            <div className="flex w-full">
                <section className="flex">
                    <div className="flex flex-col px-10 m-2 w-4/5">
                        <div>
                            <h1 className="text-3xl font-Playfair font-bold">Sé la versión más audaz y hermosa de ti misma.</h1>
                            <p className="font-Quicksand text-xl my-7">
                                Sumérgete en el mundo de la belleza, la elegancia y la 
                                calidad del maquillaje. Ofrecemos una amplia gama de productos 
                                que reflejan nuestra pasión por realzar tu belleza de manera 
                                excepcional. Cada artículo en nuestro catálogo está cuidadosamente 
                                seleccionado para brindarte una experiencia de maquillaje que 
                                combina la calidad de lujo con la accesibilidad. Experimenta la 
                                belleza con confianza en cada producto que ofrecemos
                            </p>
                            <h3>Que esperas?! Registrate totalmente gratis!</h3>
                        </div>
                        <button>
                            hello 
                        </button>
                    </div>
                    <div className="w-full px-9">
                        <picture className="w-full">
                            <img src="../../../public/Imgs/wallpaper-landing.png" alt="" />
                        </picture>
                    </div>
                </section>
            </div>
        </div>
    )
}   

export { CallToAction }