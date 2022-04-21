import {useState, useContext} from "react"
import CartContext from "../context/CartContext"
import Button from '@mui/material/Button'





const Cart = () => {

    const {cart, clear, isInCart, removeItem} = useContext(CartContext);

    return (
        <div>
            <h2>My Cart</h2>
            <ul>
                {cart.map(prod => <li key={prod.id}>{prod.title} 
                <Button variant="contained" color="secondary" onClick={ () => {removeItem(prod.id)} }> 
                  Eliminar item
                </Button> 
                <Button variant="contained" color="primary" onClick={ () => {console.log(isInCart(prod.id))}}>
                    Esta en carrito? 
                </Button></li>)
                }
            </ul>

            <Button variant="contained" color="inherit" onClick={clear}> 
                Limpiar Carrito
            </Button>
        </div>
    )
}

export default Cart