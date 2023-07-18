import { createContext } from 'react'

const shoppingCartContext = createContext()

export const shoppingCartProvider = ({children}) =>{
    return (
        <shoppingCartContext.Provider>
            {children}
        </shoppingCartContext.Provider>
    )
}