import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const NavBar = () =>{

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'; 

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
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
                        onClick={() => context.setSearchByCategory("Men's Clothes")}
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        Men's Clothes
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
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/womens-clothes'
                        onClick={() => context.setSearchByCategory("women's clothes")}
                        className={({ isActive }) =>
                            isActive? activeStyle : undefined
                        }
                    >
                        Women's Clothes
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
                    <ShoppingCartIcon className="h-6 w-6 mr-1" /> {context.count}
                </li>
            </ul>
        </nav>
    ); 
}

export { NavBar } 