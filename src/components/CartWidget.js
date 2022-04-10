import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button'
import { StrictMode } from 'react';
import { Link } from "react-router-dom"




function CartWidget() {


    return (
        <>
            <Link to="/cart">
                <Badge color="secondary" badgeContent={2} sx={{ marginLeft: 20, marginRight: 2 }}>
                    <ShoppingCartIcon />
                </Badge>
            </Link>
        </>

    )
}
export default CartWidget;