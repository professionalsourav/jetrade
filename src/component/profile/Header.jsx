import { AppBar, Container, Toolbar, Typography, Select, MenuItem } from '@mui/material'
import React from 'react'
import "./Header.css"
import { useNavigate, NavLink } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { CryptoState } from './CryptoContext';
const Header = () => {

  const navigate = useNavigate();

  const {currency, setCurrency } = CryptoState();


  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    },
  });

  return (
   <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography sx={{color: "gold", fontFamily:"'Playfair Display', serif",
           fontWeight:"bold", cursor: "pointer", flex:1}} onClick={()=>navigate("/user")} variant='h6'>JETTRADE FX</Typography>
          <Select
            variant='outlined'
            style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: "white"
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}>
               
           
               
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
    </ThemeProvider>
   
  )
}

export default Header