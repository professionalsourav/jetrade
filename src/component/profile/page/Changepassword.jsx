import React from 'react'
import Header from '../Header'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import { Padding } from '@mui/icons-material'
import { RxLockClosed } from "react-icons/rx";


const Changepassword = () => {
  return (
    <div>
      <Header/>
      <div style={{paddingTop: 10}}>
      <Grid>
        <Paper elevation={10} style={{padding:20, height: "60vh", width:280, margin: "20px auto", marginTop:"20px"}}>
          <Grid  align="center">
          <Avatar style={{backgroundColor:"#1bbd7e"}}><RxLockClosed/></Avatar>
         <h2> Reset it</h2>
         </Grid>
         <TextField  label="old password" variant="standard" type='password' fullWidth required/>
         <TextField  label="new password" variant="standard" type='password' fullWidth required/>
         <div style={{padding:25, textAlign:"center", justifyContent:"center"}}>
         <Button type='submit' variant="contained" color='primary' >reset</Button>
         </div>
        </Paper>
      </Grid>
      </div>
      
      </div>
  )
}

export default Changepassword