import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import {Box} from '@mui/material'

import CartWidget from "./CartWidget"
import Login from "./Login"

import {Link} from "react-router-dom"




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
                Coffee Store
                </Typography>
                <Box sx={{
                    marginRight:70
                }}>
                  
                <Button variant="text" color="inherit" >
                <Link to="/"> Home</Link>
                </Button>
                <Button variant="text" color="inherit" >
                  
                  <Link to="/category/hotCoffee"> Hot Coffees </Link>
                </Button>

                <Button variant="text" color="inherit" >
                  
                  <Link to="/category/homeCoffee"> At Home Coffee</Link>
                </Button>

                <Button variant="text" color="inherit" >
                  
                  <Link to="/offers"> Offers</Link>
                </Button>
                <Button variant="text" color="inherit" >
                  <Link to="/About"> About Us </Link>
                  
                </Button>
                <Button variant="text" color="inherit" >
                  <Link to="/Contact"> Contact </Link>
                  
                </Button>
                </Box>

                  <CartWidget/>
                  <Login/>

              </Toolbar>
            </AppBar>
            


        </div>
    )
}

export default NavBar;