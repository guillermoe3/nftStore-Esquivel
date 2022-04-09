import Button from '@mui/material/Button'
import { useState } from "react"
import { Card, CardMedia, CardContent, Typography, CardActions, Box} from '@mui/material'
import ItemCount from './ItemCount';
import {Link} from "react-router-dom"




function Item({product}) {


    const onAdd = (count) => {
        //console.log(count);
    }

    //Uso valores randoms
    let stockRandom = Math.floor(Math.random()*10);
    let initialRandom = Math.floor(Math.random()*10);

    

    return (
        <div>


            <Card sx={{ width: 345, margin: 10}}>
                <CardMedia
                    title={product.title}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={product.pictureUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                     
                     </Typography>
                     <br/>
            
                     <Link to={`/item/${product.id}`}> 
                Ver detalle
                </Link>
                </CardContent>

                <Box sx={{padding:2.5}}>

                    <ItemCount stock={stockRandom} initial={initialRandom} onAdd={onAdd}/>
                </Box>
                    
            </Card>

        </div>
    )
}

export default Item;