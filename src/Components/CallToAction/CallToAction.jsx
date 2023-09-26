const CallToAction = ({ children }) =>{
    return(
        <div className="flex flex-col items-center ">
            <div className="flex w-full">
                <section>
                    <div>
                        <div>
                            <h1>Sé la versión más audaz y hermosa de ti misma.</h1>
                            <p>
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
                    <div>
                        <picture>
                            <img src="../../../public/Imgs/wallpaper-landing.png" alt="" />
                        </picture>
                    </div>
                </section>
            </div>
        </div>
    )
}   

export { CallToAction }