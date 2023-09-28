import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const NavBar = () =>{

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'; 

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full px-8 text-sm font-light top-0 bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
                    >
                        <div className="flex items-center justify-center relative w-full">
                            <picture className="w-full">
                                <img className="w-32" src="../public/Imgs/logo-azalea-white.png" alt="azalea-logo" />
                            </picture>
                        </div>
                    </NavLink>
                </li>
                {/*<li>
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCategory('')}
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/mens-clothes'
                        onClick={() => context.setSearchByCategory("men's clothing")}
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/womens-clothes'
                        onClick={() => context.setSearchByCategory("women's clothing")}
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jewelery'
                        onClick={() => context.setSearchByCategory('jewelery')}
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        Jewelery
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    felipeZS21@platzi.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        My Account 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        Sign in
                    </NavLink>
                </li>
                <li className='flex'>
                    <ShoppingCartIcon className="h-6 w-6 mr-1" /> {context.cartProducts.length}
                </li>*/}
            </ul>
        </nav>
    ); 
}

export { NavBar } 