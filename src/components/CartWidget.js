import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


function CartWidget() {

    return (
        <div>


            <Badge color="secondary" badgeContent={2} sx={{marginLeft:20, marginRight:2}}>
                <ShoppingCartIcon />
            </Badge>



        </div>

    )
}

export default CartWidget;