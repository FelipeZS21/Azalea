import { NavLink } from "react-router-dom"

const FrontPage = ({ children }) =>{
    return(
        <div className="relative flex flex-col bg-gradient-to-r from-blue-950 via-blue-500 to-indigo-900  items-center">
            <div className="flex w-full ">
                <section className="flex items-center">
                    <div className="flex flex-col px-10 m-2 w-4/5 justify-center text-white">
                        <div>
                            <h1 className="text-5xl font-YoungSerif">
                                Sé la versión más audaz y hermosa de ti misma
                            </h1>
                            <p className="font-Quicksand text-xl my-7">
                                Sumérgete en el mundo de la belleza, la elegancia y la 
                                calidad del maquillaje. Ofrecemos una amplia gama de productos 
                                que reflejan nuestra pasión por realzar tu belleza de manera 
                                excepcional. Experimenta la 
                                belleza con confianza en cada producto que ofrecemos.
                            </p>
                            <h3 className="font-Quicksand font-bold text-xl">
                                Al registrarte te enviaremos ofertas especiales y novedades para que 
                                aproveches los mejores precios.
                            </h3>
                        </div>
                        <div className="my-4">
                            {/*<NavLink to='/Session'>
                                <button className="font-Quicksand text-indigo-900 bg-white w-36 h-10 rounded-lg text-black transition hover:text-white hover:bg-blue-500 duration-300">
                                    <h2 className="font-bold">Registrate</h2>
                                </button>   
    </NavLink>*/}
                        </div>
                    </div>
                    <div className=" w-2/4 flex">
                        <picture className="w-full">
                            <img src="/Imgs/wallpaper2.png" alt="" />
                        </picture>
                    </div>
                </section>
            </div>
        </div>
    )
}   

export { FrontPage }