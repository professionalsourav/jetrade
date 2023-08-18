import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Navbar';

const Withdraw = () => {
  return (
    
    <div>
       <Navbar/>
      <Box height={50}/>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
           <h1>Withdraw</h1>
         </Box>
        </Box>
      </div>
    
  )
}

export default Withdraw