import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CoinList } from './config/api';
import { Container, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import {CryptoState} from './CryptoContext';
import { useNavigate } from 'react-router-dom';


const CoinsTable = () => {

const [coins, setCoins] = useState([])
const [loading, setLoading] = useState(false);
const [search, setSearch] = useState("");

 const {currency} =CryptoState()

 const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    },
  });

  const handleSearch = () => {
    return coins.filter((coin) => {
        coin.name.toLowerCase().includes(search) || 
        coin.symbol.toLowerCase().includes(search)
    });
  }

 const fetchCoins = async () => {
    setLoading(true)
    const {data} = await axios.get(CoinList(currency));
      
    setCoins(data);
    setLoading(false)

 };

 console.log(coins);

 useEffect(() => {
    fetchCoins()
 }, [currency])

 const navigate = useNavigate();
 
  return (
    <ThemeProvider theme={darkTheme}>
    <Container style={{textAlign: "center"}}>
        <Typography
        variant='h4'
        style={{margin: 18, fontFamily: "'Playfair Display', serif"}}>
            Cryptocurrency prices by Market Cap
        </Typography>
        <TextField
         label= "Search For a Crypto Currency.." variant='outlined'
         style={{marginBottom: 20, width: "100%"}}
         onChange={(e) => setSearch(e.target.value)}
         />

           <TableContainer>
             {
                loading? (
                    <LinearProgress style={{background: "gold"}}/>
                ) : (
                    <Table>
                        <TableHead style={{backgroundColor: "#EEBC1D"}}>
                             <TableRow>
                                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                    <TableCell
                                    style={{
                                        color: "black",
                                        fontWeight: "700",
                                        fontFamily: "'Playfair Display', serif",
                                    }}
                                    key={head}
                                    align={head === "Coin" ? "" : "right"}
                                    >
                                      {head}
                                    </TableCell>
                                ))}
                             </TableRow>

                        </TableHead>

                           <TableBody>
                               {handleSearch().map((row) =>{
                                  const profit = row.price_change_percentage_24h > 0;
                                  return(
                                    <TableRow
                                    onClick={()=>navigate(`/profile/crypto/${row.id}`)}
                                     className= "tabct"
                                     key={row.name}>
                                        <TableCell component="th" scope='row'
                                          style={{
                                            display: "flex",
                                            gap: 15,
                                          }}>
                                          <img
                                          src={row?.image}
                                          alt={row.name}
                                          height="50"
                                          style ={{marginBottom: 10}}/>
                                        </TableCell>
                                    </TableRow>
                                  )
                                  })}
                           </TableBody>
                    </Table>
                )
             }
           </TableContainer>
    </Container>
    </ThemeProvider>
  )
}

export default CoinsTable