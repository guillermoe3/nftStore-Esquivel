import {useState, useEffect} from "react"
import {Box} from "@mui/material"


function ItemDetail ( {item} ){
    //console.log("Este es el item"+item.id)
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
        <h2>Precio: {item.price}</h2>
        
        
        </Box>
        </div>
    )
}

export default ItemDetail;