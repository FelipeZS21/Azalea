import './style.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () =>{

    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW:  ', context.productToShow)

    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between item-center p-6">
                <h2 className='font-medium text-xl'>Detail</h2> 
                <ArrowLeftIcon 
                    className="h-6 w-6 text-black-500 cursor-pointer" 
                    onClick={() => context.closeProductDetail()}
                />
            </div>
            <figure className='flex justify-center px-6'>
                <img 
                    className='w-full/2 h-40 rounded-lg' 
                    src={context.productToShow.image} 
                    alt={context.productToShow.title} 
                />
            </figure>
            <p className='flex flex-col p-6'> 
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-2md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>${context.productToShow.description}</span>
            </p>
        </aside>
        
    )
}

export default ProductDetail