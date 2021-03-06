import Button from '@mui/material/Button'
import { useState } from "react"
import {Typography, CardActions, Box} from '@mui/material'


function ItemCount(props) {
   
    let stock = parseInt(props.stock);
    let initial = parseInt(props.initial);


    const [count, setCount] = useState(initial);

    const cartItemAdd = () => {
        setCount( (count < stock) ? count + 1 : stock);

    }

    const cartItemRemove = () => {
        setCount( (count<1) ? 0 : (count - 1));

    }

//onClick={() => (stock>initial) ? props.onAdd(count) : 0}


    return (
        <div>
                     <Typography variant="body2" color="text.secondary">
                        Disponibles: {stock}
                     </Typography>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    maxHeight="100vh">
                <CardActions sx={{}}>

                    <Button size="small" onClick={cartItemRemove} variant="text" color="primary">
                        -
                    </Button>
                    <Typography color="secondary">
                        {count}
                    </Typography>
                    <Button size="small" onClick={cartItemAdd} variant="text" color="primary">
                        +
                    </Button>

 
                </CardActions>
                </Box>
                <Box 
                sx={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom: "10"}}>
                <Button size = "small" variant="outlined" color="primary" onClick={() => props.onAdd(count)}>
                        Agregar al Carrito
                    </Button>
                </Box >


        </div>
    )
}

export default ItemCount;