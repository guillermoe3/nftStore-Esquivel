import {useState, useEffect, useContext} from "react"
import {Box, Button} from "@mui/material"
import ItemCount from "./ItemCount"
import {Link } from "react-router-dom"
import CartContext from "../context/CartContext"




function ItemDetail ( {item} ){


    const {addItem, isInCart, getItemInCart} = useContext(CartContext);

    const [quantity1, setQuantity] = useState(0)

    const onAdd = (quantity) => {

        console.log("Agregué al carrito la cantidad quantity "+ quantity);
        setQuantity(quantity);
        addItem(item, quantity);
    }
    console.log("la cantidad que llega del componente ItemCount quantity1 es " + quantity1)



    const getElementCart = (id) => {

        let element = getItemInCart(id);
        return element;

    }
    return (
        <div style={{
            
            display:"flex", 
            alignItems:"center", 
            justifyContent:"center",
            width:"100%"
        }}>
        <Box sx={{
            border: 1,
            maxWidth:"350",
            alignItems:"center", 
            justifyContent:"center",
            marginTop:"5%"

            
            
        }}>
        <img src={item.pictureUrl} style={{
            width:"500"
                    }}/>
        <h2>id del producto: {item.id}</h2>
        <h2>Titulo: {item.title}</h2>
        <h2>Descripción: {item.description}</h2>
        <h2>Categoria: {item.category}</h2>
        <h2>Precio: {item.price}</h2>

        <Box sx={{padding:2.5}}>

        {isInCart(item.id) 
            ? 
        
            <Button size = "small" variant="outlined" color="primary">
                  <Link to="/cart"> Ir al carrito </Link>
             </Button>


            :
            <ItemCount stock={item.stock} initial="0" onAdd={onAdd}/> 


          }
        
        {/*quantity1 === 0 




        ? 
            <ItemCount stock={item.stock} initial="0" onAdd={onAdd}/> 
        :
            <Button size = "small" variant="outlined" color="primary">
                <Link to="/cart"> Ir al carrito </Link>
            </Button>
            
        */}
        </Box>
      
        
        </Box>
        </div>
    )
}

export default ItemDetail;