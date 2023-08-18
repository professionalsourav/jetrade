import React, { useRef } from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../Navbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Payment.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useReactToPrint } from "react-to-print";


  

function createData(date, amount, total) {
  return { date, amount, total };
}

const rows = [
  createData("12/3/23", "159 ₹", "159 ₹"),
  createData("13/7/27", "159 ₹", "318 ₹"),
  createData("13/7/27", "159 ₹", "477 ₹"),
];

function drawData(date, amount, total) {
  return { date, amount, total };
}

const draw = [
  drawData("12/3/23", "159 ₹", "318 ₹"),
  drawData("13/7/27", "159 ₹", "159 ₹"),
  drawData("13/7/27", "159 ₹", "0 ₹"),
];

const Transcation = () => {

  const dipoRef = useRef();
  const dipoPrint = useReactToPrint({
    content: () => dipoRef.current,
  
  });

  const withRef = useRef();
  const withPrint = useReactToPrint({
    content: () => withRef.current,
  
  });

  return (
    <div>
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3, padding: 6 }}>
          <Grid container spacing={2}>
            <Box width={70} />
            <Grid item xs={4}>
              <div ref={dipoRef}>
              <Paper elevation={24}>
              
                <Card sx={{ maxWidth: 100 + "%" }} className="newuser">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        textAlign: "center",
                        color: "gold",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      Deposit
                    </Typography>

                    <br />
                    <TableContainer>
                      <Table sx={{ minWidth: 65 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ color: "white" }}>
                              Date
                            </TableCell>
                            <TableCell align="right" style={{ color: "white" }}>
                              Amount
                            </TableCell>
                            <TableCell align="right" style={{ color: "white" }}>
                              Total
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.date}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                  color: "white",
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                style={{ color: "white" }}
                              >
                                {row.date}
                              </TableCell>

                              <TableCell
                                align="right"
                                style={{ color: "white" }}
                              >
                                {row.amount}
                              </TableCell>
                              <TableCell
                                align="right"
                                style={{ color: "white" }}
                              >
                                {row.total}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                  <CardActions>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                    onClick={dipoPrint}
                      size="larger"
                      style={{
                        background: "rgb(8, 23, 65)",
                        color: "gold",
                        font: "bold",
                        fontWeight: "bold",
                      }}
                    >
                      print
                    </Button>
                  </CardActions>
                </Card>
                
              </Paper>
              </div>
            </Grid>
            <Box width={70} />
            <Grid item xs={4}>
              <div ref={withRef}>
              <Paper elevation={24}>
                <Card sx={{ maxWidth: 100 + "%" }} className="newuser">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        textAlign: "center",
                        color: "gold",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      Withdraw
                    </Typography>

                    <br />
                    <TableContainer>
                      <Table sx={{ minWidth: 65 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ color: "white" }}>
                              Date
                            </TableCell>
                            <TableCell align="right" style={{ color: "white" }}>
                              Amount
                            </TableCell>
                            <TableCell align="right" style={{ color: "white" }}>
                              Total
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {draw.map((row) => (
                            <TableRow
                              key={row.date}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                  color: "white",
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                style={{ color: "white" }}
                              >
                                {row.date}
                              </TableCell>

                              <TableCell
                                align="right"
                                style={{ color: "white" }}
                              >
                                {row.amount}
                              </TableCell>
                              <TableCell
                                align="right"
                                style={{ color: "white" }}
                              >
                                {row.total}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                  <CardActions>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                     onClick={withPrint}
                      size="larger"
                      style={{
                        background: "rgb(8, 23, 65)",
                        color: "gold",
                        font: "bold",
                        fontWeight: "bold",
                      }}
                    >
                      print
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Transcation;
