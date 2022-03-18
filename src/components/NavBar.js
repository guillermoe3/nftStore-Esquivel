import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

import CartWidget from "./CartWidget"
import Login from "./Login"




function NavBar(){
    return (
        <div>
            <AppBar position="static" color="primary">
              <Toolbar>
                  <IconButton aria-label="menu" color="inherit" onClick={null}
                  sx={{ my: 2, color: 'white', margin: 2}}>
                  <MenuIcon/>
                  </IconButton>
                  
                <Typography variant="h6" sx={{flexGrow:1}}>
                    NFT Store
                  
                </Typography>
                <Button variant="text" color="inherit" >
                  Store
                </Button>
                <Button variant="text" color="inherit" >
                  Ofertas
                </Button>
                <Button variant="text" color="inherit" >
                  Actividad
                </Button>

                  <CartWidget/>
                  <Login/>

              </Toolbar>
            </AppBar>
            


        </div>
    )
}

export default NavBar;