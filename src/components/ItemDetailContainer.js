import ItemDetail from "./ItemDetail"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {getItemById} from "../data/products"

function ItemDetailContainer() {

    const [product, setProduct] = useState("");

    const params = useParams();
    //console.log(params)

    const {id} = useParams();

    useEffect( () => {
        getItemById(id).then(
            prod => {
                setProduct(prod);
            }
        )
    }, [id] )

    //console.log(id)
    //


    //console.log(product)


    return (
        <div>

            {product ? <ItemDetail item={product}/>: <h2>Cargando...</h2>}
            
        </div>

    )
}

export default ItemDetailContainer;