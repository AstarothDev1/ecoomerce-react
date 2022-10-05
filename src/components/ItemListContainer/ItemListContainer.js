import {useState,useEffect} from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import {useParams } from 'react-router-dom';
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts(categoryId).then(Response =>{
            setProducts(Response)
        }).finally(() => {
            setLoading(false)
        })
    },[categoryId   ])

    console.log(products)

    if(loading){
        return <h1>Loading...</h1>
    }


    return(
        <div className="ItemListContainer">
            <h1>Todos nuestros productos!!</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;