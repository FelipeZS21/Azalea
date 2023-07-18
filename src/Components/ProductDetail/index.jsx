import './style.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () =>{

    const context = useContext(ShoppingCartContext)

    return(
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}

        >
            <div className="flex justify-between item-center p-6">
                <h2 className='font-medium text-xl'>Detail</h2> 
                <ArrowLeftIcon 
                    className="h-6 w-6 text-black-500 cursor-pointer" 
                    onClick={() => context.closeProductDetail()}
                />
            </div>
        </aside>
        
    )
}

export default ProductDetail