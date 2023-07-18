import { Layout } from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            mi orden
            <div className='flex flex-col w-90'>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            imageUrl={product.image}    
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder
