import './style.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const ProductDetail = () =>{
    return(
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className="flex justify-between item-center p-6">
                <h2 className='font-medium text-xl'>Detail</h2> 
                <ArrowLeftIcon className="h-6 w-6 text-black-500" />
            </div>
        </aside>
        
    )
}

export default ProductDetail