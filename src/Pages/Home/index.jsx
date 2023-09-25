import { useContext, useEffect} from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {

    const context = useContext(ShoppingCartContext)

    const renderView = () =>{
        if(context.filteredItems?.length > 0){
            return(
                context.filteredItems?.map(item => (
                    <Card
                        key={item.id} 
                        data= {item}
                    />
                ))
            )
        }else{
            return(
                <div>We don't have anything :D</div>
            )
        }
    }
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-60 mb-4 ">
                <picture>
                    <img src="../../../public/Imgs/logo-azalea.png" alt="azalea-logo" />
                </picture>
            </div>
            {/*<input 
                className="rounded-lg border border-black-500 w-80 p-4 mb-4 focus: outline none"
                onChange={(event) => context.setSearchByTitle(event.target.value) }
                type="text" 
                placeholder="Search a product"
            />*/}
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {/*renderview*/}
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Home
