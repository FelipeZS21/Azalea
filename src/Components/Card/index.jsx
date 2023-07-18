import { useContext } from "react";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from "../../Context";

const Card = (data) =>{

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCar = (event,productData) =>{
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id) =>{

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0 

        if(isInCart){
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-0.5'
                >
                    <CheckIcon className="h-4 w-4 mt-1 mb-1 text-white"/>
                </div>
            )
        }else{
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-0.5'
                    onClick={(event) => addProductsToCar(event,data.data)}
                >
                    <PlusIcon className="h-4 w-4 mt-1 mb-1 cursor-pointer"/>
                </div>
            )
        }
    } 

    return(
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
                <img 
                    className='w-full h-full object-cover rounded-lg'
                    src={data.data.image} 
                    alt={data.data.title} 
                />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light mr-2 truncate'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    ); 
}

export { Card }