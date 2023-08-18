import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Payment.css";
import { CardMedia } from '@mui/material';



const Payment = () => {
  return (
    
    <div className='paybg'>
       <Navbar/>
      <Box height={50}/>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
         <Box component="main" sx={{ flexGrow: 1, p: 3, padding: 6 }}>
         
         <Grid container spacing={2}>
         <Box width={70}/>
<Grid item xs={4}>
   
  <Paper elevation={24} >
  <Card sx={{ maxWidth: 100+ "%" }} className='newuser'>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center",  color:"gold", fontFamily:"'Playfair Display', serif"}}
         >
          New User
        </Typography>
        <CardMedia
         component={"img"}
         height="130"
         image='https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>
         <br/>
        <Typography variant="body2" color="white">
          To be part of JETTRADE FX family, We charge 3500 ₹. This will be for the first time. So we take care of the trading  
        </Typography>
        
      </CardContent>
      <CardActions >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button size="larger"  style={{background:"rgb(8, 23, 65)", color: "gold",font:"bold", fontWeight:"bold"}}>
          
          3500 ₹
         
          </Button>
        
      </CardActions>
    </Card>
          </Paper>

  </Grid>
  <Box width={70}/>
  <Grid item xs={4}>
  <Paper elevation={24} >
  <Card sx={{ maxWidth: 100+ "%" }} className='newuser'>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center",  color:"gold", fontFamily:"'Playfair Display', serif"}}
         >
          Regular Member 
        </Typography>
        <CardMedia
         component={"img"}
         height="130"
         image='https://images.unsplash.com/photo-1641871010295-4d2fee6fb9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80'/>
         <br/>
        <Typography variant="body2" color="white">
          To renew the services of JETTRADE FX, we charge 1500 ₹. The renewal alert will be after 30 days  
        </Typography>
      </CardContent>
      <CardActions >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button size="larger"  style={{background:"rgb(8, 23, 65)", color: "gold", font:"bold", fontWeight:"bold" }}>
          
        1500 ₹
         
          </Button>
        
      </CardActions>
    </Card>
          </Paper>
    
  </Grid>

</Grid>
         
         </Box>
        </Box>
      </div>
    
  )
}
export default Payment