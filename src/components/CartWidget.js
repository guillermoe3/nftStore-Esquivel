import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button'
import { StrictMode } from 'react';
import { Link } from "react-router-dom"
import {useContext} from "react"
import CartContext from "../context/CartContext"




function CartWidget() {

    const {getQuantity} = useContext(CartContext);


    return (
        <>
            <Link to="/cart">
                <Badge color="secondary" badgeContent={getQuantity()} sx={{ marginLeft: 20, marginRight: 2 }}>
                    <ShoppingCartIcon />
                </Badge>
            </Link>
        </>

    )
}
export default CartWidget;