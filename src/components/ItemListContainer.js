import ItemList from "./ItemList"

import {getProducts, getProductsByCategory} from "../data/products"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"


function ItemListContainer(props) {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const onResize = ()=>{
        console.log("Se escuchó un evento")}
   
    useEffect(()=> {
        //console.log(categoryId)
        setLoading(true);

        if(categoryId){
            getProductsByCategory(categoryId).then(response => {
                setProducts(response);
            }).catch(
                error => {
                    console.log(error);
                }
            ).finally(() => {
                setLoading(false);
            })

        }else {
        setLoading(true);
        getProducts().then( response => {
             setProducts(response);
        }).catch( err => {
            console.log(err)
        }).finally( ()=> {
            setLoading(false);}
        )
        //limpieza del componente/cleanup.
        return (() => {
            setProducts([])
        }) 

    }}, [categoryId])


    useEffect(()  =>{
        window.addEventListener("resize", onResize)

        return (() => {
            window.removeEventListener("resize", onResize)
            
        })

    }, [])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos de esta categoria</h1>
    }

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
