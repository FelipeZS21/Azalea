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
    const [filteredItems, setFilteredItems] = useState(null); 

    // Get products by title 
    const [searchByTitle, setSearchByTitle] = useState(null); 

    // Get products by Category 
    const [searchByCategory, setSearchByCategory] = useState(null); 

    console.log('searchByTitle: ', searchByTitle)

    const filteredItemsByTitle = (items, searchByTitle) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        console.log('ITEMS: ', items)
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE'){ return filteredItemsByTitle(items, searchByTitle)}
        if(searchType === 'BY_CATEGORY'){ return filteredItemsByCategory(items, searchByCategory)}        
        if(searchType === 'BY_CATEGORY_AND_CATEGORY'){ 
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())) 
        }  
        if(!searchType){ return items}
    }

    useEffect(() => {
        if(searchByCategory && searchByTitle) setFilteredItems(filterBy('BY_CATEGORY_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory))
        if(searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

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
            setSearchByTitle, 
            filteredItems, 
            setSearchByCategory, 
            searchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}