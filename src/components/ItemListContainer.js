import ItemCount from "./ItemCount"
import Item from "./Item"
import ItemList from "./ItemList"

import {getProducts, getProductsByCategory} from "../data/products"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"


function ItemListContainer(props) {

    const [products, setProducts] = useState(null);

    const { categoryId } = useParams()
   
    useEffect(()=> {
        console.log(categoryId)

        if(categoryId){
            getProductsByCategory(categoryId).then(response => {
                setProducts(response);
            }).catch(
                error => {
                    console.log(error);
                }
            )

        }else {
        getProducts().then( response => {
             setProducts(response);
        })

    }}, [categoryId])

    return (
        <div>
            <h2 style={{
                textAlign:"center", 
                color: "blue"}}>{props.greeting}</h2>
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer;
