import './styles.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import OrderCard from '../OrderCard'
import { ShoppingCartContext } from '../../Context'

const CheckoutSideMenu = () =>{

    const context = useContext(ShoppingCartContext)
    console.log('CART: ', context.cartProducts)

    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between item-center p-6">
                <h2 className='font-medium text-xl'>My Order</h2> 
                <ArrowLeftIcon 
                    className="h-6 w-6 text-black-500 cursor-pointer" 
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>

            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            title={product.title} 
                            imageUrl={product.image}    
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
        
    )
}

export default CheckoutSideMenu