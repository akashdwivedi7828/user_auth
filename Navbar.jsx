import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const Navbar = () => {
  return (
    <div>
         <Box >
            <AppBar position="static">
                <Toolbar style={{display: "flex", justifyContent: "right"}}>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
         </Box>
    </div>
  )
}

export default Navbar