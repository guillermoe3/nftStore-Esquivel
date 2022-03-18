import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button'
import { StrictMode } from 'react';

function CartWidget() {

    return (
        <>
            <Badge color="secondary" badgeContent={2} sx={{ marginLeft: 20, marginRight: 2 }}>
                    <ShoppingCartIcon />
            </Badge>
        </>

    )
}
export default CartWidget;