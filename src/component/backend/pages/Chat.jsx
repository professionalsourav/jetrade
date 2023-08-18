import React, { useState } from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import { Container, Divider, FormControl, Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { chatMessageDto } from './ChatMessageDto';
import "./Chat.css";
import { SendAndArchiveOutlined } from '@mui/icons-material';


const Chat = () => {

const [chatMessages, setChatMessages] = useState([
  new chatMessageDto("lipun", "hiii, how are you?")
]); 

const [user, setUser] = useState("");
const [message, setMessage] = useState("");

const handleUserChange  = (event) =>{
  setUser(event.target.value);
}

const handleMessageChage = (event) => {
  setMessage(event.target.value);
}

const sendMessage = () => {
  if(user && message) {
  console.log("send");
  }
}

const listChatMessages = chatMessages.map((chatMessageDto, index) =>
   <ListItem key={index}>
       <ListItemText primary={`${chatMessageDto.user}: ${chatMessageDto.message}`}/>

      
   </ListItem>
);

  return (
    
    <div>
       <Navbar/>
      <Box height={50}/>
        <Box sx={{ display: 'flex' }}>
          <Sidenav/>
         <Box component="main" sx={{ flexGrow: 1, p: 3, padding:5}}>
           <Container>
            <Paper elevation={5}>
              <Box p={3}>
                   <Typography variant='h4' gutterBottom>
                      Chat with Expert
                   </Typography>
                   <Divider/>
                   <Grid container spacing={4} alignItems="center">
                     <Grid className='chat-window' xs={12} item>
                      <List className='chat-window-messages'>
                           {listChatMessages }
                      </List>
                     </Grid>
                     <Grid xs={2} item>
                      <FormControl fullWidth>
                         <TextField onChange={handleUserChange}
                           value={user}
                           label="Nickname"
                           variant='outlined'/>
                      </FormControl>
                     </Grid>
                     <Grid xs={9} item>
                      <FormControl fullWidth>
                         <TextField onChange={handleMessageChage}
                           value={message}
                           label="Type Your Message..."
                           variant='outlined'/>
                      </FormControl>
                     </Grid>
                     <Grid xs={1} item>
                        <IconButton onClick={sendMessage}
                           aria-label='send'
                           color='primary'>
                                <SendAndArchiveOutlined/>
                        </IconButton>
                     </Grid>

                   </Grid>
              </Box>

            </Paper>
           </Container>
         </Box>
        </Box>
      </div>
    
  )
}


export default Chat