import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import { Container, Divider, Paper, Typography,  } from '@mui/material';
import { color } from 'framer-motion';
import { red } from '@mui/material/colors';
import { FacebookIcon, WhatsappShareButton, EmailShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share';
import {FacebookShareButton,  WhatsappIcon, EmailIcon, TwitterIcon, LinkedinIcon} from "react-share";



const Share = () => {
  return (
    
    <div>
       <Navbar/>
      <Box height={50}/>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
          
         <Box component="main" sx={{ flexGrow: 1, p: 5}}>
           <Container >
            <Paper elevation={5}>
               <Box p={3}>
                  <Typography variant='h4'  style={{color:"red"}}>
                     SHARE JETTRADE FX
                  </Typography>
               </Box>
            </Paper>
           </Container>
           <br/>
           <Container >
            <Paper elevation={5}>
               <Box p={2} >
                  <FacebookShareButton url='http://localhost:5173/'
                  quote={"Hey this is Jettrade fx. No.1 trading platform in india"}
                  hashtag='#trading platform'>
                    <FacebookIcon logoFillColor="white"  round={true}></FacebookIcon>
                  </FacebookShareButton>&nbsp;&nbsp;

                  <WhatsappShareButton url='http://localhost:5173/' title='India No.1 trading platform' separator={"       "}>
                    <WhatsappIcon logoFillColor="white"  round={true}>

                    </WhatsappIcon>
                  </WhatsappShareButton>&nbsp;&nbsp;

                  <EmailShareButton url='http://localhost:5173/' subject='India No.1 trading platform' body='Hello mr.x, i am sourav kumar, want to inform you regarding our trading App. Plz go through our app to have a induction with it :-' separator={" "}>
                    <EmailIcon logoFillColor="white"  round={true}>

                    </EmailIcon>
                  </EmailShareButton>&nbsp;&nbsp;

                  <TwitterShareButton url='http://localhost:5173/' title='India No.1 trading platform   ' >
                    <TwitterIcon logoFillColor="white"  round={true}>

                    </TwitterIcon>
                  </TwitterShareButton>&nbsp;&nbsp;

                  <LinkedinShareButton url='http://localhost:5173/' title='India No.1 trading platform   '>
                     <LinkedinIcon logoFillColor="white"  round={true}>

                     </LinkedinIcon>
                  </LinkedinShareButton>


               </Box>
            </Paper>
           </Container>
         </Box>
        </Box>
      </div>
    
  )
}

export default Share