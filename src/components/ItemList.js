import Item from "./Item"
import {Box} from '@mui/material'

function ItemList({products}){

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