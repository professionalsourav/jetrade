import React, {useState, useEffect}from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import "./Dashboard.css";
import {BsFillChatFill} from "react-icons/bs"
import {SiWebmoney} from "react-icons/si"
import {GiTakeMyMoney} from "react-icons/gi"
import {GiMoneyStack} from "react-icons/gi"
import {GiReceiveMoney} from "react-icons/gi"
import {FaMoneyBillTrendUp} from "react-icons/fa6"
import {GiRapidshareArrow} from "react-icons/gi"
import axios from 'axios';
import Coin from './Coin';
import cors from "cors"
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=150&page=1&sparkline=false&locale=en

const Dashboard = () => {

  const navigte = useNavigate("");

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")
   
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=150&page=1&sparkline=false&locale=en")
    .then(res => {
       setCoins(res.data);
    }).catch(error => console.log(error));
  }, []);

 const handleChange = e => {
  setSearch(e.target.value)
 }

 const filteredCoins = coins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
  <>
  <div className='bgcolor'>
       <Navbar/>
       <Box height={70}/>
  <Box sx={{ display: 'flex' }}>
           <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2} className='back'>
        <Grid item xs={4}>
              <Card sx={{ minWidth: 100+ "%", height: 100 + "%"}} className='gradient'>
                 <CardContent>
                  <div className='iconstyle'>
                     <BsFillChatFill onClick={()=>navigte("/user/chat")}/>
                 </div>
                 <br/>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1",  cursor: "pointer"}} onClick={()=>navigte("/user/chat")}>
                       Chat
                     </Typography>
                     <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                       consult with expert
                     </Typography>
                 
                  </CardContent>
      
              </Card>
          
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ minWidth: 100+ "%", height: 100 + "%"}} className='refgradient'>
                 <CardContent>
                  <div className='reficonstyle'>
                     <SiWebmoney onClick={()=>navigte("/user/referal")}/>
                 </div>
                 <br/>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1",  cursor: "pointer"}} onClick={()=>navigte("/user/directreferal")}>
                       Referal
                     </Typography>
                     <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                       refer and earn!
                     </Typography>
                 
                  </CardContent>
      
              </Card>
          
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ minWidth: 100+ "%", height: 100 + "%"}} className='paygradient'>
                 <CardContent>
                  <div className='payiconstyle'>
                     <GiTakeMyMoney onClick={()=>navigte("/user/payment")}/>
                 </div>
                 <br/>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1",  cursor: "pointer"}} onClick={()=>navigte("/user/payment")}>
                       Payment
                     </Typography>
                     <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                       wallet : __
                     </Typography>
                 
                  </CardContent>
      
              </Card>
          
        </Grid>
         <Grid item xs={4}>
         <Card sx={{ minWidth: 100+ "%", height: 100 + "%"}} className='ringradient'>
                 <CardContent>
                  <div className='riniconstyle'>
                     <GiMoneyStack onClick={()=>navigte("/user/referalincome")}/>
                 </div>
                 <br/>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1",  cursor: "pointer"}} onClick={()=>navigte("/user/analytics")}>
                       Analytics
                     </Typography>
                     <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                       Overall Analycics
                     </Typography>
                 
                  </CardContent>
      
              </Card>
          
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ minWidth: 100+ "%", height: 100 + "%"}} className='wdrawradient'>
                 <CardContent>
                  <div className='wdrawconstyle'>
                     <GiReceiveMoney onClick={()=>navigte("/user/withdraw")}/>
                 </div>
                 <br/>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1",  cursor: "pointer"}} onClick={()=>navigte("/user/withdraw")}>
                       Withdrawal
                     </Typography>
                     <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                       Balance :__
                     </Typography>
                 
                  </CardContent>
      
              </Card>
          
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ minWidth: 100+ "%", height: 100 + "%"}} className='transradient'>
                 <CardContent>
                  <div className='transconstyle'>
                     <FaMoneyBillTrendUp onClick={()=>navigte("/user/transcation")}/>
                 </div>
                 <br/>
                    <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1",  cursor: "pointer"}} onClick={()=>navigte("/user/transcation")}>
                    Transcation
                     </Typography>
                     <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                       Investment :__
                     </Typography>
                     <Typography gutterBottom variant="body2" component="div" sx={{color: "#ccd1d1"}}>
                       Return :__
                     </Typography>
                 
                  </CardContent>
      
              </Card>
          
        </Grid>
        <Box height={20}/>
        <Grid item xs={12}>
        <Card sx={{ height: 250 + "vh" }} className='crapi' >
                <div className='coin-app'>
                  <div className="coin-search">
                    <h1 className="coin-text">Currency Update  </h1>
                    <form>
                      <input type='text' placeholder='search' className='coin-input' onChange={handleChange}/>
                    </form>
                  </div>
                  {filteredCoins.map(coin => {
                    return(
                      <Coin key={coin.id}
                       name={coin.name} 
                       image={coin.image}
                       symbol={coin.symbol}
                       marketcap ={coin.market_cap}
                       price={coin.current_price}
                       priceChange = {coin.price_change_percentage_24h}
                       volume ={coin.total_volume}
                       
                       />
                    )
                  })}
                </div>
                 
      
              </Card>
          
        </Grid>
        
       
      </Grid>
       
    </Box>
  </Box>
  </div>
</>   
  )
}

export default Dashboard

      
  