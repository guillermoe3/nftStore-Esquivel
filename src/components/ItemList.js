import Item from "./Item"
import {getProducts} from "../data/products"
import {useEffect, useState} from "react"
import {Box} from '@mui/material'

function ItemList(){

    const [products, setProducts] = useState(null);
   
    useEffect(()=> {
        getProducts().then( response => {
             setProducts(response);
        })

    }, [])

    /*
    async function asyncProduct (){
        let products = await getProducts();
        console.log(products)
    }
    
    <h2 key={product.id}>{product.title}</h2>
    
    */



    console.log(products);

    return (
        <div>

            <Box sx={{
                
                display:"flex", 
                flexDirection: "row", 
                flexWrap: "wrap", 
                justifyContent: "center"
                
            }}>
  
            {products ? products.map((prod)=> <Item key={prod.id} product={prod} /> ) : <h2>Cargando...</h2>}

       
            </Box>

            
        
        </div>
    )

}

export default ItemList;