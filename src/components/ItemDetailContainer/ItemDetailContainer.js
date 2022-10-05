import { useEffect,useState } from "react"
import { getProduct}  from "../../asyncmock"
import {useParams} from 'react-router-dom'; 


const ItemDetailContainer = () => {

    const [product, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
  

    useEffect(()=>{
        getProduct(productId).then(Response =>{
            setProducts(Response)
        }).finally(()=>{
            setLoading(false)
        })

    },[])
    
    console.log(product)

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h1>Detalles de Producto!</h1>
            <div>
                <h1>{product?.name}</h1>
                <h2>{product?.category}</h2>
                <h3>{product?.price}</h3>
                <img src={product?.img} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;