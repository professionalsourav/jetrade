import React from 'react'
import "./Banner.css"
import { Container, Typography } from '@mui/material'
import Carousel from './Carousel'

const Banner = () => {
  return (
    <div className='fbn'>
        <Container style={{height: 400, display: "flex", flexDirection:"column", paddingTop:25, justifyContent: "space-around"}}>
            <div className='fcn'>
                <Typography variant='h2' sx={{fontWeight:"bold", marginBottom: 15, fontFamily:"'Playfair Display', serif"}}>
                    JETTRADE FX
                </Typography>
               
                

            </div>
             <Carousel/>
        </Container>
    </div>
  )
}

export default Banner