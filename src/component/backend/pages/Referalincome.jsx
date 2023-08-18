import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Barchart from './chart/Barchart';
import "./Analytics.css"
import GeoChart from './chart/Geochart';
import Piechart from './chart/Piechart';

const Referalincome = () => {
  return (
    
    <div className='anabg'>
       <Navbar/>
      <Box height={70}/>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Grid container spacing={2}>
              <Grid item xs={12}>
                  <Card sx={{ maxWidth: 100 + "%" , height: 100 + "vh"}}>
                          
                 <CardContent>
                       <GeoChart/>
                  </CardContent>
                 
                  </Card> 
                </Grid>
               
                <Box height={30}/>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 100 + "%" , height: 50 + "vh"}}>
                          
                          <CardContent>
                              <Piechart/>
                           </CardContent>
                          
                       </Card> 
                </Grid>
                <Grid item xs={8}>
                <Card sx={{ maxWidth: 100 + "wh" , height: 70 + "vh"}} >
                          
                          <CardContent>
                             <Barchart/>
                           </CardContent>
                          
                       </Card> 
                </Grid>
          </Grid>
         </Box>
        </Box>
      </div>
    
  )
}

export default Referalincome