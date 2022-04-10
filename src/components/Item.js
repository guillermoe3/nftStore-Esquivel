import { Card, CardMedia, CardContent, Typography, Box} from '@mui/material'
import ItemCount from './ItemCount';
import {Link} from "react-router-dom"
//import {Link } from "@mui/material"




function Item({product}) {


    return (
        <div>

        
            <Card sx={{ width: 345, margin: 10}}>
            <Link to={`/item/${product.id}`} style={{textDecoration:"none"}}> 
                <CardMedia
                    title={product.title}
                    component="img"
                    alt="green iguana"
                    height="350"
                    image={product.pictureUrl}
                />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                     
                     </Typography>
                     <br/>
            
                     <Link to={`/item/${product.id}`} style={{textDecoration:"none"}}> 
                Ver detalle
                </Link>
                
                </CardContent>
                

                    
            </Card>
            

        </div>
    )
}

export default Item;