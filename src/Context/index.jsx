import { createContext, useState } from 'react'
import { useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) =>{

    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close 
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)

    // Checkout side menu - Open/Close 
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - Show Information 
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart 
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order 
    const [order, setOrder] = useState([])

    // Get products 
    const [items, setItems] = useState(null); 

    // Get products by title 
    const [searchByTitle, setSearchByTitle] = useState(null); 
    console.log('searchByTitle: ', searchByTitle)



    useEffect(() =>{
            fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => setItems(data))
        },  
    []);


    return (
        <ShoppingCartContext.Provider value={{
            count, 
            setCount, 
            openProductDetail, 
            closeProductDetail, 
            isProductDetailOpen, 
            productToShow, 
            setProductToShow,
            cartProducts, 
            setCartProducts,
            isCheckoutSideMenuOpen, 
            openCheckoutSideMenu, 
            closeCheckoutSideMenu, 
            order, 
            setOrder, 
            items, 
            setItems, 
            searchByTitle, 
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}