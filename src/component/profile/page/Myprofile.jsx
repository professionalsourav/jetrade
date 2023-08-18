import React, { useRef } from "react";
import Header from "../Header";
import "./Profile.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { useReactToPrint } from "react-to-print";

const Myprofile = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  
  });
  return (
    <div style={{ height:"150vh"}}>
      <Header />
      <div ref={componentRef}>
      <Typography gutterBottom variant="h3" align="center" padding={2} style={{fontFamily: "'Playfair Display', serif"}}>
        Profile
      </Typography>
      <Card style={{maxWidth:450, margin: "0 auto"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">personal details</Typography>
          <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField label="First Name" fullWidth />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" fullWidth />
            </Grid>

            <Grid xs={12} item>
              <TextField label="ID NUMBER" fullWidth />
            </Grid>

            <Grid xs={12} item>
              <TextField label="Phone number" fullWidth />
            </Grid>

            <Grid xs={12} item>
              <TextField label="Adress" multiline rows={4} fullWidth />
            </Grid>
            
          </Grid>
          </form>
        </CardContent>
      </Card>
      </div>
      <br/>
             <div style={{textAlign:"center", justifyContent:"center" ,margin:"10 10"}}>
              <Button onClick={handlePrint} variant="contained" color={"error"}  >
              print
              </Button>
              </div>
    </div>
  );
};

export default Myprofile;
